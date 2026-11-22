---
outline: [2]
---
# Preguntas frecuentes (FAQ)

Aquí encontrarás respuestas a algunas de las preguntas más comunes.

## General

#### ¿Dónde está ubicado el servidor?
> El servidor está alojado en Alemania.

#### ¿Qué tan confiable es la API?
> Nuestra API mantiene actualmente una disponibilidad de **al menos** el 99.99 % anual.

#### ¿Es necesario dar atribución al usar la API?
> No, la atribución no es obligatoria, aunque siempre se agradece.

## Imágenes y GIFs

#### ¿Qué tan seguras son las imágenes y los GIFs?
> Priorizamos contenido completamente apto para todo público (SFW). A diferencia de muchas otras APIs de anime, aquí no encontrarás personajes con atuendos sexualmente sugerentes (p. ej., trajes de baño, bikinis, ropa interior, prendas transparentes o ropa excesivamente reveladora).\
> Además, excluimos contenido como *panty shots* (donde la ropa interior queda visible de forma intencionada), contenido sugestivo centrado en axilas y material similar orientado a fetiches.\
> Cada imagen y GIF se selecciona cuidadosamente para garantizar contenido seguro y de alta calidad, priorizando la calidad sobre la cantidad.

#### ¿Puedo usar las imágenes o GIFs con fines comerciales?
> No. El uso comercial está prohibido según lo establecido en nuestros [Términos de Servicio](/legal/tos).\
> Las imágenes no nos pertenecen y se comparten únicamente con fines de entretenimiento, acreditando debidamente a los creadores originales.

#### ¿Es obligatorio incluir los créditos de los artistas?
> Aunque no es obligatorio incluir los créditos de los artistas, te recomendamos encarecidamente hacerlo, ya que la API ya proporciona esta información.

#### Hay una fuente incorrecta o faltante en una imagen o GIF. ¿Dónde puedo reportarlo?
> Si encuentras una fuente incorrecta o faltante en la API, repórtalo en nuestro servidor de Discord. Ve al canal `#api-support` y crea una nueva publicación.

#### ¿Pueden añadir X a la API?
> Puedes enviar tus sugerencias de categorías a través de nuestro servidor de Discord, donde contamos con el canal dedicado `#suggestions`.
>
> **Nota:** Solo se aceptan sugerencias de categorías SFW. Las propuestas relacionadas con contenido como *lick* (lamer) o *kidnap* (secuestrar) no cumplen con nuestras directrices SFW y serán rechazadas.

#### ¿Cuándo se publican nuevas imágenes, GIFs o categorías?
> No existe un calendario fijo ni una fecha estimada (ETA). Todo el contenido se añade de forma manual y las actualizaciones se publican cuando están listas y los responsables tienen tiempo disponible para trabajar en ellas.

#### ¿Puedo contribuir con imágenes o GIFs a la API?
> ¡Por supuesto! Si quieres colaborar, únete a nuestro servidor de Discord y crea una publicación en `#api-support`.\
> Quienes colaboran reciben un rol especial de Contributor en nuestra comunidad de Discord.

#### ¿Hay imágenes o GIFs generados por IA en la API?
> No. Todas las imágenes y GIFs de la API han sido creados por artistas humanos. No admitimos contenido generado por IA.

#### ¿Puedo usar las imágenes o GIFs para entrenar modelos de IA, ML o LLM?
> **No.** Como se establece en nuestros [Términos de Servicio](/legal/tos), utilizar contenido de la API para entrenar modelos de IA, aprendizaje automático (ML) o LLM (incluido el *scraping* o la recopilación de conjuntos de datos) está estrictamente prohibido y conllevará un bloqueo de la API. No podemos otorgar permiso, ya que no somos propietarios del contenido.

#### ¿Puedo almacenar en caché, descargar o hacer *scraping* de las imágenes o GIFs?
> Almacenar en caché las **respuestas JSON de la API** (como metadatos y URLs) está permitido únicamente para **uso privado**, siempre que no se hagan públicas ni se redistribuyan.\
> Almacenar en caché, descargar, hacer *scraping*, volver a alojar (*rehosting*) o extraer de forma masiva los **archivos de imagen o GIF** está **estrictamente prohibido** según nuestros [Términos de Servicio](/legal/tos) y conllevará un bloqueo de la API.

#### ¿Qué tamaño tienen los GIFs?
> Nuestros GIFs son ligeros y están optimizados para cargar rápido, con un peso promedio de alrededor de **~900 KB** por archivo.

## Depuración y errores

#### ¿Por qué recibo el código ERR-C "NB-BXIUA"?
> Los encabezados `User-Agent` vacíos o falsificados están bloqueados. Asegúrate de que tus solicitudes incluyan un encabezado `User-Agent` válido y evita falsificar cadenas de navegador o suplantar rastreadores conocidos. Consulta nuestra [documentación de User-Agent](/es/getting-started/api-reference.html#user-agent) para ver el formato recomendado.

#### ¿Por qué recibo el código ERR-C "NB-BCFSD"?
> `NB-BCFSD` indica que nuestro sistema automático de detección de abuso bloqueó tu acceso a la API. Si crees que se trata de un error, contáctanos a través de nuestro [servidor de Discord](https://nekos.best/discord) o escríbenos a **[contact@nekos.best](mailto:contact@nekos.best)**.

#### ¿Por qué recibo el código ERR-C "NB-BXASN"?
> `NB-BXASN` indica que tu ASN (Número de Sistema Autónomo) está bloqueado en nuestro sistema. Para poder realizar solicitudes, será necesario añadir tu dirección IP a la lista blanca (*whitelist*). Contáctanos a través de nuestro [servidor de Discord](https://nekos.best/discord) o escríbenos a **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Uso una VPN o un proxy, pero ya no puedo hacer solicitudes.
> El uso de VPNs y proxies está permitido, pero conlleva limitaciones importantes. Sus direcciones IP se comparten entre muchos usuarios, lo que significa que un solo usuario malintencionado puede provocar el bloqueo de una IP y afectar a todos los demás que la utilizan. Las IPs de VPN o proxy bloqueadas quedan restringidas de forma permanente, sin excepciones, y son detectadas con mucha mayor frecuencia que las IPs normales. Si dependes de una y pierdes el acceso, lamentablemente no hay nada que podamos hacer.
