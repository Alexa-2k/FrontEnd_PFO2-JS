document.getElementById("btnEjecutar").addEventListener("click", ejecutarTP2);

function ejecutarTP2() {
	console.log("PFO 2 - Grupo 2 - Comisión 2E\n");
	console.log("/////////////////////////////\n");

	console.log("\nSolución 1: calcular el área de un rectángulo");
	console.log("///////////////");

	const calcularAreaRectangulo = (b, h) => b * h;

	console.log(`Área (5x3): ${calcularAreaRectangulo(5, 3)}`); // Resultado: 15
	console.log(`Área (10x4): ${calcularAreaRectangulo(10, 4)}`); // Resultado: 40
	console.log(`Área (7x2.5): ${calcularAreaRectangulo(7, 2.5)}`); // Resultado: 17.5
	console.log("/////////////////////////////\n");

	/* 
Se propone resolver el cálculo del área de un rectángulo con una función flecha, por ser un caso simple. 
El cálculo consiste en multiplicar base por altura. 
La función retorna el valor y no imprime por consola: console.log() se utiliza fuera de la función. 
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
		`La frase ingresada es "${sentence1}" y tiene ${wordsCount(
			sentence1
		)} palabras`
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

	/* La lógica utilizada consistió en contar los espacios y sumar 1 a ese conteo, ya que el número de palabras en una frase es igual al número de espacios más uno. Este razonamiento funciona mientras el usuario no introduzca espacios dobles o espacios al inicio o al final de la frase. 
En la variable sentence usamos el método split, que divide la frase en un arreglo de palabras, con un caracter establecido como delimitador (en este caso, el espacio) pero si el usuario introduce espacios dobles, el resultado no es el esperado. Por eso propusimos la solución 2b
*/

	/*============================================================*/
	console.log("\nSolución 2b: Contar palabras. Corregido");
	console.log("///////////////");

	function wordCount(str) {
		return str.trim().split(/\s+/).length;
	}

	console.log(
		`La frase ingresada es "${sentence1}" y tiene ${wordCount(
			sentence1
		)} palabras`
	);
	console.log(
		`La frase ingresada es "${sentence2}" y tiene ${wordCount(
			sentence2
		)} palabras`
	);
	console.log(
		`La frase ingresada es "${sentence3}" y tiene ${wordCount(
			sentence3
		)} palabras`
	);

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

	console.log(
		`La frase "Álamo ígneo" tiene ${contarVocales("Álamo ígneo")} vocales`
	); //Resultado: 6
	console.log(
		`La frase "Planté árboles" tiene ${contarVocales("Planté árboles")} vocales`
	); // Resultado: 5
	console.log(
		`La frase "rEconOcErÍa mUrciÉlAgos Únicos" tiene ${contarVocales(
			"rEconOcerÍa mUrciÉlAgos Únicos"
		)} vocales`
	); // Resultado: 14
	console.log("/////////////////////////////\n");

	/* 
En principio pensamos en un if que verificara si el carácter era alguna de las vocales. Pero si tomábamos la posibilidad de que el usuario ingresase mayúsculas y vocales con tildes -tanto minúsculas como mayúsculas- las condiciones de evaluación para el if() serían demasiado extensas.
Por eso decidimos armar una variable que reuniese todas las posibilidades, y usamos includes() para la comparación, en lugar de un if().
La función recorre la cadena carácter por carácter y verifica si el mismo pertenece al conjunto de vocales.
Cada coincidencia suma al contador. 
*/

	/*============================================================*/

	console.log("\nSolución 4: Verificar si es palíndromo");
	console.log("///////////////");

	function isAPalindrome(str) {
		str = str.toLowerCase(); 
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

	/*
En este ejercicio agregamos la lógica para el caso en el que el usuario no ingrese nada, o ingrese sólo espacios. 
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
		}
		return result;
	}

	let terms = parseInt(
		prompt(
			"Por favor, ingresa el número de términos de la sucesión de Fibonacci:"
		)
	);
	let fibSequence = fibonacci(terms);
	console.log(fibSequence);

	/*
Este ejercicio se puede resolver con un bucle como en esta primera solución, o aplicando recursividad, como lo haremos en la segunda solución
La secuencia de Fibonacci se inicia en 0 y 1, y continúa sumando los dos términos anteriores para formar el actual. Así,  se forma 0, 1, 1 (0+1) , 2 (1+1), 3 (1+2), 5 (2+3), etc.
Siguiendo esa lógica construimos el bucle for, lo recorremos hasta el número de términos solicitados por el usuario, y vamos almacenando los términos en un arreglo llamado result. 
En el caso de que el usuario indique cero o un número negativo, se devuelve el arreglo vacío.  
*/

	// Función recursiva que devuelve el término n de la sucesión de Fibonacci

	console.log(
		"\nSolución 7: Términos de la sucesión de Fibonacci por recursión"
	);
	console.log("///////////////");
	function recursiveFibonacci(term) {
		if (term <= 0) return 0;
		if (term === 1) return 1;
		return recursiveFibonacci(term - 1) + recursiveFibonacci(term - 2);
	}

	// preguntamos al usuario cuántos términos quiere generar
	let term = parseInt(
		prompt(
			"Por favor, ingresa el número de términos de la sucesión de Fibonacci:"
		)
	);

	// Creamos un array y lo llenamos con los primeros m términos
	let recursiveSequence = [];

	for (let i = 0; i < term; i++) {
		recursiveSequence.push(recursiveFibonacci(i));
	}

	// Mostramos el resultado
	console.log(recursiveSequence);
	console.log("/////////////////////////\n");

	/*
Esta segunda solución implementa *recursividad* para calcular los términos de Fibonacci.   
La función se llama a sí misma con los dos términos anteriores hasta alcanzar los casos base.   
Luego, se construye la secuencia repitiendo este cálculo en un bucle hasta completar la cantidad de términos deseados.
*/

	/*============================================================*/

	console.log("\nSolución 8: Productos");
	console.log("///////////////");

	const productos = [
		{
			id: 1,
			nombre: "Laptop",
			precio: 1200,
			stock: 15,
			categoria: "electrónica",
		},
		{ id: 2, nombre: "Mouse", precio: 25, stock: 50, categoria: "electrónica" },
		{
			id: 3,
			nombre: "Teclado",
			precio: 45,
			stock: 30,
			categoria: "electrónica",
		},
		{
			id: 4,
			nombre: "Monitor",
			precio: 300,
			stock: 20,
			categoria: "electrónica",
		},
		{ id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "libros" },
	];

	// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
	console.log("Mostrar en consola cada producto con su nombre y precio");
	productos.forEach((producto) =>
		console.log(`Artículo: ${producto.nombre}  $ ${producto.precio}`)
	);
	console.log("----------------------------");

	// 2. Usando map: Crear un array con solo los nombres de los productos
	console.log("Mostrar un array que sólo liste los nombres de los productos");
	const productsNamesMap = productos.map((producto) => producto.nombre);
	console.log(productsNamesMap);
	console.log("----------------------------");

	// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
	console.log("Listar los productos electrónicos con stock mayor a 20");
	const electronicsBigStock = productos.filter(
		(producto) => producto.categoria === "electrónica" && producto.stock > 20
	);
	console.log(
		"Los artículos con stock mayor a 20 unidades son: ",
		electronicsBigStock
	);
	console.log("----------------------------");

	// 4. Usando find: Encontrar el producto con id 3
	console.log("Encontrar el producto con id 3");
	const producto3 = productos.find((producto) => producto.id === 3);
	console.log("El producto con id 3 es: ", producto3);
	console.log("----------------------------");

	// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
	console.log("Calcular el valor total del inventario");
	const totalStockValue = productos.reduce((accumulator, producto) => {
		return accumulator + producto.precio * producto.stock;
	}, 0);
	console.log("El valor total del inventario es: $", totalStockValue);

	console.log("/////////////////////////\n");

	/* 	
Este ejercicio presenta un arreglo de productos, y con distintos métodos mostramos información útil:
  1. **forEach()**: muestra cada producto con su nombre y precio
  2. **map()**: genera un array con solo los nombres
  3. **filter()**: obtiene los productos electrónicos con stock mayor a 20
  4. **find()**: busca un producto por ID
  5. **reduce()**: calcula el valor total del inventario (precio * stock)
*/

	/*============================================================*/

	console.log("\nSolución 9: Estudiantes");
	console.log("///////////////");

	const estudiantes = [
		{ id: 1, nombre: "Ana", edad: 20, calificaciones: [8, 9, 7, 8] },
		{ id: 2, nombre: "Carlos", edad: 22, calificaciones: [6, 7, 8, 7] },
		{ id: 3, nombre: "María", edad: 21, calificaciones: [9, 9, 8, 10] },
		{ id: 4, nombre: "Juan", edad: 19, calificaciones: [7, 6, 5, 8] },
	];

	// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
	console.log("Mostrar nombre y edad de cada estudiante");
	estudiantes.forEach((estudiante) =>
		console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`)
	);
	console.log("----------------------------");

	// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
	console.log("Mostrar nombre y promedio de calificaciones");
	const studentsMap = estudiantes.map((estudiante) => {
		const suma = estudiante.calificaciones.reduce((acc, nota) => acc + nota, 0);
		const promedio = suma / estudiante.calificaciones.length;
		return {
			nombre: estudiante.nombre,
			promedio: promedio,
		};
	});

	console.log(studentsMap);
	console.log("----------------------------");

	// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
	console.log("Listar estudiantes con promedio mayor a 7.5");
	const bestGrades = studentsMap.filter((est) => est.promedio > 7.5);
	console.log("Los alumnos con promedio mayor a 7.5 son: ", bestGrades);
	console.log("----------------------------");

	// 4. Usando find: Encontrar estudiante llamado 'María'
	console.log("Encontrar estudiante llamado 'María'");
	const findStudent = estudiantes.find((student) => student.nombre === "María");
	console.log(findStudent);
	console.log("----------------------------");

	//5. Usando reduce: Calcular la edad promedio de los estudiantes
	console.log("Calcular la edad promedio de los estudiantes");
	const ageMain =
		estudiantes.reduce((acum, stud) => acum + stud.edad, 0) /
		estudiantes.length;
	console.log("El promedio de edad de los estudiantes es: ", ageMain, " años");

	console.log("/////////////////////////\n");

	/*
Se trabaja con un arreglo de estudiantes que incluye nombre, edad y un arreglo de calificaciones:

foreach(): muestra nombre y edad
map(): calcula el promedio por estudiante
filter(): selecciona aquellos con promedio mayor a 7.5
find(): busca un estudiante específico por nombre
reduce(): calcula la edad promedio del grupo
*/

	/*============================================================*/

	console.log("\nSolución 10: Películas");
	console.log("///////////////");

	const peliculas = [
		{
			id: 1,
			titulo: "El Padrino",
			año: 1972,
			duracion: 175,
			genero: "drama",
			rating: 9.2,
		},
		{
			id: 2,
			titulo: "Pulp Fiction",
			año: 1994,
			duracion: 154,
			genero: "crimen",
			rating: 8.9,
		},
		{
			id: 3,
			titulo: "El Señor de los Anillos",
			año: 2001,
			duracion: 178,
			genero: "fantasía",
			rating: 8.8,
		},
		{
			id: 4,
			titulo: "Interestelar",
			año: 2014,
			duracion: 169,
			genero: "ciencia ficción",
			rating: 8.6,
		},
		{
			id: 5,
			titulo: "Parásitos",
			año: 2019,
			duracion: 132,
			genero: "drama",
			rating: 8.6,
		},
	];

	// 1. Usando forEach: Mostrar título y año de cada película
	console.log("Título y año de cada película");
	peliculas.forEach((movie) =>
		console.log(`Título: ${movie.titulo}, Año: ${movie.año} `)
	);
	console.log("----------------------------");

	// 2. Usando map: Crear array de títulos en mayúsculas
	console.log("Títulos en mayúsculas");
	const titlesMap = peliculas.map((movie) => movie.titulo.toUpperCase());
	console.log(titlesMap);
	console.log("----------------------------");

	// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
	const filteredBestDrama = peliculas.filter(
		(movie) => movie.genero === "drama" && movie.rating > 8.5
	);
	console.log("Los dramas con rating mayor a 8.5 son: ", filteredBestDrama);
	console.log("----------------------------");

	// 4. Usando find: Encontrar película estrenada en 2014
	console.log("Encontrar filme estrenado en 2014");
	const findMovie = peliculas.find((movie) => movie.año === 2014);
	console.log(findMovie);
	console.log("----------------------------");

	// 5. Usando reduce: Calcular la duración total de todas las películas
	console.log("Calcular la duración total de todas las peliculas");
	const moviesLength = peliculas.reduce(
		(accum, movie) => accum + movie.duracion,
		0
	);
	console.log(
		"La duración total de todas las peliculas es: ",
		moviesLength,
		" minutos"
	);

	console.log("----------------------------");
}

/*
Utilizamos un arreglo de películas y aplicamos:

foreach(): muestra título y año
map(): convierte títulos a mayúsculas
filter(): selecciona dramas con rating mayor a 8.5
find(): encuentra una película por el año de lanzamiento
reduce(): suma la duración total de todas las películas
*/
