/* IPS 1124 08장 - 솔루션 안 A, B, C.
   저장 방식만 세 갈래(A 칩, B 원형, C 버튼에 붙은 메뉴), 탐색과 제어는 세 안 공통(사용자가 고른 6, 30, 5, 32, 34, 24, 44).
   근거 문장에는 출처 번호를 붙이지 않고 장 맨 아래에만 모은다(사용자 지시). 긴 대시와 가운뎃점은 쓰지 않는다. */
(() => {
  const H = window.IPS_H; const root = document.getElementById('concepts');
  if (!H || !root) return;
  const { reel, saved, toast, chips, grid, lbl, tiles, listrow, ic, col, status } = H;
  const tch = (text, list, on, bg, extra = '') => `<div class="toast tcol" style="--bg:${bg}"><span class="th"></span><span>${text}</span><div class="tch">${list.map((s, i) => `<em class="${i === on ? 'on' : ''}">${s}</em>`).join('')}</div>${extra}</div>`;
  const radial = (names, hit, label = '') => `<div class="radial">${names.map((n, i) => { const pos = [[93, 238], [72, 296], [146, 207], [93, 354]][i]; return `<div class="r${i === hit ? ' hit' : ''}" style="left:${pos[0]}px;top:${pos[1]}px;--c:${col(i + 3)}"><i></i>${n}</div>`; }).join('')}</div>${label}`;
  const ddm = (rows, on, top = 214) => `<div class="ddm" style="top:${top}px"><div class="ddm-h">전체에 저장됨 ✓</div>${rows.map((r, i) => `<div class="ddm-r${i === on ? ' on' : ''}"><i style="--c:${r[1]}"></i><span>${r[0]}</span>${i === on ? '<b>✓</b>' : ''}</div>`).join('')}<div class="ddm-r ddm-new"><i>＋</i><span>새 컬렉션</span></div></div>`;
  const tip = (t, s) => `<div class="tip" style="${s}">${t}</div>`;
  const phone = (cap, html, k) => `${k ? '<span class="arrow" aria-hidden="true">→</span>' : ''}<figure class="step"><div class="phone" aria-hidden="true">${html}</div><figcaption><b>${k + 1}</b>${cap}</figcaption></figure>`;
  const flow = (steps, label) => `<div class="flow" role="group" aria-label="${label}">${steps.map((s, k) => phone(s[0], s[1], k)).join('')}</div>`;
  const list = (arr) => `<ul>${arr.map(x => `<li>${x}</li>`).join('')}</ul>`;

  const C = [
    {
      key: 'A', name: '칩으로 저장', line: '한 번 누르면 전체에 저장되고, 알림 안의 컬렉션 칩으로 원하는 곳에 바로 넣는다(아이디어 13 바탕).',
      flow: [
        ['한 번 누르기, 바로 전체에 저장', reel({ tap: true, hint: '한 번', bg: col(4) })],
        ['알림 안의 칩 3개와 "+ 새로"', reel({ saved: true, bg: col(4), over: tch('전체에 저장됨', ['디자인', '맛집', '운동', '+ 새로'], 0, col(4)) })],
        ['새 컬렉션은 칩 자리에서 이름만', reel({ saved: true, bg: col(4), over: tch('새 컬렉션 이름', ['오사카 12월', '만들기'], 1, col(4), '<div class="tinput">오사카 12월|</div>') })]
      ],
      how: ['저장 버튼 한 번이면 전체에 저장, 알림에 최근 컬렉션 칩 3개', '칩을 누르면 그 컬렉션에도 들어가고, 안 누르면 3초 뒤 알림이 사라진다', '맞는 곳이 없으면 "+ 새로", 알림 자리에서 이름만 쓰고 만든다', '열린 질문: 꾹 눌러 지금처럼 전체 목록 시트를 열 것인가. 칩 끝 "더 보기"로 대신하는 쪽을 먼저 시험한다'],
      ev: [
        '핀터레스트는 저장할 때 최근 보드 하나와 추천 보드 둘만 앞에 보여 주자 저장 시간이 10%, 저장 이탈이 4% 줄었다. 칩 3개와 같은 구조다.',
        '고를 것이 짧고 순서가 고정될수록 고르는 시간이 줄어든다. 칩은 최근에 넣은 순으로 3개만 둔다.',
        '메일 85,000건 분석에서 폴더로 정리한 사람이 더 잘 찾지 않았고, 사람은 분류 체계를 정하기 어려워 더미를 쓴다. 한 번에 전체로 들어가고 칩은 선택이라 더미를 허락한다.',
        '숏폼을 계속 보게 하는 힘은 몰입이고, 인스타그램은 기다리는 시간 같은 틈새에 본다. 화면을 덮지 않는 알림은 몰입을 덜 깬다.',
        '핀터레스트도 빠른 선택 뒤에 전체 보드 목록을 남겨 둔다. 칩에 없는 컬렉션을 위한 "더 보기"가 필요한 이유다.'
      ],
      risk: ['칩 3개에 원하는 컬렉션이 없으면 결국 목록이 필요하다', '3초가 짧으면 놓치고 길면 거슬린다(2초, 3초, 5초 비교)', '알림 안 이름 입력은 키보드가 올라와 화면을 가린다'],
      test: '칩을 누른 비율, 저장에 걸린 시간, 잘못 넣은 횟수, "흐름이 끊겼다" 체감'
    },
    {
      key: 'B', name: '원형으로 저장', line: '한 번 누르면 저장 버튼 둘레에 최근 컬렉션 원형이 바로 뜨고, 눌러서 넣는다(아이디어 3, 12 바탕, 길게 누르기 없음).',
      flow: [
        ['한 번 누르기(길게 누르지 않음)', reel({ tap: true, hint: '한 번', bg: col(6) })],
        ['버튼 둘레에 원형 4개가 바로', reel({ saved: true, bg: col(6), over: '<div class="dim-bg" style="background:rgba(0,0,0,.12)"></div>' + radial(['🎨 디자인', '🍜 맛집', '✈️ 여행', '💪 운동'], -1) })],
        ['원형을 누르면 그 컬렉션, 바로 다음 릴스', reel({ saved: true, bg: col(6), over: radial(['🎨 디자인', '🍜 맛집', '✈️ 여행', '💪 운동'], 0) + toast('디자인에 저장됨', '', { bg: col(3) }) })]
      ],
      how: ['저장 버튼 한 번이면 전체에 저장되고, 버튼 둘레에 원형 4개가 바로 뜬다', '원형에는 커버와 이모지, 짧은 이름. 누르면 그 컬렉션에도 들어간다', '아무것도 안 누르고 넘기면 원형이 사라지고 전체에만 남는다', '길게 누르기 대신 한 번 누르기: 즉각 반응이 중요하다'],
      ev: [
        '단서가 많을수록 기억을 꺼내기 쉽다. 이름을 읽는 목록보다 커버와 이모지 원형은 알아보기만 하면 된다.',
        '텔레그램은 저장한 메시지에 반응을 달듯 이모지 태그를 붙이고, 구글 지도는 리스트마다 이모지를 정해 한눈에 알아보게 한다. 원형 하나가 곧 컬렉션이 되는 방식이다.',
        '핀터레스트의 빠른 선택처럼 앞에 두는 것은 3~4개로 충분하다.',
        '자주 쓰는 기능은 깊이를 줄여야 하고, 아이콘만으로는 알아보기 어려워 글자를 함께 붙이는 편이 좋았다(국내 인스타그램 사용성 연구). 원형에 짧은 이름을 붙이는 이유다.'
      ],
      risk: ['엄지 가까이 원형이 뜨면 넘기다 잘못 누르기 쉽다', '원형이 영상 오른쪽 아래를 가린다', '커버가 비슷하면 헷갈린다(이모지와 이름으로 보완)'],
      test: '원형을 누른 비율, 잘못 누른 횟수, 저장에 걸린 시간'
    },
    {
      key: 'C', name: '버튼에 붙은 메뉴로 저장', line: '한 번 누르면 저장 버튼 옆에 작은 메뉴(풀다운 메뉴)가 덮지 않고 붙어 뜬다. 윈도우 오른쪽 클릭, 아이폰 오디오 메뉴처럼.',
      flow: [
        ['한 번 누르기, 바로 전체에 저장', reel({ tap: true, hint: '한 번', bg: col(9) })],
        ['버튼 옆에 메뉴, 영상은 계속 재생', reel({ saved: true, bg: col(9), over: ddm([['곧 볼 것', '#222'], ['디자인', col(3)], ['맛집', col(4)], ['운동', col(6)]], -1) })],
        ['고르면 ✓, 메뉴는 닫히고 다음 릴스', reel({ saved: true, bg: col(9), over: ddm([['곧 볼 것', '#222'], ['디자인', col(3)], ['맛집', col(4)], ['운동', col(6)]], 1) })]
      ],
      how: ['저장 버튼 한 번이면 전체에 저장되고, 버튼 왼쪽에 메뉴가 붙어 뜬다(화면을 어둡게 하지 않음)', '메뉴: 맨 위 "전체에 저장됨 ✓", 곧 볼 것, 최근 컬렉션 3개(작은 커버), 새 컬렉션', '고르면 ✓ 표시 후 닫힘. 바깥을 누르거나 위로 넘기면 닫히고 전체에만 남는다', '"곧 볼 것"을 메뉴 안에 두어 나에게 보내기를 대신한다'],
      ev: [
        '바텀 시트는 관련된 배경을 가리지 않아야 한다. 지금 저장 시트는 릴스를 크게 덮지만, 버튼에 붙은 메뉴는 화면의 작은 부분만 쓴다.',
        '짧고 순서가 고정된 목록(곧 볼 것, 최근 3개, 새 컬렉션)은 고르는 시간을 줄인다.',
        '작은 커버를 함께 넣어 이름을 읽지 않고 알아보게 한다.',
        '정보기술에 대한 불안감이 정리를 막는다(국내 대학생 593명). 메뉴 맨 위 "전체에 저장됨 ✓"로 지금 어디에 들어갔는지를 보여 준다.',
        '사람들은 매일 보는 곳에서 다시 떠올리려고 나에게 보낸다. 나중에 읽기의 80%는 저장 후 35일 안에 일어난다. 메뉴의 "곧 볼 것"이 그 역할을 저장함 안에서 한다.'
      ],
      risk: ['메뉴가 오른쪽 버튼 줄과 캡션 일부를 가린다(뜨는 방향과 크기)', '항목 글자가 작으면 읽어야 하는 목록이 된다(커버를 키움)', '스크롤과 메뉴 탭이 겹치지 않게 해야 한다'],
      test: '메뉴에서 고른 비율, 저장에 걸린 시간, "곧 볼 것" 사용률, 흐름 체감'
    }
  ];

  const explore = [
    ['진입 리마인드: 몇 번째 저장 때 탐색 탭 바로가기를 한 번 알려 줌', `<div class="scr saved">${status}<div class="sv-top"><span>탐색</span><span class="r">${ic('save')} 저장됨</span></div><div class="search">${ic('search')}검색</div>${grid(15, { s: 3 })}${tip('여기서 저장됨으로 바로 가요', 'right:10px;top:62px')}</div>`],
    ['저장됨 첫 화면: 곧 볼 것, 하트, 컬렉션, 전체', saved('저장됨', lbl('곧 볼 것', '3') + tiles(3, 9, ['D-1', 'D-3', 'D-6']) + lbl('♥ 하트', '18') + tiles(4, 5) + lbl('컬렉션', '정렬: 내가 정한 순') + listrow('디자인', '412', 3) + listrow('맛집', '96', 4) + listrow('오사카 12월', '18', 10))],
    ['저장한 기간별로 보기: 날짜 머리와 스크러버(6)', saved('디자인', '<div class="dhead">이번 주<span>6</span></div>' + grid(3, { s: 2 }) + '<div class="dhead">지난주<span>9</span></div>' + grid(3, { s: 5 }) + '<div class="dhead">10월<span>41</span></div>' + grid(6, { s: 8, target: 4 }) + '<div class="scrub"><span>11월</span><span class="on">10월</span><span>9월</span><span>8월</span></div>', '412')],
    ['오므려 5열, 7열로 촘촘하게(30)', saved('디자인', '<div class="dhead">11월</div>' + grid(21, { cols: 7, s: 1 }) + '<div class="dhead">10월</div>' + grid(28, { cols: 7, s: 6 }) + '<div class="dhead">9월</div>' + grid(14, { cols: 7, s: 3 }), '412')],
    ['하트는 한 번에: 저장물 위 ♥ 누르기(5)', saved('게시물', `<div class="post" style="--c:${col(5)}"><div class="media"><span class="pg">♥ 하트에 추가됨</span></div></div>` + '<div class="lbl">♥ 하트 <span>다시 누르면 해제</span></div>')],
    ['열면 내 저장함에서 비슷한 것(32)', saved('게시물', `<div class="post" style="--c:${col(6)}"><div class="media" style="height:150px"></div></div>` + lbl('내 저장함에서 비슷한 것', '6') + grid(6, { s: 6, target: 2 }))]
  ];
  const control = [
    ['정렬 바꾸기: 저장순, 오래된 순, 최근 본 순, 내가 정한 순(24)', saved('레시피', grid(12, { s: 2 }) + '<div class="dim-bg"></div><div class="menu" style="left:60px;top:60px"><span>저장한 순</span><span class="on">오래된 순</span><span>최근 본 순</span><span>내가 정한 순</span></div>', '580')],
    ['나누기: 골라서 새 컬렉션으로 분리(44)', saved('작업할 때 유용한 기능', lbl('포토샵 것 5개 선택', '') + grid(12, { s: 11, sel: [0, 2, 3, 6, 9] }) + `<div class="bar-bottom"><b>나누기, 새 컬렉션 이름</b>${chips(['포토샵', '일러스트', 'AI'], 0)}</div>`, '90')],
    ['합치기: 여러 컬렉션을 하나로(44)', saved('합치기', listrow('디자인 레퍼런스', '120', 3, '<span class="check on"></span>') + listrow('그래픽 모음', '64', 4, '<span class="check on"></span>') + listrow('타이포', '31', 5, '<span class="check"></span>') + `<div class="bar-bottom"><b>2개를 "디자인"으로 합치기</b>${chips(['섹션으로 남기기', '그냥 합치기'], 0)}</div>`)]
  ];
  const evExplore = [
    ['진입 리마인드', ['자주 쓰는 기능은 메뉴 깊이를 줄이고, 아이콘에는 글자를 함께 붙여야 알아본다(국내 인스타그램 사용성 연구).', '사람은 위치로 찾고, 그 위치 자체가 할 일을 떠올리게 한다. 리마인드가 없는 북마크는 만들어 놓고도 잘 쓰이지 않았다.']],
    ['저장됨 첫 화면 레이아웃', ['사람은 정보를 일시적, 작업 중, 보관으로 나눠 다룬다. 실행 가능성으로 나누는 방법(PARA)도 같은 결이다. 첫 화면 위에 "곧 볼 것"과 "하트"(작업 중), 아래에 컬렉션과 전체(자료, 보관)를 둔다.']],
    ['저장한 기간별로 보기(6)', ['찾는 대상을 알아도 사람은 키워드 한 번보다 작은 단서로 좁혀 간다. 시점은 그 단서 중 하나다.', '다시 찾기 실패는 기억의 공백에서 오고, 기억은 하루 안에 크게 흐려진다. 저장한 때를 자동으로 남기면 흐려진 기억을 잇는다.', '국내 대학생은 파일을 날짜순으로 정렬하는 사람이 33.1%, 파일명에 날짜를 넣는 사람이 31.2%였다. 시점은 이미 익숙한 단서다.']],
    ['오므려 촘촘하게(30)', ['사람은 파일을 찾을 때 검색보다 둘러보기를 훨씬 많이 쓴다(56~68% 대 4~15%). 국내 대학생도 위치를 기억해서 찾는 사람이 41.7%로 가장 많았다. 둘러보기를 빠르게 하는 것이 검색만큼 중요하다.']],
    ['하트(5)', ['정리에는 찾기와 떠올리기 두 기능이 있다. 앞에 두는 자리(음악 앱의 맨 위 고정, 사진 앱의 즐겨찾기)가 떠올리기 역할을 한다.', '다만 "값을 매기면 다시 찾는다"는 근거는 아직 없다. 그래서 하트는 한 번 누르기로 가볍게 두고 사용률로 확인한다.']],
    ['비슷한 컨텐츠(32)', ['한 정보는 여러 측면이 있어 하나의 범주로는 다시 찾기 어렵고, 여러 속성으로 찾게 해야 한다. 시각 검색과 비슷한 하이라이트 찾기는 내가 기억하는 것과 닮은 것으로 좁혀 준다.', '이미지 인식에 기대는 부분이라, 내 저장함 안에서만 찾기 보조로 쓴다(자동 분류와 구분).']]
  ];
  const evControl = [
    ['정렬 바꾸기(24)', ['국내 대학생이 파일을 정렬하는 방법은 파일명 41.0%, 날짜순 33.1%, 중요도순 7.9%로 사람마다 달랐다. 정렬은 고를 수 있어야 한다.', '음악 앱은 최근, 최근 추가, 이름, 직접 정한 순서를 고르게 한다. 순서가 계속 바뀌지 않고 고정되면 고르는 시간이 줄어든다.']],
    ['합치기, 나누기(44)', ['범주는 서로 겹치고 모호해서 처음부터 맞게 나누기 어렵고, 사람들은 분류 체계를 정하기 어려워 정리를 포기한다. 그래서 나누기는 저장할 때가 아니라 쌓인 뒤에 한다.', '국내 대학생의 81.1%는 메일 폴더를 쓰지 않았다. 처음부터 나누게 하지 말고, 섞인 것을 나중에 골라 분리하게 한다.', '사람이 만드는 폴더는 2단계가 가장 많다(52.6%). 합칠 때는 섹션 한 층으로 남기는 것까지만 둔다.', '핀터레스트는 정리하기에서 여러 핀을 골라 섹션이나 다른 보드로 옮긴다.']]
  ];
  const SRC = [
    ['Jones, Bruce, Dumais (2001), Keeping Found Things Found on the Web', 'https://www.microsoft.com/en-us/research/publication/keeping-found-things-found-web/'],
    ['Teevan 외 (2004), The Perfect Search Engine Is Not Enough', 'https://www.microsoft.com/en-us/research/publication/perfect-search-engine-not-enough-study-orienteering-behavior-directed-search/'],
    ['Elsweiler, Ruthven, Jones (2007), Towards memory supporting PIM tools', 'https://doi.org/10.1002/asi.20570'],
    ['Barreau, Nardi (1995), Finding and Reminding', 'https://homepages.cwi.nl/~steven/sigchi/bulletin/1995.3/barreau.html'],
    ['Malone (1983), How Do People Organize Their Desks?', 'https://www.doi.org/10.1145/357423.357430'],
    ['Lansdale (1988), The psychology of personal information management', 'https://doi.org/10.1016/0003-6870(88)90199-8'],
    ['Whittaker 외 (2011), Am I wasting my time organizing email?', 'https://research.ibm.com/publications/am-i-wasting-my-time-organizing-email-a-study-of-email-refinding'],
    ['Bergman 외 (2008), Improved search engines and navigation preference in PIM', 'https://cris.openu.ac.il/en/publications/improved-search-engines-and-navigation-preference-in-personal-inf-2/'],
    ['Pocket 이용 데이터(Nieman Lab 보도 외)', 'https://niemanlab.org/2011/12/new-read-it-later-data-what-does-engagement-look-like-in-a-time-shifted-world'],
    ['Murre, Dros (2015), Replication and Analysis of Ebbinghaus’ Forgetting Curve', 'https://doi.org/10.1371/journal.pone.0120644'],
    ['Pinterest Engineering, Improving Pinning with a predictive board picker', 'https://medium.com/pinterest-engineering/improving-pinning-with-a-predictive-board-picker-243903dea9be'],
    ['Pinterest 도움말, Organize Pins and sections', 'https://help.pinterest.com/en/article/organize-pins-and-sections'],
    ['Pinterest 도움말, 시각 검색', 'https://help.pinterest.com/article/use-visual-search-features'],
    ['Readwise 문서, Reviewing Highlights', 'https://docs.readwise.io/readwise/docs/faqs/reviewing-highlights'],
    ['Telegram, Saved Messages 2.0', 'https://telegram.org/blog/new-saved-messages-and-9-more'],
    ['Google 지도 도움말, 장소 목록 만들기', 'https://support.google.com/maps/answer/7280933'],
    ['Spotify 커뮤니티, New Your Library view', 'https://community.spotify.com/t5/Your-Library/New-Your-Library-view-iOS-amp-Android/m-p/5196163'],
    ['MacRumors, iOS 18 Photos App', 'https://www.macrumors.com/guide/ios-18-photos/'],
    ['Nielsen Norman Group, Recognition and Recall', 'https://www.nngroup.com/articles/recognition-and-recall/'],
    ['Laws of UX, Hick’s Law', 'https://lawsofux.com/hicks-law/'],
    ['Nielsen Norman Group, Bottom Sheets', 'https://www.nngroup.com/articles/bottom-sheet/'],
    ['Tiago Forte, The PARA Method', 'https://every.to/praxis/para-an-introduction-827085'],
    ['이수연, 이용정 (2020), 대학생들의 개인정보관리 행태에 영향을 미치는 요인에 관한 연구', 'https://www.accesson.kr/kosim/v.37/1/107/1508'],
    ['한지윤, 이혜은 (2023), 대학생의 이메일 관리 행태 연구', 'https://www.accesson.kr/kosim/v.40/1/149/28245'],
    ['지윤재, 이혜은 (2022), 디지털 객체 생애주기에 따른 대학생의 파일관리 행태 연구', 'https://doi.org/10.14699/kbiblia.2022.33.1.321'],
    ['오픈서베이, 소셜미디어 트렌드 리포트 2026', 'https://blog.opensurvey.co.kr/article/socialmedia-2026-2/'],
    ['유성호 (2018), 40~50대 사용자 유입을 위한 인스타그램 사용성 개선에 관한 연구', 'https://m.earticle.net/Article/A338025'],
    ['이정기, 최진호 (2025), Z세대 이용자의 숏폼 동영상 지속 이용의도 및 중독 결정요인', 'https://scholarworks.gnu.ac.kr/handle/sw.gnu/75875']
  ];

  const evBlock = (arr) => arr.map(([t, items]) => `<div class="cev"><h4>${t}</h4>${list(items)}</div>`).join('');
  root.innerHTML = `
    <div class="ctable-wrap"><table class="matrix ctable"><thead><tr><th></th><th>A 칩으로 저장</th><th>B 원형으로 저장</th><th>C 버튼에 붙은 메뉴</th></tr></thead><tbody>
      <tr><th>한 번 누르면</th><td>전체에 저장, 알림 안에 칩</td><td>전체에 저장, 버튼 둘레에 원형</td><td>전체에 저장, 버튼 옆에 메뉴</td></tr>
      <tr><th>릴스를 가리는 정도</th><td>아래 알림 한 줄</td><td>오른쪽 아래 일부</td><td>오른쪽 가운데 일부</td></tr>
      <tr><th>고르는 대상</th><td>최근 3개 + 새로</td><td>최근 4개(커버, 이모지)</td><td>곧 볼 것 + 최근 3개 + 새 컬렉션</td></tr>
      <tr><th>새 컬렉션</th><td>칩 자리에서 이름 입력</td><td>원형에 없음(더 보기 필요)</td><td>메뉴 맨 아래</td></tr>
      <tr><th>가장 큰 위험</th><td>칩에 원하는 곳이 없음</td><td>넘기다 잘못 누름</td><td>메뉴가 글자 목록이 됨</td></tr>
      <tr><th>탐색, 제어</th><td colspan="3">세 안 공통(아래)</td></tr>
    </tbody></table></div>
    ${C.map(c => `<article class="concept" id="concept-${c.key}">
      <header class="idea-head"><span class="n">${c.key}</span><h3>${c.name}</h3><p class="line">${c.line}</p></header>
      ${flow(c.flow, c.name + ' 저장 흐름')}
      <div class="idea-body">
        <div class="card"><h3>어떻게</h3>${list(c.how)}</div>
        <div class="card"><h3>데스크 리서치 근거</h3>${list(c.ev)}</div>
        <div class="card"><h3>조심할 점</h3>${list(c.risk)}<span class="k">어떻게 확인하나</span><p>${c.test}</p></div>
      </div></article>`).join('')}
    <article class="concept" id="concept-common">
      <header class="idea-head"><span class="n">공통</span><h3>탐색, 세 안 공통</h3><p class="line">진입 리마인드, 저장됨 첫 화면, 기간별 보기(6), 촘촘하게(30), 하트(5), 비슷한 컨텐츠(32).</p></header>
      ${flow(explore, '공통 탐색 흐름')}
      <div class="cev-grid">${evBlock(evExplore)}</div>
    </article>
    <article class="concept" id="concept-control">
      <header class="idea-head"><span class="n">공통</span><h3>사용자 통제와 제어, 세 안 공통</h3><p class="line">정렬 바꾸기(24), 컬렉션 합치기와 나누기(44).</p></header>
      ${flow(control, '공통 제어 흐름')}
      <div class="cev-grid">${evBlock(evControl)}</div>
    </article>
    <div class="think"><h3>세 안을 어떻게 고를까(제안)</h3><ol>
      <li><b>같은 조건에서 저장 방식만 바꿔 비교한다.</b> 탐색과 제어는 공통이라, 저장 과제(릴스 보다가 맞는 컬렉션에 넣기) 하나로 A, B, C를 나란히 잰다.</li>
      <li><b>지표는 저장에 걸린 시간, 잘못 넣은 횟수, 컬렉션까지 넣은 비율, "흐름이 끊겼다" 체감.</b> 지금의 바텀 시트를 기준선으로 함께 잰다.</li>
      <li><b>A의 열린 질문(꾹 눌러 전체 목록)은 C와 함께 본다.</b> C의 "새 컬렉션"과 "더 보기"가 그 역할을 대신할 수 있는지 확인한다.</li>
    </ol></div>
    <h3 class="rsrc-title">08장 근거 출처</h3>
    <ol class="refs">${SRC.map(s => `<li><a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a></li>`).join('')}</ol>
    <p class="faint" style="margin-top:12px">근거 문장은 07장 데스크 리서치 카드에서 가져왔고, 숫자의 확인 수준(원문, 2차 출처, 회사 자료)은 07장 카드에 적어 두었다. 세 안과 화면은 에이전트 제안이다.</p>`;
})();
