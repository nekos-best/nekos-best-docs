---
outline: [2]
---
# Domande frequenti (FAQ)

Qui trovi le risposte alle domande più comuni.

## Generali

#### Dove si trova il server?
> Il server è ospitato in Germania.

#### Quanto è affidabile l'API?
> La nostra API mantiene attualmente un uptime **di almeno** il 99,99% all'anno.

#### È richiesta l'attribuzione per usare l'API?
> No, non è obbligatoria, ma è sempre molto apprezzata.

## Immagini & GIF

#### Quanto sono sicure (SFW) le immagini e le GIF?
> Diamo priorità a contenuti completamente sicuri e adatti a tutti (SFW). A differenza di molte altre API anime, non troverai personaggi in abiti sessualmente allusivi (come costumi da bagno, bikini, biancheria intima, vestiti trasparenti o troppo scoperti).\
> Escludiamo inoltre contenuti come panty shot (in cui l'intimo è intenzionalmente visibile), contenuti "bait" incentrati sulle ascelle e altri contenuti a carattere feticista.\
> Ogni immagine e GIF viene selezionata con cura per garantire contenuti sicuri e di alta qualità, anziché puntare solo sulla quantità.

#### Posso usare le immagini o le GIF a scopo commerciale?
> No. L'uso commerciale è vietato come indicato nei nostri [Termini di servizio](/legal/tos).\
> Le immagini non sono di nostra proprietà e vengono condivise esclusivamente a scopo di intrattenimento, con i dovuti crediti agli autori originali.

#### Sono obbligato a includere i crediti degli artisti?
> Non è obbligatorio, ma te lo consigliamo vivamente, visto che l'API fornisce già queste informazioni.

#### C'è una fonte errata o mancante per un'immagine o una GIF. Dove posso segnalarlo?
> Se noti una fonte errata o mancante nell'API, segnalalo sul nostro server Discord creando un nuovo post nel canale `#api-support`.

#### Potete aggiungere X all'API?
> Puoi inviare suggerimenti per nuove categorie sul nostro server Discord, nel canale dedicato `#suggestions`.
>
> **Nota:** Accettiamo solo suggerimenti di categorie SFW. Proposte con contenuti come "lick" o "kidnap" non rientrano nelle nostre linee guida SFW e verranno rifiutate.

#### Quando verranno rilasciate nuove immagini, GIF o categorie?
> Non esiste un calendario fisso né una data stimata (ETA). Tutti i contenuti vengono aggiunti manualmente e gli aggiornamenti vengono pubblicati quando sono pronti e compatibilmente con il tempo libero del team.

#### Posso contribuire con immagini o GIF all'API?
> Certamente! Se vuoi contribuire, unisciti al nostro server Discord e crea un post in `#api-support`.
> Chi contribuisce riceve un ruolo speciale Contributor nella nostra community Discord.

#### Ci sono immagini o GIF generate dall'IA nell'API?
> No. Tutte le immagini e le GIF presenti nell'API sono realizzate da artisti umani. Non supportiamo contenuti generati dall'IA.

#### Posso usare le immagini o le GIF per addestrare modelli di IA, ML o LLM?
> **No.** Come indicato nei nostri [Termini di servizio](/legal/tos), utilizzare i contenuti dell'API per addestrare modelli di intelligenza artificiale, machine learning o LLM (inclusi lo scraping o la raccolta di dataset) è severamente vietato e comporta il ban dall'API. Non possiamo concedere autorizzazioni, poiché non siamo proprietari dei contenuti.

#### Posso mettere in cache, scaricare o fare scraping delle immagini o delle GIF?
> Mettere in cache le **risposte JSON dell'API** (come metadati e URL) è consentito solo per **uso privato**, purché non vengano rese pubbliche né ridistribuite.\
> Mettere in cache, scaricare, fare scraping, ri-hostare o estrarre in massa i **file immagine o GIF effettivi** è **severamente vietato** secondo i nostri [Termini di servizio](/legal/tos) e comporta il ban dall'API.

#### Quanto sono grandi le GIF?
> Le nostre GIF sono leggere e ottimizzate per un caricamento rapido, con una dimensione media di circa **~900 KB** per file.

## Debug / Errori

#### Perché ricevo il codice ERR-C "NB-BXIUA"?
> Gli header `User-Agent` vuoti o falsificati vengono bloccati. Assicurati che le tue richieste includano un header `User-Agent` valido ed evita di falsificare stringhe di browser o impersonare crawler noti. Consulta la nostra [documentazione su User-Agent](/it/getting-started/api-reference.html#user-agent) per il formato consigliato.

#### Perché ricevo il codice ERR-C "NB-BCFSD"?
> `NB-BCFSD` indica che sei stato bannato dall'API dal nostro sistema automatico di rilevamento degli abusi. Se ritieni si tratti di un errore, contattaci sul nostro [server Discord](https://nekos.best/discord) o scrivici a **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Perché ricevo il codice ERR-C "NB-BXASN"?
> `NB-BXASN` indica che il tuo ASN (Autonomous System Number) è bannato nel nostro sistema. Per effettuare richieste, il tuo indirizzo IP dovrà essere inserito nella whitelist. Contattaci sul nostro [server Discord](https://nekos.best/discord) o scrivici a **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Uso una VPN o un proxy, ma ora non riesco più a inviare richieste.
> VPN e proxy sono consentiti, ma comportano alcune limitazioni importanti. I loro indirizzi IP sono condivisi tra molti utenti: basta un solo malintenzionato per far bannare un IP, bloccando anche tutti gli altri che lo usano. Gli IP di VPN e proxy bannati restano bloccati in modo permanente, senza eccezioni, e vengono segnalati molto più spesso rispetto agli IP normali. Se dipendi da una VPN o da un proxy e perdi l'accesso, purtroppo non possiamo intervenire.
