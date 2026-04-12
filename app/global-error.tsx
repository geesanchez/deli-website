"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF7F2",
          fontFamily: "system-ui, sans-serif",
          color: "#2C2418",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#1E3D2A",
              marginBottom: "0.5rem",
            }}
          >
            Something went wrong
          </h1>
          <p style={{ color: "#5C5347", marginBottom: "1.5rem" }}>
            We&apos;re sorry — an unexpected error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: "#2D5A3D",
              color: "white",
              border: "none",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
          <div style={{ marginTop: "1rem" }}>
            <a
              href="/"
              style={{
                color: "#2D5A3D",
                fontSize: "0.875rem",
                textDecoration: "underline",
              }}
            >
              Go back home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
