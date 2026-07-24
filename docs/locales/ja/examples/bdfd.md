# BDFD (Bot Designer For Discord)

## 画像を取得する
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Neko 画像をお届け!]
$description[**ソース:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## GIF を取得する
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> が <@$mentioned[1]> をハグしました]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - アニメ: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
