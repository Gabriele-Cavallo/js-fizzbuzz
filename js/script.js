// TASK -Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1 - Stampo in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++){

// 2 - Verfico per che numeri è divisibile e assegno il valore corretto
    // 2-a Controllo se il numero è divisibile per 5 E 3 e gli assegno il valore fizzbuzz
    // 2-b Controllo se il numero è divisibile per 5 e gli assegno il valore buzz
    // 2-c Controllo se il numero è divisibile per 3 e gli assegno il valore fizz
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
}
// 3 - Stampo in console i nuovi valori