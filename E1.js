/*User profile
Write a program that prompts a user for their data: username, age, 
and a list of their favorite movies. Store the information and then
showcase it in the console. Take note that the output for the films should add 
a small message like: 'The film {film} is one of my favorites'.*/

// Queremos ejecutarlo en la consola con node, tenemos que declarar propiedades
const {count}= require('console')
const readline = require('readline'); //El módulo Readline proporciona 
//una forma de leer un flujo de datos, una línea a la vez.
const rl = readline.createInterface({ //leer datos y escribir datos en consola y los guarda en rl
    input: process.stdin, // lee los datos de entrada
    output: process.stdout //muestra las salidas
});

function UserProfile() { //creamos una función
    //question es una función en JavaScript, pero específicamente 
    //es un método proporcionado por el módulo readline de Node.js.
    rl.question("¿Cual es tu nombre? ", (username) => { //función callback , en el parametro almacena la info
        rl.question("Escribe tu edad ", (age) => { //estas funciones devuelven las respuestas del usuario
            rl.question("Cuantas peliculas favoritas tienes? ", (numMovies) => {
                let favoriteMovies = []; //aqui va a guardar las pelis
                let count = 0; //se inicia un contador en 0 de las pelis
                const askMovie = () => { //declararmos funcion anónima, aqui guarda las respuestas a la pregunta de las pelis fav
                    rl.question(`Introduce tus peliculas favoritas #${count + 1}: `, (pelicula) => { 
                        favoriteMovies.push(pelicula); //las agrega a esta variable predefinida antes
                        count++; //las cuenta
                        if (count < numMovies) { //si el contador de pelis , es menor al numero de pelis mencionadas
                            askMovie(); //vuelve a preguntar por su peli fav
                        } else {
                            // Muestra las respuestas en la consola
                            console.log("Nombre:", username);
                            console.log("Edad:", age);
                            console.log("Peliculas favoritas:");
                            favoriteMovies.forEach(pelicula => { //para cada peli agrega un mensaje
                                console.log(`The film '${pelicula}' is one of my favorites.`);
                            });
                            rl.close(); // cierro la interfaz
                        }
                    });
                };
              askMovie(); //se llama la función para que el usuario escriba las pelis fav
            });
        });
    });
}

UserProfile();
