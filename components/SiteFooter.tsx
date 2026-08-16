import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="ft">
      <Link href="/" className="ft-mark">
        Looping Binary
      </Link>
      <p>Douala, Cameroon. We Build. We Grow. We Train.</p>
      <p>© 2026</p>
    </footer>
  );
}
