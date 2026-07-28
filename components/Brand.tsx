import Link from "next/link";

export function WingMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 54" aria-hidden="true">
      <path d="M31.8 25.4 9.3 5.8 1.5 9.4l21 28.2 9.3-12.2Z" fill="currentColor" />
      <path d="m32.2 25.4 22.5-19.6 7.8 3.6-21 28.2-9.3-12.2Z" fill="currentColor" />
      <path d="m31.8 31.2-8.7 11.6 8.7 8.7 8.8-8.7-8.8-11.6Z" fill="currentColor" />
      <path d="M22.8 20.6 6.7 14.1l5.6 9.8 14 6.3-3.5-9.6ZM41.2 20.6l16.1-6.5-5.6 9.8-14 6.3 3.5-9.6Z" fill="currentColor" opacity=".72" />
    </svg>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand ${compact ? "brand--compact" : ""}`} href="/" aria-label="Aviation Standard Grading home">
      <WingMark className="brand__mark" />
      <span className="brand__copy">
        <strong>ASG</strong>
        <span>Aviation Standard Grading</span>
      </span>
    </Link>
  );
}
