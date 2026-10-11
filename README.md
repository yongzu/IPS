# IPS · Iterative Problem Solving

Phi Design Institute IPS 과제를 주차별로 모으는 저장소. 주차마다 폴더 하나(`w4/`, `w5/` …)에 정적 페이지를 둔다.

- 페이지: https://yongzu.github.io/IPS/ (GitHub Pages — `main` 브랜치 루트를 그대로 배포, 빌드 없음)
- 로컬: `node tools/dev-server.js . 5511` → http://localhost:5511/ (파일을 고치면 열린 탭이 새로고침된다)
- 작업 기록: [STATUS.md](./STATUS.md) · 작업 규칙: [AGENTS.md](./AGENTS.md)

## 주차

| 주차 | 폴더 | 내용 |
|---|---|---|
| 1~3라운드 | `yongzu/Phi_Brain` 저장소 `ips/` | Phi Brain · Discover·Define·Develop·Deliver (https://yongzu.github.io/Phi_Brain/ips/) — 그대로 둔다 |
| 4주차 | `w4/` | 인스타그램 저장(Saved) — 목적 · 사용자 분석 · 가설 체인 · 피드백 반영 · 선택 이유 · 확인 계획 |

4주차는 2026-10-11에 `yongzu/Phi_Brain`의 `ips/w4/`에서 커밋 이력째로 옮겨 왔다. 옛 주소 `/Phi_Brain/ips/w4/`는 이 저장소로 넘겨준다.

## 파일

- `index.html` — 주차 목록. 스타일은 `w4/w4.css`를 같이 쓴다.
- `w4/` — `index.html`(본문) · `w4.css` · `w4.js`(가설 체인 CHAIN 데이터와 그리기) · `hypothesis-chain.svg` · `hypothesis-chain-min.svg`(피그잼 붙여넣기용)
- `cursor-*.svg` — 커서(Phi Brain 프로토타입과 같은 것)
- `tools/dev-server.js` — 로컬 미리보기 서버
- `tools/w4-chain-svg.js` — 4주차 가설 체인을 SVG로 뽑는 스크립트(쓰는 법은 파일 머리 주석)
