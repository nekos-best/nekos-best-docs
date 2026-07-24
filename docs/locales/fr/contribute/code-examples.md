---
lastUpdated: false
---

# Ajouter de nouveaux exemples de code

## Directives pour la soumission d'exemples de code

* Les soumissions **doivent** être rédigées en anglais.
* Documentez votre exemple de la manière la plus approfondie possible.
* Assurez-vous que votre code fonctionne et a été correctement testé.

### Nous nous réservons le droit de :

* Ajuster votre soumission après l'envoi.
* Supprimer votre soumission si nécessaire.

## Créer un nouvel exemple de code

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

### 4. Ajoutez votre exemple de code

#### 4.1 Créez le fichier d'exemple

1. Créez un nouveau fichier dans `/docs/examples`, nommé d'après le langage de programmation.
2. Le nom du fichier doit se terminer par `.md`.
3. Ajoutez au moins **deux manières différentes** d'effectuer des appels à l'API.

#### 4.2 Ajoutez l'exemple à la barre latérale

1. Ouvrez `/docs/.vitepress/config.mts`.
2. Recherchez la section **« Exemples de code »** dans la barre latérale.
3. Ajoutez votre nouveau fichier à la liste.
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
