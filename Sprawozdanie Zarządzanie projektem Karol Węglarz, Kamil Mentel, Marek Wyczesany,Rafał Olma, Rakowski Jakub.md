
# Zarządzanie projektem

## 1.Opis działań 
Celem było utworzenie gry przeglądarkowej IO, w której może wziąć udział od 1 do 2 graczy. Drugi gracz może dołączyć po sieci. Każdy gracz steruje własnym statkiem, może poruszać nim w poziomie oraz wystrzeliwać pociski. Przeciwnicy atakują gracza podobnymi pociskami. Gra został stworzona w przy pomocy NodeJs 

## 2.Etapy tworzenia 
 
### 1.Projekt gry 

Gra wstępnie w pierwszy tydzień była w etapie projektowania. W trakcie spotkań ustalany był ogólny kształt gry, użyte mechanik oraz dozwolone akcje. Wszyscy członkowie zespołu brali udział w projektowaniu oraz szkicach koncepcyjnych.

Przykładowy szkic koncepcyjny gry z wczesnego etapu projektowania: 


![enter image description here](https://i.ibb.co/k2T8J3Z/szkic-1.png)
Szkic koncepcyjny z późnego etapu projektowania: 
![enter image description here](https://i.ibb.co/py9v9Br/szkic-2.png)

### 2.Utworzenie gry 

#### 1.Dodanie statku 

W tym etapie skupiliśmy się na stworzeniu statku, którym można poruszać się w osi x, oraz wykonywać akcje. 


#### 2.Dodanie przeciwników 

W tym etapie dodaliśmy przeciwników, którzy mogą się poruszać w osi x oraz  wykonywać akcje.


#### 3.Dodanie interackji 

W tym etapie skupiliśmy się na stworzeniu możliwości interakcji między statkiem a przeciwnikami. Przeciwnicy oraz statek mogli od tego etapu zniszczyć się wzajemnie.


#### 4.Dodanie warstwy graficznej

W tym etapie dodaliśmy tekstury na obiekty w grze. 


#### 5.Dodanie systemu tworzenia poziomów 

W tym etapie stworzyliśmy system, który generuje poziomy, dodaje do nich przeciwników oraz zmienia poziomy.

#### 6.Dodanie funkcji offline 


W kocowym etapie dodaliśmy funkcję łączenia się przez sieć.

## 3.Przydział obowiązków

### Karol Węglarz:

●Zarządzanie zespołem

●Przydzielanie zadań

●Ustalanie spotkań projektowych oraz organizacja pracy

●Mechanika ataku przeciwników

●Kodowanie przeciwników

●Dodanie ścieżki poruszania się przeciwników

●Sterowanie oraz strzelanie

●Programowanie Back-endu

### Kamil Mentel:

●Stylizacja obiektów do wyświetlania w przeglądarce(również: pre-loadery, formularze, custom alerty, dialogi, pauza...)

●Projektowanie szablonu witryny

●Nawigacja

●Załatwianie licencjonowanej ścieżki dźwiękowej

●Efekty dźwiękowe (wybuchy, lasery itp)

●Modele: m.in statków, tła, przeciwnicy, lasery...itp

●Level Design

●Scenariusz gry,

●Proste skrypty Front-endowe

●Animacje

### Marek Wyczesany:

●Zaprojektowanie i implementacja silnika gry

●Stworzenie templatki do dodawania poziomów

●Kodowanie ataków przeciwników oraz ich logiki

●Obsłużenie animacji, m.in wybuchy statków oraz przeciwników

●Programowanie Back-endu

●Napisanie skryptu w pythonie do wycinania spritów wybuchów

●Zaprojektowanie i okodowanie mechanizmu pauzowania gry

●Współtworzenie konceptu rozgrywki razem z Kamilem i Karolem

### Rafał Olma, Rakowski Jakub: 

●Utworzenie dokumentacji gry

●Utworzenie pliku Readme z opisem gry na githubie

### Przydział zadań na dany tydzień 
Projekt realizowaliśmy w formie tygodniowych sprintów. Co tydzień mieliśmy spotkanie, na którym omawialiśmy co, udało się zrobić w danym tygodniu. Następnie ustalaliśmy zadania na
kolejny tydzień.

Zadnia były umieszczane na trello. Każde zadanie dostawało stopień trudności i czasu wykonania zadania.
Stopnie były 3:
 - Niski - zielony 
 - Średni - żółty 
 - Czerwony - wysoki

 Stopnie można zobaczyć na etykietach na zrzucie ekranu z trello. 

![enter image description here](https://imagizer.imageshack.com/v2/1832x855q90/922/CJ9cGT.png)

## 4.Motywacja 

Motywacja zespołu była tworzona przez nagradzanie się dodaniem kolejnych funkcjonalności do gry oraz pochwałami za dobrze wykonane zadania.


## 5.Monitorowanie postępów 

Monitorowanie postępów polegało na cotygodniowym przeglądzie wykonanych zadań.

Członkowie zespołu przeciągali zadanie do sekcji skończonych na trello.

Każdy z członków zespołu miał swój branch na serwisie github, na którym realizował wykonywane przez siebie zdania. Następnie zmiany były łączone do głównej gałęzi projektu.


![enter image description here](https://i.ibb.co/wRfhYQq/git-wooodies-1.png)


