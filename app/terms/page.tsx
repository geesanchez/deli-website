import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service | 5th Ave Deli & Catering Co.",
  description:
    "Terms of service for 5th Ave Deli & Catering Co. website and catering services.",
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-deli-green-dark py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-cream-dark/80 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-sm max-w-none text-deli-text space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Agreement to Terms
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              By accessing or using the website for {businessInfo.name} at{" "}
              <a
                href="https://5thavedeli.com"
                className="underline hover:text-deli-green"
              >
                5thavedeli.com
              </a>
              , you agree to be bound by these Terms of Service. If you do not
              agree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Use of the Website
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              This website is provided for informational purposes — to share our
              menu, catering services, and business details. You may browse the
              site and use the contact form to reach us. You agree not to misuse
              the site, including submitting fraudulent inquiries, attempting to
              disrupt its operation, or using automated systems to scrape content.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Menu &amp; Pricing
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              All menu items, descriptions, and prices displayed on this website
              are subject to change without notice. While we make every effort to
              keep information current, we do not guarantee that all details are
              accurate at the time of viewing. For the most up-to-date pricing
              and availability, please call us at{" "}
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
              Catering &amp; Orders
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              Submitting an inquiry through our contact form does not constitute a
              confirmed order. All catering orders, box lunch requests, and gift
              basket orders must be confirmed directly with our staff by phone or
              in person. Pricing for catering may vary based on group size,
              customization, and delivery requirements.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Intellectual Property
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              All content on this website — including text, images, logos, and
              design — is the property of {businessInfo.name} and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or use any content from this website without our prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Limitation of Liability
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              {businessInfo.name} provides this website &quot;as is&quot; without
              warranties of any kind, either express or implied. We are not liable
              for any damages arising from your use of or inability to use this
              website, including but not limited to errors in menu information or
              service descriptions.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Third-Party Links
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              Our website may contain links to third-party sites such as Yelp,
              TripAdvisor, Google Maps, and social media platforms. We are not
              responsible for the content or privacy practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Changes to These Terms
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              We may update these terms from time to time. Any changes will be
              posted on this page with a revised &quot;Last updated&quot; date.
              Continued use of the website after changes are posted constitutes
              your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deli-green-dark">
              Contact Us
            </h2>
            <p className="text-deli-text-light leading-relaxed">
              If you have any questions about these terms, please contact us:
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

        <div className="mt-12 pt-8 border-t border-deli-border flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-deli-green hover:text-deli-green-dark transition-colors"
          >
            &larr; Back to Home
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-deli-green hover:text-deli-green-dark transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
