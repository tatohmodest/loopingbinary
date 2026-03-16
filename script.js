/* ═══════════════════════════════════════════
   LOOPING BINARY — JavaScript
   script.js
═══════════════════════════════════════════ */

/* ─── 1. HERO CANVAS — Animated dot grid ─── */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Config
  const SPACING = 38;       // distance between dots
  const DOT_R   = 1.4;      // base dot radius
  const GREEN   = '0,191,99';
  const WHITE   = '232,237,233';

  let W, H, cols, rows, dots, raf;
  let isDark = document.documentElement.getAttribute('data-theme') !== 'light';

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    build();
  }

  function build() {
    cols = Math.ceil(W / SPACING) + 2;
    rows = Math.ceil(H / SPACING) + 2;
    dots = [];

    // Offset grid so it feels centered
    const offX = (W % SPACING) / 2;
    const offY = (H % SPACING) / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offX + c * SPACING;
        const y = offY + r * SPACING;

        // Distance from hero center — used for glow calculation
        const dx = x - W * 0.5;
        const dy = y - H * 0.45; // slightly above center
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Random phase so dots don't pulse together
        const phase = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 0.6;

        dots.push({ x, y, dist, phase, speed });
      }
    }
  }

  function draw(ts) {
    const t = ts * 0.001; // seconds
    ctx.clearRect(0, 0, W, H);
    isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    const maxDist = Math.sqrt(W * W + H * H) * 0.5;

    for (const d of dots) {
      // Breathing pulse per dot
      const pulse = 0.5 + 0.5 * Math.sin(t * d.speed + d.phase);

      // Proximity glow: dots near center get green tint + stronger opacity
      const proximity = 1 - Math.min(d.dist / (maxDist * 0.55), 1);
      const proximityGlow = proximity * proximity; // quadratic falloff

      // Base opacity — very subtle on the edges
      const baseOpacity = 0.07 + 0.08 * pulse;

      // Green-tinted glow for center cluster
      const glowOpacity = proximityGlow * (0.18 + 0.22 * pulse);

      // Draw base dot (neutral color)
      if (baseOpacity > 0.01) {
        const color = isDark ? WHITE : '13,26,18';
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_R, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${baseOpacity})`;
        ctx.fill();
      }

      // Draw green glow overlay for center dots
      if (glowOpacity > 0.01) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_R * (1 + proximityGlow * 0.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GREEN},${glowOpacity})`;
        ctx.fill();
      }
    }

    raf = requestAnimationFrame(draw);
  }

  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // Draw a static frame only
    resize();
    requestAnimationFrame((ts) => {
      draw(ts);
      cancelAnimationFrame(raf);
    });
    return;
  }

  resize();
  raf = requestAnimationFrame(draw);

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cancelAnimationFrame(raf);
      resize();
      raf = requestAnimationFrame(draw);
    }, 150);
  });

  // Re-draw on theme toggle (canvas colors depend on dark/light)
  document.documentElement.addEventListener('themechange', () => {
    isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  });
})();


/* ─── 2. NAV SCROLL — Frosted glass on scroll ─── */
(function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page loads mid-scroll
})();


/* ─── 3. MOBILE MENU ─── */
(function initMobileMenu() {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.removeAttribute('aria-hidden');
    // Lock body scroll while menu is open
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Close when a nav link is tapped
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });

  // Close when viewport becomes desktop-width
  const mql = window.matchMedia('(min-width: 769px)');
  mql.addEventListener('change', (e) => {
    if (e.matches) closeMenu();
  });
})();


/* ─── 4. THEME TOGGLE — dark / light ─── */
(function initThemeToggle() {
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;

  const html = document.documentElement;

  const MOON_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const SUN_SVG  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`;

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    // Update button icon & label
    if (theme === 'light') {
      btn.innerHTML = SUN_SVG;
      btn.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      btn.innerHTML = MOON_SVG;
      btn.setAttribute('aria-label', 'Switch to light mode');
    }
    // Dispatch custom event so canvas can react
    html.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  // Default to dark mode always
  const initial = 'dark';
  applyTheme(initial);

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
})();


/* ─── 5. COMMIT GRID — GitHub-style activity graph ─── */
(function initCommitGrid() {
  const grid = document.querySelector('.commit-grid');
  if (!grid) return;

  // 26 columns × 7 rows = 182 cells
  const COLS = 26;
  const ROWS = 7;

  // Weight distribution: more empty/light cells for realism
  const weights = [
    { cls: '',         weight: 40 }, // empty
    { cls: 'active-1', weight: 25 },
    { cls: 'active-2', weight: 18 },
    { cls: 'active-3', weight: 10 },
    { cls: 'active-4', weight: 7  },
  ];

  // Build weighted random function
  const total = weights.reduce((s, w) => s + w.weight, 0);
  function pickClass() {
    let r = Math.random() * total;
    for (const { cls, weight } of weights) {
      r -= weight;
      if (r <= 0) return cls;
    }
    return '';
  }

  const frag = document.createDocumentFragment();
  for (let i = 0; i < COLS * ROWS; i++) {
    const cell = document.createElement('div');
    cell.className = 'commit-cell';
    const cls = pickClass();
    if (cls) cell.classList.add(cls);
    frag.appendChild(cell);
  }
  grid.appendChild(frag);
})();


/* ─── 6. SCROLL REVEAL FALLBACK — IntersectionObserver ─── */
(function initScrollReveal() {
  // Only apply if CSS scroll-driven animations are NOT supported
  const supportsScrollDriven = CSS.supports('animation-timeline', 'scroll()');
  if (supportsScrollDriven) return;

  const elements = document.querySelectorAll('.reveal-fade');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.style.getPropertyValue('--reveal-delay') || '0ms';
        // Apply delay from CSS custom property
        el.style.transitionDelay = delay;
        el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}`;
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => {
    // Start hidden
    el.style.opacity = '0';
    observer.observe(el);
  });
})();


/* ─── 7. SCROLL PROGRESS BAR ─── */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  function update() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = Math.min(pct, 100) + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();


/* ─── 8. STAT COUNTERS ─── */
(function initStatCounters() {
  const stats = document.querySelectorAll('.stat-val[data-count]');
  if (!stats.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCount(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';

    const target  = parseInt(el.dataset.count, 10);
    const display = el.dataset.display || null;  // e.g. '1k' for 1000
    const suffix  = el.dataset.suffix  || '';
    const duration = 1200;
    const startTime = performance.now();

    // Store original innerHTML to restore suffix superscripts
    const suffixHTML = suffix === '+'
      ? '<span class="stat-plus">+</span>'
      : suffix === '%'
        ? '<span class="stat-pct">%</span>'
        : '';

    if (prefersReduced) {
      el.innerHTML = (display || target) + suffixHTML;
      return;
    }

    function ease(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; } // ease-in-out

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(ease(progress) * target);

      if (display && progress === 1) {
        el.innerHTML = display + suffixHTML;
      } else if (display) {
        // Show raw number until near the end
        const pct = current / target;
        if (pct > 0.85) {
          el.innerHTML = display + suffixHTML;
        } else {
          el.innerHTML = current + suffixHTML;
        }
      } else {
        el.innerHTML = current + suffixHTML;
      }

      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  // Trigger when hero stats come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));
})();


/* ─── 9. SVG ARROW DRAW ─── */
(function initArrowDraw() {
  const diagram = document.querySelector('.loop-diagram');
  if (!diagram) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        diagram.classList.add('arrows-drawn');
        observer.unobserve(diagram);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(diagram);
})();


/* ─── 8. ACTIVE NAV LINK highlight on scroll ─── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: '-64px 0px 0px 0px'
  });

  sections.forEach(s => observer.observe(s));
})();


/* ─── 10. HERO SPLIT TEXT — chars float up ─── */
(function initHeroSplitText() {
  const h1 = document.querySelector('.hero-title');
  if (!h1) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const STAGGER    = 45;   // ms between each character
  const DURATION   = 1250; // ms per character animation
  const BASE_DELAY = 150;  // ms before the first character starts

  // Remove the whole-element fade-in-up so it doesn't fight the per-char animation
  h1.classList.remove('fade-in-up');
  h1.style.opacity   = '1';
  h1.style.transform = 'none';

  let charIndex = 0;

  function splitNode(node, parentEl) {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      for (const char of node.textContent) {
        const span = document.createElement('span');
        span.className = 'split-char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay    = (BASE_DELAY + charIndex * STAGGER) + 'ms';
        span.style.animationDuration = DURATION + 'ms';
        frag.appendChild(span);
        charIndex++;
      }
      parentEl.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
      // Recurse into <em> etc. so their class/styling is preserved
      Array.from(node.childNodes).forEach(child => splitNode(child, node));
    }
  }

  Array.from(h1.childNodes).forEach(node => splitNode(node, h1));
})();
