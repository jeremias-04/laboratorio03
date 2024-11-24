let numeroRandom = Math.floor(Math.random() * 100) + 1; // Generar número aleatorio
let intentos = 10; // Número de intentos

const inputNumero = document.getElementById("entradaNumero");
const comprobarBtn = document.getElementById("comprobarBtn");
const mensajeResultado = document.getElementById("mensajeResultado");
const intentosRestantes = document.getElementById("intentosRestantes");
const reiniciarBtn = document.getElementById("reiniciarBtn");

comprobarBtn.addEventListener("click", () => {
  const numeroIngresado = parseInt(inputNumero.value);

  if (!numeroIngresado || numeroIngresado < 1 || numeroIngresado > 100) {
    mensajeResultado.textContent =
      "Por favor, ingresa un número válido entre 1 y 100.";
    return;
  }

  intentos--;

  if (numeroIngresado === numeroRandom) {
    mensajeResultado.textContent = "¡Felicidades! Adivinaste el número.";
    endGame();
  } else if (intentos === 0) {
    mensajeResultado.textContent = `¡Perdiste! El número era ${numeroRandom}.`;
    endGame();
  } else {
    mensajeResultado.textContent =
      numeroIngresado > numeroRandom
        ? "El número es más bajo."
        : "El número es más alto.";
    intentosRestantes.textContent = `Intentos restantes: ${intentos}`;
  }

  inputNumero.value = ""; // Limpiar el campo
});

reiniciarBtn.addEventListener("click", () => {
  numeroRandom = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  mensajeResultado.textContent = "";
  intentosRestantes.textContent = "Intentos restantes: 10";
  reiniciarBtn.style.display = "none";
  comprobarBtn.style.display = "inline-block";
});

function endGame() {
  comprobarBtn.style.display = "none";
  reiniciarBtn.style.display = "inline-block";
}
