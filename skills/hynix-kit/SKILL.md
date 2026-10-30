---
name: hynix-kit
description: 과제 작업 공간에 AGENTS.md와 협업 문서 골격(INTERVIEW.md, PLAN.md, DECISIONS.md, HANDOFF.md)을 만든다. 사용자가 "AGENTS.md 생성해", "agent.md 만들어", "작업 문서 세팅해", "키트 설치해"처럼 작업 지침이나 문서 골격 생성을 요청할 때 사용한다.
---

# hynix-kit

과제 작업 공간 루트에 Codex 작업 지침과 협업 문서 골격을 만든다.

## 절차

1. 작업 공간 루트(README.md가 있는 폴더, 없으면 현재 폴더)로 이동한다.
2. 이 스킬 폴더의 `templates/`에 있는 파일을 **덮어쓰지 않고** 복사한다.
   ```bash
   cp -n <이 스킬 폴더>/templates/*.md .
   ```
   이미 있는 파일은 건드리지 말고, 건너뛴 파일 이름을 보고한다.
3. README.md가 있으면 읽고 AGENTS.md의 `## 과제 맥락` 주석을 3~5줄 요약으로 바꾼다. README에 없는 요구사항은 지어내지 않는다.
4. 런타임을 한 번만 확인해 AGENTS.md `## 환경`의 언어·런타임 주석을 채운다: `node --version; python3 --version` 중 동작하는 것. README가 언어를 지정하면 그것을, 아니면 기존 코드·설정 파일(package.json, requirements.txt)을, 둘 다 없으면 Node를 고르고 테스트 명령(`node --test` 또는 `pytest`)까지 적는다.
5. git 저장소가 아니면(`git rev-parse --is-inside-work-tree` 실패) `git init`을 실행한다.
6. 만든 파일을 커밋한다: `git add AGENTS.md INTERVIEW.md PLAN.md DECISIONS.md HANDOFF.md && git commit -m "setup: 작업 지침과 문서 골격"`. 실패하면 오류와 직접 실행할 명령을 보고한다.
7. 아래 형식으로 짧게 보고하고 멈춘다.
   - 만든 파일 / 건너뛴 파일
   - 과제 맥락 요약(3~5줄)
   - 선택한 런타임과 테스트 명령
   - 다음 단계: "업무 담당자 인터뷰 → INTERVIEW.md 기록 → PLAN.md 작성"

## 하지 말 것
- PLAN.md·DECISIONS.md·HANDOFF.md 내용을 추측으로 채우지 않는다. 골격만 만든다.
- 코드를 작성하거나 패키지를 설치하지 않는다.
- `git push`나 외부 전송을 하지 않는다.
