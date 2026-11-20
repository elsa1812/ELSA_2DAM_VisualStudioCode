
let dato = prompt("Dame una lista de numeros");
let invertida = "";

for(let i = 0;i<dato.length ;i++){
    invertida = dato[i]+ invertida;
}
alert("Original: "+dato+"\nInvertida: "+invertida);