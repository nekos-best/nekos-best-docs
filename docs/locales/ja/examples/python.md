# Python

## requests を使用する
```py
import requests

resp = requests.get("https://nekos.best/api/v2/neko")
data = resp.json()
print(data["results"][0]["url"])

# https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```

## aiohttp (非同期) を使用する
```py
import aiohttp

async with aiohttp.ClientSession() as session:
    async with session.get("https://nekos.best/api/v2/neko") as resp:
        data = await resp.json()
        print(data["results"][0]["url"])

# https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```
