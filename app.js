// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaraciones
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value ;
    //let  titulo = document.querySelector('input');  let nombre = titulo.value;
    
    if (nombre == '') {
        alert("Por favor, ingrese un nombre.");
        document.getElementById("amigo").focus();
    } else {
        //agrega el nombre a la lista de amigos
        let indiceNombre = amigos.push(nombre);
        console.log(amigos);
        limpiaCampo();

    }
}

function limpiaCampo() {
    document.getElementById("amigo").value = '';
    
}

