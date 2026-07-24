# BDFD (Bot Designer For Discord)

## Bild abrufen
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Hier ist ein Neko für Sie!]
$description[**Quelle:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## GIF abrufen
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> hat <@$mentioned[1]> umarmt]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
