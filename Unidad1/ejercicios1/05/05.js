let nombres = ["Ana","Pedro","Marta","Pedro","Lucia","Javier"];

while (nombres.length > 0) {
  let borrar = prompt("Lista: " + nombres + "\nNombre a borrar (o 'salir'):");

  if (borrar === "salir" || borrar === null) {
    break;
  }

  //sino es un elemento de la lista devuelve -1 por eso se pone ese while
  while (nombres.indexOf(borrar) !== -1) {
        //devuelve el numero de la lista en la que esta el nombre que uiqeres borrar
        let pos = nombres.indexOf(borrar);
        //se borra 1 elemento desde la posicion pos 
        nombres.splice(pos, 1);            
    }
}

alert("Lista final: " + nombres);
