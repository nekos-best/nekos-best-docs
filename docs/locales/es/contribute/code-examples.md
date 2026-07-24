---
lastUpdated: false
---

# Añadir Nuevos Ejemplos de Código

## Guía de Contribución para Ejemplos de Código

* Las publicaciones **deben** estar escritas en inglés.
* Documente su ejemplo lo más detalladamente posible.
* Asegúrese de que su código funcione y haya sido probado correctamente.

### Nos reservamos el derecho de:

* Modificar su publicación después de ser enviada.
* Eliminar su publicación si es necesario.

## Crear un Nuevo Ejemplo de Código

### 1. Haga un fork de este repositorio

### 2. Clone su fork y haga `cd` en el directorio del proyecto

### 3. Instala VitePress

Puedes encontrar los requisitos previos de VitePress en
[la documentación oficial](https://vitepress.dev/guide/getting-started#prerequisites).

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

### 4. Añada su ejemplo de código

#### 4.1 Crea el archivo de ejemplo

1. Cree un nuevo archivo en `/docs/examples` nombrado con el nombre del lenguaje de programación.
2. El nombre del archivo debe terminar en `.md`.
3. Incluye al menos **dos formas diferentes** de realizar llamadas a la API.

#### 4.2 Añada el ejemplo a la barra lateral

1. Abra `/docs/.vitepress/config.mts`.
2. Localice la sección **"Code Examples"** en la barra lateral.
3. Añada su nuevo archivo a la lista.
4. Mantén la lista en orden alfabético por lenguaje de programación.

---

### 5. Inicia el Servidor de Desarrollo

Antes de crear un pull request, verifique localmente que sus cambios no hayan roto nada.

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

### 6. Crea un Pull Request

Envía un pull request al repositorio original.
