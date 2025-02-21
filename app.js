// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo'); 
    
    //Validacion de entrada
    if (nombreDeAmigo.value === ''){
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombreDeAmigo);
    }

    //Limpiar caja
    nombreDeAmigo.value = '';
}