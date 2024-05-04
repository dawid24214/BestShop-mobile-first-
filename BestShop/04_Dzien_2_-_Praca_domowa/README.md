![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Zadanie domowe - Wielkości nagłówków

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `04_Dzien_2_-_Praca_domowa/01_Wielkosci_naglowkow`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Na podstawie poniższej mapy (za pomocą odpowiedniej funkcji Sass), zrób listę zawierającą same wartości.
Następnie za pomocą odpowiedniej pętli ustaw wielkości dla nagłówków z pliku `index.html`, od największego do najmniejszego, wykorzystując wartości listy.

```scss
$font-sizes: (
  fs1: 100px,
  fs2: 50px,
  fs3: 6px,
);
```

Skorzystaj: [https://sass-lang.com/documentation/modules/map](https://sass-lang.com/documentation/modules/map)


# Zadanie domowe - Jednostki

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `04_Dzien_2_-_Praca_domowa/02_Jednostki`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

W pliku `index.html` znajdziesz sekcję o nazwie `test_units`. Przyjrzyj się jej dokładnie. Wewnątrz jest kilka elementów.
Ustaw sekcji `test_units` wielkość tekstu na `30px`, dodaj jej obramowanie i ustaw szerokość na `25em` oraz wysokość na `5em`.
Ustaw również elementowi `header` wielkość tekstu na `50%`.

Twoim zadaniem jest napisanie jednej reguły css dla elementów span, która ustawi im wielkość tekstu (za pomocą jednostki `em`) w taki sposób, aby:

- span pierwszy był o połowę mniejszy od wielkości tekstu zdefiniowanego dla sekcji `test_units`,
- span drugi miał taką samą wielkość jak tekst zdefiniowany dla sekcji `test_units`.
