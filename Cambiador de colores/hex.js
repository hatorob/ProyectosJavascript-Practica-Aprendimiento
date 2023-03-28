const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = '#';
    //!Hacemos un for que recorra 6 veces ya que el hash de un hexadecima es de 6 posiciones ej-> f15025
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

let getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}