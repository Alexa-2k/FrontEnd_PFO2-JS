/*1. Calcular el área de un rectángulo
Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
La funcion no debe devolver un console.log() sino retornar un valor, llamaremos a la funcion dentro de un
console.log() .
La idea de esto es comprender que algunas funciones retornan un valor y otras simplemente hacen otras cosas, como
imprimir un mensaje por consola. Las que retornan algo, deberán incluir la palabra clave return .
// Longitud = ancho x alto
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15*/

const rectangleArea = (b, h) => b * h;

for (let i = 1; i <= 3; i++) {
	let base = prompt(
		`(${i}/3) Vamos a calcular el área de un rectángulo. Por favor, ingresa el valor de la base, en metros:`
	);

	let height = prompt(
		`(${i}/3) Gracias! Ahora, por favor ingresa el valor de la altura, en metros:`
	);

	let area = rectangleArea(base, height);

	console.log(`(${i}/3) El área del rectángulo es: ${area} metros cuadrados`);

	alert(`(${i}/3) El área del rectángulo es: ${area} metros cuadrados`);
}




/*Se propone que se le solicite al usuario el ingreso de los datos de base y altura, para luego calcular el área del rectángulo con una función flecha y mostrarlo en pantalla.
Se eligió la función flecha dado que el cálculo puede resolverse en una línea.
Además de mostrar el resultado en consola, se muestra un alert
Se incluye un bucle for para que el ejercicio se repita 3 veces  */

/*====================================================================================*/
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


/* La lógica utilizada consiste en contar los espacios y sumar 1 a ese conteo. En una frase, las palabras están separadas por espacios, por lo que la cantidad de espacios es igual a la cantidad de palabras, menos uno. 
El código anterior realiza el conteo de los espacios entre palabras, pero falla si el usuario incorporta espacios dobles o añade espacios al inicio o al final de la frase.  
Usando los métodos split() y trim() podemos corregir esto. 
En la variable sentence usamos el método split, que divide la frase en un arreglo de palabras, con un caracter establecido como delimitador (en este caso, el espacio) 
Agregando la expresión regular /\s+/ eliminamos los espacios dobles. 
A su vez, el método trim() elimina los espacios que pudieran existir al inicio y al final de la frase
El código se podría ajustar aún más, teniendo en cuenta la posibilidad de que el usuario ingresase signos de puntuación precedidos por espacios, por ejemplo, pero entendemos que no es el espíritu del ejercicio*/

let sentence2 = prompt("Vamos a contar palabras. Por favor, ingresa una frase: ");

function wordCount(str2) {
	//Convierte la frase en un array, determinando los límites de cada elemento por los espacios => cada elemento es una palabra
	let sentenceArray = str2.trim().split(/\s+/);
	//Devuelve el largo del array, que será la cantidad de palabras de la frase
	return sentenceArray.length;
}

words = wordCount(sentence2);
console.log(`La frase "${sentence2}" tiene ${words} palabras`);



/*====================================================================================*/
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



/*====================================================================================*/
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
	console.log(invertedChars);
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



/*====================================================================================*/
/*5. Crear un programa para convertir la edad de un perro a años humanos
Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina,
que equivale a 7 veces la edad humana.
Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.
edadCanina(7); // Tu perro tiene 49 años humanos*/

let dogAge = prompt("Por favor, ingresa la edad de tu perro:");

const dogAgeInHumanYears = (age) => age * 7;

console.log(`Tu perro tiene ${dogAgeInHumanYears(dogAge)} años humanos `);




/*====================================================================================*/
/*6. Convertir la primera letra de cada palabra en mayúscula
Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"*/


while (true) {
	// Bucle infinito que romperemos manualmente
	sentence5 = prompt(
		"Vamos a iniciar palabras con mayúsculas. Por favor, ingresa una frase, o varias palabras: "
	);

	if (sentence5 === null) {
		// Si el usuario presiona "Cancelar", avisamos y salimos del bucle.
		console.log("Operación cancelada. No se ingresó ninguna frase.");
		break; // Sale del bucle while
	} else if (sentence5.trim() === "") {
		// Si el usuario no ingresa nada o solo espacios, avisamos y el bucle se repite.
		alert("¡Atención! No ingresaste nada. Por favor, intenta de nuevo.");
	} else {
		// Si el usuario ingresa algo válido, salimos del bucle.
		break; // Sale del bucle while
	}
}

// Solo continuamos con la lógica si el usuario no canceló la operación

	function capitalizeWords(str5) {
		let words = str5.toLowerCase().split(" ");
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
		}
		return words.join(" ");
	}

	let finalSentence = capitalizeWords(sentence5);

if (sentence5 !== null) {

	console.log(
		`Aquí están tus palabras inicializadas en mayúsculas: ${finalSentence}`
	);
	alert(
		`Aquí están tus palabras inicializadas en mayúsculas: ${finalSentence}`
	);

}

/*En este ejercicio agregamos la lógica para el caso en el que el usuario no ingrese nada, o ingrese sólo espacios. 
Una vez que el usuario ingresa datos válidos, comienza la lógica solicitada: 

1. Pasamos a minúsculas todas las palabras y convertimos la frase en un array de palabras.
2. Recorremos el array de palabras y convertimos la primera letra de cada palabra en mayúscula.
3. Concatenamos la primera letra en mayúscula con el resto de la palabra que ya está en minúsculas. 
3. Devolvemos la frase con las palabras inicializadas en mayúsculas.

En este caso no controlamos espacios dobles para no complicar la lógica, ya que no se solicita en el ejercicio 
*/


/*====================================================================================*/
/*7. Generar los primeros N números de la sucesión de Fibonacci
Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci.
console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]*/








/*====================================================================================*/
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




/*====================================================================================*/
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





/*====================================================================================*/
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
