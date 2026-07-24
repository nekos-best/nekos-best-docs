# BDFD (Bot Designer For Discord)

## Obter uma Imagem
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Aqui está um Neko para você!]
$description[**Fonte:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Obter um GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> abraçou <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
