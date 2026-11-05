---
name: hynix-design
description: 웹 화면(HTML/CSS, React, Tailwind, Streamlit 등)을 만들거나 다듬을 때 SK하이닉스 색감(SK Red·SK Orange 포인트, 짙은 차콜 본문, 밝은 회색 면, 인디고 보조색)으로 디자인한다. 사용자가 "하이닉스 색감으로", "SK 스타일로 디자인해", "화면 예쁘게 해", "대시보드 디자인 입혀", "UI 색 맞춰"처럼 웹 UI 디자인·스타일링을 요청할 때 사용한다.
---

# hynix-design

웹 UI에 SK하이닉스 색감을 입힌다. 색은 **아래 토큰만** 쓰고, 코드에 hex 값을 흩뿌리지 않는다.

## 색 토큰

`assets/tokens.css`를 프로젝트에 복사해 그대로 쓴다. 값의 출처는 SK그룹 CI(SK Red·SK Orange)와 skhynix.com CSS에서 실제로 많이 쓰이는 값이다.

| 역할 | 토큰 | 값 | 쓰는 곳 |
|---|---|---|---|
| 브랜드 레드 | `--hx-red` | `#EA002C` | 핵심 강조 1곳, 활성 탭 밑줄, 중요 수치 |
| 브랜드 오렌지 | `--hx-orange` | `#FF7A00` | 주요 버튼(CTA), 포커스 링, 그라데이션 끝 |
| 오렌지 진하게 | `--hx-orange-strong` | `#FF5A00` | 주요 버튼 hover |
| 브랜드 그라데이션 | `--hx-gradient` | `#EA002C → #FF7A00` (135°) | 히어로 띠, 진행 바, 얇은 강조 선 |
| 보조 인디고 | `--hx-indigo` | `#4747B3` | 링크, 보조 버튼, 선택 상태 |
| 딥 네이비 | `--hx-navy` | `#161535` | 어두운 히어로·푸터 배경 |
| 본문 잉크 | `--hx-ink` | `#212121` | 제목·본문 글자 |
| 보조 글자 | `--hx-ink-2` / `--hx-ink-3` | `#3E3E3E` / `#666666` | 설명, 캡션 |
| 비활성 | `--hx-gray-400` | `#BDBDBD` | 비활성 글자·아이콘 |
| 테두리 | `--hx-line` | `#E5E5E5` | 카드·표 테두리, 구분선 |
| 면 | `--hx-surface` | `#F5F5F5` | 페이지 배경, 표 머리, 섹션 띠 |
| 흰색 | `--hx-white` | `#FFFFFF` | 카드 배경 |
| 성공 / 오류 | `--hx-success` / `--hx-danger` | `#069E6D` / `#D10025` | 상태 배지, 검증 메시지 |

차트 계열 순서: `--hx-chart-1`…`--hx-chart-6` = 레드 → 오렌지 → 인디고 → 네이비 → 회색 → 성공 녹색.

## 절차

1. **대상 파악**: 프로젝트의 UI 방식(순수 HTML/CSS, React+CSS, Tailwind, Streamlit 등)과 전역 스타일 파일 위치를 찾는다.
2. **토큰 넣기**: 방식별로 한 곳에만 넣는다.
   - CSS/HTML·React: `assets/tokens.css`를 복사하고 진입점에서 import/link 한다.
   - Tailwind: `assets/tailwind.preset.js`를 복사해 `tailwind.config`의 `presets`에 추가하고 `hx-red`, `hx-ink` 같은 클래스명을 쓴다.
   - Streamlit: `.streamlit/config.toml`에 `primaryColor="#EA002C"`, `textColor="#212121"`, `backgroundColor="#FFFFFF"`, `secondaryBackgroundColor="#F5F5F5"`를 넣는다.
3. **컴포넌트에 적용**: 기존 색 값을 토큰으로 바꾼다. 구성 기준은 `assets/example.html`(버튼·카드·표·배지·KPI·히어로)을 따른다.
4. **확인**: 화면을 실제로 띄워 본다. 아래 규칙을 점검하고 어긋난 곳을 고친다.
5. 바꾼 파일과 쓴 토큰을 짧게 보고한다.

## 디자인 규칙

- **60·30·10**: 흰색·`--hx-surface` 면이 대부분, `--hx-ink` 글자와 `--hx-line` 선이 구조, 레드·오렌지는 화면당 10% 이하.
- 레드와 오렌지는 **한 화면에서 주연 하나**만 정한다. 주요 버튼이 오렌지면 강조 수치는 레드로, 둘을 같은 크기로 나란히 두지 않는다.
- 그라데이션은 띠·선·진행 바처럼 **얇게** 쓴다. 본문 배경 전체에 깔지 않는다.
- 글자색으로 레드·오렌지를 쓸 때는 18px 이상 굵은 글씨만. 작은 본문 글자는 `--hx-ink` 계열을 쓴다(오렌지 위 흰 글자는 대비가 낮으므로 버튼 글자는 굵게 16px 이상).
- 오류는 `--hx-danger`(#D10025)로, 브랜드 레드와 구분한다. 오류 메시지에 아이콘·문구를 함께 써서 색만으로 구분하지 않는다.
- 모서리: 버튼 4px, 카드 8px. 그림자는 `--hx-shadow` 하나만. 테두리 1px `--hx-line`.
- 글꼴: `Pretendard`, 없으면 `Noto Sans KR`, 시스템 sans-serif. 제목 700, 본문 400, 숫자는 `font-variant-numeric: tabular-nums`.
- 포커스: 키보드 포커스는 `outline: 3px solid var(--hx-orange)`로 항상 보이게 한다.

## 하지 말 것
- SK하이닉스 로고·워드마크·심볼을 그리거나 넣지 않는다(상표). 사용자가 공식 파일을 직접 줄 때만 그 파일을 쓴다.
- 토큰에 없는 새 색을 만들지 않는다. 꼭 필요하면 기존 토큰의 투명도(`color-mix`)로 만든다.
- 화면을 띄워 보지 않고 "디자인 적용 완료"라고 쓰지 않는다. 못 봤으면 "미확인"이라고 쓴다.
