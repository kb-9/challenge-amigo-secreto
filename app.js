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

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo = 0; amigo < amigos.length; amigo++){
        lista.innerHTML += `<li>${amigos[amigo]}</li>`;
    }
}
