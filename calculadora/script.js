const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.op');
const igualBtn = document.querySelector('#igual');
const cBtn = document.querySelector('#c');
const borrarBtn = document.querySelector('#borrar');
const ceroBtn = document.querySelector('#cero');

//Tú código va acá
//hint: Busca sobre la función eval

let text = '';
let numero = 0;

const showResult = function(result) {
    if (result.length > 14) {
        result = result.slice(-14)
    }
    pantalla.innerHTML = result;
};

igualBtn.addEventListener('click', () => {
    try {
        numero = eval(text);
        text = numero.toString();
        showResult(text);
        if (text == '0') {
            text = ''
        }
        
    } catch (error) {
        numero = 0;
        text = '';
        pantalla.innerHTML = "Error!"
    }
});

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        text = text + boton.textContent;
        showResult(text);
    });
});

cBtn.addEventListener('click', () => {
    text = '';
    numero = 0;
    pantalla.innerHTML = '0';
});

borrarBtn.addEventListener('click', () => {
    text = text.slice(0,-1);
    if (text.length == 0){
        pantalla.innerHTML = "0";
    } else {
        showResult(text);
    }
});

ceroBtn.addEventListener('click', () => {
    if (text != '') {
        text = text + '0';
        showResult(text);
    } else {
        pantalla.innerHTML = '0';
    }
});