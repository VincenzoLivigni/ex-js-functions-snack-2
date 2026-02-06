/*
Snack 3 - ✔️
Crea una funzione eseguiOperazione

✔️ - Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore(callback).
La funzione deve eseguire l'operazione fornita sui due numeri.
*/

const somma = (num1, num2) => num1 + num2;
const sottrae = (num1, num2) => num1 - num2;
const moltiplica = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2)

console.log(eseguiOperazione(8, 2, somma));
console.log(eseguiOperazione(8, 2, sottrae));
console.log(eseguiOperazione(8, 2, moltiplica));
console.log(eseguiOperazione(8, 2, divide));