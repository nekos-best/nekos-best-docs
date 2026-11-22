---
outline: [2, 3]
---

# Referência da API

## Limites de taxa (Rate Limits)

Todas as respostas incluem os seguintes cabeçalhos para ajudar você a acompanhar e respeitar os limites de taxa:

| Cabeçalho                | Descrição                                                            |
| ------------------------ | -------------------------------------------------------------------- |
| `x-rate-limit-limit`     | Duração da janela atual do limite de taxa (ex.: `1m`)                |
| `x-rate-limit-remaining` | Requisições restantes na janela atual                                |
| `x-rate-limit-reset`     | Timestamp ISO 8601 indicando quando a janela atual será redefinida   |

### Limites

| Endpoint                       | Limite                                                                |
| ------------------------------ | --------------------------------------------------------------------- |
| `/search`                      | 7 requisições a cada 5 segundos                                       |
| `/:category`                   | 200 requisições por minuto (por categoria)                            |
| `/:category/:filename.:format` | 200 requisições por minuto (compartilhado entre arquivos `.png` e `.gif`) |

## User-Agent

Embora um cabeçalho `User-Agent` personalizado não seja obrigatório, recomendamos definir um em suas requisições usando o seguinte formato: `NOME_DO_APP (INFO_DE_CONTATO)`.\
Por exemplo: `NekoApp (https://example.com)` ou `NekoApp (dev@example.com)`

**Sugestões de nomenclatura:**

* **Seja específico:** Use o nome real da sua aplicação em vez de rótulos genéricos como "Discord Bot", "WhatsApp Bot" ou "Telegram Bot".
* **Evite placeholders:** Evite strings genéricas como `test`, `bot` ou os valores de exemplo acima.
* **Evite padrões de bibliotecas:** Dê preferência a um valor personalizado em vez das strings padrão de bibliotecas como `python-requests`, `okhttp`, `axios`, `node` ou `Go-http-client`.

**Opções de informações de contato:**\
As informações de contato não precisam ser um site tradicional. Qualquer uma das opções abaixo funciona bem:

* Um endereço de e-mail de contato direto.
* O site do projeto ou a URL de um repositório **público** (ex.: GitHub, GitLab).
* Um link de convite do bot ou página de descoberta.
* Uma URL de listagem (ex.: top.gg ou diretórios semelhantes).

**Spoofing e falsificação:**

* **Não simule strings de navegador.** O formato `Mozilla/5.0 ...` é reservado para navegadores reais e bots verificados pela Cloudflare.
* **Não se passe por crawlers conhecidos**, como `Googlebot` ou `Bingbot`.

::: info
Não definir um cabeçalho `User-Agent` personalizado aumenta as chances de suas requisições serem sinalizadas ou banidas pelo nosso sistema automático de detecção de abuso (`NB-BCFSD`).
:::

## Categorias

As categorias definem o tipo de conteúdo retornado pela API. Cada categoria está associada a um formato de arquivo fixo.

### Imagens (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIFs (59)

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

| Tipo    | Campos                                     |
| ------- | ------------------------------------------ |
| Imagens | `artist_name`, `artist_href`, `source_url` |
| GIFs    | `anime_name`                               |

`url` e `dimensions` estão presentes em ambos.
