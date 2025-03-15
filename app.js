const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

    if (inputAmigo.value === ""){
        alert("Falta insertar un nombre");
        return;
    }
}




function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos [random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    if (listaAmigos.length === 0){
        alert("No ha ingresado ningun nombre al listado");
        return;
    }
}
