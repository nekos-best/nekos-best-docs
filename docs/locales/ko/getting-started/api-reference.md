---
outline: [2, 3]
---

# API 레퍼런스

## 요청 제한 (Rate Limits)

모든 응답에는 요청 제한(레이트 리밋) 상태를 확인하고 준수할 수 있도록 다음 헤더가 포함됩니다.

| 헤더                     | 설명                                                      |
| ------------------------ | --------------------------------------------------------- |
| `x-rate-limit-limit`     | 현재 요청 제한 윈도우의 기간 (예: `1m`)                   |
| `x-rate-limit-remaining` | 현재 윈도우에서 남은 요청 횟수                            |
| `x-rate-limit-reset`     | 현재 윈도우가 초기화되는 시점의 ISO 8601 타임스탬프       |

### 제한 기준

| 엔드포인트                     | 제한                                                 |
| ------------------------------ | ---------------------------------------------------- |
| `/search`                      | 5초당 7회 요청                                       |
| `/:category`                   | 분당 200회 요청 (카테고리별)                         |
| `/:category/:filename.:format` | 분당 200회 요청 (`.png` 및 `.gif` 에셋 전체 공유)    |

## User-Agent

커스텀 `User-Agent` 헤더가 필수는 아니지만, 요청 시 `APP_NAME (CONTACT_INFO)` 형식으로 설정하는 것을 권장합니다.\
예시: `NekoApp (https://example.com)` 또는 `NekoApp (dev@example.com)`

**권장 작성 가이드라인:**

* **구체적인 이름 사용:** "Discord Bot", "WhatsApp Bot", "Telegram Bot" 같은 일반적인 표현 대신 애플리케이션의 실제 이름을 사용하세요.
* **플레이스홀더 피하기:** `test`, `bot` 또는 위 예시 문자열을 그대로 사용하지 않도록 하세요.
* **라이브러리 기본값 피하기:** `python-requests`, `okhttp`, `axios`, `node`, `Go-http-client` 같은 기본 문자열 대신 고유한 값을 설정하는 것이 좋습니다.

**연락처 정보 예시:**\
연락처 정보가 반드시 일반 웹사이트일 필요는 없습니다. 아래 중 어떤 방식이든 사용할 수 있습니다.

* 직접 연락할 수 있는 이메일 주소
* 프로젝트 웹사이트 또는 **공개** 저장소 URL (예: GitHub, GitLab)
* 봇 초대 링크 또는 디스커버리 페이지
* 디렉터리 등록 페이지 URL (예: top.gg 등)

**스푸핑 및 사칭:**

* **브라우저 문자열을 스푸핑하지 마세요.** `Mozilla/5.0 ...` 형식은 실제 웹 브라우저와 Cloudflare 인증 봇 전용입니다.
* **`Googlebot`, `Bingbot` 등 알려진 크롤러를 사칭하지 마세요.**

::: info
커스텀 `User-Agent` 헤더를 설정하지 않으면 자동 어뷰징 탐지 시스템에 의해 플래그가 지정되거나 API 차단(`NB-BCFSD`)될 가능성이 높아집니다.
:::

## 카테고리

카테고리는 API가 반환하는 콘텐츠의 종류를 정의하며, 각 카테고리는 고정된 파일 형식에 매핑됩니다.

### 이미지 (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF (59)

<div class="category-grid">
  <span class="category-chip">angry</span>
  <span class="category-chip">baka</span>
  <span class="category-chip">bite</span>
  <span class="category-chip">bleh</span>
  <span class="category-chip">blowkiss</span>
  <span class="category-chip">blush</span>
  <span class="category-chip">bonk</span>
  <span class="category-chip">bored</span>
  <span class="category-chip">carry</span>
  <span class="category-chip">clap</span>
  <span class="category-chip">confused</span>
  <span class="category-chip">cry</span>
  <span class="category-chip">cuddle</span>
  <span class="category-chip">dance</span>
  <span class="category-chip">facepalm</span>
  <span class="category-chip">feed</span>
  <span class="category-chip">handhold</span>
  <span class="category-chip">handshake</span>
  <span class="category-chip">happy</span>
  <span class="category-chip">highfive</span>
  <span class="category-chip">hug</span>
  <span class="category-chip">kabedon</span>
  <span class="category-chip">kick</span>
  <span class="category-chip">kiss</span>
  <span class="category-chip">lappillow</span>
  <span class="category-chip">laugh</span>
  <span class="category-chip">lurk</span>
  <span class="category-chip">nod</span>
  <span class="category-chip">nom</span>
  <span class="category-chip">nope</span>
  <span class="category-chip">nya</span>
  <span class="category-chip">pat</span>
  <span class="category-chip">peck</span>
  <span class="category-chip">poke</span>
  <span class="category-chip">pout</span>
  <span class="category-chip">punch</span>
  <span class="category-chip">run</span>
  <span class="category-chip">salute</span>
  <span class="category-chip">shake</span>
  <span class="category-chip">shoot</span>
  <span class="category-chip">shocked</span>
  <span class="category-chip">shrug</span>
  <span class="category-chip">sip</span>
  <span class="category-chip">slap</span>
  <span class="category-chip">sleep</span>
  <span class="category-chip">smile</span>
  <span class="category-chip">smug</span>
  <span class="category-chip">spin</span>
  <span class="category-chip">stare</span>
  <span class="category-chip">tableflip</span>
  <span class="category-chip">teehee</span>
  <span class="category-chip">think</span>
  <span class="category-chip">thumbsup</span>
  <span class="category-chip">tickle</span>
  <span class="category-chip">wag</span>
  <span class="category-chip">wave</span>
  <span class="category-chip">wink</span>
  <span class="category-chip">yawn</span>
  <span class="category-chip">yeet</span>
</div>

### 응답 필드

| 유형   | 필드                                        |
| ------ | ------------------------------------------- |
| 이미지 | `artist_name`, `artist_href`, `source_url`  |
| GIF    | `anime_name`                                |

`url`과 `dimensions`는 두 유형 모두에 포함됩니다.
