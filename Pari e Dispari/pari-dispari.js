
//prendiamo la scelta dell'user
let userChoice = prompt("pari o dispari");

//facciamo in modo che se la scelta dell'user sia una, quella del computer sia l'opposta.
function computerChoice(userChoice) {
    if (userChoice === "pari") {
        return "Il Computer ha scelto dispari"
    } else {
        return "Il Computer ha scelto pari"
    }
}

console.log(computerChoice(userChoice));

//avvertiamo il giocatore di cosa succederà.

let alertUserAboutGame = alert("Sceglierai un numero da 1 a 5, così farà anche il computer");

//prendiamo i due numeri, uno dal giocatore, l'altro facciamolo generare dal computer.
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
const computerNumber = Math.floor(Math.random() * 5) + 1;

console.log("Questo è il tuo numero: " + userNumber);
console.log("Questo è il numero del Pc: " + computerNumber);

//creiamo una variabile che è la somma dei numeri.
numberSum = userNumber + computerNumber;

//creiamo una funzione che serva a capire se un numero è pari o dispari e lo scriva in console.

function evenOrNot(userNumber, computerNumber) {
    if ((numberSum) % 2 === 0) {
        pari = true;
        return ("La somma dei numeri è: " + numberSum + " quindi pari");
    } else {
        pari = false;
        return ("La somma dei numeri è: " + numberSum + " quindi dispari");
    }
}

console.log(evenOrNot(userNumber, computerNumber));

//creiamo un'altra funzione che invece faccia capire chi ha vinto.

function gameWinner (userChoice, pari){
    if (userChoice === "pari" && pari === true){
        return "Complimenti hai scelto pari, il risultato è pari! Hai dunque vinto!"
    } else  if (userChoice === "dispari" && pari === false){
        return "Complimenti hai scelto dispari, il risultato è dispari! Hai dunque vinto!"
    }else {
        return "Mi spiace ma ha vinta il computer!"
    }
}

console.log(gameWinner(userChoice,pari));