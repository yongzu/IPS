/* IPS 1124 해결 아이디어 10가지 - 한눈에 표와 아이디어별 화면 흐름(휴대폰 목업)을 그린다.
   문장에는 긴 대시와 가운뎃점을 쓰지 않는다(사용자 규칙). */
(() => {
  const SV = (d, fill) => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const IC = {
    heart: SV('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'),
    comment: SV('<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z"/>'),
    send: SV('<path d="M21 3 10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>'),
    save: SV('<path d="M6 3h12v18l-6-5-6 5z"/>'),
    more: SV('<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>'),
    back: SV('<path d="M15 5l-7 7 7 7"/>'),
    search: SV('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
    pin: SV('<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>'),
    move: SV('<path d="M4 7h11"/><path d="M12 3l4 4-4 4"/><path d="M20 17H9"/><path d="M12 13l-4 4 4 4"/>')
  };
  const C = ['#cdb9a6', '#a9bdb8', '#bcb3cf', '#dcc79f', '#a8bad0', '#cfaeae', '#b5c6a2', '#d4c8b4', '#9fb0c2', '#c9a98f', '#b7a6c4', '#a6c2bd', '#d8b8a0', '#b0b8a0', '#c4b0a2'];
  const col = (i) => C[i % C.length];
  const status = '<div class="status"><span>9:41</span><span>●●● ▮</span></div>';
  const ic = (k, cls = '') => `<span class="ic ${cls}">${IC[k]}</span>`;

  function reel(o = {}) {
    const saveCls = (o.saved ? 'fill ' : '') + (o.tap ? 'tap' : o.hold ? 'hold' : '');
    const art = o.art ? `<div class="reel-art txt">${o.art}</div>` : '<div class="reel-art"></div>';
    return `<div class="scr reel" style="--bg:${o.bg || col(0)}">${status}<div class="reel-top">릴스</div>${art}
      <div class="rail">${ic('heart')}${ic('comment')}${ic('send')}${ic('save', saveCls)}${ic('more')}</div>
      ${o.hint ? `<span class="hint" style="bottom:${o.hintY || 112}px">${o.hint}</span>` : ''}
      <div class="cap"><b>@${o.acc || 'design.daily'}</b>${o.cap ? `<p>${o.cap}</p>` : '<i></i><i></i>'}</div>
      ${o.prog != null ? `<div class="prog"><span style="width:${o.prog}%"></span></div>` : ''}
      ${o.time ? `<span class="timecode">${o.time}</span>` : ''}
      ${o.over || ''}</div>`;
  }
  const saved = (title, body, right = '') => `<div class="scr saved">${status}<div class="sv-top">${ic('back')}<span>${title}</span><span class="r">${right}</span></div>${body}</div>`;
  const toast = (text, action, o = {}) => `<div class="toast" style="--bg:${o.bg || col(0)}"><span class="th"></span><span>${text}</span>${action ? `<b class="${o.on ? 'on' : ''}">${action}</b>` : ''}</div>`;
  const chips = (list, on = 0) => `<div class="chipsm">${list.map((s, i) => `<span class="${i === on ? 'on' : ''}">${s}</span>`).join('')}</div>`;
  function grid(n, o = {}) {
    let h = '<div class="g">';
    for (let i = 0; i < n; i++) {
      const c = [];
      if (o.sel) c.push(o.sel.includes(i) ? 'sel' : 'unsel');
      if (o.target === i) c.push('target');
      if (o.dim && o.dim.includes(i)) c.push('dim');
      let inner = '';
      if (o.heart && o.heart.includes(i)) inner += `<span class="hrt">${IC.heart.replace('fill:none', '')}</span>`;
      if (o.pin && o.pin.includes(i)) inner += '<em class="pin">고정</em>';
      if (o.label && o.label[i]) inner += `<em class="t">${o.label[i]}</em>`;
      h += `<i class="${c.join(' ')}" style="--c:${col(i + (o.s || 0))}">${inner}</i>`;
    }
    return h + '</div>';
  }
  const lbl = (a, b = '') => `<div class="lbl">${a}<span>${b}</span></div>`;
  const tiles = (n, s = 0, labels = []) => `<div class="row-tiles">${Array.from({ length: n }, (_, i) => `<i style="--c:${col(i + s)}">${labels[i] ? `<em>${labels[i]}</em>` : ''}</i>`).join('')}</div>`;
  const colsSheet = (items, hit) => `<div class="cols">${items.map((it, i) => it === '+' ? '<div class="col new"><i>+</i>새 컬렉션</div>' : `<div class="col ${i === hit ? 'hit' : ''}" style="--c:${col(i + 3)}"><i></i>${it.replace('*', '')}${it.endsWith('*') ? '<span class="who"><em></em><em style="background:#9ab"></em></span>' : ''}</div>`).join('')}</div>`;
  const sheet = (title, body, right = '') => `<div class="sheet"><span class="handle"></span><div class="sh-title">${title}<span>${right}</span></div>${body}</div>`;
  const listrow = (name, n, i, extra = '') => `<div class="listrow" style="--c:${col(i)}"><i></i><span>${name}</span><em>${n}</em>${extra}</div>`;

  const IDEAS = [
    {
      name: '지금 저장, 나중에 정리', line: '저장할 때는 고르지 않는다. 정리는 나중에 여러 개를 한꺼번에 한다.',
      stage: ['저장', '관리'], who: 'B, A', ev: 3, evNote: '세원, 세희, 가은, 현아', ins: '인사이트 3, 7',
      borrow: [['mymind', '폴더 없이 한 번에 저장하고 정리에 시간을 쓰지 않는다', 2], ['Pinterest', '정리하기에서 여러 핀을 골라 섹션으로 옮긴다', 1]],
      how: ['저장 버튼은 지금처럼 한 번. 저장 시트 대신 작은 알림만 띄운다', '알림에 "전체에 저장됨"을 적어 저장 구조를 알려 준다', '저장함 맨 위에 "정리 안 됨" 묶음을 두고, 여러 개를 골라 컬렉션으로 한꺼번에 옮긴다'],
      risk: '정리를 영영 미룰 수 있다. 묶음 숫자가 쌓이면 오히려 부담이 된다',
      test: '같은 가짜 저장함에서 20개를 컬렉션으로 나누는 탭 수와 시간, 지금(하나씩) vs 여러 개 선택',
      flow: [
        ['릴스에서 저장 한 번', reel({ tap: true, hint: '한 번 누르기' })],
        ['시트 없이 알림만, 바로 다음 릴스', reel({ saved: true, over: toast('전체에 저장됨', '나중에 정리') })],
        ['정리 안 된 것만 모아 여러 개 골라 옮기기', saved('저장됨', chips(['전체', '정리 안 됨 12', '디자인', '맛집'], 1) + lbl('3개 선택', '전체 선택') + grid(12, { sel: [0, 2, 4] }) + `<div class="bar-bottom"><b>어디로 옮길까요?</b>${chips(['디자인', '맛집', '레시피', '+ 새로'], 0)}</div>`)]
      ]
    },
    {
      name: '보고 고르는 저장 시트', line: '저장 시트를 이름 목록에서 큰 커버 격자로 바꾼다. DM 보내기처럼 보고 누른다.',
      stage: ['저장'], who: 'C, B', ev: 1, evNote: '주연 1명, 소윤과 가은은 불편 없음', ins: '인사이트 6',
      borrow: [['인스타그램 DM 공유 시트', '받는 사람이 큰 얼굴 3열 격자로 뜬다(인터뷰 참가자가 비교한 화면)', -1], ['Cosmos', '연결 창이 열린 채로 여러 클러스터에 한 번에 담는다', 4]],
      how: ['저장 버튼을 길게 누르면 3열 큰 커버 격자가 뜬다', '최근에 넣은 컬렉션이 앞, 순서는 직접 고정할 수 있다', '공동 컬렉션은 함께하는 사람 얼굴을 표시해 실수로 넣지 않게 한다'],
      risk: '근거가 1명이다. 커버가 그 컬렉션을 대표하지 못하면 격자도 결국 읽어야 한다',
      test: '시트에서 고르는 시간과 잘못 넣은 횟수, 목록 vs 격자 비교',
      flow: [
        ['저장 버튼 길게 누르기', reel({ hold: true, hint: '길게 누르기', bg: col(5) })],
        ['커버를 보고 고르기, 함께하는 컬렉션은 얼굴 표시', reel({ bg: col(5), over: '<div class="dim-bg"></div>' + sheet('컬렉션에 저장', colsSheet(['디자인', '맛집', '오사카*', '운동', '레시피', '+'], 1), '전체에도 저장') })],
        ['넣은 곳을 알려 주고 바로 닫힘', reel({ bg: col(5), saved: true, over: toast('맛집에 저장됨', '바꾸기', { bg: col(4) }) })]
      ]
    },
    {
      name: '끌어서 바로 넣기', line: '저장 버튼을 길게 누르면 둘레에 최근 컬렉션 4개가 뜨고, 끌어 놓으면 바로 들어간다.',
      stage: ['저장'], who: 'B', ev: 1, evNote: 'DM 빠른 보내기에서 착안. 주연은 느리고 헷갈린다고 함', ins: '인사이트 3',
      borrow: [['인스타그램 DM 빠른 보내기', '보내기 버튼을 길게 누르면 자주 보내는 4명이 뜬다', -1], ['Cosmos', '한 번의 흐름에서 여러 곳에 담는다', 4]],
      how: ['저장 버튼을 길게 누르면 버튼 둘레에 최근 컬렉션 4개', '끌어 놓으면 그 컬렉션에, 그냥 떼면 전체에 저장', '화면을 덮지 않아 릴스가 계속 재생된다'],
      risk: '주연은 길게 누르는 딜레이와 비슷한 사진을 헷갈리는 점을 싫어했다. 숨은 동작이라 아는 사람이 적다(바로가기를 아는 사람 0명과 같은 문제)',
      test: '동작을 알려 준 뒤 10번 저장하는 시간과 잘못 넣은 횟수',
      flow: [
        ['저장 버튼 길게 누르기', reel({ hold: true, hint: '길게 누르기', bg: col(6) })],
        ['버튼 둘레에 최근 컬렉션 4개, 끌어 놓기', reel({ bg: col(6), over: `<div class="dim-bg" style="background:rgba(0,0,0,.22)"></div><div class="radial"><svg viewBox="0 0 206 438"><path d="M184 318 Q 150 300 120 262" stroke="#fff" stroke-width="2" stroke-dasharray="4 4" fill="none"/></svg><div class="r hit" style="left:93px;top:238px;--c:${col(3)}"><i></i>디자인</div><div class="r" style="left:72px;top:296px;--c:${col(4)}"><i></i>맛집</div><div class="r" style="left:146px;top:207px;--c:${col(5)}"><i></i>운동</div><div class="r" style="left:93px;top:354px;--c:${col(7)}"><i></i>오사카</div></div>` })],
        ['화면을 덮지 않고 다음 릴스로', reel({ bg: col(8), over: toast('디자인에 저장됨', '', { bg: col(6) }) })]
      ]
    },
    {
      name: '곧 볼 것', line: '"곧 볼 것"과 "언젠가"를 저장함 안에서 나눈다. 나에게 보내기를 대신하는 비워지는 칸.',
      stage: ['관리'], who: 'B, C, A', ev: 2, evNote: '세원, 정우', ins: '인사이트 4, 1',
      borrow: [['YouTube', '나중에 볼 동영상이 기본 재생목록으로 따로 있다', 9], ['Pocket', '읽을거리를 쌓아 두는 서비스, 2025년 7월에 문을 닫았다. 쌓기만 하는 목록이 아니라 비워지는 목록이어야 한다', 10]],
      how: ['저장 알림에 "곧 볼 것" 버튼 하나', '누르면 저장함 맨 위 "곧 볼 것" 줄에 올라간다', '다시 보고 나면 "봤어요"로 내려 전체로 돌아간다. 7일이 지나면 한 번 묻는다'],
      risk: '나에게 보내기에는 부계 스토리, 친구에게 보낼 것 보관 같은 다른 이유도 있어 다 대신하지 못한다',
      test: '일주일 기록에서 나에게 보내기, 캡처 중 "곧 볼 것" 이유의 비율',
      flow: [
        ['저장 알림에서 "곧 볼 것"', reel({ saved: true, bg: col(9), over: toast('저장됨', '곧 볼 것', { on: true, bg: col(9) }) })],
        ['저장함 맨 위 "곧 볼 것" 줄', saved('저장됨', lbl('곧 볼 것', '3') + tiles(3, 9, ['D-1', 'D-3', 'D-6']) + lbl('전체', '214') + grid(9, { s: 2 }))],
        ['보고 나면 "봤어요", 칸이 비워진다', saved('저장됨', lbl('곧 볼 것', '2') + tiles(2, 10, ['D-3', 'D-6']) + lbl('전체', '215') + grid(9, { s: 9, target: 0 }) + toast('봤어요, 전체로 옮겼어요', '되돌리기', { bg: col(9) }))]
      ]
    },
    {
      name: '앞에 두기, 하트와 고정', line: '자주 볼 것에 하트를 달고, 컬렉션 순서를 직접 고정한다.',
      stage: ['관리', '탐색'], who: 'A', ev: 1, evNote: '원래 관리 가설, 주연(컬렉션이 최근순이라 계속 바뀜). 가은은 반대', ins: '원래 관리 가설',
      borrow: [['iOS 18 사진', '하트를 누른 사진이 즐겨찾기로 모이고, 맨 앞에 둘 모음을 직접 고른다', 6], ['Are.na', '유료 요금제에서 블록을 채널 맨 위에 고정한다', 3]],
      how: ['컬렉션 안에서 길게 눌러 하트, 하트 모음이 저장함 맨 앞', '컬렉션 목록을 최근순 대신 내가 정한 순서로 고정', '컬렉션 안에서 자주 보는 것 몇 개를 맨 위에 고정'],
      risk: '"값을 매기면 다시 찾는다"는 근거가 아직 없다. 가은은 사진은 상황 맥락이 있어 찾는 것이라 했다',
      test: '일주일 뒤 같은 저장물을 다시 찾는 시간, 실제로 다는 하트 수',
      flow: [
        ['평소처럼 저장', reel({ tap: true, bg: col(11) })],
        ['컬렉션에서 길게 눌러 하트, 맨 위 고정', saved('디자인', grid(12, { s: 3, target: 4 }) + '<div class="dim-bg"></div>' + `<div class="menu"><span class="on">${ic('heart')}하트</span><span>${ic('pin')}맨 위에 고정</span><span>${ic('move')}옮기기</span></div>`, '412')],
        ['하트 모음과 고정한 순서가 맨 앞', saved('저장됨', lbl('하트', '18') + tiles(4, 5) + lbl('컬렉션', '순서 고정됨') + listrow('디자인', '412', 3, '<em class="grip">⋮⋮</em>') + listrow('레시피', '580', 4, '<em class="grip">⋮⋮</em>') + listrow('가고 싶은 곳', '430', 5, '<em class="grip">⋮⋮</em>') + listrow('운동', '38', 6, '<em class="grip">⋮⋮</em>'))]
      ]
    },
    {
      name: '저장 무렵으로 찾기', line: '컬렉션 안에 날짜 머리와 스크러버를 두고, 그 무렵 같이 저장한 것을 보여 준다.',
      stage: ['탐색'], who: 'B', ev: 2, evNote: '소윤(앞뒤로 더듬어 찾음). 가은은 저장 시점이 의미 없다고 함', ins: '인사이트 2',
      borrow: [['iOS 사진, Google 포토', '날짜 머리와 오른쪽 스크러버로 달 단위로 빠르게 이동한다', 6]],
      how: ['컬렉션 안 그리드에 "이번 주, 지난주, 10월" 머리', '오른쪽 스크러버로 달 단위 이동', '하나를 열면 "그 무렵 같이 저장한 것" 줄로 앞뒤 맥락을 보여 준다'],
      risk: '저장 시점을 기억하지 못하는 사람에게는 효과가 없다',
      test: '본인 저장함 찾기 과제에서 "언제쯤 저장했는지" 기억하는 비율',
      flow: [
        ['저장하면 날짜와 함께 남는다', reel({ saved: true, bg: col(2), over: toast('디자인에 저장됨, 11월 24일', '보기', { bg: col(2) }) })],
        ['날짜 머리, 오른쪽 스크러버로 10월', saved('디자인', '<div class="dhead">이번 주<span>6</span></div>' + grid(3, { s: 2 }) + '<div class="dhead">지난주<span>9</span></div>' + grid(3, { s: 5 }) + '<div class="dhead">10월<span>41</span></div>' + grid(6, { s: 8, target: 4 }) + '<div class="scrub"><span>11월</span><span class="on">10월</span><span>9월</span><span>8월</span><span>7월</span></div>', '412')],
        ['그 무렵 같이 저장한 것으로 기억 되살리기', saved('게시물', `<div class="post" style="--c:${col(12)}"><div class="media"><span class="pg">10월 17일 저장</span></div></div>` + lbl('그 무렵 같이 저장한 것', '10월 15~19일') + tiles(4, 10))]
      ]
    },
    {
      name: '장면까지 보이는 미리보기', line: '저장한 순간의 장면을 썸네일로 쓰고, 길게 누르면 장면 띠로 훑는다.',
      stage: ['탐색'], who: 'A', ev: 2, evNote: '가은(캐러셀 중간 글), 인터뷰어(영상 중간 장면)', ins: '인사이트 2',
      borrow: [['영상 앱의 진행 바 미리보기', '진행 바를 문지르면 중간 장면이 작게 보인다', -1], ['인스타그램 캐러셀', '한 게시물에 여러 장이 이미 있다', -1]],
      how: ['저장할 때 보고 있던 장면을 기본 썸네일로', '그리드에서 길게 누르면 장면 5개(릴스 구간, 캐러셀 장) 띠', '띠를 문지르면 장면이 바뀌고, 누르면 그 장면부터 재생'],
      risk: '하나씩 길게 눌러야 해서 많은 수를 훑기엔 느리다',
      test: '기억나는 장면이 첫 썸네일과 다른 저장물을 찾는 시간',
      flow: [
        ['보던 장면에서 저장, 그 장면이 썸네일', reel({ tap: true, bg: col(13), prog: 42, time: '00:14', hint: '이 장면이 썸네일로' })],
        ['길게 눌러 장면 띠를 문질러 보기', saved('작업 참고', grid(12, { s: 4, target: 4 }) + `<div class="film"><div class="fr">${[0, 1, 2, 3, 4].map(i => `<i class="${i === 2 ? 'on' : ''}" style="--c:${col(i + 6)}"></i>`).join('')}</div><p><span>00:14</span><span>누르면 이 장면부터</span></p></div>`, '90')],
        ['그 장면부터 바로 재생', reel({ bg: col(8), prog: 42, time: '00:14부터 재생', acc: 'motion.lab' })]
      ]
    },
    {
      name: '글로 찾기', line: '저장함에 검색창을 두고, 캡션과 계정 이름부터 찾는다. 찾은 곳을 표시한다.',
      stage: ['탐색'], who: 'A, B', ev: 2, evNote: '슬기(검색이 약함), 가은(검색이 안 됨)', ins: '인사이트 2',
      borrow: [['Google 포토', '사진 속 글자를 검색한다(2019년부터)', 7], ['Raindrop.io', '저장한 페이지의 내용까지 검색한다(일부 유료)', 5]],
      how: ['저장함 위 검색창. 캡션, 해시태그, 계정 이름부터', '범위를 넓히면 사진 속 글, 자막까지(기술에 기대는 부분이라 범위를 따로 정한다)', '결과에 어디서 찾았는지(캡션, 3번째 장 글) 표시하고 그 장으로 바로 연다'],
      risk: '기억이 단어가 아니라 장면이면 못 쓴다',
      test: '찾기 과제에서 검색을 쓰는 비율과 성공률',
      flow: [
        ['캡션과 글이 함께 저장된다', reel({ tap: true, bg: col(1), art: '<span>오토 레이아웃</span><span>단축키 5개</span>', cap: '피그마 오토 레이아웃 단축키 정리 #figma' })],
        ['단어로 찾고, 찾은 곳 표시', saved('저장됨', `<div class="search">${ic('search')}오토 레이아웃</div>` + `<div class="res" style="--c:${col(1)}"><i></i><div><b>@design.daily</b>피그마 <mark>오토 레이아웃</mark> 단축키 정리<br><em>캡션</em></div></div><div class="res" style="--c:${col(7)}"><i></i><div><b>@ui.notes</b>간격을 고정하는 법<br><em>3번째 장 글</em></div></div><div class="res" style="--c:${col(11)}"><i></i><div><b>@figma.kr</b><mark>오토 레이아웃</mark> 래핑<br><em>캡션</em></div></div>`)],
        ['글이 있던 장으로 바로 열기', saved('게시물', `<div class="post" style="--c:${col(7)}"><div class="media"><span class="pg">3/5</span><div class="note">간격은 <mark>오토 레이아웃</mark>의 Spacing을 고정</div></div><div class="dots"><i></i><i></i><i class="on"></i><i></i><i></i></div></div>`)]
      ]
    },
    {
      name: '큰 컬렉션 안의 섹션', line: '수백 개가 쌓인 컬렉션 안을 섹션으로 나눠 좁힌다. 저장할 때는 고르지 않는다.',
      stage: ['탐색', '관리'], who: 'A', ev: 2, evNote: '세희(대분류 아래 하위), 가은(작업 컬렉션에 여러 도구가 섞임)', ins: '인사이트 3',
      borrow: [['Pinterest 보드 섹션', '보드를 하위 묶음으로 나누고 정리하기로 핀을 옮긴다(2017년부터)', 1], ['Raindrop.io', '컬렉션 안에 컬렉션, 폴더는 얕게 두고 태그로 보완한다', 5]],
      how: ['컬렉션 안에 섹션 칩(모션, 그래픽, 타이포). 섹션 없이 둔 것도 그대로 보인다', '컬렉션이 커지면(예: 100개) "나눠 볼까요?"를 한 번 제안', '여러 개 골라 섹션으로 옮기기(아이디어 1과 같은 동작)'],
      risk: '세희처럼 나누다 너무 많아 합치는 일이 다시 생길 수 있다. 저장할 때 고를 것이 늘면 안 된다',
      test: '400개 컬렉션에서 하나 찾기, 섹션 있음 vs 없음',
      flow: [
        ['저장은 컬렉션까지만', reel({ saved: true, bg: col(3), over: toast('디자인에 저장됨', '바꾸기', { bg: col(3) }) })],
        ['섹션 칩으로 412개를 좁히기', saved('디자인', chips(['전체 412', '모션 86', '그래픽 120', '타이포 64'], 1) + grid(15, { s: 6 }), '편집')],
        ['커졌을 때 나눠 보자고 제안, 여러 개 옮기기', saved('디자인', '<div class="banner">섹션 없는 저장물이 142개예요. <b>나눠 볼까요?</b></div>' + chips(['섹션 없음 142', '모션', '그래픽'], 0) + grid(12, { s: 1, sel: [1, 3, 4, 8] }) + `<div class="bar-bottom"><b>4개를 어디로?</b>${chips(['모션', '그래픽', '타이포', '+ 섹션'], 0)}</div>`, '412')]
      ]
    },
    {
      name: '목적이 생기면 모으기', line: '여행처럼 목적이 생기면, 전체에 쌓인 저장물에서 골라 새 컬렉션에 연결한다.',
      stage: ['관리'], who: 'A, B, C', ev: 2, evNote: '정우, 가은, 소윤, 세희(여행, 결혼, 이사)', ins: '인사이트 5',
      borrow: [['TikTok 공유 컬렉션', '친구, 가족과 한곳에서 함께 정리한다(2025년 12월)', 8], ['인스타그램 공동 컬렉션', '친구와 같이 저장하면 친구에게도 전달된다(소윤이 쓰는 이유)', 11], ['Are.na', '좋아요 대신 연결. 한 블록이 여러 채널에 들어간다', 3]],
      how: ['새 컬렉션 "오사카 12월"을 만들면 전체에서 관련 있어 보이는 저장물을 먼저 보여 준다(위치 태그, 캡션 단어가 겹치는 것)', '골라 담으면 원래 자리에도 그대로 남는다. 옮기기가 아니라 연결', '친구를 넣으면 공동 컬렉션, 친구도 담을 수 있다'],
      risk: '관련 있어 보이는 것을 고르는 기준이 자동 분류처럼 보일 수 있다. 위치 태그, 단어 일치처럼 설명할 수 있는 기준만 쓴다',
      test: '여행 준비 시나리오에서 관련 저장물 10개를 모으는 시간',
      flow: [
        ['평소처럼 전체에 저장', reel({ tap: true, bg: col(10), acc: 'osaka.eats', cap: '도톤보리 줄 서는 타코야키 #오사카' })],
        ['목적이 생기면 전체에서 골라 담기', saved('새 컬렉션', '<div class="search">오사카 12월</div>' + lbl('전체에서 관련 있어 보이는 9개', '위치 태그, 캡션') + grid(9, { s: 10, sel: [0, 1, 3, 4, 6] }) + `<div class="bar-bottom"><b>5개 담기, 원래 자리에도 남아요</b>${chips(['+ 친구와 함께', '만들기'], 1)}</div>`)],
        ['친구와 함께 쓰는 컬렉션', saved('오사카 12월', `<div class="who-row"><em style="--c:#b9a"></em><em style="--c:#9ab"></em>나, 가은 함께 저장</div>` + grid(12, { s: 10 }), '공동')]
      ]
    }
  ];

  const REFS = window.IPS_REFS || [];
  const refLink = (i) => (i >= 0 && REFS[i]) ? `<a class="src" href="${REFS[i][1]}" target="_blank" rel="noopener">출처</a>` : '';
  const STG = ['저장', '탐색', '관리'];
  const bar = (n) => `<span class="bar" aria-label="근거 ${['', '약함', '중간', '강함'][n]}">${[1, 2, 3].map(k => `<i class="${k <= n ? 'on' : ''}"></i>`).join('')}</span>`;

  // 한눈에 표
  const tb = document.getElementById('matrix-body');
  if (tb) tb.innerHTML = IDEAS.map((d, i) => `<tr><td>${String(i + 1).padStart(2, '0')}</td><td><a href="#i${i + 1}">${d.name}</a></td>${STG.map(s => `<td class="c">${d.stage.includes(s) ? `<span class="dot${d.stage[0] === s ? '' : ' o'}" aria-label="${s}"></span>` : ''}</td>`).join('')}<td>${bar(d.ev)}<span>${d.evNote}</span></td><td>${d.who}</td></tr>`).join('');

  // 아이디어
  const root = document.getElementById('ideas');
  if (root) root.innerHTML = IDEAS.map((d, i) => {
    const steps = d.flow.map((f, k) => `${k ? '<span class="arrow" aria-hidden="true">→</span>' : ''}<figure class="step"><div class="phone" aria-hidden="true">${f[1]}</div><figcaption><b>${k + 1}</b>${f[0]}</figcaption></figure>`).join('');
    return `<article class="idea" id="i${i + 1}" aria-labelledby="i${i + 1}-t">
      <header class="idea-head"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3 id="i${i + 1}-t">${d.name}</h3><p class="line">${d.line}</p>
        <div class="tags">${d.stage.map((s, k) => `<span class="tag${k ? '' : ' is-ink'}">${s}</span>`).join('')}<span class="tag">대상 ${d.who}</span><span class="tag">${d.ins}</span></div></header>
      <div class="flow" role="group" aria-label="${d.name} 화면 흐름">${steps}</div>
      <div class="idea-body">
        <div class="card"><h3>어떻게</h3><ul>${d.how.map(h => `<li>${h}</li>`).join('')}</ul></div>
        <div class="card"><h3>어디서 빌렸나</h3><ul>${d.borrow.map(b => `<li><b>${b[0]}</b>, ${b[1]} ${refLink(b[2])}</li>`).join('')}</ul></div>
        <div class="card"><h3>근거와 조심할 점</h3><span class="k">인터뷰 근거</span><p>${bar(d.ev)} ${d.evNote}</p><span class="k">조심할 점</span><p>${d.risk}</p><span class="k">어떻게 확인하나</span><p>${d.test}</p></div>
      </div></article>`;
  }).join('');

  // 목차 표시
  const links = [...document.querySelectorAll('.toc a')];
  const secs = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && secs.length) {
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id)); } });
    }, { rootMargin: '-30% 0px -60% 0px' });
    secs.forEach(s => io.observe(s));
  }
})();
