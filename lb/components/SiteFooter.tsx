export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" className="nav-logo" aria-label="Looping Binary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo.svg" width="32" height="16" alt="" aria-hidden="true" />
            <span className="nav-wordmark">
              <span className="nav-lb-loop">Looping</span>{" "}
              <span className="nav-lb-bin">Binary</span>
            </span>
          </a>
          <p>We Build. We Grow. We Train.</p>
          <div className="footer-socials">
            <a
              href="https://web.facebook.com/profile.php?id=61586371936567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/looping-binary/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-col">
            <p className="footer-col-title">Work</p>
            <ul role="list">
              <li>
                <a href="/work/pejah">Pejah</a>
              </li>
              <li>
                <a href="/work/presto">Presto</a>
              </li>
              <li>
                <a href="/work/laji">Laji</a>
              </li>
              <li>
                <a href="/work/strategix">Strategix</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Company</p>
            <ul role="list">
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#the-loop">The Loop</a>
              </li>
              <li>
                <a href="/#education">Programs</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <ul role="list">
              <li>
                <a href="mailto:loopingbinary@gmail.com">loopingbinary@gmail.com</a>
              </li>
              <li>
                <a href="https://wa.me/237650318856" target="_blank" rel="noopener noreferrer">
                  +237 650 318 856
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Looping Binary. Douala, Cameroon.</p>
          <p>Products with weight.</p>
        </div>
      </div>
    </footer>
  );
}
