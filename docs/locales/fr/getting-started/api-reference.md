---
outline: [2, 3]
---

# Référence de l'API

## Limites de débit (Rate Limits)

Chaque réponse contient les en-têtes suivants pour vous aider à suivre et à respecter les limites de débit :

| En-tête                 | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| `x-rate-limit-limit`    | Durée de la fenêtre actuelle de limite de débit (ex. : `1m`)       |
| `x-rate-limit-remaining`| Requêtes restantes dans la fenêtre actuelle                        |
| `x-rate-limit-reset`    | Horodatage ISO 8601 de la réinitialisation de la fenêtre           |

### Limites

| Point de terminaison | Limite                                      |
| -------------------- | ------------------------------------------- |
| `/search`            | 7 requêtes toutes les 5 secondes            |
| `/:category`         | 200 requêtes par minute (par catégorie)     |

## User-Agent

Toutes les requêtes doivent inclure un en-tête `User-Agent`. Veuillez utiliser le format suivant : `NOM_APP (INFO_CONTACT)`.Par exemple : `NekoApp (https://example.com)` ou `NekoApp (dev@example.com)`

**Directives de nommage :**

* **Soyez spécifique :** N'utilisez pas de noms génériques tels que « Bot Discord », « Bot WhatsApp » ou « Bot Telegram ». Votre application doit avoir un nom unique.
* **Évitez les espaces réservés :** N'utilisez pas de chaînes telles que `test`, `bot` ou la valeur d'exemple ci-dessus.
* **Pas de valeurs par défaut de bibliothèques :** Évitez les chaînes par défaut des bibliothèques telles que `python-requests`, `okhttp`, `axios`, `node` ou `Go-http-client`.

**Options d'informations de contact :**L'information de contact n'a pas besoin d'être un site web traditionnel. L'une des formes suivantes est acceptable pour l'identification :

* Une adresse e-mail de contact direct.
* Un site web de projet ou une URL de dépôt **public** (ex. : GitHub, GitLab).
* Un lien d'invitation de bot ou une page de découverte.
* Une URL d'annuaire (ex. : top.gg ou annuaires similaires).

**Usurpation d'identité et falsification (Spoofing & Impersonation) :**

* **Ne falsifiez pas les chaînes de navigateur.** Le format `Mozilla/5.0 ...` est strictement réservé aux vrais navigateurs web et aux bots vérifiés par Cloudflare.
* **Ne vous faites pas passer pour des robots d'exploration connus**, tels que `Googlebot` ou `Bingbot`.

*Le non-respect de ces directives, ainsi que l'utilisation de valeurs génériques, par défaut ou falsifiées, entraînera très probablement le blocage de vos requêtes.*

## Catégories

Les catégories définissent le type de contenu retourné par l'API. Chaque catégorie est associée à un format de fichier fixe.

### Images

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

### Champs de réponse

| Type   | Champs                                      |
| ------ | ------------------------------------------- |
| Images | `artist_name`, `artist_href`, `source_url`  |
| GIFs   | `anime_name`                                |

`url` et `dimensions` sont inclus dans les deux.
