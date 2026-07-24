---
lastUpdated: false
---

# Ajouter des bibliothèques non officielles

## Directives pour la soumission de bibliothèques non officielles

* Les soumissions **doivent** être rédigées en anglais.
* Le propriétaire de la bibliothèque doit rejoindre notre [serveur Discord](https://nekos.best/discord?ref=docs).
* Les bibliothèques doivent respecter de bonnes normes de qualité de code.
* Les bibliothèques ne doivent **pas** contenir de logiciels malveillants ni d'autres comportements non sécurisés.
* La bibliothèque doit être accessible au public et activement maintenue.
* Fournissez des instructions d'installation et d'utilisation claires dans votre dépôt.

### Nous nous réservons le droit de :

* Ajuster votre soumission après révision.
* Supprimer votre soumission si elle devient obsolète, non sécurisée ou non maintenue.

## Ajouter une nouvelle bibliothèque non officielle

### 1. Forkez ce dépôt

### 2. Clonez votre Fork et accédez au répertoire du projet avec `cd`

### 3. Installez VitePress

Vous trouverez les prérequis de VitePress dans [la documentation officielle](https://vitepress.dev/guide/getting-started#prerequisites).

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

### 4. Ajoutez votre bibliothèque non officielle à la barre latérale

1. Ouvrez `/docs/.vitepress/config.mts`.
2. Recherchez la section **« Bibliothèques non officielles »** dans la barre latérale.
3. Ajoutez un lien vers le dépôt de votre bibliothèque.
4. Conservez la liste par ordre alphabétique de langage de programmation.

---

### 5. Lancez le serveur de développement

Avant de créer une Pull Request, vérifiez localement que vos modifications n'ont rien cassé.

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

### 6. Créez une Pull Request

Soumettez une Pull Request vers le dépôt d'origine.
