/*Factorial
Write a program that prompts for an intenger number n.
Where  1 <= n. Solve this using recursion*/

const { count } = require('console');
const readline = require('readline'); //El módulo Readline proporciona

const rl = readline.createInterface({ //leer datos y escribir datos en consola y los guarda en rl
    input: process.stdin, // lee los datos de entrada
    output: process.stdout //muestra las salidas
});


function factorial(n) {
    if (n === 0 || n === 1) { // comparamos si n es igual a 0 o 1 del mismo valor y tipo 
        // 0*(-1)!=0!=1 y 1*(0)!=1
      return 1;
    } else {
      return n * factorial(n - 1); // formula n * (n-1)!
    }
  }
  
  rl.question("Introduce un numero entero positivo mayor o igual a 1: ", (numero) => {
    const n = parseInt(numero); // lo convierte a un numero entero
    const resultado = factorial(n);
    console.log(`El factorial de ${n} es: ${resultado}`);
    rl.close();
  });

  //NO ME GUSTA JS :(