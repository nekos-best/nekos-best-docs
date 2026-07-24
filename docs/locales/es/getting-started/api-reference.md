---
outline: [2, 3]
---

# Referencia de la API

## Límites de Tasa (Rate Limits)

Todas las respuestas incluyen los siguientes encabezados para ayudarle a rastrear y respetar los límites de tasa:

| Encabezado              | Descripción                                              |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | Duración de la ventana del límite de tasa actual (ej. `1m`) |
| `x-rate-limit-remaining`| Peticiones restantes en la ventana actual                |
| `x-rate-limit-reset`    | Marca de tiempo ISO 8601 de cuándo se reinicia la ventana actual |

### Límites

| Endpoint      | Límite                                      |
| ------------- | ------------------------------------------- |
| `/search`     | 7 peticiones por 5 segundos                 |
| `/:category`  | 200 peticiones por minuto (por categoría)   |

## User-Agent

Todas las peticiones deben incluir un encabezado `User-Agent`. Por favor usa el siguiente formato: `NOMBRE_APP (INFO_CONTACTO)`.\
Por ejemplo: `NekoApp (https://example.com)` o `NekoApp (dev@example.com)`

**Pautas de Nombres:**

* **Sé específico:** No uses nombres genéricos como "Discord Bot", "WhatsApp Bot" o "Telegram Bot". Tu aplicación debe tener un nombre único.
* **Evita marcadores de posición:** No uses cadenas como `test`, `bot` o el valor de ejemplo anterior.
* **Sin valores predeterminados de librería:** Evita usar cadenas predeterminadas de librerías como `python-requests`, `okhttp`, `axios`, `node` o `Go-http-client`.

**Opciones de Información de Contacto:**\
La información de contacto no tiene que ser un sitio web tradicional. Cualquiera de las siguientes es una forma aceptable de proporcionar identificación:

* Una dirección de correo electrónico de contacto directo.
* Un sitio web del proyecto o una URL de repositorio **público** (ej. GitHub, GitLab).
* Un enlace de invitación de bot o página de descubrimiento.
* Una URL de lista (ej. top.gg o directorios similares).

**Suplantación y Falsificación:**

* **No falsifiques cadenas de navegador.** El formato `Mozilla/5.0 ...` está estrictamente reservado para navegadores web reales y bots verificados por Cloudflare.
* **No suplantes bots de búsqueda conocidos** como `Googlebot` o `Bingbot`.

*El incumplimiento de estas pautas y el uso de valores genéricos, predeterminados o falsificados probablemente resultará en el bloqueo de sus peticiones.*

## Categorías

Las categorías definen el tipo de contenido devuelto por la API. Cada categoría se asigna a un formato de archivo fijo.

### Imágenes

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

### Campos de Respuesta

| Tipo     | Campos                                      |
| -------- | ------------------------------------------- |
| Imágenes | `artist_name`, `artist_href`, `source_url`  |
| GIFs     | `anime_name`                                |

`url` y `dimensions` están incluidos en ambos.
