# hynix-kit (Codex Skills)

180분 실무 과제를 Codex로 진행할 때 쓰는 스킬 4개입니다.

| 스킬 | 이렇게 말하면 | 하는 일 |
|---|---|---|
| `hynix-kit` | "AGENTS.md 생성해" | AGENTS.md(작업 규칙)와 INTERVIEW·PLAN·DECISIONS·HANDOFF 골격 생성 |
| `hynix-interview` | "인터뷰 준비해" | README·데이터 프로파일 → 업무 담당자 질문 목록(INTERVIEW.md) |
| `hynix-verify` | "검증해" / "제출 점검해" | 테스트 실행, 성공 기준 추적, 거짓 성공 점검, 문서 주장 vs 증거 대조(VERIFY.md) |
| `hynix-followup` | "서술형 대비해" | 내 코드 기준 예상 질문 6개와 답변 뼈대(FOLLOWUP_PREP.md) |

## 권장 순서
`hynix-kit` → `hynix-interview` → (인터뷰·PLAN·구현) → `hynix-verify` → `hynix-followup` → 제출

## 설치

```bash
git clone --depth 1 https://github.com/forclaudepro200-svg/hynix-kit-skill ~/k
mkdir -p ~/.codex/skills && cp -r ~/k/skills/* ~/.codex/skills/
```

Codex를 다시 실행하고 `/skills`에서 4개가 보이는지 확인합니다.
스킬 폴더 위치가 다르면 `/skills`가 보여 주는 경로에 복사합니다.
