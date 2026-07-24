# BDFD (Bot Designer For Discord)

## Lấy hình ảnh
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Đây là một Neko cho bạn!]
$description[**Nguồn:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Lấy GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> đã ôm <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
