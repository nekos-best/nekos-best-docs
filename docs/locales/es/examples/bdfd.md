# BDFD (Bot Designer For Discord)

## Obtener una Imagen
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[¡Aquí tienes un Neko!]
$description[**Fuente:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Obtener un GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> abrazó a <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
