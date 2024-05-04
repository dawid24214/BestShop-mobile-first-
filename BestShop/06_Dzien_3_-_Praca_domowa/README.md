![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Zadanie domowe

> ### Przygotowanie
> Zmodyfikuj plik `package.json` tak, aby zmienna `source` wskazywała na:
> -  `06_Dzien_3_-_Praca_domowa/01_Mobile_First`
>
> **Pamiętaj aby po każdej zmianie w pliku `package.json` przerwać działanie Parcel (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

W pliku `index.html` znajdziesz sekcję o nazwie `blocks`.
Stwórz w niej 5 elementów `div` o klasie `block` i każdemu ustaw następujące własności:
* szerokość na `25%`
* wysokość na `100vh`
* obramowanie na `1px solid red`
* ustaw je również obok siebie (jeśli będziesz mieć problem, przypomnij sobie o box-model)

Następnie:
* na ekranach mniejszych niż `450px`, ustaw elementy pod sobą i ukryj ostatni,
* na ekranach większych niż `450px`, ale mniejszych niż `720px`, ustaw elementy obok siebie, pokaż ostatni i ukryj pierwszy,
* na ekranach większych niż `720px`, ale mniejszych niż `1024px`, pokaż tylko ostatni i pierwszy element.

Skorzystaj z podejścia **Mobile first**.
