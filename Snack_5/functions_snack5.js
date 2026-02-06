/*
Snack 5 - ✔️
Crea una funzione stampaOgniSecondo con setInterval.

✔️ - Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito.Interrompilo manualmente o usa clearInterval() in un altro script.
*/

function stampaOgniSecondo(timer, sMax) {
    let counter = 0

    return function () {
        const stopTimer = setInterval(() => {
            counter++
            if (counter === 1) {
                console.log(`è passato ${counter} secondo`);
            } else if (counter > sMax) {
                clearInterval(stopTimer)
            } else {
                console.log(`sono passati ${counter} secondi`);
            }
        }, timer)
    }
}

const timer1s = stampaOgniSecondo(1000, 8)
timer1s()