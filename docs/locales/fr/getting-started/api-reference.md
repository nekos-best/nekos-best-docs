---
outline: [2, 3]
---

# Référence de l'API

## Limites de débit

Chaque réponse inclut les en-têtes suivants pour vous permettre de suivre et de respecter les limites de débit :

| En-tête                  | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| `x-rate-limit-limit`     | Durée de la fenêtre actuelle de limite de débit (ex. : `1m`)     |
| `x-rate-limit-remaining` | Nombre de requêtes restantes dans la fenêtre actuelle            |
| `x-rate-limit-reset`     | Horodatage ISO 8601 indiquant la réinitialisation de la fenêtre  |

### Limites

| Point de terminaison           | Limite                                                                |
| ------------------------------ | --------------------------------------------------------------------- |
| `/search`                      | 7 requêtes toutes les 5 secondes                                      |
| `/:category`                   | 200 requêtes par minute (par catégorie)                               |
| `/:category/:filename.:format` | 200 requêtes par minute (partagées entre les ressources `.png` et `.gif`) |

## User-Agent

Bien qu'un en-tête `User-Agent` personnalisé ne soit pas obligatoire, nous vous recommandons d'en définir un dans vos requêtes au format suivant : `NOM_APP (INFO_CONTACT)`.\
Par exemple : `NekoApp (https://example.com)` ou `NekoApp (dev@example.com)`

**Recommandations de nommage :**

* **Soyez précis :** Utilisez le vrai nom de votre application plutôt que des libellés génériques comme « Discord Bot », « WhatsApp Bot » ou « Telegram Bot ».
* **Évitez les valeurs fictives :** Évitez les valeurs génériques comme `test`, `bot` ou les exemples ci-dessus.
* **Évitez les valeurs par défaut des bibliothèques :** Privilégiez une valeur personnalisée plutôt que les chaînes par défaut telles que `python-requests`, `okhttp`, `axios`, `node` ou `Go-http-client`.

**Options pour les informations de contact :**\
L'information de contact n'a pas besoin d'être un site web classique. N'importe laquelle des options suivantes convient parfaitement :

* Une adresse e-mail de contact direct.
* Le site web du projet ou l'URL d'un dépôt **public** (ex. : GitHub, GitLab).
* Un lien d'invitation de bot ou une page de présentation.
* L'URL d'une fiche sur un annuaire (ex. : top.gg ou équivalent).

**Usurpation et falsification :**

* **N'imitez pas de chaînes de navigateur.** Le format `Mozilla/5.0 ...` est réservé aux vrais navigateurs web et aux bots vérifiés par Cloudflare.
* **Ne vous faites pas passer pour des robots d'exploration connus**, comme `Googlebot` ou `Bingbot`.

::: info
Ne pas définir d'en-tête `User-Agent` personnalisé augmente le risque d'être signalé ou banni par notre système automatique de détection des abus (`NB-BCFSD`).
:::

## Catégories

Les catégories définissent le type de contenu renvoyé par l'API. Chaque catégorie correspond à un format de fichier fixe.

### Images (4)

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

### Champs de réponse

| Type   | Champs                                      |
| ------ | ------------------------------------------- |
| Images | `artist_name`, `artist_href`, `source_url`  |
| GIFs   | `anime_name`                                |

`url` et `dimensions` sont inclus dans les deux cas.
