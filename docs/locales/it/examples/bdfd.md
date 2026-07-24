# BDFD (Bot Designer For Discord)

## Ottenere un'Immagine
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Here is a Neko for you!]
$description[**Source:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Ottenere una GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> hugged <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
