---
lastUpdated: false
---

# 새로운 코드 예제 추가하기

## 코드 예제 기여 가이드라인

* 제출물은 **반드시** 영어로 작성되어야 합니다.
* 예제를 가능한 한 상세하게 문서화하세요.
* 코드가 작동하고 제대로 테스트되었는지 확인하세요.

### 당사는 다음 권한을 보유합니다:

* 제출된 후 제출물을 수정할 권한.
* 필요한 경우 제출물을 제거할 권한.

## 새로운 코드 예제 작성하기

### 1. 이 저장소 포크(Fork)하기

### 2. 포크한 저장소 클론 및 프로젝트 디렉터리로 이동(`cd`)

### 3. VitePress 설치

VitePress 사전 요구 사항은 [공식 문서](https://vitepress.dev/guide/getting-started#prerequisites)에서 확인할 수 있습니다.

::: code-group

```sh [npm]
npm add -D vitepress@next
```

```sh [pnpm]
pnpm add -D vitepress@next
```

```sh [yarn]
yarn add -D vitepress@next vue
```

```sh [bun]
bun add -D vitepress@next
```

:::

---

### 4. 코드 예제 추가

#### 4.1 예제 파일 생성

1. 프로그래밍 언어의 이름을 따서 `/docs/examples`에 새 파일을 만듭니다.
2. 파일 이름은 반드시 `.md`로 끝나야 합니다.
3. API를 호출하는 최소 **두 가지 이상의 다른 방법**을 포함해야 합니다.

#### 4.2 사이드바에 예제 추가

1. `/docs/.vitepress/config.mts` 파일을 엽니다.
2. 사이드바에서 **"Code Examples"** 섹션을 찾습니다.
3. 목록에 새 파일을 추가합니다.
4. 목록은 프로그래밍 언어 알파벳순으로 유지하세요.

---

### 5. 개발 서버 시작

풀 리퀘스트(PR)를 생성하기 전에 변경 사항이 기존 기능을 손상시키지 않는지 로컬에서 확인하세요.

::: code-group

```sh [npm]
npm run dev
```

```sh [pnpm]
pnpm run dev
```

```sh [yarn]
yarn dev
```

```sh [bun]
bun run dev
```

:::

---

### 6. 풀 리퀘스트(Pull Request) 생성

원본 저장소에 풀 리퀘스트를 제출하세요.
