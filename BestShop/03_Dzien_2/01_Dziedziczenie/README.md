![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/01_Dziedziczenie/01_Placeholdery`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

### Zadanie 1

Znajdź w pliku `index.html` element `section` o klasie `test-mixin`. Ostyluj elementy wewnątrz zgodnie z opisem ich klas (obramowanie, lewa strona, )
Następnie stwórz za pomocą placeholdera sass - `%` regułę dla clearfix. Clearfx ma dodawać w odpowiednie miejsce pseudoelementy `::before` i `::after`.
Wykorzystaj dyrektywę `@extend` do rozszerzenia poszczególnych elementów o ten placeholder.

---

## Zadania do samodzielnego wykonania

### Zadanie 2

Znajdź w pliku `index.html` element `section` o klasie `container`.
Stwórz w niej trzy boksy reprezentujące: success, error i info.

![Placeholder](images/placeholder.jpg)

Ostyluj je za pomocą Sass. Spróbuj wykorzystać w tym zadaniu **placeholder**, aby nie generować dodatkowej reguły w CSS. Niech Twój kod HTML wygląda w następująco:

```html
<div class="success">success</div>

<div class="error">error</div>

<div class="info">info</div>
```
