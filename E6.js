/*Flat array
Write a program that takes the following nested matrix and flattens it 
(makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...*/

const { count } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//se quiere convertir a un vector (aplanar) la matriz multidimensional

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
console.log(multiDimension);
function flattenArray(arr) {
  let aplanada= []; //aqui va a guardar los datos

  arr.forEach(element => {
    if (Array.isArray(element)) {
      aplanada= aplanada.concat(flattenArray(element)); // concatena los elementos en el vector
    } else {
      aplanada.push(element); //agrega los elementos a la variable aplanada
    }
  });

  return aplanada;
}

let Array1D = flattenArray(multiDimension);
console.log(Array1D);

