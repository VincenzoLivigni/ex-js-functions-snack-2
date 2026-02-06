/*
Snack 1 - ✔️
Crea una funzione che somma due numeri.

✔️ - Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
✔️ - Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
✔️ - Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

// funzione dichiarativa
function somma(num1, num2) {
    return num1 + num2
}
console.log(somma(4, 12));


// funzione anonima
const somma2 = function (num1, num2) {
    return num1 + num2
}
console.log(somma2(4, 12));


// arrow function
const somma3 = (num1, num2) => num1 + num2
console.log(somma3(4, 12));