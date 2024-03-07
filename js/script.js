// TASK -Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// BONUS 1:
// // Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

// 1 - Stampo in console i numeri da 1 a 100
//Primo container
for (let i = 1; i <= 100; i++){
// 2 - Verfico per che numeri è divisibile e assegno il valore corretto
    // 2-a Controllo se il numero è divisibile per 5 E 3 e gli assegno il valore fizzbuzz
    // 2-b Controllo se il numero è divisibile per 5 e gli assegno il valore buzz
    // 2-c Controllo se il numero è divisibile per 3 e gli assegno il valore fizz
// 3 - Stampo in console i nuovi valori
// 4 - Aggiungo un elemento al DOM per stampare in pagina i valori
    let number;
    if (i % 3 === 0 && i % 5=== 0) {
        number = 'FizzBuzz';
    }else if (i % 5 === 0) {
        number = 'Buzz';
    }else if (i % 3 === 0) {
        number = 'Fizz';
    }else{
        number = i;
    }
    console.log(number);
    let numberBox = document.querySelector('#number-box');
    let box = `<div class="box ${number}">${number}</div>`;
    numberBox.innerHTML += box;
}
//Secondo container
for (let i = 1; i <= 100; i++){
        let number;
        if (i % 3 === 0 && i % 5=== 0) {
            number = 'FizzBuzz';
        }else if (i % 5 === 0) {
            number = 'Buzz';
        }else if (i % 3 === 0) {
            number = 'Fizz';
        }else{
            number = i;
        }
        console.log(number);
        let secondNumberBox = document.querySelector('#second-number-box');
        let secondBox = document.createElement('div');
        secondBox.innerHTML = number;
        secondBox.classList.add('box');
        secondBox.classList.add(number);
        secondNumberBox.append(secondBox);
    }