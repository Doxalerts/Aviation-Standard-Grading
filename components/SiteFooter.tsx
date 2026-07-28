import Link from "next/link";
import { Brand } from "@/components/Brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Brand compact />
          <p className="footer-summary">
            Precision-focused collectible card grading built around repeatable inspection, transparent standards, and secure certification records.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/grading">Grading standard</Link>
          <Link href="/process">Inspection process</Link>
          <Link href="/pricing">Services & pricing</Link>
          <Link href="/cert">Certification lookup</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about">About ASG</Link>
          <Link href="/submit">Submission waitlist</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:info@aviationstandardgrading.com">Email ASG</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Aviation Standard Grading.</span>
        <span>Collectibles should be evaluated by evidence, not hype.</span>
      </div>
    </footer>
  );
}
