/*Highest number
Write a program that asks for 10 numbers. Using logical operators
and any other javascript functions/structures you've seen before, determine 
and output the highest of those numbers.
Steps:
1.-asks for 10 numbers
2.- determine and output the highest of those numbers.
*/

const { count } = require('console');
const readline = require('readline'); //El módulo Readline proporciona 
//una forma de leer un flujo de datos, una línea a la vez.
const rl = readline.createInterface({ //leer datos y escribir datos en consola y los guarda en rl
    input: process.stdin, // lee los datos de entrada
    output: process.stdout //muestra las salidas
})

function Highest() {
    let numeros = [];
    let count = 0;

    const askNumbers = () => {
        rl.question(`Escribe 10 números #${count + 1}: `, (num) => {
            numeros.push(parseFloat(num)); // Convertir la entrada a número y agregarlo a la lista
            count++;

            if (count < 10) {
                askNumbers(); // Llamada recursiva para obtener los siguientes números
            } else {
                const mayor = Math.max(...numeros); // Encontrar el número mayor dento de un arreglo
                console.log(`El número mayor es ${mayor}`);
                rl.close();
            }
        });
    };

    askNumbers(); // Llamada inicial para pedir el primer número
}

Highest(); // Llamar a la función para empezar a solicitar números
