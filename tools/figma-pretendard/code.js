// 선택한 프레임 · 섹션 · 글 상자 안의 Noto Sans KR 글자를 Pretendard로 바꾼다.
// 원격 편집 환경(Claude의 Figma 연결)에는 Pretendard가 없어 Noto Sans KR로 넣고,
// 이 플러그인을 데스크톱 Figma(이 컴퓨터에 Pretendard 설치됨)에서 돌려 바꾼다.
// 굵기(Regular · Bold 등)는 같은 이름으로 옮기고, 없으면 Regular로 둔다. 다른 글꼴(Inter 등)은 건드리지 않는다.

const SOURCE = new Set(['Noto Sans KR']);
const TARGETS = ['Pretendard Variable', 'Pretendard'];

async function run() {
  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.closePlugin('바꿀 프레임이나 글 상자를 먼저 선택하세요.');
    return;
  }

  const fonts = await figma.listAvailableFontsAsync();
  const family = TARGETS.find(f => fonts.some(x => x.fontName.family === f));
  if (!family) {
    figma.closePlugin('Pretendard를 찾지 못했습니다. 데스크톱 Figma와 글꼴 설치를 확인하세요.');
    return;
  }
  const styles = fonts.filter(x => x.fontName.family === family).map(x => x.fontName.style);
  const norm = s => s.replace(/\s+/g, '').toLowerCase();
  const pick = style => styles.find(s => norm(s) === norm(style)) || (styles.includes('Regular') ? 'Regular' : styles[0]);

  const texts = [];
  for (const node of selection) {
    if (node.type === 'TEXT') texts.push(node);
    if ('findAllWithCriteria' in node) texts.push(...node.findAllWithCriteria({ types: ['TEXT'] }));
  }

  let changed = 0;
  let skipped = 0;
  for (const text of texts) {
    if (text.hasMissingFont) { skipped++; continue; }
    const segments = text.getStyledTextSegments(['fontName']);
    if (!segments.some(s => SOURCE.has(s.fontName.family))) continue;
    for (const s of segments) await figma.loadFontAsync(s.fontName);
    for (const s of segments) {
      if (!SOURCE.has(s.fontName.family)) continue;
      const next = { family, style: pick(s.fontName.style) };
      await figma.loadFontAsync(next);
      text.setRangeFontName(s.start, s.end, next);
    }
    changed++;
  }

  figma.closePlugin(`${family}로 바꾼 글 상자 ${changed}개` + (skipped ? `, 글꼴이 없어 건너뜀 ${skipped}개` : ''));
}

run().catch(e => figma.closePlugin('오류: ' + e.message));
