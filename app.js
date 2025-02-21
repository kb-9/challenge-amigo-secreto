// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){ 
    let nombreDeAmigo = document.getElementById('amigo'); 
    
    //Validacion de entrada
    if (nombreDeAmigo.value === ''){
        alert('Por favor, inserte un nombre');
    } else if (amigos.includes(nombreDeAmigo.value)){  //evita duplicados
        alert('El amigo ya fue ingresado');
        limpiarCaja();
    } else {
        amigos.push(nombreDeAmigo.value);
        //Mostrar amigos
        mostrarAmigos();
        //Limpiar caja
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

//Funcion para mostrar lista de amigos
function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo = 0; amigo < amigos.length; amigo++){
        lista.innerHTML += `<li>${amigos[amigo]}</li>`;
    }
}

//Funcion para sortear amigo 
function sortearAmigo(){
    if (amigos.length === 0){ //valida que haya amigos en la lista
        alert('No hay amigos para sortear');
    } else {
        let ganador = Math.floor(Math.random() * amigos.length); //crea un indice aleatorio de la lista
        document.getElementById('resultado').innerHTML = `El ganador es: ${amigos[ganador]}`;
    }
}   

