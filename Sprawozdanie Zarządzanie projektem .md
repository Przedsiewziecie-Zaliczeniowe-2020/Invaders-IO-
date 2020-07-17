# Specyfikacja Wymagań
**Gra Invaders IO**<br>
Wersja 2.0<br>
>Członkowie Zespołu
1. Karol Węglarz
2. Kamil Mentel
3. Marek Wyczesany
## 1. Wprowadzenie
### Słowinik pojęć:
* **Grywalny**- Znaczy, że gra będzie posiadała dość mechanik, aby funkcjonować w podstawowy sposób według założeń.<br>
* **Pocisk**- Obiekt wysyłany przez gracza lub przeciwnika. Po zetknięciu się z graczem odejmuję życie lub kończy grę. Po zetknięciu z przeciwnikiem eliminuje go. Po uderzeniu w przeszkodę znika.<br>
* **Wróg**- Sterowany przez skrypt obiekt który, będzie poruszał się po wybranej ścieżce i atakował w odstępach czasowych.<br>
* **Boss**- Unikatowy i szczególnie wymagający przeciwnik w grach komputerowych, którego pokonanie zazwyczaj oznacza zwieńczenie pewnego etapu gry.<br>
* **Wave**- (z ang. fala) zmasowany atak przeciwników, zazwyczaj pomiędzy pokonaniem jednej fali a przyjściem następnej gracz ma chwilkę na przygotowanie się. Wyznacznik postępu na danym poziomie.<br>
## 2.Opis Systemu
### 1.Ogólny opis gry i założenia jej rozbudowy.
Celem jest utworzenie gry przeglądarkowej IO, w której będzie mogło wziąć udział od 1 do 2 graczy. Drugi gracz będzie mógł dołączyć po sieci. Każdy gracz będzie mógł sterować własnym statkiem poruszać nim w poziomie oraz wystrzeliwać pociski. Przeciwnicy będą atakować gracza podobnymi pociskami.

### 2.Jakie są warunki zwycięstwa?
Gracz ukończy grę, gdy gracz przejdzie wszystkie poziomy oraz pokona finalnego Bosa.

### 3.Poziomy
Poziom zmieni się gdy gracz pokona wszystkich przeciwników z aktualnego poziomu.
Każdy poziom posiada określoną ilość przeciwników. Ilość oraz siła przeciwników zmieniają się z
każdym poziomem. 

### 4.Przeciwnicy
Przeciwnicy posiadają różne tekstury. Każdy przeciwnik posiada ilość punktów życia, które
chronią go przed zniszczeniem.

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
Po pokonaniu przeciwników będzie sie pojawiała kolejna fala.  
### 6.Wersja 1.1
Po poknaniu fali przeciwników będzie pojawiała się kolejna fala przeciwników z innymi właściwościami. 
### 7.Wersja 1.4
Po pokonaniu odpowieniej ilości fal będzie się generować kolejna fala z bosem.
### 8. Wersja 1.5 
Po pokonaniu przeciwników gracz zobaczy komunikat o wygranej.
### 9. Wersja 2.0 
Dodanie gry przez sieć.

---
## 4.Zarządzanie projektem
Projekt realizowaliśmy w formie tygodniowych sprintów. Co tydzień mieliśmy spotkanie, na którym omawialiśmy co, udało się zrobić w danym tygodniu. Następnie ustalaliśmy zadania na
kolejny tydzień.
## Trello 
Zadnia były umieszczane na treloo. Każdne zadanie dostawało stopień trudności i czasu wykonania zadania.

Stopnie były 3:
 - Niski - zielony 
 - Średni - żółty 
 - Czerwony - wysoki

 Stopnie można zobaczyć na etykietach na zrzucie ekranu z trello 

![enter image description here](https://imagizer.imageshack.com/v2/1832x855q90/922/CJ9cGT.png)



---
## 5.Objekty Biznesowe 

### 1. Objekt Poruszany przez gracza
Obiekt będzie poruszany przez gracza za pomocą myszki. Obiekt ma przypominać statek kosmiczny. Gracz ma nim sterować przy pomocy myszki, obiekt będzie podążał za kursorem myszki. Strzał będzie, odbyła się na prawym przycisku myszy. Kolor obiektu będzie musiał odznaczać się od koloru obiektu drugiego gracza. W ostatecznej wersji gry może być do wyboru. Gracz będzie posiadał od 1 do 5 żyć.

### 2.Obiekty sterowane przez komputer 
Obiekty, których kształt nie został określony. Będą atakować gracza. Będzie się ich pojawiało parę na poziom. Ataki mogą być różne w zależności od danego przeciwnika. Będą znikały po zetknięciu się z pociskiem gracza. Będą poruszały się po jakiś ustalonych torach ruchu.

### 3.Strzał
Będą pojawiać się po wciśnięci przez gracza lewego przycisku myszy. W zależności od rodzaju strzału będą poruszać się w górę mapy po osi y. Po zetknięciu z przeciwnikiem będą go eliminować. Po zetknięciu z graczem będą zabierać mu życie.

### 4.Życia
Będą chronić gracza przed zakończeniem gry. Gracz traci życie, gdy zostanie trafiony pociskiem przeciwnika. Gdy ilość żyć spadnie do zera gra się kończy.


### 5.Wynik
Gdy gracz będzie widział swój wynik w prawym górnym rogu.

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
### 6. Dodanie funkcji sieciowych
Priorytet: WYSOKI <br>
Będzie można przeprowadzić rozgrywkę w dwie osoby.
 
---
## 6.Wymagania nie funkcjonalne 
### 1.Muzyka 
Priorytet: ŚREDNI <br>
Podczas gry w tle będzie grała muzyka.
### 2.Ochrona po trafieniu  
Priorytet: WYSOKI <br>
Gdy gracz zostanie trafiony, na krótki okres 2-3 sek nie będzie mógł być trafiony kolejny raz. Będzie to sygnalizowane graficznie, poprzez nadanie większej przeźroczystości obiektowi sterowanemu przez gracza.
### 3.Ładowanie się kolejnych poziomów
Priorytet: WYSOKI <br>
Gdy gracz pokona daną falę przeciwników, otrzyma komunikat o ukończeniu poziomu. Nastąpi zmiana graficzna tła rozgrywki oraz pojawią się nowi przeciwnicy.



---
## 6.Wykorzystywane technologie.
### 1.Klient <img src="https://piecioshka.pl/assets/images/posts/javascript/logo-javascript.svg" alt="alt text" width="40" height="40">
Klient będzie napisany w języku JavaScript.
<br>

#### p5.js <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV0j_CJwy58uyAC25uVSBZ8a6IsbY-EO47BiSA9FJVAGUmveZ2&usqp=CAU" alt="alt text" width="40" height="40">
Dodatkowo skorzystamy z  z biblioteką p5.js. Pomoże ona w budowaniu interfejsu graficznego gry.<br>
Link do strony biblioteki: https://p5js.org

### 3.Server 
Serwer będzie napisany w JavaScript przy użyciu Noda.js <img src="https://bedekodzic.pl/wp-content/uploads/2018/03/flat550x550075f.u1.jpg" alt="alt text" width="40" height="40"> i frameworku express. 
Dodatkowo skorzystamy z frameworka socker.io.<img src="https://images.ctfassets.net/3prze68gbwl1/asset-17suaysk1qa1k7p/364f9e87d38546dd48a6fd75c5c92c10/SOCKETIOICON.gif" alt="alt text" width="40" height="40"><br>
#### Socker io<br>
Przy pomocy tego frameworku stworzymy połączenie dwóch aplikacji w czasie rzeczywistym, tworząc dwukierunkowy kanał komunikacji między klientem a serwerem.<br>
Link do strony frameworku: https://socket.io/
#### Przykładowy Model działania komunikacji 
<img src="https://i.imgur.com/ZS8dbhj.png" alt="alt text"><br>


---
## 7.Przykład szkic interfejsu gry
<img src="https://i.imgur.com/Jbfi3Fe.png" alt="alt text"><br>
W grze będzie można poruszać się prawo lewo, przeciwnicy będą znajdować się w górze ekranu, w środku będzie pusta przestrzeń dająca możliwość manewrowania przez gracza między pociskami wroga.

---
## 8. Strona tytułowa gry
Strona tytułowa zawiera: 
* **Story Mode**-Tryb dla jednego gracza
* **Multiplayer**-Tryb dla dwóch graczy
* **Leaderboards**-Tablice wyników
* **Credits**-Listę osób zaangażowanych w projekt
![enter image description here](https://imagizer.imageshack.com/v2/1280x1024q90/922/VsHOuB.png)
---
## 9.Finalny wygląd gry oraz sterowanie 
### Sterowanie

 - Ruch myszki - poruszanie statkiem
 -  LPM - strzał 
 - Esc - pauza
 ![enter image description here](https://imagizer.imageshack.com/v2/1280x1024q90/923/VL4ftV.png)
![enter image description here](https://imagizer.imageshack.com/v2/1280x1024q90/923/XDJEBE.png)

## 10.Użyta muzyka 
Gra używa utworów Diamond-ace za zgodą autora

Soundcloud: https://soundcloud.com/diamond-ace-music

Utwory będące już w grze oraz utwory które będą dodane później:

 - Too Soon (Feat. Nymbius)
 - The Longest Day
 - vyra-defensematrix-SIhno7Cr1X
 - Runaway
 - California Dreaming