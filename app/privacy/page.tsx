import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | 5th Ave Deli & Catering Co.",
  description:
    "Privacy policy for 5th Ave Deli & Catering Co. — how we handle your information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-deli-green-dark py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-cream-dark/80 text-sm">
            Last updated: March 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-sm max-w-none text-deli-text space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Who We Are
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              {businessInfo.name} is a family-owned deli and catering business
              located at {businessInfo.address.street},{" "}
              {businessInfo.address.city}, {businessInfo.address.state}{" "}
              {businessInfo.address.zip}.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Information We Collect
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              When you use our contact form, we collect the following
              information:
            </p>
            <ul className="list-disc pl-6 text-deli-text-light space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if you choose to provide it)</li>
              <li>The content of your message</li>
            </ul>
            <p className="text-deli-text-light leading-relaxed">
              We do not use cookies for tracking, and we do not collect any
              information beyond what you voluntarily submit through our contact
              form.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              How We Use Your Information
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              We use the information you provide solely to respond to your
              inquiry — whether it&apos;s about catering, box lunches, gift
              baskets, or a general question. We do not sell, share, or rent your
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Third-Party Services
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              Our website uses the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-deli-text-light space-y-1">
              <li>
                <strong>Google Maps</strong> — to display our location. Google
                may collect usage data per their{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-deli-green"
                >
                  privacy policy
                </a>
                .
              </li>
              <li>
                <strong>Google Fonts</strong> — to display website typography.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Your Rights (California Residents)
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              Under the California Consumer Privacy Act (CCPA), California
              residents have the right to:
            </p>
            <ul className="list-disc pl-6 text-deli-text-light space-y-1">
              <li>Know what personal information we collect about you</li>
              <li>Request deletion of your personal information</li>
              <li>
                Not be discriminated against for exercising your privacy rights
              </li>
            </ul>
            <p className="text-deli-text-light leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <a
                href={`mailto:${businessInfo.email}`}
                className="underline hover:text-deli-green"
              >
                {businessInfo.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
                className="underline hover:text-deli-green"
              >
                {businessInfo.phone}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Contact Us
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              If you have questions about this privacy policy, contact us at:
            </p>
            <p className="text-deli-text-light leading-relaxed">
              {businessInfo.name}
              <br />
              {businessInfo.address.street}
              <br />
              {businessInfo.address.city}, {businessInfo.address.state}{" "}
              {businessInfo.address.zip}
              <br />
              {businessInfo.phone}
              <br />
              {businessInfo.email}
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-deli-border">
          <Link
            href="/"
            className="text-sm font-medium text-deli-green hover:text-deli-green-dark transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
