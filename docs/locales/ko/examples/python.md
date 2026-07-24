# Python

## requests 사용하기
```py
import requests

headers = {
    "User-Agent": "NekosBest (https://example.com)"
}

resp = requests.get("https://nekos.best/api/v2/neko", headers=headers)
data = resp.json()
print(data["results"][0]["url"])

# https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```

## aiohttp (async) 사용하기
```py
import aiohttp

headers = {
    "User-Agent": "NekosBest (https://example.com)"
}

async with aiohttp.ClientSession(headers=headers) as session:
    async with session.get("https://nekos.best/api/v2/neko") as resp:
        data = await resp.json()
        print(data["results"][0]["url"])

# https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```
