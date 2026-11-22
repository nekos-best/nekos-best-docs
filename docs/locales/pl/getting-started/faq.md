---
outline: [2]
---
# Najczęściej zadawane pytania (FAQ)

Poniżej znajdziesz odpowiedzi na najczęstsze pytania.

## Ogólne

#### Gdzie znajduje się serwer?
> Serwer jest hostowany w Niemczech.

#### Jak niezawodne jest API?
> Nasze API utrzymuje obecnie dostępność (uptime) na poziomie **co najmniej** 99,99% w skali roku.

#### Czy korzystanie z API wymaga podawania autorstwa?
> Nie, podawanie autorstwa nie jest wymagane, ale jest mile widziane.

## Obrazy i GIF-y

#### Jak bezpieczne są obrazy i GIF-y?
> Stawiamy wyłącznie na treści całkowicie bezpieczne (SFW). W przeciwieństwie do wielu innych API anime, nie znajdziesz tu postaci w sugestywnych strojach (np. kostiumach kąpielowych, bikini, bieliźnie, przezroczystych ubraniach czy zbyt skąpych strojach).\
> Wykluczamy też treści takie jak ujęcia na bieliznę (*panty shots*), prowokacyjne ujęcia pach oraz inne materiały o charakterze fetyszowym.\
> Każdy obraz i GIF dobieramy ręcznie, stawiając na bezpieczeństwo i wysoką jakość zamiast samej liczby plików.

#### Czy mogę używać obrazów lub GIF-ów komercyjnie?
> Nie. Użytek komercyjny jest zabroniony zgodnie z naszym [Regulaminem](/legal/tos).\
> Obrazy nie są naszą własnością i są udostępniane wyłącznie w celach rozrywkowych, z odpowiednim wskazaniem oryginalnych twórców.

#### Czy muszę podawać informacje o autorach?
> Nie ma takiego obowiązku, ale gorąco to zalecamy — API już dostarcza te informacje w odpowiedzi.

#### Obraz lub GIF ma błędne albo brakujące źródło. Gdzie to zgłosić?
> Jeśli zauważysz błędne lub brakujące źródło w API, zgłoś to na naszym serwerze Discord. Wejdź na kanał `#api-support` i utwórz nowy post.

#### Czy możecie dodać X do API?
> Propozycje nowych kategorii przesyłaj na naszym serwerze Discord na dedykowanym kanale `#suggestions`.
>
> **Uwaga:** Przyjmujemy wyłącznie propozycje kategorii SFW. Pomysły obejmujące treści takie jak *lick* (lizanie) czy *kidnap* (porwanie) nie są zgodne z naszymi zasadami SFW i zostaną odrzucone.

#### Kiedy pojawiają się nowe obrazy, GIF-y lub kategorie?
> Nie ma stałego harmonogramu wydań ani konkretnych terminów (ETA). Wszystkie treści dodajemy ręcznie, więc aktualizacje pojawiają się, gdy są gotowe i gdy opiekunowie projektu mają na to wolny czas.

#### Czy mogę dodać własne obrazy lub GIF-y do API?
> Jak najbardziej! Jeśli chcesz pomóc, dołącz do naszego serwera Discord i utwórz post na kanale `#api-support`.\
> Osoby współtworzące bazę otrzymują specjalną rolę Contributor na naszym Discordzie.

#### Czy w API znajdują się obrazy lub GIF-y wygenerowane przez AI?
> Nie. Wszystkie obrazy i GIF-y w API zostały stworzone przez ludzi. Nie akceptujemy treści generowanych przez AI.

#### Czy mogę używać obrazów lub GIF-ów do trenowania modeli AI, ML lub LLM?
> **Nie.** Zgodnie z naszym [Regulaminem](/legal/tos) wykorzystywanie treści z API do trenowania modeli AI, uczenia maszynowego (ML) lub LLM (w tym scrapowanie i zbieranie zbiorów danych) jest surowo zabronione i skutkuje banem API. Nie możemy udzielić zgody, ponieważ nie jesteśmy właścicielami tych treści.

#### Czy mogę cache'ować, pobierać lub scrapować obrazy i GIF-y?
> Cache'owanie **odpowiedzi JSON z API** (takich jak metadane i adresy URL) jest dozwolone wyłącznie na **użytek prywatny**, pod warunkiem że nie są one upubliczniane ani redystrybuowane.\
> Cache'owanie, pobieranie, scrapowanie, rehostowanie ani masowe pozyskiwanie **samych plików obrazów lub GIF-ów** jest **surowo zabronione** zgodnie z naszym [Regulaminem](/legal/tos) i skutkuje banem API.

#### Ile ważą GIF-y?
> Nasze GIF-y są lekkie i zoptymalizowane pod kątem szybkiego ładowania — średnio zajmują około **~900 KB** na plik.

## Debugowanie i błędy

#### Dlaczego otrzymuję kod ERR-C "NB-BXIUA"?
> Puste lub sfałszowane nagłówki `User-Agent` są blokowane. Upewnij się, że Twoje zapytania zawierają poprawny nagłówek `User-Agent`, oraz nie podszywaj się pod przeglądarki ani znane crawlery. Sprawdź naszą [dokumentację User-Agent](/pl/getting-started/api-reference.html#user-agent), aby poznać zalecany format.

#### Dlaczego otrzymuję kod ERR-C "NB-BCFSD"?
> `NB-BCFSD` oznacza, że dostęp do API został zablokowany przez nasz automatyczny system wykrywania nadużyć. Jeśli uważasz, że to pomyłka, skontaktuj się z nami na [serwerze Discord](https://nekos.best/discord) lub napisz na **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Dlaczego otrzymuję kod ERR-C "NB-BXASN"?
> `NB-BXASN` oznacza, że Twój ASN (Autonomous System Number) jest zablokowany w naszym systemie. Aby wysyłać zapytania, Twój adres IP musi zostać dodany do białej listy (whitelisty). Skontaktuj się z nami na [serwerze Discord](https://nekos.best/discord) lub napisz na **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Korzystam z VPN lub proxy i nie mogę już wysyłać zapytań.
> VPN-y i serwery proxy są dozwolone, ale wiążą się z istotnymi ograniczeniami. Ich adresy IP są współdzielone przez wielu użytkowników, więc jedna osoba nadużywająca API może doprowadzić do zablokowania adresu IP dla wszystkich pozostałych. Zablokowane adresy IP VPN/proxy otrzymują permanentny ban bez wyjątków i są oznaczane znacznie częściej niż zwykłe adresy IP. Jeśli korzystasz z takiego rozwiązania i utracisz dostęp, niestety nic nie możemy zrobić.
