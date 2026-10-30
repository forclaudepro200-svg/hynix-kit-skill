# hynix-kit (Codex Skill)

Codex에 "AGENTS.md 생성해"라고 말하면 작업 공간에 아래 파일을 만들어 주는 스킬입니다.

- `AGENTS.md`: Codex 작업 규칙(성공 기준 = 완료 정의, 결정론적 판정, 기준별 테스트, 0건 PASS 금지 등)
- `INTERVIEW.md`, `PLAN.md`, `DECISIONS.md`, `HANDOFF.md`: 협업 문서 골격

## 설치

```bash
git clone --depth 1 <이 저장소 URL> /tmp/hynix-kit-skill
mkdir -p ~/.codex/skills && cp -r /tmp/hynix-kit-skill/skills/hynix-kit ~/.codex/skills/
```

Codex를 다시 실행하고 `/skills`에서 `hynix-kit`이 보이는지 확인합니다.
스킬 폴더 위치가 다르면 `/skills`가 보여 주는 경로에 복사합니다.

## 사용

```
AGENTS.md 생성해
```
또는 `$hynix-kit`
