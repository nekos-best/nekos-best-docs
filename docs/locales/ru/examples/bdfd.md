# BDFD (Bot Designer For Discord)

## Получение изображения
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Вот Неко для тебя!]
$description[**Источник:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Получение GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> обнял(а) <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Аниме: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
