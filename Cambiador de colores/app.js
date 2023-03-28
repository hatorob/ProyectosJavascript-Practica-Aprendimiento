const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//!Seleccionamos nuestro btn -> Click me!
const btn = document.querySelector("#btn");
//! Seleccionamos el color base que tiene nuestra página, en este caso usamos la clase del span del index
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    //console.log(document.body);  //!Para ver que si seleccionamos el body de index.html
    //? Obtener un número aleatorio entre mi arreglo de colors 0-3 (por posiciones)
    const randomNumbers = getRandomNumber();
    //console.log(randomNumbers);
    //!Aquí vamos a seleccionar un color randomNumbers de mi array colors y aplicamos al body
    document.body.style.backgroundColor = colors[randomNumbers];
    //!
    color.textContent = colors[randomNumbers]
})

let getRandomNumber = () => {
    //!Toma un numero aleatorio entre 0 y el tamaño de mi array y con Math.floor redeo el número al entero menor, 3.8 -> 3
    return Math.floor(Math.random() * colors.length);
}