
// variabile da stampare
let stampa = "";

//variabile multiplo
let isMultiplo = false;


// creo un ciclo per selezionare 100 elementi
for(i = 1; i < 101; i++){


    //primo controllo
    if(i % 3 == 0){
        //modifico la variabile
        stampa += "Fizz";
        //è effettivamente divisibile
        isMultiplo = true;
    }

    //secondo controllo
    if(i % 5 == 0){
        //modifico la variabile
        stampa += "Buzz";
        //è effettivamente divisibile
        isMultiplo = true;
    }


    if(isMultiplo){
        // stampo la variabile
        console.log(stampa);
        // resetto la variabile
        stampa = "";
        isMultiplo = false;
    }

    else{
        console.log(i);
    }

}