document.getElementById("btn-ejecutar").addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio() {
  // Podés cambiar el valor para probar
  const valor = 55; 
  const resultado = document.getElementById("resultado");

  resultado.style.display = "block"; // Mostrar resultado

  // Estructura condicional con if y else
  if (valor === 100) {
    resultado.textContent = " ¡Felicitaciones! El valor es exactamente igual a 100.";
    resultado.style.color = "#155724";
    resultado.style.backgroundColor = "#e6ffed";
    resultado.style.borderColor = "#b6e8c1";
  } else {
    resultado.textContent = " El valor no es igual a 100. Intenta cambiarlo y vuelve a ejecutar el ejercicio.";
    resultado.style.color = "#856404";
    resultado.style.backgroundColor = "#fff3cd";
    resultado.style.borderColor = "#ffeeba";
  }
}
