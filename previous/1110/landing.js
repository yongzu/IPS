(() => {
  // IPS 1110 랜딩 — 부드러운 스크롤 · 스크롤 등장 · 목차 · 맨 위로 (5주차 wk05.js에서 옮김)
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.toolbar');
  const lenis = !reduce && window.Lenis ? new Lenis({ lerp: .09, wheelMultiplier: 1, autoRaf: true }) : null;
  const headerOffset = () => header.offsetHeight + 24;
  function layoutTop(el) { let top = 0; for (let n = el; n; n = n.offsetParent) top += n.offsetTop; return top; }
  function scrollToTarget(target) {
    const y = typeof target === 'number' ? target : Math.max(0, layoutTop(target) - headerOffset());
    if (lenis) lenis.scrollTo(y, { force: true }); else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }
  document.querySelector('.brand').addEventListener('click', e => { e.preventDefault(); scrollToTarget(0); });

  // 스크롤 등장: 한 번에 들어온 것끼리 90ms씩 늦춘다
  if (document.documentElement.classList.contains('has-reveal')) {
    const io = new IntersectionObserver(entries => {
      let i = 0;
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        en.target.style.setProperty('--reveal-delay', Math.min(i++, 6) * 90 + 'ms');
        en.target.dataset.reveal = 'in';
        io.unobserve(en.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: .05 });
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
  }

  // 목차: 첫 화면을 지나면 나타나고, 보고 있는 장에 잉크 막대가 미끄러진다
  const rail = document.querySelector('.toc-rail');
  const tocLinks = [...document.querySelectorAll('.toc a')];
  const tocTargets = tocLinks.map(a => document.querySelector(a.getAttribute('href')));
  const tocBar = document.querySelector('.toc-bar');
  const firstChapter = tocTargets[0];
  let barAt = -1;
  function placeTocBar(i, force) {
    if (!tocBar || (i === barAt && !force)) return;
    const was = barAt; barAt = i;
    if (i < 0) { tocBar.style.opacity = '0'; return; }
    const a = tocLinks[i], y = a.offsetTop + 7, h = Math.max(0, a.offsetHeight - 14);
    if (was < 0 || force) { tocBar.style.transition = 'none'; tocBar.style.transform = `translateY(${y}px)`; tocBar.style.height = h + 'px'; tocBar.offsetHeight; tocBar.style.transition = ''; }
    else { tocBar.style.transform = `translateY(${y}px)`; tocBar.style.height = h + 'px'; }
    tocBar.style.opacity = '1';
  }
  function updateToc() {
    const line = headerOffset() + 120;
    rail.dataset.shown = firstChapter.getBoundingClientRect().top <= innerHeight * .6;
    const atBottom = scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
    let current = -1;
    tocTargets.forEach((t, i) => { if (t && t.getBoundingClientRect().top <= line) current = i; });
    if (atBottom) current = tocTargets.length - 1;
    tocLinks.forEach((a, i) => { a.classList.toggle('is-active', i === current); if (i === current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
    placeTocBar(current);
  }
  tocLinks.forEach((a, i) => a.addEventListener('click', e => { e.preventDefault(); if (tocTargets[i]) scrollToTarget(tocTargets[i]); }));
  document.fonts?.ready.then(() => placeTocBar(barAt, true));

  // 맨 위로
  const backTop = document.querySelector('.back-to-top');
  function updateBackTop() { const shown = scrollY > innerHeight * .8; backTop.dataset.shown = shown; backTop.tabIndex = shown ? 0 : -1; }
  backTop.addEventListener('click', () => scrollToTarget(0));

  const onScroll = () => { updateToc(); updateBackTop(); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { placeTocBar(barAt, true); onScroll(); });
  onScroll();
})();
