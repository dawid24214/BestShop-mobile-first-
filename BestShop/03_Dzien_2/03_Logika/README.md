![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Logika/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Wstaw na stronie 6 nagłówków od **h1** do **h6**.
Zapisz za pomocą zmiennej wysokość linii i rozmiar tekstu dla nagłówka `h1`.

Ostyluj nagłówki w taki sposób, aby na podstawie zdefiniowanego rozmiaru tekstu zmieniała się ich wielkość. Wykorzystaj pętle i interpolację.

Oblicz odpowiednio rozmiar każdego nagłówka, pamiętaj o ich hierarchii (**h1** powinien być największy).

Ustaw nagłówkom różne kolory.

> Skorzystaj z modułu `sass:color` i funkcji `color.mix` aby zmieszać dwa kolory: `tomato` i `cornflowerblue` w odpowiednich proporcjach. Czym wyższy nagłówek tym większy procent mieszania kolorów, np,:
>
> h1: `color.mix(tomato, cornflowerblue, 10%)`  
> h2: `color.mix(tomato, cornflowerblue, 20%)`  
> itd.
>
> Dokumentacja: [https://sass-lang.com/documentation/modules/color#mix](https://sass-lang.com/documentation/modules/color#mix)


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Logika/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Napisz mixin o nazwie `drawItem` ,który przyjmuje dwa argumenty - kształt do narysowania, oraz kolor jego tła.

- Jeśli przekazany kształt to `circle` - stworzy koło o wymiarach 100px na 100px
- Jeśli przekazany kształt to `rectangle` - stworzy kwadrat o wymiarach 200px na 200px

Dodaj mixin do elementu `div` o klasie `draw-container`.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Logika/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Za pomocą pętli określ kolor obramowania dla dziesięciu kontenerów np. elementów `div`. Niech kolor będzie pomarańczowy dla parzystych kontenerów, a niebieski dla nieparzystych.

Określ im **klasy** od `block_1` do `block_10`. Wykorzystaj pętlę.
