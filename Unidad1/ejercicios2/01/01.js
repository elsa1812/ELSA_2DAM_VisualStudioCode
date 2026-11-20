function comporbarClave(){
    let clave = document.forms["formulario1"].clave.value;
    let patron = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;

    if (patron.test(clave)) {
        alert("Contraseña segura");
    } else {
        alert("Error: La contraseña no cumple los requisitos.");
    }


}