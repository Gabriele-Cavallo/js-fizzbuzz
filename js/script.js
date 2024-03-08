// TASK -Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// BONUS 1:
// // Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Prendere il contenitore a cui appendere i box.
let numberBox = document.querySelector('#number-box');
// 1 - Stampo in console i numeri da 1 a 100
//Primo container
for (let i = 1; i <= 100; i++){
    console.log('number' , i);
// 2 - Verfico per che numeri è divisibile e assegno il valore corretto
    // 2-a Controllo se il numero è divisibile per 5 E 3 e gli assegno il valore fizzbuzz
    // 2-b Controllo se il numero è divisibile per 5 e gli assegno il valore buzz
    // 2-c Controllo se il numero è divisibile per 3 e gli assegno il valore fizz
    let number;
    let cssClass;
    if (i % 3 === 0 && i % 5=== 0) {
        number = 'FizzBuzz';
        cssClass = 'fizzbuzz';
    }else if (i % 5 === 0) {
        number = 'Buzz';
        cssClass = 'buzz';
    }else if (i % 3 === 0) {
        number = 'Fizz';
        cssClass = 'fizz';
    }else{
        number = i;
        cssClass = 'base-bg';
    }
// 3 - Stampo in console i nuovi valori
    console.log(number);
// 4 - Aggiungo un box con il messaggio.
    let box = `<div class="box ${cssClass}">${number}</div>`;
    numberBox.innerHTML += box;
}
//Secondo container
let secondNumberBox = document.querySelector('#second-number-box');
for (let i = 1; i <= 100; i++){
    let number;
    let cssClass;
    if (i % 3 === 0 && i % 5=== 0) {
        number = 'FizzBuzz';
        cssClass = 'fizzbuzz';
    }else if (i % 5 === 0) {
        number = 'Buzz';
        cssClass = 'buzz';
    }else if (i % 3 === 0) {
        number = 'Fizz';
        cssClass = 'fizz';
    }else{
        number = i;
        cssClass = 'base-bg';
    }
    let secondBox = document.createElement('div');
    secondBox.innerHTML = number;
    secondBox.classList.add('box');
    secondBox.classList.add(number);
    secondBox.classList.add(cssClass);
    secondNumberBox.append(secondBox);
}