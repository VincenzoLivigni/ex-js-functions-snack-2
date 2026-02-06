/*
Snack 7 - ✔️
Crea una funzione che ferma un timer dopo un certo tempo

✔️ - Scrivi una funzione eseguiEferma che accetta un messaggio,un tempo di avvio e un tempo di stop.
Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

function eseguiEferma(messaggio, avvio, stop) {
    const stampa = setInterval(() => {
        console.log(messaggio);
    }, avvio)

    setTimeout(() => {
        clearInterval(stampa)
        console.log("Stop!");
    }, stop)
}

const startAndStop = eseguiEferma("Messaggio stampato a intervalli regolari", 1000, 3000)