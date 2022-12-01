const botonHamburguesa = document.querySelector(".botonToggle");
const palitoSuperior = document.querySelector("#palitoSup");
const palitoInferior = document.querySelector("#palitoInf");

let desplegado = false;

const arrglarBoton = () => {
    palitoSuperior.classList.toggle("palitoSuperiorStandar");
    palitoSuperior.classList.toggle("palitoSuperiorDesplegado");
    palitoInferior.classList.toggle("palitoInferiorStandar");
    palitoInferior.classList.toggle("palitoInferiorDesplegado");
    desplegado = !desplegado;
    console.log(desplegado)
}

const manejarClick = () => {
    arrglarBoton();
}


botonHamburguesa.addEventListener("click", manejarClick)
console.log(desplegado)