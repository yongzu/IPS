/* IPS 1124 데스크 리서치 - 논문, 아카이빙 플랫폼, 현업 UXUI, 디자인 방법론 30편 + 국내 연구와 자료 10편(G).
   카드(번호, 주장, 제목)를 누르면 패널에 출처, 대상과 방법, 프로젝트 역할, 핵심 내용, 인사이트, 도식, 원문 링크.
   형식은 Phi Brain IPS 페이지의 연구 카드를 따른다. 긴 대시와 가운뎃점은 쓰지 않는다.
   2차 출처로만 확인한 숫자는 문장 안에 (2차 출처)로 적는다. */
(() => {
  const GROUPS = [
    ['A', '다시 찾기는 기억과 맥락의 문제다', '탐색 가설을 받치는 연구'],
    ['B', '정리는 비싸고, 보상은 불확실하다', '저장 가설을 받치는 연구'],
    ['C', '저장은 쌓이고, 다시 보지 않는다', '관리 가설과 "곧 볼 것"을 받치는 자료'],
    ['D', '인스타그램과 저장 플랫폼의 데이터', '회사 쪽 명분과 정량 기준'],
    ['E', '현업 UXUI 원칙', '화면을 고칠 때 쓰는 규칙'],
    ['F', '디자인 방법론', '다음 검증과 우선순위를 정하는 도구'],
    ['G', '국내 연구와 자료', '국내 사용자에게도 같은가']
  ];
  const R = [
    /* ---------- A ---------- */
    { g: 'A', claim: '사람은 저장 도구보다 나에게 보내기를 고른다', title: 'Keeping Found Things Found on the Web', cite: 'Jones, Bruce, Dumais (2001), ACM CIKM, pp.119~126', method: '웹 정보를 나중에 다시 쓰려고 "보관"하는 행동을 관찰한 연구, 기능 분석', role: '저장함 밖 수단 8/8의 이유',
      points: [['보관 방법은 하나가 아니다', ['참가자들은 <b>자기에게 이메일로 주소와 메모를 보내고</b>, 인쇄하고, 디스크에 저장하고, 문서나 개인 웹 페이지에 붙였다.', '<b>북마크와 방문 기록은 그 목적으로 만들어졌는데도 많이 쓰이지 않았다.</b>']], ['왜 나에게 보내기인가', ['자기에게 보낸 메일은 <b>매일 보는 받은편지함에 떨어져 다시 떠올리게 하고(리마인드)</b>, 왜 중요한지(맥락)를 함께 남긴다.', '북마크는 대부분의 사람에게 리마인드도, 맥락도 주지 못했다.']]],
      insight: '사람들이 나에게 보내기와 캡처를 쓰는 건 습관만이 아니다. 저장됨은 다시 떠올리게 하는 기능과 맥락이 없어서, 매일 보는 곳(DM, 사진첩)으로 옮겨 간다.',
      flow: [['저장됨', '보이지 않는 곳', '잊힘'], ['나에게 보내기', '매일 보는 DM', '다시 떠올림']], url: 'https://www.microsoft.com/en-us/research/publication/keeping-found-things-found-web/' },
    { g: 'A', claim: '다시 찾기는 예외가 아니라 일상이다', title: 'Revisitation Patterns in World Wide Web Navigation', cite: 'Tauscher, Greenberg (1997), CHI 97', method: '상용 브라우저 사용자 23명의 6주 사용 기록 분석', role: '"다시 찾기"가 왜 핵심 문제인가',
      points: [['수치', ['방문한 페이지가 이전 방문의 반복일 확률(재방문율)은 <b>58%</b>(표준편차 9%), 다른 연구 55명에서는 61%.', '나머지 약 40%만 새 페이지였다.', '이후 연구에서는 재방문율이 <b>81%</b>까지 올랐다고 보고된다(2차 출처).']], ['주의', ['1995년 무렵 데이터라 지금의 앱 사용과 같다고 볼 수 없다.']]],
      insight: '사람은 본 것을 계속 다시 본다. 저장은 그 재방문을 돕는 도구인데, 저장됨은 재방문할 길을 만들어 주지 못한다.',
      flow: [['보기', '저장', '다시 보기(재방문 58% 이상)']], url: 'https://chi1997.acm.org/proceedings/paper/sg.html' },
    { g: 'A', claim: '알고 찾아도 검색 한 번이 아니라 작은 단서로 다가간다', title: 'The Perfect Search Engine Is Not Enough: A Study of Orienteering Behavior in Directed Search', cite: 'Teevan, Alvarado, Ackerman, Karger (2004), CHI 2004, pp.415~422', method: '메일, 파일, 웹에서 무엇을 찾는지 기록한 일기 연구', role: '탐색 해결의 방향(검색만으로는 부족)',
      points: [['오리엔티어링', ['찾는 대상을 정확히 알 때도 사람들은 <b>키워드로 바로 가기(텔레포팅)보다 작은 단계로 좁혀 가기(오리엔티어링)를 훨씬 많이</b> 썼다.', '앞선 연구는 키워드 검색에만 집중했지만 관찰된 행동 대부분은 키워드 검색이 아니었다.']], ['왜', ['덜 생각해도 되고, 내가 어디 있는지 알 수 있고, 단계마다 결과를 해석할 맥락이 생긴다(2차 출처 정리).']]],
      insight: '소윤이 "이때쯤 저장한 것" 앞뒤로 더듬어 찾은 것이 오리엔티어링이다. 검색창 하나보다 시점, 계정, 쓰임새처럼 한 단계씩 좁힐 단서를 주어야 한다.',
      flow: [['전체', '시점으로 좁힘', '계정으로 좁힘', '찾음'], ['검색어 한 번', '기억이 단어가 아니면 실패']], url: 'https://www.microsoft.com/en-us/research/publication/perfect-search-engine-not-enough-study-orienteering-behavior-directed-search/' },
    { g: 'A', claim: '다시 찾기 실패는 기억의 실패다', title: 'Towards memory supporting personal information management tools', cite: 'Elsweiler, Ruthven, Jones (2007), JASIST 58(7), pp.924~946', method: '25명의 일상 기억 문제를 기록한 일기 연구, 설계 원칙 제안', role: '기억 단서를 늘리는 아이디어(06, 07, 26, 28)',
      points: [['핵심 주장', ['사용자가 필요한 정보를 <b>다시 찾지 못하게 막는 것은 기억의 공백</b>이다.', '일기 연구에서 나온 일상 기억 문제를 바탕으로 개인 정보 관리 도구 설계 원칙을 제안한다.']]],
      insight: '가은이 "사진은 찍은 상황이 남아 찾지만 저장은 맥락이 없다"고 한 것과 같다. 저장할 때의 맥락(언제, 누구에게서, 무엇을 보다가)을 남겨 기억의 공백을 메워야 한다.',
      flow: [['저장', '맥락이 안 남음', '기억 공백', '못 찾음'], ['저장', '시점, 출처, 장면이 남음', '단서로 기억', '찾음']], url: 'https://doi.org/10.1002/asi.20570' },
    { g: 'A', claim: '사람은 위치로 찾고, 그 위치가 리마인드가 된다', title: 'Finding and Reminding: File Organization from the Desktop', cite: 'Barreau, Nardi (1995), ACM SIGCHI Bulletin 27(3), pp.39~43', method: 'DOS, Windows, OS/2 사용자 연구와 Macintosh 사용자 연구를 합친 분석', role: '저장함 첫 화면에 무엇을 둘지(곧 볼 것, 최근 본 것)',
      points: [['발견', ['사람들은 <b>있을 법한 폴더로 가서 둘러보는 위치 기반 찾기</b>를 선호했다. 위치 자체가 할 일을 떠올리게 했다.', '<b>텍스트 검색은 거의 쓰지 않았고</b>, 정교한 분류 체계도 피했다.', '정보를 <b>일시적, 작업 중, 보관</b> 세 종류로 다뤘고 보관은 적었다.']], ['반론', ['데스크톱과 폴더 비유가 만든 결과라는 반론도 있다(Fertig 외, 1996).']]],
      insight: '저장함에도 "작업 중"인 것(곧 볼 것, 여행 준비)과 "보관"인 것이 섞여 있다. 일시적, 작업 중, 보관을 나눠 작업 중인 것을 첫 화면 위치에 두면 다시 떠올리게 된다.',
      flow: [['일시적', '작업 중', '보관'], ['곧 볼 것', '목적 컬렉션', '보관함']], url: 'https://homepages.cwi.nl/~steven/sigchi/bulletin/1995.3/barreau.html' },
    /* ---------- B ---------- */
    { g: 'B', claim: '파일과 더미, 찾기와 떠올리기', title: 'How Do People Organize Their Desks? Implications for the Design of Office Information Systems', cite: 'Malone (1983), ACM Transactions on Office Information Systems', method: '사무직, 전문직 종사자의 책상 정리 방식 인터뷰', role: '저장 가설(나누다 하나로 합친다)의 오래된 근거',
      points: [['두 단위와 두 기능', ['정보는 이름 붙여 순서대로 둔 <b>파일</b>과, 이름도 순서도 없는 <b>더미</b>로 정리된다.', '정리에는 <b>찾기</b>와 <b>떠올리기(할 일 상기)</b> 두 기능이 있다.']], ['분류의 어려움', ['많은 사람이 <b>어떤 분류 체계를 쓸지 정하기 어려워</b> 파일 정리를 힘들어했다(2차 출처 정리).']]],
      insight: '전체 저장은 더미, 컬렉션은 파일이다. 사람들이 더미를 쓰는 건 게을러서가 아니라 분류를 정하는 비용 때문이다. 더미를 허락하고, 더미에서 나중에 파일로 옮기기 쉽게 해야 한다(아이디어 01, 43).',
      flow: [['저장', '더미(전체)', '나중에 파일로(정리)'], ['저장', '바로 파일로 분류', '분류 체계 고민', '포기']], url: 'https://www.doi.org/10.1145/357423.357430' },
    { g: 'B', claim: '범주는 겹치고, 그래서 정리를 그만둔다', title: 'The psychology of personal information management', cite: 'Lansdale (1988), Applied Ergonomics 19(1), pp.55~66', method: '사무직의 종이 정보 관리에 대한 심리학적 관점 논문(2차 출처로 확인)', role: '"매번 고르기 비용"의 원인',
      points: [['분류 문제', ['계층형 폴더 체계는 <b>범주가 겹치고 모호해서</b> 나중에 맞는 폴더를 찾기 어렵다.', '보상이 작아 보이면 사람들은 <b>정리를 그만두고 더미에 쌓는다</b>.', '한 정보는 여러 측면이 있어 여러 범주에 들어갈 수 있다.']], ['제안', ['좋은 정리 체계는 <b>사용자가 실제로 기억하는 속성</b>으로 정리하고, <b>여러 속성으로 찾게</b> 해야 한다.']]],
      insight: '"디자인" 안에 모션, 그래픽, 타이포가 섞이고 가은의 "작업할 때 유용한 기능"에 여러 도구가 섞인 것이 겹치는 범주다. 하나의 폴더를 강요하기보다, 기억하는 속성(시점, 계정, 쓰임새, 색)으로 여러 갈래 찾기를 열어야 한다.',
      flow: [['저장물', '폴더 하나만', '겹침, 모호', '정리 포기'], ['저장물', '여러 속성(시점, 계정, 쓰임새)', '여러 길로 찾기']], url: 'https://doi.org/10.1016/0003-6870(88)90199-8' },
    { g: 'B', claim: '사람은 주제보다 쓰임새로 나눈다', title: 'The Importance of Factors that are not Document Attributes in the Organisation of Personal Documents', cite: 'Kwasnik (1991), Journal of Documentation 47(4), pp.389~398', method: '대학 교수 8명의 사무실 문서 정리 설명과 하루치 우편물 분류', role: '쓰임새 거르기(27), 목적 컬렉션(10, 46)',
      points: [['발견', ['분류 기준에는 주제, 형식 같은 문서 속성뿐 아니라 <b>이 문서를 무엇에 쓸 것인가 같은 상황 요인</b>이 아주 크게 작용한다.', '상황 요인에는 목표, 목적, 지식, 이력, 제약이 들어간다.', '한 2차 출처는 문서 속성 30%, 사용자와 정보의 관계 속성 70%로 정리한다(원문 미확인).']]],
      insight: '인터뷰에서 컬렉션을 만든 순간은 여행, 결혼, 이사처럼 쓰임새가 생겼을 때였다. 저장함의 기본 축을 "주제"가 아니라 "쓰임새와 목적"으로 두는 것이 사람의 분류 방식과 맞다.',
      flow: [['주제로 나눔(디자인, 음식)', '겹치고 커짐'], ['쓰임새로 나눔(여행 준비, 작업 참고, 곧 볼 것)', '필요한 때 바로']], url: 'https://surface.syr.edu/istpub/146' },
    { g: 'B', claim: '정리한 사람이 더 빨리 찾지는 않는다', title: 'Am I wasting my time organizing email? A study of email refinding', cite: 'Whittaker, Matthews, Cerruti, Badenes, Tang (2011), CHI 2011, pp.3449~3458', method: 'IBM 사용자 345명의 메일 다시 찾기 85,000건 분석', role: '정리를 강요하지 않는 이유',
      points: [['발견', ['<b>폴더로 정리한 사람이 정리하지 않은 사람보다 더 잘 찾지 않았다.</b> 정리하지 않은 사람은 정리에 쓰는 시간만 아꼈다(보도 정리).', '검색 17초, 폴더 둘러보기 58초라는 수치가 돌지만 원문에서 확인하지 못했다.']]],
      insight: '정리하라고 시키는 것은 답이 아니다. 저장 때 고르게 하지 말고(아이디어 01), 찾을 때 쓸 단서와 검색을 강하게 하는 쪽이 효율적이다.',
      flow: [['정리하는 사람', '시간 들임', '찾기 비슷'], ['정리 안 하는 사람', '시간 아낌', '찾기 비슷']], url: 'https://research.ibm.com/publications/am-i-wasting-my-time-organizing-email-a-study-of-email-refinding' },
    { g: 'B', claim: '그래도 사람은 검색보다 둘러보기를 쓴다', title: 'Improved search engines and navigation preference in personal information management', cite: 'Bergman, Beyth-Marom, Nachmias, Gradovitch, Whittaker (2008), ACM TOIS 26(4)', method: 'Google Desktop과 Windows 검색 종단 비교, Mac Spotlight와 Sherlock 대규모 비교', role: '검색(08)만으로 안 되는 이유',
      points: [['수치', ['사용자는 파일을 찾을 때 <b>둘러보기를 56~68%</b>, <b>검색을 4~15%</b>만 쓴다고 답했다.', '검색 엔진이 좋아져도 검색 사용은 늘지 않았다. 검색은 <b>위치가 기억나지 않을 때 마지막 수단</b>이었다.']]],
      insight: '앞 연구(정리해도 안 빨라짐)와 함께 보면, 답은 "정리 강요"도 "검색만"도 아니다. 정리 없이도 둘러볼 수 있는 구조(시점, 계정, 쓰임새, 곧 볼 것)를 저장함이 저절로 만들어 줘야 한다.',
      flow: [['찾기', '둘러보기 56~68%'], ['찾기', '검색 4~15%(마지막 수단)']], url: 'https://cris.openu.ac.il/en/publications/improved-search-engines-and-navigation-preference-in-personal-inf-2/' },
    /* ---------- C ---------- */
    { g: 'C', claim: '쌓아 두고 지우지 못한다', title: 'Digital hoarding behaviours: Underlying motivations and potential negative consequences', cite: 'Sweeten, Sillence, Neave (2018), Computers in Human Behavior 85, pp.54~60', method: '20~52세 성인 대상 질적 연구(개인, 업무 자료)', role: '보관함(42), 다시 띄우기(38)',
      points: [['발견', ['디지털 축적은 <b>지나친 쌓기, 지우기 어려움, 불안</b>으로 나타난다.', '지우지 못하는 다섯 가지 장벽을 찾았고, 업무용과 개인용의 동기가 다르다.']], ['한계', ['표본이 작고 표준 척도가 없다는 지적이 있다.']]],
      insight: '세희의 음식 580개, 소윤의 안 쓰는 컬렉션 21개는 지우지 못하는 축적이다. 지우라고 하지 말고, 지우지 않고 치우는 보관함(42)과 "이제 됐어요"(38)로 부담을 낮춰야 한다.',
      flow: [['저장', '쌓임', '지우기 불안', '더 쌓임'], ['저장', '쌓임', '보관함으로 치움(지우지 않음)', '가벼운 저장함']], url: 'https://researchportal.northumbria.ac.uk/en/publications/digital-hoarding-behaviours-underlying-motivations-and-potential-/' },
    { g: 'C', claim: '나중에 읽기는 35일 안에 읽히거나, 안 읽힌다', title: 'Pocket 이용 데이터(회사 공개 자료와 보도)', cite: 'Pocket, Nieman Lab, Fast Company 보도(2011~2015), 2025년 서비스 종료', method: '회사가 공개한 저장, 열람 데이터(자체 집계)', role: '곧 볼 것(04)과 다시 볼 날(37)의 시간 기준',
      points: [['수치(회사 자체 자료)', ['저장한 글을 연 비율은 <b>저자에 따라 약 10%에서 80% 넘게</b> 달랐다(2013).', '<b>읽기의 80%는 저장 후 35일 안에</b> 일어났다(2013).', '가장 많이 저장된 글을 저장한 사람 중 43%가 Pocket에서 읽었다(2015).']], ['주의', ['"저장한 것의 82%를 안 읽는다"는 수치는 출처가 없다.', 'Pocket은 2025년 7월에 문을 닫았다.']]],
      insight: '다시 보기는 대부분 저장 직후 한 달 안에 일어난다. "곧 볼 것"은 그 창 안에서 비워지게 설계하고(D-7 알림), 그 뒤의 저장물은 보관과 다시 띄우기로 다룬다.',
      flow: [['저장', '35일 안(읽기의 80%)', '곧 볼 것'], ['저장', '35일 이후', '보관함, 가끔 다시 띄우기']], url: 'https://niemanlab.org/2011/12/new-read-it-later-data-what-does-engagement-look-like-in-a-time-shifted-world' },
    { g: 'C', claim: '기억은 하루 안에 크게 흐려진다', title: 'Replication and Analysis of Ebbinghaus’ Forgetting Curve', cite: 'Murre, Dros (2015), PLOS ONE 10(7), e0120644', method: '한 사람이 70시간 동안 목록을 외우고 20분, 1시간, 9시간, 1일, 2일, 31일 뒤 다시 외우는 절약법', role: '저장 맥락 남기기(06, 07, 28)의 근거',
      points: [['발견', ['에빙하우스의 망각 곡선이 <b>재현</b>됐다.', '곡선은 매끄럽지 않고 <b>24시간 지점에서 위로 튀는</b> 모습이 보였다(잠과 관련된 것으로 해석).']]],
      insight: '"왜 저장했는지"를 묻지 않기로 했으니(사용자 결정), 대신 저장 순간의 맥락(시점, 장면, 출처)을 자동으로 남겨 흐려진 기억을 다시 잇는 단서로 쓴다.',
      flow: [['저장 순간', '하루 뒤 기억 흐려짐', '단서 없으면 못 찾음'], ['저장 순간', '시점, 장면, 출처 자동 기록', '단서로 되살림']], url: 'https://doi.org/10.1371/journal.pone.0120644' },
    /* ---------- D ---------- */
    { g: 'D', claim: '저장은 카메라롤에서 잃어버리지 않으려고 생겼다', title: 'Instagram now lets you organize bookmarks into private collections', cite: 'TechCrunch (2017-04-17), Instagram 공식 블로그', method: '컬렉션 출시 보도와 공식 발표', role: '저장됨의 원래 목적',
      points: [['출시 의도', ['저장은 사진을 <b>카메라롤에 내려받아 잃어버리는 대신</b> 앱 안에 비공개로 두고 빨리 돌아오게 하려고 만들어졌다.', '이미 사람들이 많이 하던 행동(저장)을 기능으로 받은 것이다.', '컬렉션은 2017년에 생겼고 비공개다.']]],
      insight: '지금 사람들은 다시 캡처(슬기, 현아)와 나에게 보내기로 돌아갔다. 저장됨이 원래 목적(밖에서 잃어버리지 않게)을 다시 해내는지가 리디자인의 기준이다.',
      flow: [['2017 목표', '카메라롤 대신 저장됨'], ['2026 인터뷰', '다시 캡처, 나에게 보내기로']], url: 'https://techcrunch.com/2017/04/17/instagram-now-lets-you-organize-bookmarks-into-private-collections/' },
    { g: 'D', claim: '회사가 보는 신호는 저장보다 보내기다', title: 'Instagram Ranking Explained 외 모세리 발언', cite: 'Instagram 공식 블로그(2023), 이후 발언 보도(2024~2025)', method: '공식 설명과 발언을 다룬 보도', role: '회사 쪽 명분(보내기 시트에 저장 칸, 16)',
      points: [['공식 설명(2023)', ['탐색 탭 순위는 사용자가 게시물에 <b>좋아요, 저장, 공유</b>할 가능성을 예측해 정한다.']], ['이후 발언(보도)', ['2024년에는 <b>도달 대비 보내기(sends per reach)</b>를 가장 중요한 신호 중 하나로 꼽았다.', '2025년에는 가장 중요한 세 신호로 <b>시청 시간, 좋아요, 보내기</b>를 들었고 저장은 들어가지 않았다(보도).']]],
      insight: '사람들은 저장 대신 보내기로 옮겨 갔고, 회사도 보내기를 더 중요하게 본다. 저장을 보내기와 맞붙이기보다 보내기 흐름 안에 저장을 넣는 것(16)이 사용자와 회사 둘 다에 맞는 방향이다.',
      flow: [['사용자', '나에게 보내기 선호'], ['회사', '보내기 신호 중시'], ['보내기 시트', '저장 칸 추가', '둘 다 충족']], url: 'https://about.instagram.com/blog/announcements/instagram-ranking-explained' },
    { g: 'D', claim: '최근 보드 하나와 예측 보드 둘로 저장 이탈이 줄었다', title: 'Improving Pinning with a predictive board picker', cite: 'Pinterest Engineering 블로그, WebProNews 보도', method: '보드 고르기 화면 개편의 A/B 실험 결과', role: '3초 칩(13), 보고 고르는 시트(02)의 정량 근거',
      points: [['수치(회사 실험)', ['핀하는 흐름에서 <b>이탈이 4% 줄고</b>, 핀하는 사람이 1% 늘었다.', '빠른 선택(Quick Picks) 보드를 쓰는 사람이 <b>15% 늘고</b>, 핀하는 데 걸리는 <b>시간이 10% 줄었다</b>.', '핀을 고치거나 지우는 사람이 4%, 3% 줄었다(보도만).']], ['구성', ['맨 앞에 <b>가장 최근에 넣은 보드</b>, 그다음 예측한 보드 둘.']]],
      insight: '"매번 고르기" 비용은 화면 구성만으로 줄일 수 있다. 최근 넣은 컬렉션을 맨 앞에 두는 것만으로도 효과를 볼 수 있다(예측은 사용자가 뺀 AI 분류와 경계가 가깝다).',
      flow: [['저장', '컬렉션 전체 목록', '고민, 이탈'], ['저장', '최근 1 + 추천 2', '시간 10% 줄고 이탈 4% 줄어듦']], url: 'https://medium.com/pinterest-engineering/improving-pinning-with-a-predictive-board-picker-243903dea9be' },
    { g: 'D', claim: '큰 보드는 섹션으로 나뉜다', title: 'Pinterest 보드 섹션(2017)', cite: 'Pinterest 도움말, Digital Trends, Engadget 보도', method: '기능 출시 보도와 도움말', role: '큰 컬렉션 안의 섹션(09)',
      points: [['수치와 기능', ['테스트 기간에 섹션 하나에 <b>평균 31개 핀</b>, 보드 하나에 <b>약 4개 섹션</b>을 만들었다(보도).', '정리하기에서 핀을 골라 섹션으로 옮기고, 끌어서 순서를 바꾼다.']]],
      insight: '세희의 디자인 400개를 섹션 4개로 나누면 한 섹션은 100개 남짓이 된다. 하위 층을 만들되, 저장 때가 아니라 정리할 때 나누게 한다.',
      flow: [['보드 하나(수백 개)', '섹션 약 4개', '섹션당 약 31개']], url: 'https://help.pinterest.com/en/article/create-a-board-section' },
    { g: 'D', claim: '다른 저장 도구도 같은 해법으로 모인다', title: '저장, 아카이빙 플랫폼 비교(앞 02장 25곳 요약)', cite: 'Raindrop.io, Telegram, Google 지도, Spotify, Arc, Readwise, Goodreads 공식 도움말', method: '공식 도움말과 보도 비교', role: '아이디어 50의 공통 원리',
      points: [['공통으로 보이는 다섯 가지', ['<b>기본 위치</b>: 고르지 않으면 정리 안 됨(Raindrop)으로, 나중에 여러 개 옮기기.', '<b>여러 갈래</b>: 태그, 이모지, 리스트를 겹쳐 붙인다(Telegram, Google 지도).', '<b>보기 바꾸기</b>: 격자, 목록, 정렬, 맨 위 고정(Spotify).', '<b>시간이 지나면 치움</b>: 12시간 뒤 보관(Arc), 본 것 지우기(YouTube).', '<b>다시 띄우기</b>: 매일 리뷰와 빈도 조절(Readwise).']]],
      insight: '잘 되는 저장 도구는 "저장할 때는 가볍게, 다시 볼 때는 여러 갈래로, 시간이 지나면 저절로 치움"을 공유한다. 인스타그램 저장됨은 이 셋이 모두 없다.',
      flow: [['저장', '가볍게(기본 위치)'], ['찾기', '여러 갈래(태그, 시점, 보기)'], ['시간', '저절로 치움, 다시 띄움']], url: 'https://help.raindrop.io/bookmarks' },
    /* ---------- E ---------- */
    { g: 'E', claim: '기억해 내게 하지 말고 알아보게 하라', title: 'Recognition and Recall in User Interfaces', cite: 'Nielsen Norman Group, 사용성 휴리스틱 6', method: '현업 사용성 원칙 해설', role: '보고 고르는 시트(02), 검색 아래 태그(31)',
      points: [['원칙', ['회상(recall)은 단서가 적고, 재인(recognition)은 단서가 많다. <b>단서가 많을수록 기억을 꺼내기 쉽다.</b>', '<b>검색 제안은 회상 과제를 재인 과제로 바꾼다.</b>']], ['주의', ['휴리스틱은 연구로 검증된 법칙이 아니라 경험칙이다.']]],
      insight: '지금 저장 시트는 작은 이미지와 이름(읽어서 기억해 내기), 저장함 검색은 없음(통째로 기억해 내기)이다. 큰 커버, 내 태그 칩, 시점 머리처럼 알아볼 단서를 늘린다.',
      flow: [['이름 목록', '기억해 내기(회상)', '느림'], ['큰 커버, 태그 칩', '알아보기(재인)', '빠름']], url: 'https://www.nngroup.com/articles/recognition-and-recall/' },
    { g: 'E', claim: '선택지가 늘수록 고르는 시간이 늘고, 순서가 없으면 더 늘어난다', title: 'Hick-Hyman Law', cite: 'Hick(1952), Hyman(1953), Laws of UX, IxDF 해설', method: '선택 반응 시간 실험과 그 UX 해석', role: '저장 시트 순서 고정(05, 45), 칩 3개(13)',
      points: [['법칙', ['결정 시간은 선택지 수의 로그에 비례해 늘어난다(RT = a + b log2(n)).', '효과는 <b>무작위로 나열된 목록에서 가장 크다</b>. 논리적인 순서가 중요하다.']], ['한계', ['UI 설계에 그대로 적용하기에는 한계가 있다는 지적이 있다.']]],
      insight: '주연이 "컬렉션이 최근순이라 계속 바뀐다"고 한 것은 사용자에게 무작위 순서와 같다. 순서를 고정하거나(05, 45), 선택지를 3개로 줄이면(13) 고르는 시간이 준다.',
      flow: [['컬렉션 21개, 순서 계속 바뀜', '고르는 시간 늘어남'], ['고정 순서 또는 칩 3개', '고르는 시간 줄어듦']], url: 'https://lawsofux.com/hicks-law/' },
    { g: 'E', claim: '선택지가 많으면 고르지 않는다는 연구, 그리고 반론', title: 'When Choice is Demotivating: Can One Desire Too Much of a Good Thing?', cite: 'Iyengar, Lepper (2000), Journal of Personality and Social Psychology 79(6)', method: '마트 시식대에서 잼 24종과 6종 비교', role: '컬렉션이 많을 때의 저장 시트(근거로는 조심)',
      points: [['수치', ['멈춰 선 사람 중 실제로 산 비율: <b>24종 3%, 6종 30%</b>.', '24종일 때 멈춘 사람은 더 많았다(약 60% 대 40%).']], ['반론', ['이후 메타분석에서 <b>평균 효과는 거의 0</b>이었다(Scheibehenne 외, 2010). 재현 실패 보고도 있다.']]],
      insight: '"컬렉션이 많아서 안 나눈다"를 이 연구 하나로 주장하면 안 된다. 인터뷰 근거(세희, 소윤)와 함께 쓰고, 효과는 우리 프로토타입으로 직접 잰다.',
      flow: [['선택지 6', '구매 30%'], ['선택지 24', '구매 3%(재현 논쟁)']], url: 'https://faculty.washington.edu/jdb/345/345%20Articles/Iyengar%20&%20Lepper%20(2000).pdf' },
    { g: 'E', claim: '바텀 시트는 배경을 가리지 않을 때 좋다', title: 'Bottom Sheets: Definition and UX Guidelines', cite: 'Nielsen Norman Group', method: '현업 UI 가이드라인', role: '저장 시트 개선(02, 03, 13)',
      points: [['가이드', ['바텀 시트는 잠깐 필요한 정보를 보여 주되 <b>닫을 수 있는 부분 화면</b>이다.', '<b>관련된 배경 내용을 가리지 않고</b>, 뒤로 가기로 닫히게 한다.', '바텀 시트가 손이 잘 닿게 해 준다는 흔한 말은 대체로 틀렸다.']]],
      insight: '주연이 저장 시트를 "흐름을 끊는 팝업"으로 느낀 이유는 릴스(배경)를 크게 덮기 때문이다. 시트를 쓰지 않거나(01, 13), 쓰더라도 릴스를 덜 가리게(03) 한다.',
      flow: [['저장', '큰 시트가 릴스를 덮음', '흐름 끊김'], ['저장', '알림, 칩만', '릴스 계속']], url: 'https://www.nngroup.com/articles/bottom-sheet/' },
    /* ---------- F ---------- */
    { g: 'F', claim: '사람은 저장 기능을 "고용"한다', title: 'Know Your Customers’ "Jobs to Be Done"', cite: 'Christensen, Hall, Dillon, Duncan (2016), Harvard Business Review', method: '혁신 이론, Jobs to Be Done', role: '저장의 일(job)을 다시 쓰기',
      points: [['핵심', ['사람들이 왜 그 선택을 하는지 이해하면 혁신은 운이 아니다. 고객은 <b>어떤 상황에서 해내야 할 일</b>을 위해 제품을 고용한다.', '유명한 예: 출근길 지루함을 달래려고 밀크셰이크를 "고용"한다(같은 저자의 앞선 글).']]],
      insight: '인터뷰에서 저장의 일은 둘로 갈렸다. "흐름을 끊지 않고 일단 잡아 두기"와 "필요할 때(작업, 여행) 바로 꺼내 실행하기". 지금 저장됨은 앞의 일만 하고 뒤의 일은 나에게 보내기, 캡처에 맡긴다.',
      flow: [['일 1', '흐름 안 끊고 잡아 두기', '저장 버튼'], ['일 2', '필요할 때 꺼내 실행', '지금은 밖(나에게 보내기)']], url: 'https://hbr.org/2016/09/know-your-customers-jobs-to-be-done' },
    { g: 'F', claim: '결과, 기회, 해법, 실험을 한 나무로', title: 'Opportunity Solution Tree (Continuous Discovery Habits)', cite: 'Teresa Torres, Product Talk', method: '제품 발견 방법론', role: '아이디어 50을 기회별로 묶고 고르기',
      points: [['구조', ['맨 위에 <b>하나의 원하는 결과</b>, 그 아래 인터뷰에서 나온 <b>기회</b>, 그 아래 <b>해법</b>, 각 해법에 <b>가정 실험</b>.', '해법은 목표로 삼은 기회 하나에 대해서만 만들고 서로 비교한다.', '인터뷰 3~4번마다 나무를 고친다.']]],
      insight: '결과를 "다시 찾는 시간 줄이기"로 두고, 기회를 인사이트 8개로, 해법을 아이디어 50개로 놓으면 어떤 아이디어가 어떤 기회를 푸는지, 무엇을 먼저 실험할지 한눈에 보인다.',
      flow: [['결과: 다시 찾기 쉬움', '기회: 인사이트 1~8', '해법: 아이디어 50', '실험: 찾기 과제']], url: 'https://www.producttalk.org/opportunity-solution-tree/' },
    { g: 'F', claim: '주제가 아니라 실행 가능성으로 나눠라', title: 'The PARA Method', cite: 'Tiago Forte, Building a Second Brain', method: '개인 지식 관리 방법론', role: '곧 볼 것(04), 목적 컬렉션(10, 46), 보관함(42)',
      points: [['네 칸', ['<b>프로젝트</b>: 끝나는 날이 있는 일.', '<b>영역</b>: 계속 유지하는 책임(건강, 돈).', '<b>자료</b>: 관심은 있지만 지금 하지 않는 주제.', '<b>보관</b>: 앞의 셋에서 끝난 것.']]],
      insight: '인스타그램 저장물도 PARA로 읽힌다. 여행 준비는 프로젝트(날짜가 있는 컬렉션, 46), 디자인 레퍼런스는 자료, 다녀온 여행은 보관. 축을 주제에서 실행 가능성으로 바꾸면 "곧 볼 것"과 "보관함"이 자연스럽게 나온다.',
      flow: [['프로젝트', '오사카 12월(날짜)'], ['자료', '디자인, 레시피'], ['보관', '다녀온 여행, 이제 된 것']], url: 'https://every.to/praxis/para-an-introduction-827085' },
    { g: 'F', claim: '시킨 행동 대신 일상의 기록으로 본다', title: 'Diary Studies: Understanding Long-Term User Behavior and Experiences', cite: 'Nielsen Norman Group', method: '현업 리서치 방법론', role: '관리 가설 일주일 기록(다음 검증)',
      points: [['방법', ['일정 기간 동안 <b>실제 맥락에서</b> 행동, 활동, 경험을 기록하게 하는 질적 방법.', '한 번 하는 사용성 테스트나 인터뷰로는 <b>맥락과 시간에 걸친 변화</b>를 잡지 못한다.', '기간은 질문, 행동이 일어나는 빈도, 걸리는 시간에 맞춘다.']]],
      insight: '사용자가 "시킨 저장은 검증이 안 된다"고 본 판단과 맞는다. 일주일 동안 저장, 나에게 보내기, 캡처를 할 때마다 이유 한 줄을 남기면 관리 가설(곧 볼 것)을 실제 행동으로 볼 수 있다.',
      flow: [['UT', '시킨 저장', '검증 안 됨'], ['일기 연구', '실제 저장 순간 기록', '이유, 빈도 수집']], url: 'https://www.nngroup.com/articles/diary-studies/' },
    { g: 'F', claim: '구조가 찾기 쉬운지 화면 없이 잰다', title: 'Tree Testing: Fast, Iterative Evaluation of Menu Labels and Categories', cite: 'Nielsen Norman Group', method: '정보 구조 평가 방법', role: '섹션(09), 쓰임새 거르기(27)의 구조 검증',
      points: [['방법', ['제안한 계층 구조에서 사용자가 <b>핵심 항목을 찾을 수 있는지</b> 확인한다. 라벨과 범주가 통한다고 가정하지 말고 시험한다.', '정량으로 보려면 약 50명이 권장되고, 질적으로는 적은 인원으로 빠르게 고친다.', '카드 소팅은 구조를 만들고, 트리 테스트는 만든 구조를 평가한다.']]],
      insight: '"정보, 장소, 상품, 소리" 같은 거르기 이름과 섹션 구조가 통하는지 화면을 만들기 전에 잴 수 있다. 정량 조사가 부족하다면 가장 싸게 숫자를 얻는 방법이다.',
      flow: [['구조 안', '트리 테스트(약 50명)', '찾기 성공률, 첫 클릭']], url: 'https://www.nngroup.com/articles/tree-testing/' },
    { g: 'F', claim: '얼마나 헤맸는지를 숫자로', title: 'Towards a practical measure of hypertext usability (Lostness)', cite: 'Smith (1996), Interacting with Computers 8, pp.365~381', method: '탐색 효율 지표', role: '찾기 과제의 정량 지표',
      points: [['지표', ['최소한의 위치만, 같은 곳을 다시 들르지 않고 최단 경로로 갔는지를 본다. 값은 0(헤매지 않음)~1.', '흔히 L = √((N/S − 1)² + (R/N − 1)²)로 쓴다. N은 본 고유 화면 수, S는 본 화면 총수, R은 최소 필요 화면 수(원문 확인 필요).']]],
      insight: 'UT 가이드의 "헤맨다(30초 넘게, 다른 컬렉션을 열었다 나옴)"를 숫자로 바꿀 수 있다. 같은 가짜 저장함 비교 실험에서 지금 화면과 개선 화면의 헤맴 점수를 비교한다.',
      flow: [['찾기 과제', '본 화면 기록', '헤맴 점수 0~1'], ['지금 vs 개선', '점수 차이']], url: 'https://www.scilit.net/publications/4b02c621b0ecb4971e09f1690ad608a8' },
    { g: 'F', claim: '목표, 신호, 지표로 UX를 잰다', title: 'Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications (HEART)', cite: 'Rodden, Hutchinson, Fu (2010), CHI 2010, Google', method: 'UX 지표 프레임워크', role: '프로젝트 성공 기준 정하기',
      points: [['다섯 갈래', ['<b>Happiness</b>(만족), <b>Engagement</b>(참여), <b>Adoption</b>(새 기능 채택), <b>Retention</b>(재방문), <b>Task success</b>(과업 성공).', '갈래마다 목표, 신호, 지표를 차례로 정한다.', '페이지뷰 같은 지표로는 UX 변화의 효과를 잡지 못해서 만들었다.']]],
      insight: '성공 기준을 HEART로 정하면 정량 조사 공백이 메워진다. Task success = 찾기 성공률과 시간, Adoption = 곧 볼 것 사용률, Retention = 저장함 재방문, Engagement = 나에게 보내기 대비 저장 비율.',
      flow: [['목표', '신호', '지표'], ['다시 찾기 쉬움', '찾기 성공, 헤맴 감소', '성공률, 시간, 헤맴 점수']], url: 'https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/' },
    { g: 'F', claim: '당연한 것, 많을수록 좋은 것, 있으면 놀라운 것', title: 'Kano Model', cite: 'Kano (1984), Qualtrics, SurveyMonkey 해설', method: '기능 만족도 설문 방법', role: '아이디어 50의 우선순위 설문',
      points: [['방법', ['기능마다 "있으면 어떤가", "없으면 어떤가" 두 질문을 묻고 답을 맞대어 <b>당연, 일차원, 매력, 무관심, 반대</b>로 나눈다.', '보통 당연 > 일차원 > 매력 순으로 우선한다. 매력은 시간이 지나면 당연이 된다.', '팀이 점수를 매기는 워크숍이 아니라 <b>사용자 조사</b>다.']]],
      insight: '아이디어 50개를 인터뷰 참가자와 더 많은 사용자에게 카노 설문으로 물으면, 정량 근거로 우선순위를 정할 수 있다. 예를 들어 "곧 볼 것"이 당연인지 매력인지가 나뉜다.',
      flow: [['아이디어 50', '카노 설문(있으면, 없으면)', '당연, 일차원, 매력으로 분류', '우선순위']], url: 'https://www.qualtrics.com/experience-management/research/kano-analysis/' },
    /* ---------- G 국내 ---------- */
    { g: 'G', claim: '국내 대학생도 위치로 찾고, 나에게 보낸다', title: '대학생들의 개인정보관리 행태에 영향을 미치는 요인에 관한 연구', cite: '이수연, 이용정 (2020), 정보관리학회지 37(1), pp.107~', method: '서울 소재 한 대학 학생 온라인 설문 593부(학부생과 대학원생), 단계적 다중회귀', role: '해외 PIM 연구(05, 10)의 국내 확인, 저장 가설의 원인',
      points: [['다시 찾는 방법(593명)', ['<b>저장한 위치를 기억해서 41.7%</b>, 검색 24.8%, 파일 이름을 기억해서 14.0%, 속성(날짜, 유형)으로 검색 11.0%, 찾을 때까지 폴더를 열어 봄 8.6%.']], ['정보를 남기는 방법(다중응답)', ['내려받아 저장 27.1%, 사진을 찍어 저장 18.8%, <b>자신에게 이메일로 보내기 17.0%</b>, 북마크와 즐겨찾기 15.3%.']], ['무엇이 정리를 움직이고 막나', ['정리 활동에는 <b>"앞으로 이 정보를 쓸 것인가"</b>가 영향을 줬다.', '<b>정보기술에 대한 불안감</b>은 정리와 유지를 모두 줄였다.', '다만 설명력은 1.8~7.9%로 낮다.']]],
      insight: '현아가 "제대로 하고 있는지 자신감이 없어" 정리를 그만둔 것이 정보기술 불안감이다. 사람은 앞으로 쓸 목적이 보일 때 정리한다. 그래서 정리는 목적이 생긴 때(10, 46)에 묻고, 구조는 불안하지 않게 드러낸다(01의 "전체에 저장됨").',
      flow: [['다시 찾기', '위치 기억 41.7%', '검색 24.8%'], ['정리', '쓸 목적이 보이면 함', '불안하면 안 함']], url: 'https://www.accesson.kr/kosim/v.37/1/107/1508' },
    { g: 'G', claim: '메일을 저장소로 쓰지만, 폴더는 81%가 쓰지 않는다', title: '대학생의 이메일 관리 행태 연구', cite: '한지윤, 이혜은 (2023), 정보관리학회지 40(1), pp.149~173', method: '국내 대학 재학생 317명 설문, 학교 메일 서비스 유형별 6명 심층 면담', role: '나에게 보내기, 저장됨이 같은 길을 가는 이유',
      points: [['소통 도구가 저장소가 된다', ['메일을 쓰는 목적 1위는 학교 활동 97.2%, 2위는 <b>파일 저장 71.6%</b>. 메일이 주소록, 클라우드, 협업 도구로 확장됐다.']], ['정리 없이 검색에 기댄다', ['<b>81.1%가 폴더를 쓰지 않았고</b>, 쓰는 사람도 1~5개가 76.6%.', '찾을 때는 <b>키워드 검색이 84.2%</b>.', '보관 기준을 내용이 아니라 보낸 사람(53.0%), 남은 저장 공간(39.3%)으로 정하기도 했다.']]],
      insight: '인스타그램 DM(나에게 보내기)도 소통 도구가 저장소가 된 같은 경우다. 사람은 저장소가 생기면 분류하지 않고 쌓은 뒤 검색에 기댄다. 저장됨에 검색과 자동 단서(보낸 사람, 출처)가 없으면 메일보다도 못한 저장소가 된다(08, 28).',
      flow: [['메일', '파일 저장 71.6%', '폴더 안 씀 81.1%', '검색 84.2%'], ['DM, 저장됨', '나에게 보내기', '분류 안 함', '검색 없음']], url: 'https://www.accesson.kr/kosim/v.40/1/149/28245' },
    { g: 'G', claim: '사람이 만드는 폴더는 두 단계까지다', title: '디지털 객체 생애주기에 따른 대학생의 파일관리 행태 연구', cite: '지윤재, 이혜은 (2022), 한국비블리아학회지 33(1), pp.321~343', method: '학부생 154명 설문(생성, 저장, 이름 붙이기, 구조화, 백업), 전공별 8명 심층 면담과 화면 공유', role: '섹션(09)을 한 층까지만 두는 근거',
      points: [['구조', ['한 학기에 만드는 폴더의 깊이는 <b>2단계가 52.6%</b>, 3단계 이상은 24.7%.', '학생마다 <b>자기만의 이름 붙이기와 구조화 방식</b>이 있었다. 파일명에 날짜(YYMMDD)를 넣는 사람이 31.2%.']], ['지우기', ['사진과 이미지는 1~3개월 주기로 지운다는 답이 많았지만, 유형마다 10.4~18.8%는 아예 지우지 않는다.']]],
      insight: '사람이 감당하는 구조는 얕다. 컬렉션 아래 섹션 한 층(09)까지가 한계이고, 그보다 깊은 계층은 오히려 찾기를 어렵게 한다. 날짜를 이름에 넣는 습관은 시점 단서(06)가 쓸모 있다는 신호다.',
      flow: [['컬렉션', '섹션(한 층)', '저장물'], ['컬렉션', '섹션', '하위 섹션', '너무 깊음']], url: 'https://doi.org/10.14699/kbiblia.2022.33.1.321' },
    { g: 'G', claim: '인스타그램은 틈새 시간에 보고, DM으로 보낸다', title: '오픈서베이 소셜미디어 트렌드 리포트 2025, 2026', cite: '오픈서베이 (2025, 2026), 회사 공개 리포트 요약', method: '2026: 전국 15~59세 3,000명과 유튜브, 인스타그램, 틱톡 이용자 900명(2026-09-03~09). 2025: 전국 15~59세', role: '국내 정량 근거, 보내기 시트 안 저장(16)',
      points: [['2026 시청 후 행동', ['인스타그램은 <b>DM 공유 25.3%</b> 같은 관계 확산 행동이 세 플랫폼 중 가장 높았다. 유튜브는 추가 행동 없음 41.0%.', '인스타그램과 틱톡은 <b>사람을 기다리는 시간 같은 틈새 시간(각 29.7%)</b>에 주로 본다.']], ['2025 DM', ['DM을 쓰는 목적은 일상 대화 61.8%, <b>지인과 콘텐츠 공유 53.5%</b>.', '15~24세의 약 70%가 DM을 자주 쓴다.']]],
      insight: '인스타그램은 틈새 시간에 보고, 마음에 들면 DM으로 보내는 앱이다. 틈새 시간에는 저장 시트에서 고를 여유가 없으니 저장은 한 번에 끝나야 하고(01, 13), 손이 이미 가 있는 보내기 흐름에 저장을 붙이는 것(16)이 가장 자연스럽다.',
      flow: [['틈새 시간에 보기', '마음에 듦', 'DM 공유(25.3%)'], ['틈새 시간에 보기', '저장 시트에서 고르기', '여유 없음, 포기']], url: 'https://blog.opensurvey.co.kr/article/socialmedia-2026-2/' },
    { g: 'G', claim: 'Z세대는 맛집을 보면 절반이 저장한다', title: '대학내일 뉴스레터, 대학내일20대연구소 식생활 조사 인용', cite: '대학내일20대연구소, 대학내일 뉴스레터(오픈애즈 게재)', method: '연구소 식생활 조사 결과 인용과 사례(원 보고서의 시점, 표본은 미확인)', role: '장소 저장이 대표 사례라는 근거(22, 46)',
      points: [['수치와 장면', ['Z세대가 맛집 콘텐츠를 봤을 때 가장 많이 하는 행동은 <b>정보 저장(50.8%)</b>.', '해시태그로 검색하느니 믿을 만한 사람을 팔로우해 두고 <b>평소에 저장해 두는 게 낫다</b>고 본다.', '사례: 약속이 생기면 인스타그램 "저장됨"에 들어가 브이로그에서 본 카페를 찾는다.']], ['주의', ['50.8%가 어느 회차 조사인지, 표본이 몇 명인지는 원 보고서에서 확인해야 한다.']]],
      insight: '세희의 가고 싶은 곳 430개, 정우의 도시별 컬렉션과 같은 행동이 국내 Z세대에서 다수다. 장소 저장은 "약속이 생기는 날"에 다시 꺼내지므로, 지도 보기(22)와 날짜가 있는 컬렉션(46)이 가장 넓은 사용자에게 닿는다.',
      flow: [['맛집 콘텐츠', '정보 저장 50.8%', '약속이 생긴 날', '저장됨에서 찾기']], url: 'https://www.openads.co.kr/content/contentDetail?contsId=4283' },
    { g: 'G', claim: '보이지 않으면 쌓는 것을 조절하지 못한다', title: '교육용 대용량 클라우드가 대학생들의 디지털 저장강박 형성과 지속에 미친 영향: 5TB 제공 사례에 관한 질적 사례연구', cite: '에너지기후변화교육 15(3), pp.15~34 (2025.12), 에너지기후변화교육학회, DOI 10.22368/ksecce.2025.15.3.2, 저자는 확인하지 못함', method: '서울대 5TB 클라우드를 오래 쓰며 500GB 넘게 저장한 학생 2명 심층 면접, 질적 다중사례연구', role: '저장 개수 보이기, 결산(48), 보관함(42)',
      points: [['발견', ['축적과 삭제 곤란이라는 디지털 저장강박의 특성이 나타났다.', '<b>디지털 데이터가 보이지 않아서</b> 저장 행동을 알아차리고 조절하기 어려웠다.', '<b>넉넉한 공간</b>이 선별 없는 축적을 가능하게 하고 지우려는 마음을 없앴다.', '오래 쓴 습관(경로 의존)과 대안 부족이 이를 지속시켰다.']], ['한계', ['참여자가 2명인 사례 연구다.']]],
      insight: '인스타그램 저장은 개수 제한이 없고 전체 개수도 잘 보이지 않는다(소윤은 저장물이 몇 개인지 알 방법을 몰랐다). 쌓인 양을 보여 주는 것(48 결산, 42 보관 제안)이 조절의 시작이다.',
      flow: [['무제한 저장', '양이 안 보임', '자각, 조절 안 됨', '계속 쌓임'], ['저장', '쌓인 양을 보여 줌', '정리, 보관']], url: 'https://scholar.kyobobook.co.kr/article/detail/4050071818550' },
    { g: 'G', claim: '쌓인 사진은 기록에 대한 통제력을 잃게 한다', title: '스마트폰 앨범 앱의 사용자 경험 분석 및 개선 방안 연구', cite: '이택형, 김보연 (2025.12), 브랜드디자인학연구 23(5), pp.113~126', method: '정량 설문과 정성 심층 인터뷰, 앨범 앱 기능 분류와 사례 분석', role: '국내 디자인 연구에서 본 같은 해법(06, 22, 28)',
      points: [['문제', ['사진은 늘지만 대부분 의미 없이 잊히고, <b>사람은 쌓인 기록에 대한 통제력을 잃는다</b>.', '앨범 앱의 <b>탐색, 분류, 공유</b> 과정에서 UX 문제가 생긴다.', '사용자가 놓치는 것은 <b>맥락</b>이다.']], ['개선안 다섯 가지 중', ['<b>출처 기반 자동 분류, 장소명 정렬, 촬영자 정보 기록, 맥락 강화형 공유</b> 등.']]],
      insight: '우리 문제 정의의 "통제력"과 같은 말을 국내 디자인 연구가 쓴다. 개선 방향도 겹친다. 출처(28 어디서 저장했나), 장소(22 지도), 맥락(06 저장 무렵, 07 장면). 사진이 아니라 저장물에도 같은 처방이 맞는다는 근거다.',
      flow: [['쌓인 기록', '맥락 잃음', '통제력 잃음'], ['출처, 장소, 맥락 붙이기', '다시 의미 있는 자원']], url: 'https://www.earticle.net/Article/A480007' },
    { g: 'G', claim: '자주 쓰는 기능은 깊이를 줄이고, 아이콘에는 글자를 붙인다', title: '40~50대 사용자 유입을 위한 인스타그램 사용성 개선에 관한 연구', cite: '유성호 (2018.09), 한국융합학회논문지, 한국융합학회', method: '국내 40~50대 대상 인스타그램 사용성 테스트, 국내 서비스와 비교', role: '진입, 바로가기(34, 35)와 아이콘',
      points: [['결과 세 가지', ['단순 번역이 아니라 <b>이해하기 쉬운 레이블</b>이 필요하다.', '주요 기능과 자주 쓰는 기능은 <b>메뉴 깊이를 단순화</b>해야 한다.', '<b>아이콘 인식률</b>을 높여야 하고, 가능하면 <b>글자와 아이콘을 함께</b> 쓰는 것이 좋았다.']]],
      insight: '인터뷰에서 탐색 탭의 저장됨 바로가기를 아는 사람이 0명이었고, 정우는 저장됨이 깊어서 안 들어간다고 했다. 바로가기가 글자 없는 아이콘이라 보이지 않는 것이다. 자주 쓸 기능이라면 깊이를 줄이고 글자를 붙인다(34, 35).',
      flow: [['저장됨', '프로필, 메뉴, 저장됨(깊음)'], ['탐색 탭 아이콘(글자 없음)', '아는 사람 0명'], ['아이콘 + 글자, 얕은 위치', '바로 진입']], url: 'https://m.earticle.net/Article/A338025' },
    { g: 'G', claim: '숏폼은 몰입이 계속 보게 만든다', title: 'Z세대 이용자의 숏폼 동영상 지속 이용의도 및 중독 결정요인: 사회심리적 속성, 숏폼 이용동기, 몰입을 중심으로', cite: '이정기, 최진호 (2025.01), 한국방송학보 39(1), pp.198~232', method: 'Z세대 숏폼 이용자 조사(회귀 분석)', role: '"흐름을 끊지 않는 저장"의 이론적 근거(01, 03, 13)',
      points: [['결과', ['숏폼 지속 이용의도에는 <b>정보추구, 시간 절약, 즐거움 동기</b>와 <b>숏폼 몰입</b>이 영향을 줬다(상호작용 동기는 반대 방향).', '숏폼 중독에는 자기통제, 상호작용 동기, 이용량이 영향을 줬다.']]],
      insight: '사람들이 릴스를 계속 보는 힘은 몰입이다. 저장 시트가 몰입을 끊으면 사람은 저장을 포기하거나(주연) 밖으로 나간다. 그리고 정보를 얻으려고 보는 사람이 많다는 점은, 그 정보를 다시 찾을 일이 생긴다는 뜻이다.',
      flow: [['릴스 몰입', '저장 시트가 끊음', '저장 포기'], ['릴스 몰입', '한 번 저장, 알림만', '몰입 유지']], url: 'https://scholarworks.gnu.ac.kr/handle/sw.gnu/75875' },
    { g: 'G', claim: '국내 2,660만 명이 하루 수십 분 숏폼을 본다', title: '와이즈앱 SNS 동향(2025년 4월), 메조미디어 2025 타겟 리포트', cite: '와이즈앱 리테일(오픈애즈 게재), 메조미디어(바이라인네트워크 보도)', method: '스마트폰 사용자 표본 조사(와이즈앱), 미디어 이용행태 설문(메조미디어)', role: '문제의 규모, 회사 쪽 명분',
      points: [['와이즈앱(2025년 4월)', ['인스타그램 앱 사용자 <b>2,660만 명</b>으로 SNS 1위(밴드 1,795만, 틱톡 1,046만).', '사용시간 25,877백만 분, 1년 전보다 <b>23.4% 증가</b>.']], ['메조미디어(2025)', ['OTT 외 숏폼 일평균 이용 <b>44분</b>, 10대 75분, 20대 54분.', '인스타그램 릴스 이용률 <b>52%</b>(10대 78%).']]],
      insight: '저장은 이 많은 시간 동안 일어나는 작은 동작이다. 사용자 수가 크기 때문에 저장 한 번의 비용을 조금만 줄여도 전체 효과는 크다. 회사에 "저장됨을 고칠 이유"를 말할 때 쓰는 규모 근거다.',
      flow: [['2,660만 명', '하루 숏폼 44분', '그 안의 저장 순간'], ['저장 비용 조금 줄임', '규모 때문에 큰 효과']], url: 'https://www.openads.co.kr/content/contentDetail?contsId=16452' }
  ];

  const pad = (n) => String(n).padStart(2, '0');
  const root = document.getElementById('research-groups');
  if (!root) return;
  window.IPS_RESEARCH = R;
  const fid = (p) => 'r:' + p.title;
  root.innerHTML = `<div class="filter" id="research-filter" role="group" aria-label="리서치 거르기"><button type="button" data-rf="" aria-pressed="true">전체 ${R.length}</button><button type="button" data-rf="fav" aria-pressed="false">★ 즐겨찾기 0</button></div>` +
    GROUPS.map(([g, t, s]) => `<div class="rgroup" data-g="${g}"><h3 class="rgroup-label"><b>${g}. ${t}</b><span>${s}</span></h3><div class="rcards">${R.map((p, i) => p.g === g ? `<div class="rcard-wrap" data-fid="${fid(p).replace(/"/g, '&quot;')}"><button type="button" class="rcard" data-i="${i}" aria-haspopup="dialog"><span class="rnum">${pad(i + 1)}</span><span class="rclaim">${p.claim}</span><span class="rtitle">${p.title}</span><span class="rmore">핵심 내용 보기 →</span></button><button type="button" class="fav fav-card" data-fav="${fid(p).replace(/"/g, '&quot;')}" aria-pressed="false">☆</button></div>` : '').join('')}</div></div>`).join('');
  let rf = '';
  function applyRF() {
    const fav = window.IPSFav;
    root.querySelectorAll('.rcard-wrap').forEach(w => { w.hidden = rf === 'fav' && !(fav && fav.has(w.dataset.fid)); });
    root.querySelectorAll('.rgroup').forEach(g => { g.hidden = ![...g.querySelectorAll('.rcard-wrap')].some(w => !w.hidden); });
    const n = fav ? fav.list().filter(x => x.startsWith('r:')).length : 0;
    root.querySelector('[data-rf="fav"]').textContent = `★ 즐겨찾기 ${n}`;
    root.querySelectorAll('[data-rf]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.rf === rf)));
  }
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-rf]'); if (!b) return; rf = b.dataset.rf; applyRF(); });
  if (window.IPSFav) window.IPSFav.onChange(applyRF);
  applyRF();

  const dlg = document.getElementById('rpanel');
  const body = dlg.querySelector('.rp-body');
  const count = dlg.querySelector('.rp-count');
  let cur = 0;
  const flow = (rows) => rows.map(r => `<div class="rflow-row">${r.map((s, k) => `${k ? '<span class="rflow-arrow" aria-hidden="true">→</span>' : ''}<span class="rflow-step${k === r.length - 1 ? ' end' : ''}">${s}</span>`).join('')}</div>`).join('');
  function render(i) {
    cur = i; const p = R[i];
    count.textContent = `Desk research ${pad(i + 1)} / ${pad(R.length)}`;
    body.innerHTML = `<div class="rp-grid"><aside><span class="rp-num">${pad(i + 1)}</span><h3 id="rp-title">${p.claim}</h3><p class="rp-sub">${p.title}</p>
      <dl><div><dt>출처</dt><dd>${p.cite}</dd></div><div><dt>대상, 방법</dt><dd>${p.method}</dd></div><div><dt>프로젝트 역할</dt><dd>${p.role}</dd></div></dl></aside>
      <div><section><h4>핵심 내용</h4>${p.points.map(([t, items]) => `<div class="rp-g"><h5>${t}</h5><ol>${items.map(x => `<li>${x}</li>`).join('')}</ol></div>`).join('')}</section>
      <section><h4>Insight</h4><p class="rp-quote">${p.insight}</p></section>
      <section><h4>도식화</h4><div class="rflow" role="img" aria-label="${p.claim} 도식">${flow(p.flow)}</div></section>
      <a class="src" href="${p.url}" target="_blank" rel="noopener">원문 보기 →</a></div></div>`;
    dlg.querySelector('.rp-scroll').scrollTop = 0;
    const fb = dlg.querySelector('.rp-fav');
    if (fb) { fb.dataset.fav = fid(p); if (window.IPSFav) window.IPSFav.paintAll(); }
  }
  window.IPS_openResearch = (i) => { render(i); if (!dlg.open) dlg.showModal(); };
  root.addEventListener('click', (e) => { const b = e.target.closest('.rcard'); if (!b) return; render(+b.dataset.i); if (!dlg.open) dlg.showModal(); });
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg || e.target.closest('[data-close]')) dlg.close();
    if (e.target.closest('[data-step]')) render((cur + (+e.target.closest('[data-step]').dataset.step) + R.length) % R.length);
  });
  dlg.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') render((cur + 1) % R.length); if (e.key === 'ArrowLeft') render((cur - 1 + R.length) % R.length); });

  const src = document.getElementById('research-sources');
  if (src) src.innerHTML = R.map((p, i) => `<li><a href="${p.url}" target="_blank" rel="noopener">${pad(i + 1)}, ${p.cite}, ${p.title}</a></li>`).join('');
})();
