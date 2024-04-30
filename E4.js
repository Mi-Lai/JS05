/*Palindrome
Write a program that prompts for a word or sentence 
(it can be capitalized, have spaces and punctuation).
 Figure out if the sentence/word is a palindrome or not. 
Ignoring punctuation, spaces and capitalized letters.*/

const {count} = require('console');
const readline = require('readline'); 

const rl = readline.createInterface({ //leer datos y escribir datos en consola y los guarda en rl
    input: process.stdin, // lee los datos de entrada
    output: process.stdout 
});

function esPalindromo(palabra) {
   // palabra = palabra.toLowerCase().trim().split('').join('');
    palabra = palabra.toLowerCase().trim().split('').filter(char => char !== ' ').join(''); 
    // Convertir a minúsculas, eliminar espacios y dividir en caracteres
    var inversa = palabra.split('').reverse().join('');
    //dividir en caracteres + invierte la palabra y junta las letras 
   
    return palabra === inversa;
}

rl.question('Ingresa una palabra: ', (palabra) => {
  if (esPalindromo(palabra)) {
      console.log("¡Es un palíndromo!");
  } else {
      console.log("No es un palíndromo.");
  }
  rl.close();
});

    
       
