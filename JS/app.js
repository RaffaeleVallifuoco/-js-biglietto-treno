console.log ('console test');

// Inserimento età e km da percorrere

let distance = prompt('Inserisci i chilometri che desieri percorrere'); //string | null
distance = parseInt(distance); //number | null
console.log('distanza: ' +distance + ' km');
let age = prompt('Inserisci la tua età'); //string | null
age = parseInt(age); //number ! null
console.log('età: '+ age +' anni');


// calcolo prezzo base del biglietto

let price_base = 1.21*distance; //number
price_base = Math.round (price_base);
console.log ('Il prezzo base è : ' + price_base +' €');


// calcolo buono sconto

let discount; //number 
if (age < 18) {
    discount = price_base * 0.2;
    let price_discount = price_base - discount;
    console.log ('Sconto 20% applicato' );
    console.log ('Prezzo scontato : ' +price_discount + ' €') ;
} else if (age >= 65) {
    discount = price_base * 0.4;
    let price_discount = price_base - discount;
    console.log('Sconto 40% applicato');
    console.log('Prezzo scontato : ' + price_discount + ' €');
} 


            