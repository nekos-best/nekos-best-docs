# BDFD (Bot Designer For Discord)

## Отримання зображення
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Ось Neko для вас!]
$description[**Джерело:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Отримання GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> обійняв(ла) <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Аніме: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
