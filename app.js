// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaraciones
const inputAmigo = document.getElementById('amigo');
const btAgregar = document.getElementById('botonAgrega');
let listaAmigos = document.getElementById('listaAmigos');
let amigos = [];

if (inputAmigo && btAgregar ) {
            inputAmigo.addEventListener('keypress', function(event) {
                if (event.key === 'Enter' /*|| event.keyCode === 13*/) {
                    console.log('ENTER');
                    event.preventDefault();
                    btAgregar.click();
                }
            });
        } else {
            if (!inputAmigo) console.error("No se encontró el elemento con ID 'amigo'.");
            if (!btAgregar) console.error("No se encontró el elemento con ID 'button-add'.");
        } 

function ActualizarLista() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  
  amigos.forEach(function (elemento, indice, array) {
    const nuevoLi = document.createElement('li');   
    const texto = document.createTextNode(elemento);
    nuevoLi.appendChild(texto);
    listaAmigos.appendChild(nuevoLi);
    //console.log(elemento, indice);
});
}
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value ;
    //let  titulo = document.querySelector('input');  let nombre = titulo.value;
    
    if (nombre == '') {
        alert("Por favor, ingrese un nombre.");
        document.getElementById("amigo").focus();
        ActualizarLista();
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

