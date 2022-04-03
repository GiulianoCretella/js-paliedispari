// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1.faccio una variabile contentente un prompt;
// 2.creo una funzione che chiamo palidroma e aggiungo come argomento "parola"
// 3.in un array faccio scomporre la parola tramite split
// 4.con un ciclo inverto le parole
// 4.concateno tutte le lettere per ricomporre la parola al contrario
// 5.verifico se la parola è palindroma o meno 

let parolaUtente = prompt('inserisci una parola');
let titolo = document.querySelector('.titolo');
console.log(titolo);

function palindromo(parola){
    let scomposta = parola.split('');
    console.log(scomposta);
    let inversione = '';
    for (let i = scomposta.length - 1; i >= 0; i--){
        inversione += scomposta[i];
    }
    return inversione;
}
let parolaInvertita = palindromo(parolaUtente);
console.log(parolaInvertita);

titolo.append(`La tua parola al contrario : ${parolaInvertita}`)

