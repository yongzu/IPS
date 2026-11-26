(() => {
  // 다시 만든 가설 체인(5주차) — 4주차 체인 + 인터뷰 판정 + 새로운 층위의 인사이트.
  // status: 지지 · 조건부 지지 · 해석 · 근거 없음. picked = 선택 체인(검은 박스), cause = 근본 원인,
  // infer = 인터뷰어 해석(점선), held = 4주차 선택 체인 — 근거 없음이라 보류(점선 · 흐리게)
  const CHAIN = {
    id: '현상', top: true, picked: true, status: '조건부 지지',
    text: '사용자는 목적이 생겨 저장물로 돌아가지만, 원하는 것이 어느 컬렉션에 있는지 몰라 여러 곳을 훑다가 포기하거나 밖에서 다시 찾는다',
    note: {
      근거: "P4 — '레퍼런스'에 없으면 '유즈풀'도 훑고, 지역명이 들어간 썸네일을 훑는다. P3 — 못 찾으면 포기하고 핀터레스트·아레나·유튜브에서 다시 찾는다.",
      바뀐점: "4주차 '하나씩 눌러 확인한다'에서 '여러 컬렉션을 훑는다'로. 주제별로 잘 나눈 P3는 잘 찾는다 — 그래서 조건부다.",
    },
    children: [
      {
        id: 'A', picked: true, status: '지지',
        text: '컬렉션 기준이 애매하거나 아예 없어, 저장물이 쓰임대로 나뉘어 있지 않다',
        note: {
          근거: "P4 — '레퍼런스'와 '유즈풀'이 섞여 기준이 애매해 헤맨다. P2 — 컬렉션 없이 300개 이상을 일반 저장 탭에 둔다.",
          반례: 'P3 — 주제별·툴별로 나눠 두고 문제없이 찾는다. 나눈 방식이 결과를 가른다.',
          우회: 'P4 — 꼭 다시 봐야 할 것은 컬렉션에서 헤매지 않으려고 나에게 DM으로 보낸다.',
        },
        children: [
          {
            id: 'A-1', status: '지지',
            text: "저장하는 순간엔 쓸 곳이 정해져 있지 않다 — '이거 괜찮네' 하고 '언젠가'를 위해 저장한다",
            note: { 근거: "P5 — '아 심심하다, 이거 괜찮네' 하고 저장한다. P2·P3·P4 — 일단 저장하고, 해야 할 일이 생기면 찾는다(4명 모두)." },
            children: [
              {
                id: 'A-1-a', status: '조건부 지지',
                text: '그 순간 세부 컬렉션까지 고르는 건 비용이라, 나누지 않거나 큰 컬렉션에 넣는다',
                note: {
                  근거: 'P2 — 귀찮아서 나눠 놓지 않는다. P5 — 분류는 비용이라 대가가 확실하면 하겠지만, 자주 찾지 않는다.',
                  주의: '초기 세팅·저장 순간의 인지 비용은 인터뷰어가 낸 보기이고, P4는 그보다 "귀찮다"고 답했다.',
                },
              },
            ],
          },
          {
            id: 'A-2', picked: true, status: '지지',
            text: '넣은 뒤에는 다시 나누거나 옮기기 번거로워, 정리하는 대신 컬렉션을 하나 더 훑는다',
            note: {
              근거: "P4 — 옮기는 게 번거로워 '그냥 폴더 하나 더 훑지'. P5 — 폴더 안에 폴더가 필요하다(카페 → 조용한·시끄러운·작업하기 좋은). P4 — 핀터레스트는 정리를 못 해 계정을 하나 더 만들었다.",
            },
            children: [
              {
                id: 'A-2-a', picked: true, cause: true, status: '근본 원인',
                text: 'Saved의 분류는 저장하는 순간 한 번, 컬렉션 한 단계로 끝난다 — 쓰임이 정해지는 나중에 다시 나눌 자리가 없다',
                note: {
                  근거: '컬렉션 안에는 하위 분류가 없고 저장한 순서대로 쌓인다(4주차 B-2). 쓰임은 저장할 때가 아니라 다시 찾을 때 정해진다(A-1). 사용자는 관리가 번거로워 정리를 포기한다(A-2).',
                  확인: '다음 인터뷰 — 저장물을 다른 컬렉션으로 옮기거나 나눠 본 일, 그만둔 이유, 다시 찾을 때 무엇을 기준으로 찾았는지.',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'B', infer: true, status: '해석',
        text: 'Saved는 인스타그램이 앞세우는 기능이 아니다',
        note: { 근거: '인터뷰에서 나온 새로운 층위(인사이트 ①). 저장을 다시 꺼내 보게 하는 쪽보다 즉석 소비에 무게가 있다.' },
        children: [
          {
            id: 'B-1', status: '지지(1명)',
            text: '저장함이 오른쪽 위 메뉴 안 깊은 곳에 있어, 다시 열기까지 여러 단계를 거친다',
            note: { 근거: 'P2 — 우측 상단인 것도 불편하고 그 안에서 단계가 깊어 더 안 찾게 된다. 인터뷰어 관찰 — 프로필 → 메뉴 → 저장됨 → 컬렉션.' },
            children: [
              {
                id: 'B-1-a', infer: true, status: '해석',
                text: '인스타그램은 릴스 등을 즉석에서 소비하게 해 체류 시간을 늘리는 쪽에 무게를 둔다',
                note: {
                  근거: '인터뷰어 해석(다크 패턴). P1 — 딴짓에 최적화되어 레퍼런스 수집용으로 쓰려다 그만뒀다(참고).',
                  확인: '회사 입장에서 — 저장을 다시 꺼내 보게 하는 것이 체류 시간도 늘리는지(공유 컬렉션, 저장물 주변 게시물). 인사이트 ②.',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'C', status: '지지',
        text: '필요할 때만 모으고 쓰고, 시간이 지나면 잊힌다 — 인스타그램만의 일이 아니다',
        note: {
          근거: 'P5 — 제일 오래된 것은 어차피 안 본다. P4 — 유튜브 나중에 볼 동영상은 다시 본 기억이 거의 없다. 반례 — P4는 핀터레스트를 여러 번 다시 본다.',
          범위: '오래된 저장물을 다시 보게 하는 것은 목적이 아니다. 필요해진 순간 찾게 하는 것이 목적이다.',
        },
      },
      {
        id: 'D', held: true, status: '근거 없음 · 보류',
        text: "저장물에 '무엇이 왜 쓸모 있었는지'가 남지 않는다 (4주차 선택 체인)",
        note: { 근거: "장면·색·곡 같은 '부분'을 말한 사람이 없었다. 나온 쓰임(따라 하기, 코디 참고, 장소 찾기)은 게시물 전체에 가깝다. 반증이 아니라 묻지 못한 것이라 보류한다." },
        children: [
          {
            id: 'D-1', held: true, status: '근거 없음',
            text: '저장은 게시물 통째로 되는데, 쓸모는 그 안의 한 부분이다',
            children: [
              { id: 'D-1-a', held: true, status: '근거 없음', text: "Saved는 '보관'만 한다 — 그 부분과 맥락을 덧붙일 자리가 없다" },
            ],
          },
        ],
      },
    ],
  };

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)');
  const header = document.querySelector('.toolbar');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // 부드러운 스크롤 — yongzu.github.io와 같은 값(lerp .09, 휠 ×1). 터치는 기본, 동작 줄이기 설정이면 끔
  const lenis = !reduce && window.Lenis ? new Lenis({ lerp: .09, wheelMultiplier: 1, autoRaf: true }) : null;
  const headerOffset = () => header.offsetHeight + 24;
  function layoutTop(el) { let top = 0; for (let n = el; n; n = n.offsetParent) top += n.offsetTop; return top; }
  function scrollToTarget(target) {
    const y = typeof target === 'number' ? target : Math.max(0, layoutTop(target) - headerOffset());
    if (lenis) lenis.scrollTo(y, { force: true }); else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }
  document.querySelector('.brand').addEventListener('click', e => { e.preventDefault(); scrollToTarget(0); });

  // ---- 가설 체인 트리(4주차 w4.js에서) ----
  const parentOf = new Map(), byId = new Map();
  (function index(n, parent) { byId.set(n.id, n); if (parent) parentOf.set(n.id, parent.id); n.children?.forEach(c => index(c, n)); })(CHAIN, null);
  // 페이지에는 번호 + 판정 + 가설 문장만 그린다. 근거 메모는 data-notes="on"일 때만(자세한 근거는 deliverables.md)
  function nodeHTML(n, withNotes) {
    const cls = ['node', n.top && 'is-top', n.picked && 'is-picked', n.infer && 'is-infer', n.held && 'is-held'].filter(Boolean).join(' ');
    const kids = n.children?.length ? `<ul>${n.children.map(c => nodeHTML(c, withNotes)).join('')}</ul>` : '';
    const tag = [n.top ? '현상' : n.id, n.status].filter(Boolean).join(' · ');
    const notes = !withNotes ? '' : Object.entries(n.note || {}).map(([k, v]) => `<span class="note"><b>${esc(k === '바뀐점' ? '바뀐 점' : k)}</b> ${esc(v)}</span>`).join('');
    return `<li><button type="button" class="${cls}" data-node="${esc(n.id)}"><span class="node-id">${esc(tag)}</span><span class="node-text">${esc(n.text)}</span>${notes && `<span class="node-notes">${notes}</span>`}</button>${kids}</li>`;
  }
  const trees = [];
  function mountTree(wrap) {
    const treeEl = wrap.querySelector('.tree'), svg = wrap.querySelector('.tree-lines');
    treeEl.innerHTML = nodeHTML(CHAIN, wrap.dataset.notes === 'on');
    const box = id => treeEl.querySelector(`[data-node="${CSS.escape(id)}"]`);
    // 가로 트리가 들어갈 폭인지 재서 고른다: 넓음(4×228+3×40) → 중간(4×190+3×36) → 세로 들여쓰기
    function fit() {
      const w = wrap.clientWidth;
      wrap.classList.toggle('is-mid', w < 1040 && w >= 876);
      wrap.classList.toggle('is-vertical', w < 876);
    }
    const vertical = () => wrap.classList.contains('is-vertical');
    function drawLines() {
      const base = wrap.getBoundingClientRect();
      svg.setAttribute('viewBox', `0 0 ${wrap.clientWidth} ${wrap.clientHeight}`);
      const paths = [];
      for (const [child, parent] of parentOf) {
        const a = box(parent).getBoundingClientRect(), b = box(child).getBoundingClientRect();
        let d;
        if (vertical()) {
          const x = a.left - base.left + 12, y1 = a.bottom - base.top, y2 = b.top - base.top + b.height / 2, x2 = b.left - base.left;
          d = `M${x} ${y1} V${y2 - 8} Q${x} ${y2} ${x + 8} ${y2} H${x2}`;
        } else {
          const x1 = a.right - base.left, y1 = a.top - base.top + a.height / 2, x2 = b.left - base.left, y2 = b.top - base.top + b.height / 2;
          const dx = (x2 - x1) / 2;
          d = `M${x1} ${y1} C${x1 + dx} ${y1} ${x2 - dx} ${y2} ${x2} ${y2}`;
        }
        const picked = byId.get(child).picked && byId.get(parent).picked;
        paths.push(`<path d="${d}" data-edge="${esc(child)}"${picked ? ' class="is-picked"' : ''}/>`);
      }
      svg.innerHTML = paths.join('');
    }
    // 한 박스를 고르면 현상까지 올라가는 경로와 그 아래 가지를 켠다
    function trace(id) {
      const on = new Set();
      for (let cur = id; cur; cur = parentOf.get(cur)) on.add(cur);
      (function down(n) { on.add(n.id); n.children?.forEach(down); })(byId.get(id));
      wrap.classList.add('is-tracing');
      treeEl.querySelectorAll('.node').forEach(el => el.classList.toggle('is-on', on.has(el.dataset.node)));
      svg.querySelectorAll('path').forEach(p => p.classList.toggle('is-on', on.has(p.dataset.edge) && on.has(parentOf.get(p.dataset.edge))));
    }
    function untrace() {
      wrap.classList.remove('is-tracing');
      wrap.querySelectorAll('.is-on').forEach(el => el.classList.remove('is-on'));
    }
    const t = { wrap, pinned: null, trace, untrace };
    treeEl.addEventListener('pointerover', e => { const b = e.target.closest('.node'); if (b && !t.pinned) trace(b.dataset.node); });
    treeEl.addEventListener('pointerleave', () => { if (!t.pinned) untrace(); });
    treeEl.addEventListener('focusin', e => { const b = e.target.closest('.node'); if (b) trace(b.dataset.node); });
    treeEl.addEventListener('focusout', e => { if (!treeEl.contains(e.relatedTarget) && !t.pinned) untrace(); });
    treeEl.addEventListener('click', e => {
      const b = e.target.closest('.node');
      if (!b) return;
      t.pinned = t.pinned === b.dataset.node ? null : b.dataset.node;
      t.pinned ? trace(t.pinned) : untrace();
    });
    const redraw = () => { fit(); drawLines(); if (t.pinned) trace(t.pinned); };
    redraw();
    new ResizeObserver(redraw).observe(wrap);
    addEventListener('resize', redraw);
    document.fonts?.ready.then(redraw);
    t.redraw = redraw;
    trees.push(t);
  }
  document.querySelectorAll('.tree-wrap').forEach(mountTree);
  document.addEventListener('click', e => {
    trees.forEach(t => { if (t.pinned && !t.wrap.contains(e.target.closest('.node'))) { t.pinned = null; t.untrace(); } });
  });

  // ---- 섹션: 제목으로 접고 편다. 이 페이지는 처음에 모두 펼쳐 둔다 ----
  const sections = [...document.querySelectorAll('.log-section')].map(sec => {
    const btn = sec.querySelector('.section-toggle'), body = sec.querySelector('.section-body');
    const set = open => { sec.dataset.open = open; btn.setAttribute('aria-expanded', String(open)); body.inert = !open; };
    btn.addEventListener('click', () => set(sec.dataset.open !== 'true'));
    set(true);
    body.addEventListener('transitionend', () => trees.forEach(t => t.redraw()));
    return { sec, set };
  });

  // ---- 행: 호버하면 잠깐 뒤 미리 보고(스크롤 중엔 안 함), 누르면 고정, 여러 개 고정 가능 ----
  const rows = [...document.querySelectorAll('.row')];
  const rowStates = rows.map(row => {
    const title = row.querySelector('.row-title');
    const s = { pinned: false, hover: false, focus: false, timer: 0 };
    s.sync = () => { const open = s.pinned || s.hover || s.focus; row.dataset.open = open; title.setAttribute('aria-expanded', String(open)); };
    title.addEventListener('click', () => { s.pinned = !s.pinned; if (!s.pinned) s.hover = false; clearTimeout(s.timer); s.timer = 0; s.sync(); });
    if (row.dataset.hover !== 'off') {
      const arm = () => { clearTimeout(s.timer); s.timer = setTimeout(() => { s.timer = 0; if (lenis && lenis.isScrolling) return; s.hover = true; s.sync(); }, 180); };
      row.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse' && fine.matches) arm(); });
      row.addEventListener('pointermove', e => { if (e.pointerType === 'mouse' && fine.matches && !s.hover && !s.timer) arm(); });
      row.addEventListener('pointerleave', e => { if (e.pointerType !== 'mouse') return; clearTimeout(s.timer); s.timer = setTimeout(() => { s.timer = 0; s.hover = false; s.sync(); }, 150); });
    }
    title.addEventListener('focus', () => { if (title.matches(':focus-visible')) { s.focus = true; s.sync(); } });
    title.addEventListener('blur', () => { s.focus = false; s.sync(); });
    s.sync();
    return s;
  });

  // ---- 스크롤 등장: 한 번에 들어온 것끼리 90ms씩 늦춘다 ----
  if (document.documentElement.classList.contains('has-reveal')) {
    const io = new IntersectionObserver(entries => {
      let i = 0;
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        en.target.style.setProperty('--reveal-delay', Math.min(i++, 6) * 90 + 'ms');
        en.target.dataset.reveal = 'in';
        io.unobserve(en.target);
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: .1 });
    document.querySelectorAll('.identity>*,.log-title,.row,.tree-block').forEach(el => io.observe(el));
  }

  // ---- 목차: 보고 있는 섹션 표시, 누르면 그 섹션을 열고 미끄러져 간다 ----
  const tocLinks = [...document.querySelectorAll('.toc a')];
  const tocTargets = tocLinks.map(a => document.querySelector(a.getAttribute('href')));
  const tocBar = document.querySelector('.toc-bar');
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
  document.fonts?.ready.then(() => placeTocBar(barAt, true));
  function updateToc() {
    const line = headerOffset() + 80;
    const atBottom = scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
    let current = -1;
    tocTargets.forEach((t, i) => { if (t && t.getBoundingClientRect().top <= line) current = i; });
    if (atBottom) current = tocTargets.length - 1;
    tocLinks.forEach((a, i) => { a.classList.toggle('is-active', i === current); if (i === current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
    placeTocBar(current);
  }
  tocLinks.forEach((a, i) => a.addEventListener('click', e => { e.preventDefault(); const t = tocTargets[i]; if (!t) return; sections.find(x => x.sec === t)?.set(true); scrollToTarget(t); }));

  // ---- 맨 위로: 한 화면쯤 내려가면 나타난다 ----
  const backTop = document.querySelector('.back-to-top');
  function updateBackTop() { const shown = scrollY > innerHeight * .8; backTop.dataset.shown = shown; backTop.tabIndex = shown ? 0 : -1; }
  backTop.addEventListener('click', () => scrollToTarget(0));
  const onScroll = () => { updateToc(); updateBackTop(); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { placeTocBar(barAt, true); onScroll(); });
  onScroll();

  // Esc — 고정한 행과 트리 강조를 모두 놓는다
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    rowStates.forEach(s => { clearTimeout(s.timer); s.timer = 0; s.pinned = false; s.hover = false; s.sync(); });
    trees.forEach(t => { t.pinned = null; t.untrace(); });
  });
})();
