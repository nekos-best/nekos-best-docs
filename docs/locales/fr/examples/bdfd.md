# BDFD (Bot Designer For Discord)

## Obtenir une image
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Voici un Neko pour toi !]
$description[**Source :** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Obtenir un GIF
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> a fait un câlin à <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime : $httpResult[results;0;anime_name]]
$color[#e91e63]
```
