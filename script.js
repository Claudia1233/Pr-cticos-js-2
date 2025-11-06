document.getElementById("btn-ejecutar").addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio() {
  const resultado = document.getElementById("resultado");

  // Genera un número aleatorio entre 90 y 110
  const valor = Math.floor(Math.random() * 21) + 90;

  resultado.style.display = "block";

  // Mostrar mensaje según el valor
  if (valor === 100) {
    resultado.textContent = `🎉 ¡Felicitaciones! El valor generado fue ${valor}, exactamente igual a 100.`;
    resultado.style.color = "#155724";
    resultado.style.backgroundColor = "#e6ffed";
    resultado.style.borderColor = "#b6e8c1";
  } else {
    resultado.textContent = `ℹ️ El valor generado fue ${valor}, y no es igual a 100.`;
    resultado.style.color = "#856404";
    resultado.style.backgroundColor = "#fff3cd";
    resultado.style.borderColor = "#ffeeba";
  }
}
