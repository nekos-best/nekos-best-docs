---
lastUpdated: false
---

# 비공식 라이브러리 추가하기

## 비공식 라이브러리 기여 가이드라인

* 제출물은 **반드시** 영어로 작성되어야 합니다.
* 라이브러리 소유자는 당사의 [Discord 서버](https://nekos.best/discord?ref=docs)에 참여해야 합니다.
* 라이브러리는 우수한 코드 품질 관행을 따라야 합니다.
* 라이브러리에 악성코드나 기타 안전하지 않은 동작이 포함되어서는 **안 됩니다**.
* 라이브러리는 공개적으로 접근 가능하고 활발하게 유지 관리되어야 합니다.
* 저장소에 명확한 설치 및 사용 설명서를 제공해야 합니다.

### 당사는 다음 권한을 보유합니다:

* 검토 후 제출물을 수정할 권한.
* 오래되거나 안전하지 않거나 유지 관리되지 않는 경우 제출물을 제거할 권한.

## 새로운 비공식 라이브러리 추가하기

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

### 4. 사이드바에 비공식 라이브러리 추가

1. `/docs/.vitepress/config.mts` 파일을 엽니다.
2. 사이드바에서 **"Unofficial Libraries"** 섹션을 찾습니다.
3. 라이브러리 저장소 링크를 추가합니다.
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
