let imprimir = document.getElementById("imprimir");

let number = 0;

imprimir.innerHTML = number;
//incrementar
function incrementar() {
    number = number + 1;
    /* console.log(number); */
    imprimir.innerHTML = number;
    return number;
}

//decrementar

function decrementar() {
    number = number - 1;
    imprimir.innerHTML = number;
    return number;
}

//resetear

function reset() {
    number = 0;
    imprimir.innerHTML = number;
    return number;
}