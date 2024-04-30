/*Alarm
Write a program that asks a user for the amount of seconds needed until
an alarm (message) is executed alongside a text to show once those seconds
have passed in real time.
Result example: "Time for bed after 10 seconds".
*/
const {count} = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Alarm() {
  rl.question("¿En cuantos segundos quieres que suene la alarma? ", (segundos) => {
     // Definimos una función callback para iniciar el temporizador
    let temporizador = setInterval(() => { //se utiliza para ejecutar un fragmento de código
      // repetidamente a intervalos regulares de tiempo
      segundos--; //queremos que vaya en cuenta regresiva

      if (segundos > 0) { //si los segundos es mayor a 0 que muestre cuantos faltan
        console.log(`Tu vuelo sale en ${segundos} segundos.`);
      } else {
        clearInterval(temporizador); //detiene el temporizador
        console.log("Ya vete!");
        rl.close();
      }
    }, 1000); // tiempo en que se mostrara el mensaje 1000 milisegundos= 1 seg
  });
}

Alarm();


