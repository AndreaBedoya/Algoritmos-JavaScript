//1. ALGORITMO QUE RESLIZA LA SUMA ENTRE DOS VALORES INGRESADOS POR EL USUARIO
function suma(){
    //DECLARO LAS VARIABLES NECESARIAS PARA ESTE ALGORITMO
    let A;
    let B;
    let SUMA;
    //SOLICITO LOS VALORES AL USUARIO
    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));

    //REALIZAR LA OPERACION
    S = A +B;

    //MOSTRAR EL RESULTADO

    console.log("El resultado de la suma es: " + S);
    alert("El resultado de la suma es: " + S)
}
// ----------------------------------------------------------------------------------------------------------------------
//2. ALGORITMO QUE DETERMINA LA SUMA, RESTA, MULTIPLICACION Y DIVISION ENTRE DOS VALORES INGRESADOS POR EL USUARIO
function opBacicas(){
    //DECLARO LAS VARIABLES NECESARIAS PARA ESTE EJERCICIO
    let primerNumero;
    let segundoNumero;

    //SOLICITO LOS VALORES AL USUARIO
    primerNumero = parseInt(prompt("Ingrese el primer numero"));
    segundoNumero = parseInt(prompt("Ingrese el segundo numero"));

    //REALIZAR LA SUMA
    sumar = primerNumero + segundoNumero;
    //MOSTRAR EL RESULTADO
    console.log("El resultado de la suma es: " + sumar);
    alert("El resultado de la suma es: " + sumar);

    //REALIZAR LA RESTA
    restar = primerNumero - segundoNumero;
    //MOSTRAR LOS RESULTADO
    console.log("El resultado de la resta es: " + restar);
    alert("El resultado de la resta es: " + restar);

    //REALIZAR LA MULTIPLICACION
    multiplicar = primerNumero * segundoNumero;
    //MOSTRAR LOS RESULTADO
    console.log("El resultado de la multiplicación es: " + multiplicar);
    alert("El resultado de la multiplicación es: " + multiplicar);

    //REALIZAR LA DIVISION
    dividir = primerNumero / segundoNumero;
    //MOSTRAR LOS RESULTADO
    console.log("El resultado de la division  es: " + dividir);
    alert("El resultado de la division es: " + dividir);

}
// ---------------------------------------------------------------------------------------------------------------------------------
    //3 Algoritmo que determine el cuadrado de un numero ingresado por un usuario
function calcularCuadrado() {
    let numero 
    numero = parseInt(prompt("Ingresa un número para calcular su cuadrado"));
    let cuadrado = numero * numero;
    alert("El cuadrado de " + numero + " es " + cuadrado);
}
// ----------------------------------------------------------------------------------------------------------------------------------
    //4 algoritmo que determine el area de un triangulo apartir de la base y la altura ingresadas por el usuario
function calcularAreaTriangulo() {
    let base 
    let altura
    base = parseInt(prompt("Ingresa la base del triángulo:"));
    altura = parseInt(prompt("Ingresa la altura del triángulo:"))
    let area = (base * altura) / 2;
    alert("El área del triángulo es " + area);
}
// ------------------------------------------------------------------------------------------------------------------------------------
    //5 algoritmo que determine los  kilometros, pulgadas y metros de un valor dado en cm
function conversionCm() {
    let cm
    cm = parseInt(prompt("Ingresa el valor en centímetros:"));
    let km = cm / 100000;
    let pulgadas = cm / 2.54;
    let metros = cm / 100;
    alert(cm + " cm son " + km + " km, ");
    alert(cm + " cm son: " + pulgadas +" pulgadas");
    alert(cm + " cm son: " + metros + " metros");
}

    //6 algoritmo que determine el numero mayor de dos numeros ingresados por el usuario
function numeroMayor() {
    let num1
    let num2 
    num1 = parseInt(prompt("Ingresa el primer número:"));
    num2 = parseInt(prompt("Ingresa el segundo número:"));
    let mayor = Math.max(num1, num2);
    alert("El número mayor es " + mayor);
}

    //7 algoritmo que determine el numero menor de tres numeros ingresados por el usuario
function numeroMenor() {
    let num1
    let num2
    let num3 
    num1 = parseInt(prompt("Ingresa el primer número:"));
    num2 = parseInt(prompt("Ingresa el segundo número:"));
    num3 = parseInt(prompt("Ingresa el tercer número:"));
    let menor = Math.min(num1, num2, num3);
    alert("El número menor es " + menor);
}

    //8 algoritmo que solicite al estudiante su nombre, la materia y ocho calificaciones de la misma entre 1 y 10 determinar con esta infromacion si el estudiante aprobo o reprobo teniendo en cuenta que si aprubeas con 6.2 en adelante
// 8. Determinar si el estudiante aprobó
function aprobacionEstudiante() {
    let nombre
    let materia
    let total
    let calificacion
    nombre = prompt("Ingresa tu nombre:"); 
    materia = prompt("Ingresa la materia:"); 
    total = 0; 
    for (let i = 1; i <= 8; i++) {
        calificacion = parseInt(prompt("Ingresa la calificación " + i + " (entre 1 y 10):")); // Asignación de valor con parseInt
        total += calificacion;
    }
    let promedio = total / 8;
    let resultado = promedio >= 6.2 ? "aprobaste" : "reprobaste";
    alert(nombre + ", en la materia de " + materia + " " + resultado + " con un promedio de " + promedio.toFixed(2));
}

    // 9. Algortimo para determinar si el numero ingresado por el ususario es par o impar 
function parImpar() {
    let numero
    numero = parseInt(prompt("Ingresa un número:"));
    let resultado = (numero % 2 === 0) ? "par" : "impar";
    alert("El número " + numero + " es " + resultado);
}

    // 10 un individuo desea invertir su capital en un banco y requiere saber 
    // cuanto dinero ganara despues de n numero de años teniendo en 
    // cuenta que eel intereste paraga un interes mensual del 0.7% 
function calcularInversion() {
    let capital
    let anios
    capital = parseInt(prompt("Ingresa el capital inicial:"));
    anios = parseInt(prompt("Ingresa el número de años:"));
    let interesMensual = 0.007;
    let meses = anios * 12;
    let ganancia = capital * Math.pow(1 + interesMensual, meses);
    alert("Después de " + anios + " años, ganarás " + ganancia.toFixed(2));
}

    //11 realizar un algoritmo que solicite al usuario un rango entre dos valores y muestre los numero entre ellos 
function mostrarRango() {
    let inicio = prompt("Ingresa el valor inicial del rango:");
    let fin = prompt("Ingresa el valor final del rango:");
    let resultado = "";
    for (let i = parseInt(inicio); i <= parseInt(fin); i++) {
        resultado += i + " ";
    }
    alert("Los números entre " + inicio + " y " + fin + " son: " + resultado);
}


    // 12. Algoritmo que genera una tabla de multiplicar de un número ingresado por el usuario
function tablaMultiplicar() {
    // Declaramos la variable para el número
    let numero
    numero = parseInt(prompt("Ingresa el número para generar su tabla de multiplicar:")); 
    
    let resultado = ""; // Inicializamos una cadena para almacenar los resultados

    // Generamos la tabla de multiplicar del número ingresado
    for (let i = 1; i <= 10; i++) { 
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    //Resultado final
    alert("La tabla de multiplicar del " + numero + " es:\n" + resultado);
}

    // 13. Algoritmo que calcula el porcentaje de un valor ingresado por el usuario
function calcularPorcentaje() {
    // Declaramos las variables
    let valor 
    let porcentaje

    // Solicitamos los valores al usuario
    valor = parseFloat(prompt("Ingresa el valor del cual deseas calcular el porcentaje:"));
    porcentaje = parseFloat(prompt("Ingresa el porcentaje que deseas calcular:")); 

    // Calculamos el porcentaje
    // La fórmula para calcular el porcentaje
    let resultado = (valor * porcentaje) / 100; 

    // Resultado
    alert("El " + porcentaje + "% de " + valor + " es " + resultado.toFixed(2)); 
}

