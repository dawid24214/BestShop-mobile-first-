![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/04_Mixins/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz mixin o nazwie `headerFont`. Mixin ten będzie używany do ustawienia wielkości tekstu, wysokości linii i grubości tekstu dla elementu `header`, na podstawie przekazanego parametru `$font-size`.

Mixin `headerFont` powinien mieć następujące efekty:

- Ustawienie wielkości tekstu elementu na wartość przekazaną do parametru `$font-size`.
- Ustawienie wysokości linii na `2em`.
- Ustawienie grubości tekstu na `700`.

Przykładowe użycie mixinu `headerFont` może wyglądać tak:

```scss
header {
  @include headerFont(20px);
}
```


> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/04_Mixins/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

## Zadanie 2

Stwórz mixin, o nazwie `dialogBox`, który przyjmuje dwa argumenty - kolor ($backgroundColor) oraz szerokość boksa ($width). Jego zadaniem jest ustawienie stylów dla elementu o klasie `dialog`.

```
  width: $width;
  padding: 10px;
  background: $backgroundColor;
  border: 1px solid black;
  margin: 40px auto;
```

Do mixinu dodaj pseudo element `::after`, który stworzy kwadrat o wymiarach 10x10px, dekorujący boks. Końcowy projekt powinien wyglądać następująco:

![Dialog](images/dialog.png)

Zadanie przetestuj dla tła `green` i `lightgray`, oraz dowolnymi szerokościami.


> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/04_Mixins/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

## Zadanie 3

Stwórz mixin o nazwie `disabledHover`, która dostosuje wygląd przycisku, gdy jest on jednocześnie nieaktywny (posiada atrybut `disabled`) i w stanie `hover` (kursor myszy nad przyciskiem).

1. Utwórz mixin o nazwie `disabledHover`.
2. Mixin ten powinien zmieniać wygląd przycisku, gdy jest on **nieaktywny** i użytkownik **najedzie na niego myszką**.
3. Wewnątrz tego mixina użyj specjalnej dyrektywy `@content`, aby określić, jakie style powinny być zastosowane w przypadku spełnienia tych warunków.
4. Stylizuj przycisk za pomocą odpowiednich reguł SCSS w bloku `@content`.

### Przykład użycia:

```css
button {
  @include disabledHover {
    background-color: gray;
    cursor: not-allowed;
  }
}
```

W powyższym przykładzie, przycisk zostanie stylizowany na szary kolor i zmieni kształt kursora, gdy jest jednocześnie w stanie `hover` i ma atrybut `disabled`.


> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/04_Mixins/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Znajdź w pliku `index.html` element `form` o klasie `my-form`.

Stwórz mixin, za pomocą którego będzie można ustawić `placeholder` dla elementów `input` oraz `textarea` w każdej przeglądarce.
Wykorzystaj atrybut `@content`, aby móc przekazać do mixina color tekstu.

Pamiętaj, że w przypadku elementu textarea dodanie odstępu pomiędzy tagiem otwierającym a zamykającym (spacja, enter) powodują, że placeholder nie działa.
