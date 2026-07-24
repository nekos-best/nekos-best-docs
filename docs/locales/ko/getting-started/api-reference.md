---
outline: [2, 3]
---

# API 레퍼런스

## 속도 제한 (Rate Limits)

모든 응답에는 속도 제한을 추적하고 준수할 수 있도록 다음 헤더가 포함됩니다:

| 헤더                     | 설명                                                     |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | 현재 속도 제한 창의 기간 (예: `1m`)                      |
| `x-rate-limit-remaining`| 현재 창에서 남은 요청 수                                 |
| `x-rate-limit-reset`    | 현재 창이 재설정되는 ISO 8601 타임스탬프                 |

### 제한 사항

| 엔드포인트    | 제한                                        |
| ------------- | ------------------------------------------- |
| `/search`     | 5초당 7회 요청                              |
| `/:category`  | 분당 200회 요청 (카테고리당)                |

## User-Agent

모든 요청에는 `User-Agent` 헤더가 포함되어야 합니다. 다음 형식을 사용하세요: `APP_NAME (CONTACT_INFO)`.\
예: `NekoApp (https://example.com)` 또는 `NekoApp (dev@example.com)`

**이름 지정 가이드라인:**

* **구체적으로 작성:** "Discord Bot", "WhatsApp Bot", "Telegram Bot"과 같은 일반적인 이름을 사용하지 마세요. 애플리케이션에는 고유한 이름이 있어야 합니다.
* **자리표시자 사용 금지:** `test`, `bot` 또는 위의 예시 값을 사용하지 마세요.
* **라이브러리 기본값 사용 금지:** `python-requests`, `okhttp`, `axios`, `node`, `Go-http-client`와 같은 라이브러리의 기본 문자열을 사용하지 마세요.

**연락처 정보 옵션:**\
연락처 정보가 반드시 전통적인 웹사이트일 필요는 없습니다. 식별 정보를 제공하는 다음 방식 모두 허용됩니다:

* 직접 연락 가능한 이메일 주소.
* 프로젝트 웹사이트 또는 **공개** 저장소 URL (예: GitHub, GitLab).
* 봇 초대 링크 또는 디스커버리 페이지.
* 리스팅 URL (예: top.gg 또는 유사한 디렉토리).

**스푸핑 및 사칭 금지:**

* **브라우저 문자열을 스푸핑하지 마세요.** `Mozilla/5.0 ...` 형식은 실제 웹 브라우저 및 Cloudflare 인증 봇 전용으로 엄격히 제한됩니다.
* **알려진 크롤러 사칭 금지:** `Googlebot`이나 `Bingbot`과 같은 크롤러를 사칭하지 마세요.

*이 가이드라인을 따르지 않고 일반적이거나 기본값, 또는 스푸핑된 값을 사용하는 경우 요청이 차단될 수 있습니다.*

## 카테고리

카테고리는 API가 반환하는 콘텐츠의 유형을 정의합니다. 각 카테고리는 고정된 파일 형식에 매핑됩니다.

### 이미지

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF

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

`url` 및 `dimensions`는 둘 다에 포함됩니다.
