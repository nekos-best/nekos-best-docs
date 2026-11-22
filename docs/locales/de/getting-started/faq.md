---
outline: [2]
---
# Häufig gestellte Fragen (FAQ)

Hier findest du Antworten auf einige der am häufigsten gestellten Fragen.

## Allgemein

#### Wo steht der Server?
> Der Server wird in Deutschland gehostet.

#### Wie zuverlässig ist die API?
> Unsere API erreicht derzeit eine Verfügbarkeit von **mindestens** 99,99 % pro Jahr.

#### Ist eine Quellenangabe für die Nutzung der API erforderlich?
> Nein, eine Quellenangabe ist nicht erforderlich, wir freuen uns aber sehr darüber.

## Bilder & GIFs

#### Wie jugendfrei (SFW) sind die Bilder und GIFs?
> Wir legen größten Wert auf vollständig jugendfreie Inhalte (SFW). Im Gegensatz zu vielen anderen Anime-APIs findest du bei uns keine Charaktere in anzüglichen Outfits (z. B. Badeanzüge, Bikinis, Unterwäsche, transparente oder stark freizügige Kleidung).\
> Außerdem schließen wir Inhalte wie Panty-Shots (bei denen Unterwäsche absichtlich sichtbar ist), achselfokussierten „Bait“ und ähnliche fetischorientierte Inhalte aus.\
> Jedes Bild und GIF wird sorgfältig ausgewählt – bei uns zählt sichere, hochwertige Qualität statt bloßer Masse.

#### Darf ich die Bilder oder GIFs kommerziell nutzen?
> Nein. Die kommerzielle Nutzung ist gemäß unseren [Nutzungsbedingungen](/legal/tos) untersagt.\
> Die Bilder gehören nicht uns und werden rein zu Unterhaltungszwecken geteilt – mit entsprechenden Verweisen auf die ursprünglichen Urheber.

#### Muss ich die Künstler angeben?
> Du bist nicht verpflichtet, die Urheberangaben der Künstler einzubinden. Wir empfehlen es jedoch dringend, da die API diese Informationen ohnehin mitliefert.

#### Bei einem Bild oder GIF fehlt die Quelle oder sie ist falsch. Wo kann ich das melden?
> Wenn dir in der API eine falsche oder fehlende Quelle auffällt, melde das bitte auf unserem Discord-Server. Geh einfach in den Kanal `#api-support` und erstelle dort einen neuen Beitrag.

#### Könnt ihr X zur API hinzufügen?
> Vorschläge für neue Kategorien kannst du auf unserem Discord-Server im eigenen Kanal `#suggestions` einreichen.
>
> **Hinweis:** Es werden nur jugendfreie (SFW) Kategorievorschläge akzeptiert. Vorschläge mit Inhalten wie „lick“ oder „kidnap“ entsprechen nicht unseren SFW-Richtlinien und werden abgelehnt.

#### Wann erscheinen neue Bilder, GIFs oder Kategorien?
> Es gibt keinen festen Zeitplan oder ein ETA. Alle Inhalte werden manuell kuratiert und hinzugefügt – Updates erscheinen immer dann, wenn sie fertig sind und wir privat die Zeit dafür haben.

#### Kann ich Bilder oder GIFs zur API beisteuern?
> Auf jeden Fall! Wenn du etwas beitragen möchtest, komm auf unseren Discord-Server und erstelle einen Beitrag in `#api-support`.
> Mitwirkende erhalten in unserer Discord-Community eine eigene Contributor-Rolle.

#### Gibt es KI-generierte Bilder oder GIFs in der API?
> Nein. Alle Bilder und GIFs in der API stammen von menschlichen Künstlern. Wir unterstützen keine KI-generierten Inhalte.

#### Darf ich die Bilder oder GIFs für das Training von KI-, ML- oder LLM-Modellen verwenden?
> **Nein.** Wie in unseren [Nutzungsbedingungen](/legal/tos) festgelegt, ist es strengstens untersagt, Inhalte der API für das Training von KI-, Machine-Learning- oder LLM-Modellen zu verwenden (einschließlich Scraping oder dem Aufbau von Datensätzen) – ein Verstoß führt zu einer API-Sperre. Eine Ausnahmegenehmigung können wir nicht erteilen, da wir nicht die Rechteinhaber der Inhalte sind.

#### Darf ich die Bilder oder GIFs cachen, herunterladen oder scrapen?
> Das Cachen von **JSON-API-Antworten** (wie Metadaten und URLs) ist ausschließlich für die **private Nutzung** erlaubt, solange sie nicht veröffentlicht oder weiterverbreitet werden.\
> Das Cachen, Herunterladen, Scrapen, Rehosten oder massenhafte Extrahieren der **eigentlichen Bild- oder GIF-Dateien** ist gemäß unseren [Nutzungsbedingungen](/legal/tos) **strengstens untersagt** und führt zu einer API-Sperre.

#### Wie groß sind die GIFs?
> Unsere GIFs sind klein gehalten und für schnelles Laden optimiert – im Durchschnitt liegt eine Datei bei rund **~900 KB**.

## Debugging / Fehler

#### Warum erhalte ich den ERR-C-Code "NB-BXIUA"?
> Leere oder gefälschte `User-Agent`-Header werden blockiert. Stelle sicher, dass deine Anfragen einen gültigen `User-Agent`-Header enthalten, und verzichte auf Browser-Spoofing oder das Ausgeben als bekannte Crawler. In unserer [User-Agent-Dokumentation](/de/getting-started/api-reference.html#user-agent) findest du das empfohlene Format.

#### Warum erhalte ich den ERR-C-Code "NB-BCFSD"?
> `NB-BCFSD` bedeutet, dass du von unserer automatischen Missbrauchserkennung für die API gesperrt wurdest. Wenn du glaubst, dass es sich um ein Versehen handelt, melde dich bitte auf unserem [Discord-Server](https://nekos.best/discord) oder per E-Mail an **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Warum erhalte ich den ERR-C-Code "NB-BXASN"?
> `NB-BXASN` bedeutet, dass deine ASN (Autonomous System Number) in unserem System gesperrt ist. Damit du Anfragen senden kannst, muss deine IP-Adresse auf die Whitelist gesetzt werden. Melde dich dazu bitte auf unserem [Discord-Server](https://nekos.best/discord) oder per E-Mail an **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Ich nutze ein VPN oder einen Proxy, kann aber keine Anfragen mehr senden.
> VPNs und Proxys sind grundsätzlich erlaubt, bringen aber wichtige Einschränkungen mit sich. Da sich viele Nutzer dieselben IP-Adressen teilen, reicht ein einziger Missbrauchsfall aus, um eine IP zu sperren – wovon dann alle anderen ebenfalls betroffen sind. Gesperrte VPN- und Proxy-IPs bleiben dauerhaft und ohne Ausnahmen blockiert und werden deutlich häufiger auffällig als reguläre IPs. Wenn du auf ein VPN oder einen Proxy angewiesen bist und den Zugriff verlierst, können wir leider nichts tun.
