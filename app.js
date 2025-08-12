// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaraciones
const inputAmigo = document.getElementById('amigo');
const btAgregar = document.getElementById('botonAgrega');
let listaAmigos = document.getElementById('listaAmigos');
let numeroMaximo = 0; //número maximo de indice del array de amigos.
let cuentaSorteo = 0;
let listaNumerosSorteados = []; //Contiene los numero del index que tienen asignado un amigo secreto.
let listaASCorrespode = []; //contiene el numero de index del amigo que le coresponde ser el amigo secreto.
let amigos = [];//contiene los los nombres de los amigos secrtos.

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
function sortearAmigo() {
    //Recorrer cada uno de los nombres para asignarles un numero al azar en el array listaASCorrespode
    let listaResultado = document.getElementById('resultado');
    let contadorPersonas = 1;
    let numeroIndiceMismo = 0;
    let numeroFavorecido = 0;
    listaResultado.innerHTML = '';
    numeroMaximo = amigos.length;
    if (amigos.length >=3) {
        do {
            numeroIndiceMismo = contadorPersonas - 1;
            numeroFavorecido = generarNumeroSorteo(numeroIndiceMismo);
            //pregunto si el numero favorecido ya le esta dando regalos a otra persona.
            if (!listaASCorrespode.includes(amigos[numeroFavorecido])) {
                //si no esta en lista de personas que ya estan dando regalo 
                listaASCorrespode.push(amigos[numeroFavorecido]);//lo incluyo.
                contadorPersonas++; //paso a la siguiente personal
            }
            
            //Pregunto si es la ultima persona del grupo de amigos.
            if (contadorPersonas == numeroMaximo ) {
                //si es la ultima persona
                if  (!listaASCorrespode.includes(amigos[contadorPersonas - 1])) {
                    //y no esta incluido en la lista de personas que regalaron 
                    //entonces es el caso que le tocó relarse a si misma 
                    //  hay que volver a empezar el sorteo nuevamente.
                    contadorPersonas = 1;
                    listaASCorrespode = []; 
                }
            }
                    
        } while (contadorPersonas <= numeroMaximo);
        amigos.forEach(function (elemento, indice, array) {
        const nuevoLiResultado = document.createElement('li');   
        const texto = document.createTextNode(`${listaASCorrespode[indice]}  regala a --> ${elemento}`);
        nuevoLiResultado.appendChild(texto);
        listaResultado.appendChild(nuevoLiResultado);
    });
    limpiaListaAmigos();
    document.getElementById('botonSortear').setAttribute('disabled',true);
    } else {
        alert('El usuario debe agregar como mínimo 3 nombres');
        document.getElementById("amigo").focus();
    }
}

function generarNumeroSorteo(pnumeroIndiceMismo) {
    cuentaSorteo++;
    numeroMaximo = amigos.length;
    let numeroGenerado = 0;
     //solicita un nuevo numero pero que no se igual a si mismo.
    do {
        numeroGenerado =  Math.floor(Math.random() * numeroMaximo);
    }
    while (numeroGenerado == pnumeroIndiceMismo);
    return(numeroGenerado);    
}

function ActualizarLista() {
    limpiaListaAmigos();
  amigos.forEach(function (elemento, indice, array) {
    const nuevoLi = document.createElement('li');   
    const texto = document.createTextNode(elemento);
    nuevoLi.appendChild(texto);
    listaAmigos.appendChild(nuevoLi);
});
}

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value ;
    if (nombre == '') {
        alert("Por favor, ingrese un nombre.");
        document.getElementById("amigo").focus();
        
    } else {
        //agrega el nombre a la lista de amigos
        let indiceNombre = amigos.push(nombre);
        ActualizarLista();
        limpiaCampo();
    }
}
function limpiaCampo() {
    document.getElementById("amigo").value = '';
    
}
function limpiaListaAmigos(){
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  
}
