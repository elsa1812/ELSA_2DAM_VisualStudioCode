const numSecreto = Math.floor(Math.random()*10)+1;
let intentos =0;

while(true){

    const entrada = prompt("Adivina el numero (1-10): ");

    if(entrada === null){
        alert("El juego a acabado");
        break;
    }

    intentos++;

    if(entrada == numSecreto){

        alert("Acertaste en "+ intentos+ " intentos");
        break;
    }

    if(entrada>numSecreto){
        alert("El numero es menor");
    }
    else if(numSecreto>entrada){
        alert("El numero es mayor");
    }

}