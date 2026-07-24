# BDFD (Bot Designer For Discord)

## Pobieranie obrazu
```sass
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Oto Neko dla Ciebie!]
$description[**Źródło:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Pobieranie GIF-a
```sass
$nomention
$httpGet[https://nekos.best/api/v2/hug]
$description[<@$authorID> przytulił(a) <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
