---
outline: [2]
---
# Gyakran ismételt kérdések (GYIK)

Az alábbiakban megtalálod a leggyakrabban feltett kérdéseket és a válaszokat rájuk.

## Általános

#### Hol található a szerver?
> A szerver Németországban működik.

#### Mennyire megbízható az API?
> Az API jelenleg **legalább** 99,99%-os éves rendelkezésre állást (uptime) biztosít.

#### Kötelező a forrás megjelölése az API használatakor?
> Nem, a megjelölés nem kötelező, de nagyon hálásak vagyunk érte.

## Képek és GIF-ek

#### Mennyire biztonságosak (SFW) a képek és a GIF-ek?
> Elsődleges célunk a teljes mértékben biztonságos (safe-for-work) tartalom. Sok más anime API-val ellentétben nálunk nem találsz szexuálisan kihívó öltözékű karaktereket (pl. fürdőruha, bikini, fehérnemű, átlátszó vagy túlzottan sokat mutató ruházat).\
> Emellett kizárjuk az olyan tartalmakat is, mint a panty shot (ahol a fehérnemű szándékosan látszik), a hónaljra fókuszáló „bait” képek és hasonló fétisjellegű tartalmak.\
> Minden képet és GIF-et gondosan válogatunk ki, hogy a puszta mennyiség helyett biztonságos, magas minőségű gyűjteményt nyújtsunk.

#### Használhatom a képeket vagy GIF-eket kereskedelmi célra?
> Nem. A kereskedelmi felhasználás tilos, ahogyan azt a [Szolgáltatási feltételek](/legal/tos) is rögzítik.\
> A képek nem a mi tulajdonunkban állnak, kizárólag szórakoztatási célból osztjuk meg őket, az eredeti alkotók megfelelő megjelölésével.

#### Kötelező feltüntetnem a művészek nevét?
> Bár nem kötelező feltüntetned az alkotók nevét, erősen ajánljuk, mivel az API eleve visszaadja ezeket az adatokat.

#### Egy képhez vagy GIF-hez hibás vagy hiányzó forrás tartozik. Hol jelenthetem ezt?
> Ha hibás vagy hiányzó forrást találsz az API-ban, kérjük, jelezd a Discord szerverünkön. Menj az `#api-support` csatornába, és hozz létre egy új bejegyzést.

#### Hozzá tudnátok adni az X kategóriát az API-hoz?
> A kategória-javaslatokat a Discord szerverünkön várjuk, ahol külön `#suggestions` csatornánk van erre a célra.
>
> **Megjegyzés:** Kizárólag SFW kategória-javaslatokat fogadunk el. Az olyan tartalmakra vonatkozó javaslatok, mint a `lick` vagy a `kidnap`, nem felelnek meg az SFW irányelveinknek, ezért elutasítjuk őket.

#### Mikor jelennek meg új képek, GIF-ek vagy kategóriák?
> Nincs fix megjelenési ütemterv vagy pontos időpont (ETA). Minden tartalmat kézzel adunk hozzá, így a frissítések akkor érkeznek, amikor elkészülnek, és a tulajdonosoknak van rá szabadidejük.

#### Hozzájárulhatok képekkel vagy GIF-ekkel az API-hoz?
> Természetesen! Ha szeretnél hozzájárulni, csatlakozz a Discord szerverünkhöz, és hozz létre egy bejegyzést az `#api-support` csatornában.
> A közreműködők külön Contributor rangot kapnak a Discord közösségünkben.

#### Vannak AI által generált képek vagy GIF-ek az API-ban?
> Nem. Az API-ban szereplő minden képet és GIF-et emberi alkotók készítettek. Nem támogatjuk az AI által generált tartalmakat.

#### Felhasználhatom a képeket vagy GIF-eket AI-, ML- vagy LLM-tanításhoz?
> **Nem.** Ahogy a [Szolgáltatási feltételek](/legal/tos) is kimondják, az API tartalmainak felhasználása AI-, gépi tanulási (ML) vagy LLM-modellek tanítására (beleértve az adathalmazok scrapingjét és gyűjtését is) szigorúan tilos, és API-tiltást von maga után. Engedélyt sem tudunk adni rá, mivel a tartalmak nem a mi tulajdonunkban vannak.

#### Cache-elhetem, letölthetem vagy scrape-elhetem a képeket vagy GIF-eket?
> A **JSON API válaszok** (például a metaadatok és az URL-ek) cache-elése kizárólag **privát használatra** engedélyezett, amíg azokat nem teszed közzé és nem terjeszted tovább.\
> Maguknak a **kép- vagy GIF-fájloknak** a cache-elése, letöltése, scrapingje, újrahosztolása vagy tömeges kinyerése a [Szolgáltatási feltételek](/legal/tos) értelmében **szigorúan tilos**, és API-tiltással jár.

#### Mekkorák a GIF-ek?
> A GIF-jeinket kis méretűre optimalizáljuk a gyors betöltés érdekében – egy fájl átlagosan **~900 KB** körüli.

## Hibakeresés / Hibák

#### Miért kapom az „NB-BXIUA” ERR-C hibakódot?
> Az üres vagy hamisított `User-Agent` fejléceket blokkoljuk. Győződj meg róla, hogy a kéréseid érvényes `User-Agent` fejlécet tartalmaznak, és ne hamisíts böngészőazonosítókat, illetve ne add ki magad ismert keresőrobotoknak. Az ajánlott formátumért olvasd el a [User-Agent dokumentációt](/hu/getting-started/api-reference.html#user-agent).

#### Miért kapom az „NB-BCFSD” ERR-C hibakódot?
> Az `NB-BCFSD` azt jelenti, hogy az automatikus visszaélés-észlelő rendszerünk kitiltott az API-ról. Ha úgy gondolod, hogy ez tévedésből történt, lépj velünk kapcsolatba a [Discord szerverünkön](https://nekos.best/discord) vagy írj nekünk a **[contact@nekos.best](mailto:contact@nekos.best)** címre.

#### Miért kapom az „NB-BXASN” ERR-C hibakódot?
> Az `NB-BXASN` azt jelenti, hogy az ASN-ed (Autonomous System Number) tiltólistán van a rendszerünkben. Ahhoz, hogy kéréseket tudj küldeni, az IP-címedet engedélyezési listára (whitelistre) kell tennünk. Kérjük, vedd fel velünk a kapcsolatot a [Discord szerverünkön](https://nekos.best/discord) vagy e-mailben a **[contact@nekos.best](mailto:contact@nekos.best)** címen.

#### VPN-t vagy proxyt használok, és már nem tudok kéréseket küldeni.
> A VPN-ek és proxyk használata engedélyezett, de fontos korlátozásokkal jár. Ezeknek az IP-címeit sok felhasználó osztja meg, így egyetlen rosszindulatú felhasználó miatt is tiltásra kerülhet egy IP-cím, ami mindenki másra is hatással van. A tiltott VPN/proxy IP-címek véglegesen és kivétel nélkül blokkolva maradnak, ráadásul jóval gyakrabban kerülnek fennakadásra, mint a normál IP-címek. Ha ilyen szolgáltatásra támaszkodsz és elveszíted a hozzáférést, sajnos nem tudunk segíteni.
