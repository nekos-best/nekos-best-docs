---
outline: [2]
---
# Frequently Asked Questions (FAQ)

Listed below are some of the most commonly asked questions.

## General

#### Where is the server located?
> The server is hosted in Germany.

#### How reliable is the API?
> Our API currently maintains an uptime of **at least** 99.99% annually.

#### Is attribution required for using the API?
> No, attribution is not required, but it is appreciated.

## Images & GIFs

#### How safe are the images and GIFs?
> We prioritize fully safe-for-work content. Unlike many other anime APIs, you won’t find characters in sexually suggestive outfits (e.g., swimsuits, bikinis, underwear, transparent clothing, or overly revealing outfits).\
> Additionally, we exclude content such as panty shots (where underwear is intentionally visible), armpit-focused “bait,” and similar fetish-oriented content.\
> Every image and GIF is carefully selected to ensure safe, high-quality content rather than sheer quantity.

#### Can I use the images or GIFs commercially?
> No. Commercial use is prohibited as outlined in the [Terms of Service](/legal/tos).\
> The images are not owned by us and are shared purely for entertainment purposes, with proper credits to the original creators.

#### Am I required to include the artists’ credits?
> While you are not required to include the artists’ credits, we strongly recommend doing so, as the API already provides this information.

#### There is an incorrect or missing source listed for an image or GIF. Where should I report this?
> If you notice an incorrect or missing source in the API, please report it in our Discord server. Go to the `#api-support` channel and create a new post.

#### Can you add X to the API?
> Category suggestions should be submitted via our Discord server, where we have a dedicated channel for `#suggestions`.
>
> **Note:** Only SFW category suggestions are accepted. Suggestions involving content such as lick or kidnap do not align with our SFW guidelines and will be rejected.

#### When will new images, GIFs, or categories be released?
> There is no fixed release schedule or ETA. All content is added manually, and updates are made when they are ready and when the owners have the available personal time to work on them.

#### Can I contribute images or GIFs to the API?
> Absolutely. If you’d like to contribute, please join our Discord server and create a post in `#api-support`.
> Contributors receive a special Contributor role in our Discord community.

#### Are there AI generated images or GIFs in the API?
> No. All images and GIFs in the API are created by human artists. We do not support AI-generated content.

#### Can I use the images or GIFs for AI, ML, or LLM training?
> **No.** As stated in our [Terms of Service](/legal/tos), using content from the API to train AI, machine learning, or LLM models (including scraping or collecting datasets) is strictly prohibited and will result in an API ban. Permission cannot be granted, as we do not own the content.

#### Can I cache, download, or scrape the images or GIFs?
> Caching **JSON API responses** (such as metadata and URLs) is permitted for **private use** only, as long as they are not made public or redistributed.\
> Caching, downloading, scraping, rehosting, or bulk-extracting the **actual image or GIF assets** is **strictly forbidden** as outlined in our [Terms of Service](/legal/tos) and will result in an API ban.

#### How large are the GIFs?
> Our GIFs are kept small and optimized for fast loading, averaging around **~900 KB** per file.

## Debugging / Errors

#### Why am I getting the ERR-C code "NB-BXIUA"?
> Empty or spoofed `User-Agent` headers are blocked. Make sure your requests include a valid `User-Agent` header and avoid spoofing browser strings or impersonating known crawlers. Please review our [User-Agent documentation](/getting-started/api-reference.html#user-agent) for recommended formatting.

#### Why am I getting the ERR-C code "NB-BCFSD"?
> `NB-BCFSD` means you were API banned by our automated abuse detection. If you believe this was a mistake, please reach out via our [Discord server](https://nekos.best/discord) or email us at **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Why am I getting the ERR-C code "NB-BXASN"?
> `NB-BXASN` means your ASN (Autonomous System Number) is banned in our system. To make requests, your IP address will need to be whitelisted. Please contact us via our [Discord server](https://nekos.best/discord) or email us at **[contact@nekos.best](mailto:contact@nekos.best)**.

#### I use a VPN or proxy, but now I cannot make requests anymore.
> VPNs and proxies are permitted, but come with some important limitations. Their IP addresses are shared across many users, meaning a single bad actor can get an IP banned and affect everyone else using it. Banned VPN/proxy IPs are permanently blocked with no exceptions, and are flagged at a much higher rate than regular IPs. If you rely on one and lose access, unfortunately there is nothing we can do.
