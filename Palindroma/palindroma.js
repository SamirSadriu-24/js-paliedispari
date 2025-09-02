// Prendiamo per prima cosa la parola dall'user. E facciamogliela leggere in console.

let userWord = prompt("Inserisci una parola:");
console.log("Questa è la parola che hai inserito: " + userWord);

//Rendiamo tutta la parola in minuscolo per evitare che se ci siano delle maiuscole esso non capisca che la parola sia palindroma.
userWordLowerCase = userWord.toLowerCase();

//facciamo in modo che dividi la parola e rendiamola in console divisa.
let splitWord = userWordLowerCase.split("");
console.log("Questa è la tua parola divisa: " + splitWord);

//faciamo lo stesso con la parola invertita.
const reverseSplitWord = userWordLowerCase.split("").reverse();
console.log("Questa è la tua parola divisa e rigirata: " + reverseSplitWord);

// console.log(splitWord.join(""));
// console.log(reverseSplitWord.join(""));

//facciamo una funzione che prenda i due risultati (sia di splitWord, sia di reverseSplitWord) e facciamo paragonare i due risultati di nuovo "uniti" se essi sono uguali allora facciamo un return della frase che sia palindormo, altrimenti viceversa.

function palindromaVerificator(splitWord, reverseSplitWordJoined) {

    if (splitWord.join("") === reverseSplitWord.join("")) {
        return "Questa parola è palindroma!"
    } else {
        return  "Questa parola non è palindroma."
    }
}

console.log(palindromaVerificator(splitWord, reverseSplitWord));