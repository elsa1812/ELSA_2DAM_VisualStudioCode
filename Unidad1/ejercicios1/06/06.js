let numeros = prompt("Dame una lista de numeros separada por comas");

let partes = numeros.split(",");

let mayor = Number(partes[0]);
for(let i = 0; i<partes.length; i++){

    let numero = Number(partes[i]);
    if(mayor<numero){
        mayor= numero;
    }
}

alert("El numero mayor es: "+ mayor);