---
outline: [2, 3]
---

# Referencia de la API

## Límites de solicitudes (Rate Limits)

Todas las respuestas incluyen los siguientes encabezados para ayudarte a controlar y respetar los límites de solicitudes:

| Encabezado               | Descripción                                                                   |
| ------------------------ | ----------------------------------------------------------------------------- |
| `x-rate-limit-limit`     | Duración de la ventana actual de límite de solicitudes (p. ej., `1m`)         |
| `x-rate-limit-remaining` | Solicitudes restantes en la ventana actual                                    |
| `x-rate-limit-reset`     | Marca de tiempo en formato ISO 8601 que indica cuándo se reinicia la ventana  |

### Límites

| Endpoint                       | Límite                                                           |
| ------------------------------ | ---------------------------------------------------------------- |
| `/search`                      | 7 solicitudes cada 5 segundos                                    |
| `/:category`                   | 200 solicitudes por minuto (por categoría)                       |
| `/:category/:filename.:format` | 200 solicitudes por minuto (compartido entre recursos `.png` y `.gif`) |

## User-Agent

Aunque no es obligatorio incluir un encabezado `User-Agent` personalizado, te recomendamos configurar uno en tus solicitudes con el siguiente formato: `NOMBRE_APP (INFO_CONTACTO)`.\
Por ejemplo: `NekoApp (https://example.com)` o `NekoApp (dev@example.com)`

**Sugerencias de nombres:**

* **Sé específico:** Usa el nombre real de tu aplicación en lugar de etiquetas genéricas como "Discord Bot", "WhatsApp Bot" o "Telegram Bot".
* **Evita valores genéricos:** Evita cadenas de relleno como `test`, `bot` o los valores de ejemplo anteriores.
* **Evita valores predeterminados de bibliotecas:** Es preferible usar un valor personalizado en lugar de las cadenas predeterminadas de bibliotecas como `python-requests`, `okhttp`, `axios`, `node` o `Go-http-client`.

**Opciones de información de contacto:**\
La información de contacto no tiene por qué ser un sitio web tradicional. Cualquiera de las siguientes opciones funciona bien:

* Una dirección de correo electrónico de contacto directo.
* El sitio web de tu proyecto o la URL de un repositorio **público** (p. ej., GitHub o GitLab).
* Un enlace de invitación de tu bot o su página de descubrimiento.
* La URL de un listado o directorio (p. ej., top.gg u otros similares).

**Suplantación y falsificación:**

* **No falsifiques cadenas de navegador.** El formato `Mozilla/5.0 ...` está reservado para navegadores web reales y bots verificados por Cloudflare.
* **No suplantes rastreadores conocidos** como `Googlebot` o `Bingbot`.

::: info
No configurar un encabezado `User-Agent` personalizado aumenta las probabilidades de que nuestro sistema automático de detección de abuso marque o bloquee tus solicitudes (`NB-BCFSD`).
:::

## Categorías

Las categorías definen el tipo de contenido que devuelve la API. Cada categoría corresponde a un formato de archivo fijo.

### Imágenes (4)

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

### Campos de respuesta

| Tipo     | Campos                                     |
| -------- | ------------------------------------------ |
| Imágenes | `artist_name`, `artist_href`, `source_url` |
| GIFs     | `anime_name`                               |

Tanto `url` como `dimensions` se incluyen en ambos tipos.
