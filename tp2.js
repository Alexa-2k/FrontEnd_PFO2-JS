console.log("Solución 1: calcular el área de un rectángulo");
console.log("///////////////");

const calcularAreaRectangulo = (b, h) => b * h;


console.log(`Área (5x3): ${calcularAreaRectangulo(5, 3)}`); // Resultado: 15
console.log(`Área (10x4): ${calcularAreaRectangulo(10, 4)}`); // Resultado: 40
console.log(`Área (7x2.5): ${calcularAreaRectangulo(7, 2.5)}`); // Resultado: 17.5
console.log("/////////////////////////////\n");

/* 
Se propone resolver el cálculo del área de un rectángulo con una función flecha, por ser un caso simple. 
El cálculo consiste en multiplicar base por altura. 
La función retorna el valor y no imprime por consola. El `console.log()` se utiliza fuera de la función. 
*/

/*============================================================*/
console.log("\nSolución 2a: Contar palabras");
console.log("///////////////");

let sentence1 = "Humahuaca es un lugar copado";
let sentence2 = "  Esta   frase   tiene   espacios dobles  ";
let sentence3 = " Espacios antes y después ";

function wordsCount(str) {
	let brkCount = 1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			brkCount++;
		}
	}
	return brkCount;
}

console.log(
	`La frase ingresada es "${sentence1}" y tiene ${wordsCount(sentence1)} palabras`
);
console.log(
	`La frase ingresada es "${sentence2}" y tiene ${wordsCount(
		sentence2
	)} palabras. EL RESULTADO ES INCORRECTO`
);

console.log(
	`La frase ingresada es "${sentence3}" y tiene ${wordsCount(
		sentence3
	)} palabras. EL RESULTADO ES INCORRECTO`
);

console.log("/////////////////////////////\n");

/* La lógica utilizada consistió en contar los espacios y sumar 1 a ese conteo, razonamiento que funciona mientras el usuario no introduzca espacios dobles o espacios al inicio o al final de la frase. 
En la variable sentence usamos el método split, que divide la frase en un arreglo de palabras, con un caracter establecido como delimitador (en este caso, el espacio) pero si el usuario introduce espacios dobles, el resultado no es el esperado. Por eso propusimos la solución 2b*/


/*============================================================*/
console.log("\nSolución 2b: Contar palabras. Corregido");
console.log("///////////////");


function wordCount(str) {
	return str.trim().split(/\s+/).length;
}

console.log(wordCount(sentence1)); // Resultado: 5
console.log(wordCount(sentence2)); // Resultado: 5
console.log(wordCount(sentence3)); // Resultado: 4
console.log("/////////////////////////////\n");

/* 
Investigamos los métodos trim() y split() con expresiones regulares. 
Se utiliza trim() para eliminar espacios al inicio y al final, y agregando la expresión regular /\s+/ a split() eliminamos los espacios múltiples. 
Esto permite contar las palabras correctamente. 
El código se podría ajustar aún más, teniendo en cuenta la posibilidad de que el usuario ingresase signos de puntuación precedidos por espacios, o sólo espacios, por ejemplo, pero entendemos que no es el espíritu del ejercicio
*/


/*============================================================*/

console.log("\nSolución 3: contar vocales");
console.log("///////////////");

function contarVocales(str) {
	let count = 0;
	const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
	for (let i = 0; i < str.length; i++) {
		if (vocales.includes(str[i])) {
			count++;
		}
	}
	return count;
}

console.log(contarVocales("Álamo ígneo")); // Resultado: 6
console.log(contarVocales("Planté árboles")); // Resultado: 5
console.log(contarVocales("rEconOcErÍa")); // Resultado: 6
console.log("/////////////////////////////\n");

/* 
En principio pensamos en un if que verificara si el carácter era alguna de las vocales. Pero si tomábamos la posibilidad de que el usuario ingresase mayúsculas, o vocalees con tildes, tanto minúsculas como mayúsculas, las condiciones de evaluación para el if() serían demasiado extensas.
Por eso decidimoe armar una variable que reuniese todas las posibilidades, y usamos includes() en lugar de un if().
La función recorre la cadena carácter por carácter y verifica si el mismo pertenece al conjunto de vocales.
Cada coincidencia suma al contador. 
*/

/*============================================================*/

console.log("\nSolución 4: Verificar si es palíndromo");
console.log("///////////////");

function isAPalindrome(str) {
	let chars = str.split("");
	let invertedChars = [];
	for (let i = 0; i < chars.length; i++) {
		invertedChars.unshift(chars[i]);
	}
	return JSON.stringify(invertedChars) === JSON.stringify(chars);
}

for (let i = 1; i <= 3; i++) {
	let palindrome = prompt(
		`(${i}/3) Por favor, ingresa una palabra o un número. Vamos a ver si es palíndromo:`
	);

	let answer = isAPalindrome(palindrome);

	if (answer) {
		console.log(`(${i}/3) ${palindrome} es palíndromo`);
		alert(`(${i}/3) ${palindrome} es palíndromo`);
	} else {
		console.log(`(${i}/3) ${palindrome} no es palíndromo`);
		alert(`(${i}/3) ${palindrome} no es palíndromo`);
	}
}

console.log("/////////////////////////////\n");


/* 
Aplicamos un prompt para solicitar al usuario que ingrese una palabra o número. 
El string se pasa a minúsculas y se eliminan espacios, para que no se afecte el resultado. 
Luego se invierte la cadena ingresada y se compara con la original. Si son iguales, la cadena ingresada es un palíndromo. 
Con el bucle for se repite el ejercicio 3 veces.
*/

/*============================================================*/


console.log("\nSolución 5: calcular edad de perro en años humanos");
console.log("///////////////");

const dogAgeInHumanYears = (age) => age * 7;

for (let j = 1; j <= 3; j++) {
	let dogAge = prompt(`(${j}/3) Por favor, ingresa la edad de tu perro:`);

	console.log(
		`(${j}/3) Tu perro tiene ${dogAgeInHumanYears(dogAge)} años humanos`
	);
}
console.log("/////////////////////////////\n");

/* 
Aplicamos un prompt para que se solicite al usuario el ingreso de la edad del perro. 
Se Multiplica la edad por 7, como indica la fórmula para edad canina.
El bucle for hace que el ejercicio se repita 3 veces. 
*/

/*============================================================*/

console.log("\nSolución 6: Iniciar palabras con mayúscula");
console.log("///////////////");


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

console.log("/////////////////////////////\n");

/* /*En este ejercicio agregamos la lógica para el caso en el que el usuario no ingrese nada, o ingrese sólo espacios. 
Una vez que el usuario ingresa datos válidos, comienza la lógica solicitada: 

1. Pasamos a minúsculas todas las palabras y convertimos la frase en un array de palabras.
2. Recorremos el array de palabras y convertimos la primera letra de cada palabra en mayúscula.
3. Concatenamos la primera letra en mayúscula con el resto de la palabra que ya está en minúsculas. 
3. Devolvemos la frase con las palabras inicializadas en mayúsculas.

En este caso no controlamos espacios dobles para no complicar la lógica, ya que no se solicita en el ejercicio 
*/
/*============================================================*/

console.log("\nSolución 7: Mostrar n términos de la secuencia de Fibonacci");
console.log("///////////////");

function fibonacci(n) {
	let result = [];
	if (n <= 0) return result;
	if (n === 1) return [0]; // Solo el primer término

	let x = 0;
	let z = 1;
	result.push(x); // 0
	result.push(z); // 1

	for (let k = 2; k < n; k++) {
		let fib = x + z;
		result.push(fib);
		x = z;
		z = fib; 
	};
	return result;
}

let terms = parseInt(
	prompt(
		"Por favor, ingresa el número de términos de la sucesión de Fibonacci:"
	)
);
let fibSequence = fibonacci(terms);
console.log(fibSequence);


/*Este ejercicio se puede resolver con un bucle como en esta primera solución, o aplicando recursividad, como lo haremos en la segunda solución
La secuencia de Fibonacci se inicia en 0 y 1, y continúa sumando los dos términos anteriores para formar el actual. Así,  se forma 0, 1, 1 (0+1) , 2 (1+1), 3 (1+2), 5 (2+3), etc.
Siguiendo esa lógica construimos el bucle for, lo recorremos hasta el número de términos solicitados por el usuario, y vamos almacenando los términos en un arreglo llamado result. 
En el caso de que el usuario indique cero o un número negativo, se devuelve el arreglo vacío.  
*/

// Función recursiva que devuelve el término n de la sucesión de Fibonacci

console.log("Solución 7: Términos de la sucesión de Fibonacci por recursión");

function recursiveFibonacci(term) {
	if (term <= 0) return 0;
	if (term === 1) return 1;
	return recursiveFibonacci(term - 1) + recursiveFibonacci(term - 2);
}

// Pedimos al usuario cuántos términos quiere generar
let term = parseInt(
	prompt("Por favor, ingresa el número de términos de la sucesión de Fibonacci:")
);

// Creamos un array y lo llenamos con los primeros m términos
let recursiveSequence = [];

for (let i = 0; i < term; i++) {
	recursiveSequence.push(recursiveFibonacci(i));
}

// Mostramos el resultado
console.log(recursiveSequence);
console.log("/////////////////////");
