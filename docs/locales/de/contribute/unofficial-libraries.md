---
lastUpdated: false
---

# Inoffizielle Bibliotheken hinzufügen

## Richtlinien für die Beitragseinreichung inoffizieller Bibliotheken

* Einreichungen **müssen** auf Englisch verfasst sein.
* Der Besitzer der Bibliothek muss unserem [Discord-Server](https://nekos.best/discord?ref=docs) beitreten.
* Bibliotheken müssen gute Code-Qualitätsstandards einhalten.
* Bibliotheken dürfen **keine** Malware oder sonstiges unsicheres Verhalten enthalten.
* Die Bibliothek muss öffentlich zugänglich sein und aktiv gewartet werden.
* Stellen Sie in Ihrem Repository klare Installations- und Nutzungsanweisungen bereit.

### Wir behalten uns das Recht vor:

* Ihre Einreichung nach der Überprüfung anzupassen.
* Ihre Einreichung zu entfernen, wenn sie veraltet, unsicher oder ungewartet wird.

## Hinzufügen einer neuen inoffiziellen Bibliothek

### 1. Forken Sie dieses Repository

### 2. Klonen Sie Ihren Fork und wechseln Sie mit `cd` in das Projektverzeichnis

### 3. Installieren Sie VitePress

Die Voraussetzungen für VitePress finden Sie in [der offiziellen Dokumentation](https://vitepress.dev/guide/getting-started#prerequisites).

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

### 4. Fügen Sie Ihre inoffizielle Bibliothek zur Seitenleiste hinzu

1. Öffnen Sie `/docs/.vitepress/config.mts`.
2. Suchen Sie den Abschnitt **„Inoffizielle Bibliotheken“** in der Seitenleiste.
3. Fügen Sie einen Link zum Repository Ihrer Bibliothek hinzu.
4. Halten Sie die Liste in alphabetischer Reihenfolge nach Programmiersprache.

---

### 5. Starten Sie den Entwicklungsserver

Bevor Sie einen Pull Request erstellen, überprüfen Sie lokal, ob Ihre Änderungen nichts beschädigt haben.

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

### 6. Erstellen Sie einen Pull Request

Reichen Sie einen Pull Request beim ursprünglichen Repository ein.
