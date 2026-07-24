# BDFD (Bot Designer For Discord)

## Mendapatkan Gambar
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Ini Neko untukmu!]
$description[**Sumber:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Mendapatkan GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> memeluk <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
