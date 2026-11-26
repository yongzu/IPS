/* IPS 1124 즐겨찾기 - 아이디어와 리서치 카드에 별을 달고, 모아 보고, 글로 복사한다.
   이 브라우저의 localStorage에만 저장된다(다른 기기, 다른 사람과 공유되지 않음). */
(() => {
  const KEY = 'ips1124-fav-v1';
  let set = new Set();
  try { set = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) { set = new Set(); }
  const subs = [];
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify([...set])); } catch (e) { /* 저장 불가(사생활 보호 모드 등) */ } };
  const api = {
    has: (id) => set.has(id),
    toggle(id) { set.has(id) ? set.delete(id) : set.add(id); save(); subs.forEach(f => f(id)); },
    list: () => [...set],
    onChange: (f) => subs.push(f)
  };
  window.IPSFav = api;

  // 별 버튼 공통 처리: data-fav 를 가진 모든 버튼
  const paint = (b) => { const on = set.has(b.dataset.fav); b.setAttribute('aria-pressed', String(on)); b.textContent = on ? '★' : '☆'; b.title = on ? '즐겨찾기 해제' : '즐겨찾기'; };
  const paintAll = () => document.querySelectorAll('[data-fav]').forEach(paint);
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-fav]'); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    api.toggle(b.dataset.fav);
  }, true);
  api.onChange(() => { paintAll(); renderFab(); });

  // 떠 있는 버튼과 모아 보기 창
  const fab = document.createElement('button');
  fab.type = 'button'; fab.className = 'fav-fab'; fab.setAttribute('aria-haspopup', 'dialog');
  const dlg = document.createElement('dialog');
  dlg.id = 'favdlg'; dlg.setAttribute('aria-labelledby', 'favdlg-title');
  dlg.innerHTML = '<div class="rp-bar"><span id="favdlg-title">내 즐겨찾기</span><span><button type="button" data-copy>글로 복사</button><button type="button" data-close>닫기</button></span></div><div class="fav-body"></div>';
  function items() {
    const ideas = [], res = [];
    api.list().forEach(id => {
      if (id.startsWith('i')) { const art = document.getElementById(id); if (art) ideas.push({ id, n: +id.slice(1), name: art.querySelector('h3').firstChild.textContent, line: art.querySelector('.line')?.textContent || '' }); }
      else if (id.startsWith('r:')) { const R = window.IPS_RESEARCH || []; const k = R.findIndex(p => 'r:' + p.title === id); if (k >= 0) res.push({ id, k, p: R[k] }); }
    });
    ideas.sort((a, b) => a.n - b.n); res.sort((a, b) => a.k - b.k);
    return { ideas, res };
  }
  const pad = (n) => String(n).padStart(2, '0');
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  function renderFab() {
    const n = api.list().length;
    fab.textContent = `★ 즐겨찾기 ${n}`;
    fab.hidden = false;
    if (dlg.open) renderDlg();
  }
  function renderDlg() {
    const { ideas, res } = items();
    const body = dlg.querySelector('.fav-body');
    if (!ideas.length && !res.length) { body.innerHTML = '<p class="faint">아직 없다. 아이디어 제목 옆이나 리서치 카드 오른쪽 위의 ☆를 누르면 여기에 모인다.</p>'; return; }
    body.innerHTML = `${ideas.length ? `<h4>아이디어 ${ideas.length}</h4><ul>${ideas.map(x => `<li><button type="button" class="fav" data-fav="${x.id}">★</button><a href="#${x.id}" data-go>${pad(x.n)} ${x.name}</a><span>${x.line}</span></li>`).join('')}</ul>` : ''}
      ${res.length ? `<h4>리서치 ${res.length}</h4><ul>${res.map(x => `<li><button type="button" class="fav" data-fav="${esc(x.id)}">★</button><a href="#s7" data-open-r="${x.k}">${pad(x.k + 1)} ${x.p.claim}</a><span>${x.p.title}</span></li>`).join('')}</ul>` : ''}
      <p class="faint">이 브라우저에만 저장된다. "글로 복사"로 옮겨 둘 수 있다.</p>`;
    paintAll();
  }
  fab.addEventListener('click', () => { renderDlg(); dlg.showModal(); });
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg || e.target.closest('[data-close]')) { dlg.close(); return; }
    const go = e.target.closest('[data-go]');
    if (go) { dlg.close(); return; }
    const r = e.target.closest('[data-open-r]');
    if (r) { e.preventDefault(); dlg.close(); window.IPS_openResearch && window.IPS_openResearch(+r.dataset.openR); return; }
    if (e.target.closest('[data-copy]')) {
      const { ideas, res } = items();
      const txt = ['[아이디어]', ...ideas.map(x => `${pad(x.n)} ${x.name} - ${x.line}`), '', '[리서치]', ...res.map(x => `${pad(x.k + 1)} ${x.p.claim} (${x.p.cite})`)].join('\n');
      const b = e.target.closest('[data-copy]');
      const done = () => { b.textContent = '복사됨'; setTimeout(() => { b.textContent = '글로 복사'; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, () => { window.prompt('복사해 가세요', txt); });
      else window.prompt('복사해 가세요', txt);
    }
  });
  window.addEventListener('DOMContentLoaded', () => { document.body.append(fab, dlg); paintAll(); renderFab(); });
  window.addEventListener('load', paintAll);
  api.paintAll = paintAll;
})();
