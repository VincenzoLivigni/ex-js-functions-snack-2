/*
Snack 6 - ✔️
Crea un contatore automatico con setInterval

✔️ - Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e 
restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

function creaContatoreAutomatico(timer) {
    let counter = 0

    return function () {
        setInterval(() => {
            counter++
            console.log(counter);
        }, timer)
    }
}

const timer1s = creaContatoreAutomatico(1000)
timer1s()
