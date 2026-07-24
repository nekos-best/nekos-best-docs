---
lastUpdated: false
---

# Añadir Librerías No Oficiales

## Guía de Contribución para Librerías No Oficiales

* Las publicaciones **deben** estar escritas en inglés.
* El propietario de la librería debe unirse a nuestro [servidor de Discord](https://nekos.best/discord?ref=docs).
* Las librerías deben seguir buenas prácticas de calidad de código.
* Las librerías **no** deben contener malware u otro comportamiento no seguro.
* La librería debe ser de acceso público y ser mantenida activamente.
* Proporcione instrucciones claras de instalación y uso en su repositorio.

### Nos reservamos el derecho de:

* Modificar su publicación después de la revisión.
* Eliminar su publicación si queda desactualizada, no es segura o no se mantiene.

## Añadir una Nueva Librería No Oficial

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

### 4. Añada su librería no oficial a la barra lateral

1. Abra `/docs/.vitepress/config.mts`.
2. Localice la sección **"Unofficial Libraries"** en la barra lateral.
3. Añada un enlace al repositorio de su librería.
4. Mantenga la lista en orden alfabético por lenguaje de programación.

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
