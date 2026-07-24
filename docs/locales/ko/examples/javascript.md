# JavaScript

## fetch 사용하기
```js
fetch('https://nekos.best/api/v2/neko', {
  headers: {
    'User-Agent': 'NekosBest (https://example.com)'
  }
})
  .then(response => response.json())
  .then(json => console.log(json.results[0].url))

// https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```

## async 사용하기
```js
async function getNeko() {
    const response = await fetch('https://nekos.best/api/v2/neko', {
        headers: {
            'User-Agent': 'NekosBest (https://example.com)'
        }
    })
    const json = await response.json()
    console.log(json.results[0].url)
}

await getNeko()

// https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```
