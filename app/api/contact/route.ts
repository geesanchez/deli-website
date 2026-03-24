import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email address").max(320),
  phone: z.string().max(20).optional(),
  message: z.string().min(1, "Message is required").max(5000),
  type: z.string().max(50).optional(),
  website: z.string().optional(), // honeypot field
});

// Simple in-memory rate limiter (per-IP, resets on deploy)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check — if filled, it's a bot. Return fake success.
    if (body.website) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Your inquiry has been received. We'll get back to you soon!",
        },
        { status: 200 }
      );
    }

    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Please fill out all required fields correctly." },
        { status: 400 }
      );
    }

    const { name, email, phone, message, type } = result.data;

    // Send email notification via Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Something went wrong. Please call us at (831) 625-2688.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "5th Ave Deli Website <onboarding@resend.dev>",
      to: "e5thavedeli@yahoo.com",
      replyTo: email,
      subject: `New ${type ?? "General"} Inquiry from ${name}`,
      text: [
        `New inquiry from the website contact form:`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Type: ${type ?? "General Inquiry"}`,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry has been received. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please call us at (831) 625-2688.",
      },
      { status: 500 }
    );
  }
}
