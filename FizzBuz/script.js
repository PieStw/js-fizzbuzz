
// variabile da stampare
let stampa = "";


// creo un ciclo per selezionare 100 elementi
for(i = 1; i < 101; i++){


    //primo controllo
    if(i % 3 == 0){
        stampa += "Fizz"
    }

    //secondo controllo
    if(i % 5 == 0){
        stampa += "Buzz"
    }

    console.log(stampa)
    stampa = "";
}