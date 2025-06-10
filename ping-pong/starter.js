//1. Acciones a los botones
//2. Botón verde asociado a jugador 1
//3. Botón rojo asociado a jugador 2
//4. Botón de reset
//5. Select de cantidad de puntos a jugar
//6. Lógica de juego

// Aquí comienza tu código

const combo = document.querySelector('#playto');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const subtitle = document.querySelector('.subtitle');

let p1Points = 0;
let p2Points = 0;
let limit = combo.value;
let color = p1Display.style.color;

const resetFun = function() {
    p1Points = 0;
    p2Points = 0;
    p1Display.style.color = color;
    p2Display.style.color = color;
};

const update = function() {
    p1Display.innerHTML = p1Points;
    p2Display.innerHTML = p2Points;
};

const onePoint = function(pDisplay, pPoints, oPDisplay) {
    if ((limit - 1) > pPoints) {
        pDisplay.innerHTML = ++pPoints;
    } else if ((limit - 1) == pPoints) {
        pDisplay.innerHTML = ++pPoints;
        pDisplay.style.color = 'green';
        oPDisplay.style.color = 'red';
    }
    return pPoints
};

combo.addEventListener('change', () => {
    limit = combo.value;
    resetFun();
    update();
});

reset.addEventListener('click', () => {
    resetFun();
    update();
});

p1Button.addEventListener('click', () => {
    if (limit > p2Points) {
        p1Points = onePoint(p1Display, p1Points, p2Display);
    };
});

p2Button.addEventListener('click', () => {
    if (limit > p1Points) {
        p2Points = onePoint(p2Display, p2Points, p1Display);
    };
});