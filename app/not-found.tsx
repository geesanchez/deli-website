import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-6xl font-bold text-deli-green-dark mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-semibold text-deli-green-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-deli-text-light mb-8">
          Sorry, we couldn&apos;t find that page. Maybe try our menu instead?
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-deli-green px-8 py-3 text-sm font-semibold text-white hover:bg-deli-green-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
