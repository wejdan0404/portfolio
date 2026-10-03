/**
 * Reveal elements on scroll.
 * Looks for [data-reveal] elements, toggles .is-revealed when they enter
 * the viewport. Idempotent + survives view transitions.
 */

function reveal(root: Document | ParentNode = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"))
    .filter((el) => !el.classList.contains("is-revealed"));
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    // Fallback: just reveal everything
    els.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add("is-revealed");
          io.unobserve(el);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  els.forEach((el) => io.observe(el));
}

function animateNumbers(root: Document | ParentNode = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-count-to]"))
    .filter((el) => !el.dataset.counted);
  if (!els.length) return;

  const prm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const run = (el: HTMLElement) => {
    const to = Number(el.dataset.countTo || "0");
    const suffix = el.dataset.countSuffix || "";
    const dur = Number(el.dataset.countDuration || "900");
    if (!Number.isFinite(to)) return;
    el.dataset.counted = "1";
    if (prm) {
      el.textContent = `${to}${suffix}`;
      return;
    }
    const start = performance.now();
    const from = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      // easeOutExpo
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      const v = Math.round(from + (to - from) * e);
      el.textContent = `${v}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    els.forEach(run);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => io.observe(el));
}

function tilt(root: Document | ParentNode = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-tilt]"));
  if (!els.length) return;
  const prm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prm) return;
  // Only enable on fine pointers (mouse) — touch devices skip the effect
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (!fine) return;

  els.forEach((el) => {
    if (el.dataset.tiltBound) return;
    el.dataset.tiltBound = "1";
    let raf = 0;
    const onMove = (ev: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const mx = ((ev.clientX - r.left) / r.width) * 2 - 1; // -1..1
      const my = ((ev.clientY - r.top) / r.height) * 2 - 1; // -1..1
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", mx.toFixed(3));
        el.style.setProperty("--my", my.toFixed(3));
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointercancel", onLeave);
  });
}

function init() {
  reveal();
  animateNumbers();
  tilt();
}

// Run on first load + after every view-transition swap
init();
document.addEventListener("astro:page-load", init);
