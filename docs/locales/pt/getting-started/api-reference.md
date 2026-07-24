---
outline: [2, 3]
---

# Referência da API

## Limites de taxa (Rate Limits)

Cada resposta contém os seguintes cabeçalhos para ajudá-lo a rastrear e respeitar os limites de taxa:

| Cabeçalho               | Descrição                                                          |
| ----------------------- | ------------------------------------------------------------------ |
| `x-rate-limit-limit`    | Duração da janela atual do limite de taxa (ex.: `1m`)              |
| `x-rate-limit-remaining`| Requisições restantes na janela atual                              |
| `x-rate-limit-reset`    | Carimbo de data/hora ISO 8601 de quando a janela atual será redefinida |

### Limites

| Endpoint      | Limite                                      |
| ------------- | ------------------------------------------- |
| `/search`     | 7 requisições a cada 5 segundos             |
| `/:category`  | 200 requisições por minuto (por categoria)  |

## User-Agent

Todas as requisições devem incluir um cabeçalho `User-Agent`. Por favor, use o seguinte formato: `NOME_DO_APP (INFO_DE_CONTATO)`.\
Por exemplo: `NekoApp (https://example.com)` ou `NekoApp (dev@example.com)`

**Diretrizes para nomeação:**

* **Seja específico:** Não use nomes genéricos como "Bot do Discord", "Bot do WhatsApp" ou "Bot do Telegram". Sua aplicação deve ter um nome único.
* **Evite marcadores genéricos:** Não use strings como `test`, `bot` ou o valor de exemplo acima.
* **Sem valores padrão de bibliotecas:** Evite usar strings padrão de bibliotecas como `python-requests`, `okhttp`, `axios`, `node` ou `Go-http-client`.

**Opções de informações de contato:**\
A informação de contato não precisa ser um site tradicional. Qualquer uma das seguintes formas é aceitável para identificação:

* Um endereço de e-mail de contato direto.
* Um site do projeto ou um repositório **público** (ex.: GitHub, GitLab).
* Um link de convite do bot ou página de descoberta (Discovery).
* Uma URL de listagem (ex.: top.gg ou diretórios semelhantes).

**Falsificação e falsidade ideológica (Spoofing & Impersonation):**

* **Não forje strings de navegador.** O formato `Mozilla/5.0 ...` é estritamente reservado para navegadores web reais e bots verificados pela Cloudflare.
* **Não se passe por crawlers conhecidos**, como `Googlebot` ou `Bingbot`.

*O não cumprimento dessas diretrizes, bem como o uso de valores genéricos, padrão ou forjados, muito provavelmente resultará no bloqueio de suas requisições.*

## Categorias

As categorias definem o tipo de conteúdo retornado pela API. Cada categoria está associada a um formato de arquivo fixo.

### Imagens

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIFs

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

### Campos de resposta

| Tipo    | Campos                                      |
| ------- | ------------------------------------------- |
| Imagens | `artist_name`, `artist_href`, `source_url`  |
| GIFs    | `anime_name`                                |

`url` e `dimensions` estão incluídos em ambos.
