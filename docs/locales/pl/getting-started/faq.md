---
outline: [2]
---
# Najczęściej zadawane pytania (FAQ)

Poniżej znajduje się lista najczęściej zadawanych pytań.

## Ogólne

#### Gdzie znajduje się serwer?
> Serwer jest hostowany w Niemczech.

#### Jak niezawodne jest API?
> Nasze API utrzymuje obecnie dostępność na poziomie **co najmniej** 99,99% rocznie.

#### Czy wymagane jest przypisanie autorstwa przy korzystaniu z API?
> Nie, przypisanie autorstwa nie jest wymagane, ale jest mile widziane.

## Obrazy i GIF-y

#### Jak bezpieczne są obrazy i GIF-y?
> Priorytetowo traktujemy treści całkowicie bezpieczne do pracy (SFW). W przeciwieństwie do wielu innych API anime, nie znajdziesz u nas postaci w sugestywnych strojach (np. strój kąpielowy, bikini, bielizna, przezroczyste ubrania lub zbyt skąpe stroje).\
> Ponadto wykluczamy treści takie jak ujęcia na bieliznę (panty shots), prowokacyjne ujęcia pach oraz podobne treści nastawione na fetysze.\
> Każdy obraz i GIF jest starannie dobierany, aby zapewnić bezpieczną i wysoką jakość treści zamiast czystej ilości.

#### Czy mogę używać obrazów lub GIF-ów komercyjnie?
> Nie. Użycie komercyjne jest zabronione, jak określono w [Warunkach korzystania](/legal/tos).\
> Obrazy nie są naszą własnością i są udostępniane wyłącznie w celach rozrywkowych, z odpowiednim uznaniem dla oryginalnych twórców.

#### Czy muszę dołączać informacje o autorach?
> Chociaż nie masz obowiązku dołączania informacji o autorach, gorąco to zalecamy, ponieważ API dostarcza już te informacje.

#### Dla obrazu lub GIF-a podano nieprawidłowe lub brakujące źródło. Gdzie należy to zgłosić?
> Jeśli zauważysz nieprawidłowe lub brakujące źródło w API, zgłoś to na naszym serwerze Discord. Przejdź do kanału `#api-support` i utwórz nowy post.

#### Czy możecie dodać X do API?
> Sugestie dotyczące kategorii należy przesyłać za pośrednictwem naszego serwera Discord, gdzie mamy dedykowany kanał `#suggestions`.
>
> **Uwaga:** Akceptowane są wyłącznie sugestie kategorii SFW. Sugestie obejmujące treści takie jak lizanie (lick) czy porwanie (kidnap) nie są zgodne z naszymi wytycznymi SFW i zostaną odrzucone.

#### Kiedy zostaną wydane nowe obrazy, GIF-y lub kategorie?
> Nie ma stałego harmonogramu wydań ani przewidywanego czasu (ETA). Wszystkie treści są dodawane ręcznie, a aktualizacje są wprowadzane, gdy są gotowe i gdy właściciele mają na to czas.

#### Czy mogę przekazać obrazy lub GIF-y do API?
> Zdecydowanie tak. Jeśli chcesz pomóc, dołącz do naszego serwera Discord i utwórz post w `#api-support`.\
> Osoby wspierające otrzymują specjalną rolę Contributor w naszej społeczności Discord.

#### Czy w API znajdują się obrazy lub GIF-y wygenerowane przez AI?
> Nie. Wszystkie obrazy i GIF-y w API są tworzone przez ludzkich artystów. Nie wspieramy treści generowanych przez sztuczną inteligencję.

## Debugowanie / Błędy

#### Dlaczego otrzymuję kod ERR-C "NB-BXIUA"?
> Chociaż puste nagłówki `User-Agent` są blokowane od sierpnia 2024 r., w czerwcu 2026 r. wprowadzono nowe wytyczne dotyczące formatowania. Upewnij się, że postępujesz zgodnie z wymaganym formatem, ponieważ użycie domyślnych wartości biblioteki lub nieprawidłowego formatu może skutkować automatycznym odrzuceniem żądań. Zapoznaj się z naszą [dokumentacją User-Agent](/pl/getting-started/api-reference.html#user-agent), aby upewnić się, że Twoja konfiguracja jest poprawna.

#### Używam VPN lub proxy, ale teraz nie mogę już wysyłać żądań.
> VPN i serwery proxy są dozwolone, ale wiążą się z pewnymi ważnymi ograniczeniami. Ich adresy IP są współdzielone przez wielu użytkowników, co oznacza, że jeden zły użytkownik może doprowadzić do zablokowania adresu IP i wpłynąć na wszystkich innych z niego korzystających. Zablokowane adresy IP VPN/proxy są blokowane na stałe bez wyjątków i są oznaczane znacznie częściej niż zwykłe adresy IP. Jeśli polegasz na VPN/proxy i stracisz dostęp, niestety nic nie możemy zrobić.
