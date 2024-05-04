![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Zadanie domowe - Flexbox Shrink

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `08_Dzien_4_-_Praca_domowa/01_Flexbox_Shrink`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

W pliku `index.html` znajdziesz sekcję o nazwie `flex-container`.

- dodaj do jej klasy właściwość display: flex oraz ustaw tło. Niech kierunek flexa będzie poziomy.
- następnie dodaj wewnątrz kontenera kilka zdjęć obok siebie o łącznej szerokości, co najmniej 500px, ale nie większej niż 1024px – niech wymiary zdjęć będą takie same.
- ustaw zdjęcia tak, by były wyśrodkowane względem wysokości kontenera
- dodaj odpowiednie właściwości kontenerowi i zdjęciom, tak aby przy zmniejszaniu rozmiaru okna przeglądarki, zdjęcia się nie kurczyły, tylko przewijały
- niezbędne będzie wykorzystanie właściwości `overflow`

![Flexbox](images/flex-shrink.jpg)


# Zadanie domowe - Flexbox Grow Shrink

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `08_Dzien_4_-_Praca_domowa/02_Flexbox_Grow_Shrink`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

> Włącz widok responsywny przeglądarki i ustaw okno na szerokość mobilną

W pliku `index.html` znajdziesz sekcję o nazwie `flex-container-column`.

- dodaj do jej klasy właściwość display: flex o orientacji pionowej oraz ustaw height: 100vh
- dodaj do kontenera trzy sekcje: header, main oraz footer. Niech każda z nich posiada kolorowe tło.
- określ dowolną wysokość dla headera i footera
- w sekcji main wrzuć kilka paragrafów
- przy pomocy właściwości flex-boxa ustaw header i footer tak, aby zawsze były widoczne w oknie przeglądarki – były przyklejone odpowiednio do góry i dołu okna
- dodaj odpowiednie właściwości aby przy zmniejszaniu wysokości okna przeglądarki, pojawiła się możliwość przewijania tekstu w środkowej sekcji
- niezbędne będzie wykorzystanie właściwości `overflow`

![Flexbox](images/flex-grow-shrink.jpg)
