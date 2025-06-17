/*1. Calcular el área de un rectángulo
Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
La funcion no debe devolver un console.log() sino retornar un valor, llamaremos a la funcion dentro de un
console.log() .
La idea de esto es comprender que algunas funciones retornan un valor y otras simplemente hacen otras cosas, como
imprimir un mensaje por consola. Las que retornan algo, deberán incluir la palabra clave return .
// Longitud = ancho x alto
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15*/

let base = prompt(
	"Vamos a calcular el área de un rectángulo. Por favor, ingresa el valor de la base, en metros: "
);

let height = prompt(
	"Gracias! Ahora, por favor ingresa el valor de la altura, en metros: "
);

const rectangleArea = (b, h) => b * h;

console.log(
	`El área del rectángulo es: ${rectangleArea(base, height)} metros cuadrados`
);

/*2. Contar palabras en una cadena
Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena.
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5*/

let sentence = prompt("Vamos a contar palabras. Por favor, ingresa una frase: ");

function wordsCount(str) {
	let brkCount = 1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			brkCount++;
		}
	}
	return brkCount;
}

let contarPalabras = wordsCount(sentence);
console.log(
	`La frase ingresada es "${sentence}" y tiene ${contarPalabras} palabras`
);


/* Otra forma: usando el método split, que divide el string en un array, con el caracter establecido como delimitador (en este caso, es el espacio)*/

let sentence2 = prompt("Vamos a contar palabras. Por favor, ingresa una frase: ");

function wordCount(str2) {
	//Convierte la frase en un array, determinando los límites de cada elemento por los espacios => cada elemento es una palabra
	let sentenceArray = str2.split(" ");
	//Devuelve el largo del array, que será la cantidad de palabras de la frase
	return sentenceArray.length;
}

words = wordCount(sentence2);
console.log(`La frase "${sentence2}" tiene ${words} palabras`);

/*3. Contar vocales en una cadena
Escribe una función que reciba una cadena y cuente el número de vocales.
console.log(contarVocales("JavaScript")); // Resultado: 3*/

let sentence3 = prompt("Vamos a contar vocales. Por favor, ingresa una palabra o frase: ");

function vowelCount(str3) {
	vowels = 0;
	for (let i = 0; i < str3.length; i++) {
		if (
			str3[i] == "a" ||
			str3[i] == "e" ||
			str3[i] == "i" ||
			str3[i] == "o" ||
			str3[i] == "u"
		) {
			vowels++;
		}
	}
	return vowels;
}

finalVowels = vowelCount(sentence3);
console.log(`La frase "${sentence3}" tiene ${finalVowels} vocales`);

/*4. Encontrar el palíndromo
Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo.
// Ejemplos, neuquen, reconocer, rallar
console.log(esPalindromo("neuquen")); // true*/

let palindrome = prompt(
	"Por favor, ingresa una palabra o un número. Vamos a ver si es palíndromo:"
);

function itsAPalindrome(str4) {
	let chars = str4.split("");
	let invertedChars = [];
	for (let i = 0; i < chars.length; i++) {
		invertedChars.unshift(chars[i]);
	}
	if (JSON.stringify(invertedChars) === JSON.stringify(chars)) {
		return true;
	} else {
		return false;
	}
}
answer = itsAPalindrome(palindrome);

if (answer === true) {
	console.log(`${palindrome} es palíndromo`);
} else {
	console.log(`${palindrome} no es palíndromo`);
}

/*5. Crear un programa para convertir la edad de un perro a años humanos
Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina,
que equivale a 7 veces la edad humana.
Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.
edadCanina(7); // Tu perro tiene 49 años humanos*/

let dogAge = prompt("Por favor, ingresa la edad de tu perro:");

const edadEnAnhosHumanos = (age) => age * 7;

console.log(`Tu perro tiene ${edadEnAnhosHumanos(dogAge)} años humanos `);


/*6. Convertir la primera letra de cada palabra en mayúscula
Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"*/

let sentence5 = prompt(
	"Vamos a iniciar palabras con mayúsculas. Por favor, ingresa una frase, o varias palabras: "
);

function capitalizeWords(str5) {
	let words = str5.toLowerCase().split(" ");
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
	}
	return words.join(" ");
}

finalSentence = capitalizeWords(sentence5);
console.log(`Aquí están tus palabras inicializadas en mayúsculas: ${finalSentence}`);




/*7. Generar los primeros N números de la sucesión de Fibonacci
Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci.
console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]*/






/*8. Lista de Productos
const productos = [
{ id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
{ id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
{ id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
{ id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
{ id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];
// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
// 2. Usando map: Crear un array con solo los nombres de los productos
// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
// 4. Usando find: Encontrar el producto con id 3
// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)*/

/*9. Estudiantes y Calificaciones
const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
{ id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
{ id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
{ id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];
// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
// 4. Usando find: Encontrar estudiante llamado 'María'
// 5. Usando reduce: Calcular la edad promedio de los estudiantes*/

/*10. Películas
const peliculas = [
{ id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
{ id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
{ id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
{ id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
{ id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];
// 1. Usando forEach: Mostrar título y año de cada película
// 2. Usando map: Crear array de títulos en mayúsculas
// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
// 4. Usando find: Encontrar película estrenada en 2014
// 5. Usando reduce: Calcular la duración total de todas las películas*/
