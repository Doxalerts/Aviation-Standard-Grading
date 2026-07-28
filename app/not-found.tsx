import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="shell">
        <p className="eyebrow">404 — Off Course</p>
        <h1>This page is not in the flight plan.</h1>
        <p>The address may have changed or the page may no longer exist.</p>
        <Link className="button button--primary" href="/">Return Home</Link>
      </div>
    </main>
  );
}
