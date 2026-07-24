---
lastUpdated: false
---

# Neue Code-Beispiele hinzufügen

## Richtlinien für die Beitragseinreichung von Code-Beispielen

* Einreichungen **müssen** auf Englisch verfasst sein.
* Dokumentieren Sie Ihr Beispiel so gründlich wie möglich.
* Stellen Sie sicher, dass Ihr Code funktioniert und ordnungsgemäß getestet wurde.

### Wir behalten uns das Recht vor:

* Ihre Einreichung nach der Übermittlung anzupassen.
* Ihre Einreichung bei Bedarf zu entfernen.

## Erstellen eines neuen Code-Beispiels

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

### 4. Fügen Sie Ihr Code-Beispiel hinzu

#### 4.1 Erstellen Sie die Beispieldatei

1. Erstellen Sie eine neue Datei in `/docs/examples`, benannt nach der Programmiersprache.
2. Der Dateiname muss auf `.md` enden.
3. Fügen Sie mindestens **zwei verschiedene Möglichkeiten** hinzu, um API-Aufrufe durchzuführen.

#### 4.2 Fügen Sie das Beispiel zur Seitenleiste hinzu

1. Öffnen Sie `/docs/.vitepress/config.mts`.
2. Suchen Sie den Abschnitt **„Code-Beispiele“** in der Seitenleiste.
3. Fügen Sie Ihre neue Datei zur Liste hinzu.
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
