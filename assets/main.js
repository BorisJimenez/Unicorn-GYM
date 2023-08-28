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

function generarTabla(rutina) {
    let tablaContenido = '';
  
    if (rutina === 'cardio') {
      tablaContenido = `
        <table class="rutina-table" id="cardio-table">
          <tr>
            <th>Día 1</th>
            <th>Día 2</th>
            <th>Día 3</th>
            <th>Día 4</th>
            <th>Día 5</th>
          </tr>
          <tr>
            <td>Caminata o Trote suave</td>
            <td>Caminata o Trote suave</td>
            <td>Caminata</td>
            <td>Caminata o Trote suave</td>
            <td>Caminata o Trote suave</td>
          </tr>
          <tr>
            <td>Máquina elíptica o Bicicleta estática</td>
            <td>Máquina elíptica o Bicicleta estática</td>
            <td>Yoga</td>
            <td>Subir y bajar escaleras</td>
            <td>Baile aeróbico</td>
          </tr>
          <tr>
            <td>Enfriamiento</td>
            <td>Estiramientos</td>
            <td>Estiramientos</td>
            <td>Planchas</td>
            <td>Estiramientos</td>
          </tr>
          <tr>
            <td>Estiramiento</td>
            <td>Relajación</td>
            <td>-</td>
            <td>Estiramientos</td>
            <td>Relajación</td>
          </tr>
        </table>
      `;
    } else if (rutina === 'fuerza') {
        tablaContenido = `
          <table class="rutina-table" id="fuerza-table">
            <tr>
              <th>Día 1</th>
              <th>Día 2</th>
              <th>Día 3</th>
              <th>Día 4</th>
              <th>Día 5</th>
            </tr>
            <tr>
              <td>Sentadillas</td>
              <td>Dominadas</td>
              <td>Caminata</td>
              <td>Press de pecho con mancuernas</td>
              <td>Press de hombros con mancuernas</td>
            </tr>
            <tr>
              <td>Prensa de piernas</td>
              <td>Remo con barra</td>
              <td>Yoga</td>
              <td>Fondos en máquina</td>
              <td>Elevaciones laterales</td>
            </tr>
            <tr>
              <td>Zancadas con mancuernas</td>
              <td>Curl de bíceps con barra</td>
              <td>Estiramientos</td>
              <td>Press de tríceps en polea alta</td>
              <td>Planchas laterales</td>
            </tr>
            <tr>
              <td>Elevación de cadera</td>
              <td>Curl de martillo</td>
              <td>-</td>
              <td>Extensiones de tríceps acostada</td>
              <td>Plancha con elevación de pierna</td>
            </tr>
          </table>
        `;
      } else if (rutina === 'recomposicion') {
        tablaContenido = `
          <table class="rutina-table" id="recomposicion-table">
            <tr>
              <th>Día 1</th>
              <th>Día 2</th>
              <th>Día 3</th>
              <th>Día 4</th>
              <th>Día 5</th>
            </tr>
            <tr>
              <td>Calentamiento</td>
              <td>Yoga</td>
              <td>Caminata</td>
              <td>Squats</td>
              <td>Calentamiento</td>
            </tr>
            <tr>
              <td>Entrenamiento en circuito</td>
              <td>Yoga</td>
              <td>Caminata</td>
              <td>Flexiones</td>
              <td>Trote ligero</td>
            </tr>
            <tr>
              <td>Estiramientos y Relajación</td>
              <td>Yoga</td>
              <td>Caminata</td>
              <td>Rows con banda de resistencia</td>
              <td>Yoga</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>Planchas y Abdominales</td>
              <td>-</td>
            </tr>
          </table>
        `;
      }

    return tablaContenido;
  }

function guardarSeleccion(rutina) {
    // Ocultar las opciones de rutina y mostrar la tabla con la rutina seleccionada
    document.getElementById('cardio-option').style.display = 'none';
    document.getElementById('fuerza-option').style.display = 'none';
    document.getElementById('recomposicion-option').style.display = 'none';
    // Ocultar las otras opciones de rutina
    // Mostrar la tabla con la rutina seleccionada
    document.getElementById('tabla-rutina').style.display = 'block';
    // Aquí podrías generar y mostrar la tabla con la rutina según la selección
    let tablaContenido = generarTabla(rutina);
    document.getElementById('tabla-rutina').innerHTML = tablaContenido;
  } 
  