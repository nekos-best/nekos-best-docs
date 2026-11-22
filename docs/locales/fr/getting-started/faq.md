---
outline: [2]
---
# Foire aux questions (FAQ)

Vous trouverez ci-dessous les réponses aux questions les plus fréquemment posées.

## Général

#### Où est hébergé le serveur ?
> Le serveur est hébergé en Allemagne.

#### Quelle est la fiabilité de l'API ?
> Notre API maintient actuellement une disponibilité d'**au moins** 99,99 % par an.

#### L'attribution est-elle obligatoire pour utiliser l'API ?
> Non, elle n'est pas obligatoire, mais nous l'apprécions beaucoup.

## Images & GIFs

#### Les images et les GIFs sont-ils vraiment SFW ?
> Nous privilégions un contenu intégralement tout public (SFW). Contrairement à de nombreuses autres API d'anime, vous ne trouverez pas de personnages en tenues suggestives (maillots de bain, bikinis, sous-vêtements, vêtements transparents ou trop dénudés).\
> Nous excluons également les contenus tels que les panty shots (où les sous-vêtements sont volontairement visibles), le « bait » axé sur les aisselles et tout contenu similaire à caractère fétichiste.\
> Chaque image et chaque GIF est sélectionné avec soin pour privilégier la qualité et la sécurité plutôt que la quantité.

#### Puis-je utiliser les images ou les GIFs à des fins commerciales ?
> Non. L'utilisation commerciale est interdite conformément à nos [Conditions d'utilisation](/legal/tos).\
> Les images ne nous appartiennent pas et sont partagées uniquement à des fins de divertissement, avec les crédits dus aux créateurs originaux.

#### Suis-je obligé d'afficher les crédits des artistes ?
> Ce n'est pas obligatoire, mais nous vous le recommandons vivement, d'autant plus que l'API fournit déjà ces informations.

#### La source d'une image ou d'un GIF est incorrecte ou manquante. Où le signaler ?
> Si vous remarquez une source erronée ou manquante dans l'API, signalez-le sur notre serveur Discord en créant un post dans le salon `#api-support`.

#### Pouvez-vous ajouter X à l'API ?
> Les suggestions de catégories se font sur notre serveur Discord, dans le salon dédié `#suggestions`.
>
> **Remarque :** Seules les suggestions de catégories SFW sont acceptées. Les propositions impliquant des thèmes comme « lick » ou « kidnap » ne respectent pas nos règles SFW et seront refusées.

#### Quand de nouvelles images, GIFs ou catégories seront-ils ajoutés ?
> Il n'y a pas de calendrier fixe ni d'estimation (ETA). Tous les contenus sont ajoutés manuellement : les mises à jour sont publiées lorsqu'elles sont prêtes et selon la disponibilité de l'équipe.

#### Puis-je contribuer avec mes propres images ou GIFs ?
> Bien sûr ! Si vous souhaitez contribuer, rejoignez notre serveur Discord et créez un post dans `#api-support`.
> Les contributeurs reçoivent un rôle spécial de Contributeur sur notre serveur Discord.

#### L'API contient-elle des images ou des GIFs générés par IA ?
> Non. Toutes les images et tous les GIFs de l'API sont créés par des artistes humains. Nous ne prenons pas en charge le contenu généré par IA.

#### Puis-je utiliser les images ou les GIFs pour entraîner une IA, un modèle de ML ou un LLM ?
> **Non.** Comme indiqué dans nos [Conditions d'utilisation](/legal/tos), l'utilisation du contenu de l'API pour entraîner des modèles d'IA, de machine learning ou des LLM (y compris le scraping ou la constitution de jeux de données) est strictement interdite et entraîne un bannissement de l'API. Aucune autorisation ne peut être accordée, car nous ne sommes pas propriétaires de ces contenus.

#### Puis-je mettre en cache, télécharger ou scraper les images ou les GIFs ?
> La mise en cache des **réponses JSON de l'API** (comme les métadonnées et les URL) est autorisée pour un **usage privé** uniquement, à condition qu'elles ne soient ni rendues publiques ni redistribuées.\
> La mise en cache, le téléchargement, le scraping, le réhébergement ou l'extraction en masse des **fichiers image ou GIF eux-mêmes** sont **strictement interdits** conformément à nos [Conditions d'utilisation](/legal/tos) et entraînent un bannissement de l'API.

#### Quelle est la taille des GIFs ?
> Nos GIFs sont légers et optimisés pour un chargement rapide, avec une taille moyenne d'environ **~900 Ko** par fichier.

## Débogage / Erreurs

#### Pourquoi est-ce que je reçois le code ERR-C "NB-BXIUA" ?
> Les en-têtes `User-Agent` vides ou falsifiés sont bloqués. Assurez-vous que vos requêtes incluent un en-tête `User-Agent` valide et évitez d'imiter des chaînes de navigateur ou de vous faire passer pour des robots d'exploration connus. Consultez notre [documentation User-Agent](/fr/getting-started/api-reference.html#user-agent) pour connaître le format recommandé.

#### Pourquoi est-ce que je reçois le code ERR-C "NB-BCFSD" ?
> `NB-BCFSD` signifie que vous avez été banni de l'API par notre système automatique de détection des abus. Si vous pensez qu'il s'agit d'une erreur, contactez-nous sur notre [serveur Discord](https://nekos.best/discord) ou par e-mail à **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Pourquoi est-ce que je reçois le code ERR-C "NB-BXASN" ?
> `NB-BXASN` signifie que votre ASN (Autonomous System Number) est banni de notre système. Pour effectuer des requêtes, votre adresse IP devra être ajoutée à la liste blanche. Contactez-nous sur notre [serveur Discord](https://nekos.best/discord) ou par e-mail à **[contact@nekos.best](mailto:contact@nekos.best)**.

#### J'utilise un VPN ou un proxy, mais je ne peux plus effectuer de requêtes.
> Les VPN et proxys sont autorisés, mais comportent des limites importantes. Leurs adresses IP étant partagées entre de nombreux utilisateurs, il suffit d'un seul abus pour qu'une IP soit bannie, ce qui affecte toutes les autres personnes qui l'utilisent. Les IP de VPN/proxy bannies sont bloquées définitivement, sans exception, et sont signalées beaucoup plus souvent que les IP classiques. Si vous utilisez un VPN ou un proxy et perdez l'accès, nous ne pouvons malheureusement rien y faire.
