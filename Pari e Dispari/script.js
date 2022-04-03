// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// creo un bottone con valore pari 
// creo un bottone con valore dispari
// faccio inserire un numero all'utente 
// creo un numero random per il computer
// sommo i numeri
// controllo che il numero sia pari o dispari
// determino il risultato a seconda della scelta dell'utente

let bottonePari = document.getElementById('pari');
console.log(bottonePari);

let bottoneDispari = document.getElementById('dispari');
console.log(bottoneDispari);

let resoconto = document.querySelector('.resoconto');
console.log(resoconto);

let div = document.querySelector('.app');
console.log(div);

let restart = document.getElementById('restart');
console.log(restart);

let computerFa = document.getElementsByClassName('fa-computer');
console.log(computerFa);

let userFa = document.getElementsByClassName('fa-user');
console.log(userFa);

bottonePari.addEventListener('click', numeroPari);

function numeroPari(){
    let userNumber = document.getElementById('usernumber').value;
    let computerNumber = (Math.floor(Math.random() * 100) * 1);
    let numeroTotale = parseInt(userNumber) + computerNumber;
    resoconto.innerHTML += `+ Pc: ${computerNumber} = ${numeroTotale}`;
    if (isNaN(numeroTotale)){
        alert('Carattere non valido, inserisci un numero!')
        window.location.reload();
    }
    if (numeroTotale % 2 === 0){
        div.innerHTML+= 'Pari! - Hai Vinto!';
        userFa[0].classList.remove('user');
        userFa[0].classList.add('fa-winner');
    } else {
        div.innerHTML+= 'Dispari - Hai Perso!';
        computerFa[0].classList.remove('user');
        computerFa[0].classList.add('fa-winner');
    }
    restart.classList.remove('d-none');
};

bottoneDispari.addEventListener('click', numeroDispari);

function numeroDispari(){
    let userNumber = document.getElementById('usernumber').value;
    let computerNumber = (Math.floor(Math.random() * 100) * 1);
    let numeroTotale = parseInt(userNumber) + computerNumber;
    resoconto.innerHTML += `+ Pc: ${computerNumber} = ${numeroTotale}`;
    if (isNaN(numeroTotale)){
        alert('Carattere non valido, inserisci un numero!')
        window.location.reload();
    }
    if (numeroTotale % 2 !== 0){
        div.innerHTML+= 'Dispari - Hai Vinto!';
        userFa[0].classList.remove('user');
        userFa[0].classList.add('fa-winner');
    } else {
        div.innerHTML+= 'Pari - Hai Perso!';
        computerFa[0].classList.remove('user');
        computerFa[0].classList.add('fa-winner');
    } 
    restart.classList.remove('d-none')
};

restart.addEventListener('click', ricominciaDaCapo);
function ricominciaDaCapo(){
    window.location.reload();
};




