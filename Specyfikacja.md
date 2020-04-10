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
## 2.Opis Systemu
### 1.Ogólny opis gry
Celem jest utworzenie gry przeglądarkowej IO, w której będzie mogło wziąć udział od 1 do 2 graczy. Drugi gracz będzie mógł dołączyć po sieci. Każdy gracz będzie mógł sterować własnym statkiem poruszać nim w poziomie oraz wystrzeliwać pociski. Przeciwnicy będą atakować gracza podobnymi pociskami.

### 2.Jakie są warunki zwycięstwa?
Ukończenie podstawowych poziomów (ala history mode),
po zakończeniu wyświetlany jest nam uzyskany wynik oraz
informacja czy chcemy powrócić do menu głównego i
zakończyć lub "lecieć dalej".Kontynuowanie dodatkowej
rozgrywki w generowanej generycznie, jest w stanie
podwyższyć nam wynik zdobytyw podstawowej wersji
gry.Swoistym "zwycięstwem" jest uzyskanie jak
największego wyniku, zanim stracimy wszystkie nasze
życia.

### 3.Poziomy
Poziomy będą doładowywane dynamicznie, zwiększające
się ilości przeciwników, szybkość ich poruszania oraz
prędkość strzałów wrogów. Każdy następny poziom
będzie miał inną szatą graficzną. W rogu ekranu
informacje, na której mapie znajduję się gracz oraz jaki
wynik obecnie posiada (pkt).

### 4.Wave-y oraz Bossowie:
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

### 5.Kiedy generuje się nowy Wave:
Przy wyczyszczeniu "planszy" z przeciwniów.
Zabicie przeciwników aktualnie znajdujących
się przed Tobą.

### 6.Power-upy:
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
## 3.Ogólny zarys tworzenia projektu 
Gra będzie tworzona w systemie wersji. Poszczególne wersje będą wzbogacały grę o dodatkowe mechaniki. Wersja 1.0 będzie wersją grywalną.

### 1.Alpha
W canvasie w przeglądarce, będzie można poruszać modelem statku oraz wystrzeliwać pociski.
### 2.Beta
Zostanie utworzony serwer dzięki któremu będzie mogło dojść do synchronizacji 2 graczy. 
### 3.Wersja 0.1 
Do gry zostaną dodani przeciwnicy
### 4.Wersja 0.2 
Przeciwnicy będą atakować. Gracz będzie mógł zostać zatakowany.
### 5.Wersja 1.0 
Po pokonaniu przeciwników gracz zobaczy komunikat o wygranej
### 6.Wersja 1.1
Po pokonaniu przeciwników będzie sie pojawiała kolejna fala.  
### 7.Wersja 1.2
Z przeciwników będą wypadać wzmoznienia które będą zmienianiały parametry strzały.
### 8.Wersja 1.3
Po poknaniu fali przeciwników będzie pojawiała się kolejna fala przeciwników z innymi właściwościami. 
### 9.Wersja 1.4
Po pokonaniu odpowieniej ilości fal będzie się generować kolejna fala z bosem.
### 10. Wersja 1.5 
Dodanie tablicy najwyższych wyników. 

---

## 4.Objekty Biznesowe 

### 1. Objekt Poruszany przez gracza
Obiekt będzie poruszany przez gracza za pomocą myszki. Obiekt ma przypominać statek kosmiczny. Gracz ma nim sterować przy pomocy myszki, obiekt będzie podążał za kursorem myszki. Strzał będzie, odbyła się na prawym przycisku myszy. Kolor obiektu będzie musiał odznaczać się od koloru obiektu drugiego gracza. W ostatecznej wersji gry może być do wyboru. Gracz będzie posiadał od 1 do 5 żyć.

### 2.Obiekty sterowane przez komputer 
Obiekty, których kształt nie został określony. Będą atakować gracza. Będzie się ich pojawiało parę na poziom. Ataki mogą być różne w zależności od danego przeciwnika. Będą znikały po zetknięciu się z pociskiem gracza. Będą poruszały się po jakiś ustalonych torach ruchu.

### 3.Strzał
Będą pojawiać się po wciśnięci przez gracza lewego przycisku myszy. W zależności od rodzaju strzału będą poruszać się w górę mapy po osi y. Po zetknięciu z przeciwnikiem będą go eliminować. Po zetknięciu z graczem będą zabierać mu życie.

### 4.Życia
Będą chronić gracza przed zakończeniem gry. Gracz traci życie, gdy zostanie trafiony pociskiem przeciwnika. Gdy ilość żyć spadnie do zera gra się kończy.

### 5.Przeszkody
......

> **TO DO** Napisać kolejne obiekty biznesowe
---
## 5.Wymagania funkcjonalne

### 1.Poruszanie się po mapie. 
Priorytet: WYSOKI <br>
Gracz będzie mógł poruszać się za pomocą myszki w prawo i lewo po osi x. 
### 2.Strzelanie
Priorytet: WYSOKI <br>
Gracz będzie mógł wykonać strzał który, będzie leciał w górę po osi y, po zetknięciu z przeciwnikiem będzie go neutralizował. 

### 3.Przeciwnicy
Priorytet: WYSOKI <br>
Będą się pojawiać na mapie, strzelać oraz poruszać się po określonych ścieżkach.

### 4.Połączenie z serwerem.
Priorytet: WYSOKI <br>
Gracz będzie mógł połączyć się z serwerem.
### 5.Kooperacja
Priorytet: WYSOKI <br>
Gracz będzie mógł podłączyć się do sesji innego gracza.

### 6. Wynik 


 
> **TO DO** Dopisać kolejne  Wymagania funkcjonalne
---
## 6.Wymagania nie funkcjonalne 
### 1.Możliwosć wyboru koloru statku 
Priorytet: NiSKI <br>
Gracz będzie mógł wybrać kolor poruszanego przez niego obiektu 
### 2.Tabla najwyższych wyników 
Priorytet: NiSKI <br>
Gracz będzie mógł zobaczyć table najlepszych wyników, a także wpisać się do niej.


> **TO DO** Dopiać kolejne  Wymagania niefunkcjonalne
---
> **TO DO** Wykorzystywane technologie Model systemu- mam już trochę do tego przygotwoane
---
> **TO DO**  Schemat interfejsu -mam przygotowany tylko muszę dodać 

> **TO DO**  Wymyślić co można jeszcz dodać do Specyfikacja Wymagań