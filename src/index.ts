/*Ejercicio: Potencias
• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
35
34=3x3x3x3=81
Base Resultado*/


let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnCalcular = document.getElementById("calcular");
rotulo1.innerHTML = "Ingrese primer numero";
rotulo2.innerHTML = "Ingrese segundo numero";

let base: number = Number(dato1.value);
let exponente: number = Number(dato2.value);

let calcularPotencia = (
  base = Number(dato1.value),
  exponente = Number(dato2.value)
): number => {
  if (exponente === 0) {
    let resultado: number = 0;
    resultado = 1;
  } else {
    resultado = base ** exponente;
  }
  return resultado;
};

btnCalcular.addEventListener("click", () => {
  let total: number = calcularPotencia(
    Number(dato1.value),
    Number(dato2.value)
  );
  console.log(total);
});
