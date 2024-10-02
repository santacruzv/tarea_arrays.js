// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
  // Saca el primer elemento  que es nombre del cliente
  let nombreCliente = pedido.shift();

  // Añadimos "bebida" al inicio del array
  pedido.unshift("bebida");

  // Añadimos el nombre del cliente al final del array
  pedido.push(nombreCliente);

  // Retornar el array
  return pedido;
}

let pedidos = ["Dahiana", "Hamburguesa", "Papas Fritas"];
console.log(procesarPedido(pedidos)); // el resultado debe ser ["bebida", "Hamburguesa", "Papas Fritas", "Dahiana"]

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
  let suma = 0;

  // Iteramos sobre el array de números
  for (let i = 0; i < numeros.length; i++) {
    // aca vemos si el número es par
    if (numeros[i] % 2 === 0) {
      // Le sumamos a la variable suma
      suma += numeros[i];
    }
  }

  return suma; // retornara la suma total de los números pares
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumarPares(numeros)); // Debería de devolver 30  la suma---> 2 + 4 + 6 + 8 + 10

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
  // se itera sobre cada palabra en el array
  for (let i = 0; i < palabras.length; i++) {
    // verificamos si la ultima letra de la palabra no es: a
    if (palabras[i].slice(-1) !== "a") {
      return false; // Si al menos una palabra no termina en : a devolvemos false
    }
  }
  return true; // Si todas las palabras terminan en: a devolvemos true
}

let listaPalabras = ["Linda", "Hermosa", "Dahiana", "Fiorella"];
console.log(palabrasTerminanConA(listaPalabras)); // en este caso lanza true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
  // Encontrar el índice de la palabra buscada
  const index = words.indexOf(word);

  // se verificaa si la palabra se encontró
  if (index === -1) {
    return []; // Si no  encuentra va a devolver un array vacío
  }

  // Devuelve un nuevo array con las palabras después del índice qeu se encontro
  return words.slice(index + 1);
}

const words = ["hola", "mundo", "javascript", "node"];
console.log(buscaPalabras(words, "mundo")); // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
  //  aca recorre cada fila de la matriz
  for (let i = 0; i < matrix.length; i++) {
    // Recorre cada elemento de la fila
    for (let j = 0; j < matrix[i].length; j++) {
      // Verifica si el elemento es Javascript
      if (matrix[i][j] === "JavaScript") {
        return [i, j]; // devuelve la posición fila, columna
      }
    }
  }
  return [-1, -1]; // Devuelve -1, -1 si no se encuentra
}

const matrix = [
  ["HTML", "CSS", "JavaScript"],
  ["Java", "C++", "Python"],
  ["Ruby", "Go", "Swift"],
];

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
  // aca se verifica si el array está vacío
  if (books.length === 0) {
    return [-1, -1]; // se devuelve [-1, -1] si no hay libros
  }

  // Inicializamos los índices
  let minIndex = 0;
  let maxIndex = 0;

  // Recorre el array para encontrar los índices del libro con menos/ más páginas
  for (let i = 1; i < books.length; i++) {
    if (books[i] < books[minIndex]) {
      minIndex = i; // Actualiza el índice del libro con menos páginas
    }
    if (books[i] > books[maxIndex]) {
      maxIndex = i; // Actualiza el índice del libro con más páginas
    }
  }

  return [minIndex, maxIndex]; // Devuelve  los índices
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
  procesarPedido,
  sumarPares,
  palabrasTerminanConA,
  buscaPalabras,
  findJavaScript,
  findMinMaxPages,
};
