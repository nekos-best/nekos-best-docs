# BDFD (Bot Designer For Discord)

## 获取图片
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[为你准备的 Neko!]
$description[**来源:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## 获取 GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> 拥抱了 <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - 动漫: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
