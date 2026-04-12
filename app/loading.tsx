export default function Loading() {
  return (
    <div className="min-h-screen bg-cream animate-pulse">
      {/* Navbar skeleton */}
      <div className="h-16 bg-deli-green-dark/90" />

      {/* Hero skeleton */}
      <div className="h-[70vh] bg-cream-dark/50 flex items-center justify-center">
        <div className="text-center space-y-4 px-4">
          <div className="h-4 w-40 bg-deli-border rounded mx-auto" />
          <div className="h-10 w-80 bg-deli-border rounded mx-auto" />
          <div className="h-4 w-64 bg-deli-border rounded mx-auto" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        <div className="h-6 w-48 bg-deli-border rounded" />
        <div className="h-4 w-full bg-deli-border/60 rounded" />
        <div className="h-4 w-3/4 bg-deli-border/60 rounded" />
        <div className="h-4 w-5/6 bg-deli-border/60 rounded" />
      </div>
    </div>
  );
}
