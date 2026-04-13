import Link from "next/link";
import { businessInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-deli-green-dark text-cream-dark/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-xl font-bold text-deli-gold-light mb-2">
              5th Ave. Deli
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              {businessInfo.tagline}
            </p>
            <div className="flex gap-2">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={businessInfo.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="p-2 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.58a.96.96 0 01-1.22-.678l-.003-.018a.96.96 0 01.63-1.148l5.005-1.62a.96.96 0 011.178.636l.003.018a.96.96 0 01-.598 1.23zM13.695 8.287l2.606-4.264a.96.96 0 011.378-.27l.015.01a.96.96 0 01.294 1.322l-2.556 4.294a.96.96 0 01-1.378.296l-.015-.01a.96.96 0 01-.344-1.378zm.413 5.88l-1.386 4.87a.96.96 0 01-1.22.636l-.017-.005a.96.96 0 01-.648-1.2l1.345-4.882a.96.96 0 011.22-.66l.018.006a.96.96 0 01.688 1.234zm-2.31.096l-4.666 2.21a.96.96 0 01-1.278-.46l-.007-.018a.96.96 0 01.454-1.28l4.648-2.253a.96.96 0 011.282.452l.008.018a.96.96 0 01-.44 1.33zM3.6 7.2l4.266 2.606a.96.96 0 01.344 1.314l-.01.015a.96.96 0 01-1.322.32L2.55 8.95a.96.96 0 01-.344-1.314l.01-.015A.96.96 0 013.6 7.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-deli-gold-light uppercase tracking-wider mb-3">
              Hours
            </h4>
            <div className="space-y-1 text-sm">
              <p>Mon – Sat: 8am – 4:30pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-deli-gold-light uppercase tracking-wider mb-3">
              Contact
            </h4>
            <div className="space-y-1 text-sm">
              <p>
                <a
                  href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-deli-gold-light uppercase tracking-wider mb-3">
              Location
            </h4>
            <div className="text-sm leading-relaxed">
              <p>{businessInfo.address.street}</p>
              <p>
                {businessInfo.address.city}, {businessInfo.address.state}{" "}
                {businessInfo.address.zip}
              </p>
              <p className="italic text-cream-dark/60 mt-1">
                {businessInfo.address.note}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-cream-dark/50">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.name} All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <p>{businessInfo.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
