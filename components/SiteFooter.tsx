import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { FOOTER } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="ft">
      <div className="ft-brand">
        <Link href="/" aria-label="Looping Binary home">
          <BrandMark variant="word" />
        </Link>
        <p>We Build. We Grow. We Train.</p>
        <p>Douala, Cameroon. Technology, growth, and talent for the next generation of Africa.</p>
      </div>
      <div className="ft-cols">
        <div>
          <p>Company</p>
          <ul role="list">
            {FOOTER.company.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Solutions</p>
          <ul role="list">
            {FOOTER.solutions.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Products</p>
          <ul role="list">
            {FOOTER.products.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Programs</p>
          <ul role="list">
            {FOOTER.programs.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ft-base">
        <p>© {new Date().getFullYear()} Looping Binary</p>
        <Link href="/contact">Talk to us</Link>
      </div>
    </footer>
  );
}
