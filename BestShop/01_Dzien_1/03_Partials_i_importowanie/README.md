![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/03_Partials_i_importowanie/01_Zadania`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 1

Stwórz potrzebne foldery i pliki i zorganizuj według schematu poniżej.
Umieść przykładowe style według opisu:

```
[folder] scss
    [folder] settings
                _all.scss - zmienne przechowujące rozmiar fonta lub szerokości
                _colors.scss - zmienne z kolorami
    [folder] generic
                _reset.scss - style resetujące
    [folder] elements
                _footer.scss - style dla elementu footer, wykorzystaj wcześniej zdefiniowane zmienne
                _header.scss - style dla elementu header, wykorzystaj wcześniej zdefiniowane zmienne
                _content.scss - style dla elementu article, wykorzystaj wcześniej zdefiniowane zmienne
                _base.scss - style dla całej strony
    main.scss - tylko importy wcześniej stworzonych plików
```

## Zadanie do samodzielnego wykonania

### Zadanie 2

W folderze `scss` istnieje plik `main.scss`, w którym są zakomentowane style dla strony. Odkomentuj je, a następnie podziel ten plik według schematu z zadania z wykładowcą.
