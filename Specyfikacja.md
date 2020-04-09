# Specyfikacja Wymagań
**Gra Invaders IO**<br>
Wersja 1.0<br>
>Członkowie Zespołu
1. Karol Węglarz
2. Kamil Mentel
3. Marek Wyczesany
4. Rafał Olma
## 1. Wprowadzenie
### Słowinik pojęć
Wzmocnienie(power up) - wypadający z wrogów obiekt, jeśli obiekt zostanie zebrany przez gracza spowoduje to stałe lub czasowe zmiany w parametrach strzału lub interakcji statku z pozostałymi obiekatami.
Grywalny-
Pocisk-
Wróg- 
> **TO DO** Dopisać istniejące rzeczy z słownika pojęć + dodwać nowe w miarę tworzenia specyfikacji
# Opis Systemu
## Ogólny opis gry
Celem jest utworzenie gry przeglądarkowej IO, w której będzie mogło wziąć udział od 1 do 2 graczy. Drugi gracz będzie mógł dołączyć po sieci. Każdy gracz będzie mógł sterować własnym statkiem poruszać nim w poziomie oraz wystrzeliwać pociski. Przeciwnicy będą atakować gracza podobnymi pociskami.

## Jakie są warunki zwycięstwa?
Ukończenie podstawowych poziomów (ala history mode),
po zakończeniu wyświetlany jest nam uzyskany wynik oraz
informacja czy chcemy powrócić do menu głównego i
zakończyć lub "lecieć dalej".Kontynuowanie dodatkowej
rozgrywki w generowanej generycznie, jest w stanie
podwyższyć nam wynik zdobytyw podstawowej wersji
gry.Swoistym "zwycięstwem" jest uzyskanie jak
największego wyniku, zanim stracimy wszystkie nasze
życia.

## Poziomy
Poziomy będą doładowywane dynamicznie, zwiększające
się ilości przeciwników, szybkość ich poruszania oraz
prędkość strzałów wrogów. Każdy następny poziom
będzie miał inną szatą graficzną. W rogu ekranu
informacje, na której mapie znajduję się gracz oraz jaki
wynik obecnie posiada (pkt).

## Wave-y oraz Bossowie:
**Wave-y:** Tak, są. <br>
Minumum 2 Wave-y, na pewno ostatni wave
to boss.<br>
**Przykład:** *3 Wave-y przygody ( w danym
poziomie ) odblokowuje 4 Wave-a z Bossem.
Każdy poziom kończy się mocniejszym
przeciwnikiem (bossem), ukłon w stronę
retro gier.
Pokonanie bossa pozwala nam przejść na
kolejny poziom.
Pokonanie bossa gwarantuje **stały powerup.***

## Kiedy generuje się nowy Wave:
Przy wyczyszczeniu "planszy" z przeciwniów.
Zabicie przeciwników aktualnie znajdujących
się przed Tobą.

## Power-upy:
Nasze wzmocnienia będą mieć różne kategorie: <br>
* **Stałe:** <br>
Health up, wmocnienie broni dmg, inny
pattern strzału itp.
* **Czasowe:** <br>
Tarcza, mnożnik pukntowy itp
* **Indywidualne:** <br>
Health up, wzmocnienie broni, tarcza, inny pattern strzału itp.
* **Zespołowe** <br>
Wzmocnienie broni, mnożnik punktowy<br><br>
 *Zarówno wzmocnienia indywidualne jak i zespołowe mogą występować w wariancie czasowym lub gwarantując stałą premię!*
<br><br>

 Mając na uwadzę dynamiczny przebieg rozgrywki, stawiamy na przejrzysty interfejs, dlatego wprowadzimy odpowiednią kolorystykę informującą nas jakiego rodzaju power-up aktualnie zbieramy. 
 **Przykład:** <br> 
 Niebieski -> *wzmocnienie dla pojedynczego gracza*<br>
 Pomarańczowy -> *wzmocnienie dla zespolu*

> **TO DO** Zastanowić się czy w wariancie solo, power-upy zespołowe będą się respić

---
#### Ogólny zarys tworzenia projektu 
Gra będzie tworzona w systemie wersji. Poszczególne wersje będą wzbogacały grę o dodatkowe mechaniki. Wersja 1.0 będzie wersją grywalną.

##### Alpha
W canvasie w przeglądarce, będzie można poruszać modelem statku oraz wystrzeliwać pociski.
##### Beta
Zostanie utworzony serwer dzięki któremu będzie mogło dojść do synchronizacji 2 graczy. 
##### Wersja 0.1 
Do gry zostaną dodani przeciwnicy
##### Wersja 0.2 
Przeciwnicy będą atakować. Gracz będzie mógł zostać zatakowany.
##### Wersja 1.0 
Po pokonaniu przeciwników gracz zobaczy komunikat o wygranej
##### Wersja 1.1
Po pokonaniu przeciwników będzie sie pojawiała kolejna fala.  

##### Wersja 1.2
Z przeciwników będą wypadać wzmoznienia które 
---
> **TO DO** Dokończyć wersje  

 Po poknaniu fali przeciwników będzie pojawiała się kolejna fala przeciwników z innymi właściwościami. 
Po pokonaniu odpowieniej ilości fal będzie się generować kolejna fala z bosem.
---



> **TO DO** Napisać obiekty biznesowe
---
> **TO DO**  Wymagania funkcjonalne
---
> **TO DO**  Wymagania niefunkcjonalne
---
> **TO DO**  Model systemu- mam już trochę do tego przygotwoane
---
> **TO DO**  Schemat interfejsu -mam przygotowany tylko muszę dodać 

> **TO DO**  Wymyślić co można jeszcz dodać do Specyfikacja Wymagań