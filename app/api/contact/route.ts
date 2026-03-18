import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email address").max(320),
  phone: z.string().max(20).optional(),
  message: z.string().min(1, "Message is required").max(5000),
  type: z.string().max(50).optional(),
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
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Please fill out all required fields correctly." },
        { status: 400 }
      );
    }

    // TODO: Send email notification to e5thavedeli@yahoo.com
    // TODO: Consider using Resend, SendGrid, or similar service
    const { name, email, type } = result.data;
    console.info(`[contact] Inquiry from ${name} <${email}> (${type ?? "general"})`);

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
