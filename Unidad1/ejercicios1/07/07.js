let notas = [5,8,4,9,7];
//alert("Notas: " +notas);

let nuevaNota = Number(prompt("Introduce un nuevo numero a la array"));
//añadir al final de la array
notas.push(nuevaNota);

let notaMinima=Number(notas[0]);
let numNotas=0;
let suma=0;

for(let i = 0;i<notas.length;i++){

    suma= (suma+Number(notas[i]));

    if(notaMinima>notas[i]){
        notaMinima=notas[i];
        numNotas=i;
    }
}

notas.splice(numNotas,1);

let mediaFinal = (suma-notaMinima)/notas.length;

alert("Notas: "+ notas+"\nMedia: "+ mediaFinal);