const hamburguesaBtn = document.querySelector('.header-button');
const menu = document.querySelector('.menu');

hamburguesaBtn.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
});

const alturaInput = document.querySelector('#estatura');
const pesoInput = document.querySelector('#peso');
const edadInput = document.querySelector('#edad');
const imcOutput = document.querySelectorAll('.calculadora-respuesta')[0];
const caloriasOutput = document.querySelectorAll('.calculadora-respuesta')[1];
const factor = 1.375;

const calcularButton = document.querySelector('#calculadora');

calcularButton.addEventListener('click', () => {
    event.preventDefault();
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);
    const edad = parseFloat(edadInput.value);

    const imcResult = imc(altura, peso);
    const caloriasResult = calorias(altura, peso, edad, factor);

    imcOutput.value = `Tu Indice de Masa Corporal es: ${imcResult}`;
    caloriasOutput.value = `Las Calorias a consumir son: ${caloriasResult}`;
});

function imc (altura, peso) {
    let imc = Math.round(peso / ((altura/100)**2));
    return imc
}

function calorias (altura, peso, edad, factor) {
    let calorias = Math.round((655 + (9.6*peso))+((1,8*altura)-(4.7*edad))*factor)
    return calorias
}

