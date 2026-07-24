# BDFD (Bot Designer For Discord)

## Görsel Alma
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[İşte senin için bir Neko!]
$description[**Kaynak:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## GIF Alma
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID>, <@$mentioned[1]> kişisine sarıldı]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
