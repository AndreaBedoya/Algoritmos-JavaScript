// tipos de datos primitivos
let nombre = "Andrea"; //declaramos e inicializamos la variable nombre
let edad = 19;
let mayorEdad = true;
let vacio = null;
let xyz;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof vacio);
console.log(typeof xyz);

// tipos de datos complejos
let frutas = ["pera", "kiwi", "Sandia"];//sera de tipo objecto
console.log(typeof frutas);


let auto = {
    marca: "Mazda",
    modelo: 2024,
    color: "Azul",
    placa: "IDE654",
    tipo: "Camioneta",
    uncioDueño: true
}

console.log(typeof auto);

//CONCATENAR VARIABLES EN MENSAJES
console.log("Hola " + nombre + " tienes " + edad + " años")

//ESTRUCTURAS CONDICIONALES
console.log("---------------------------------------------------------------")
let calificacion = 98;
if (calificacion >= 90) {
    console.log("Muy buen trabajo " + nombre + " su nota fue de " + calificacion);
}

else if (calificacion >= 70) {
    console.log("Aprobate " + nombre + " tu nota fue de " + calificacion);
}

else if (calificacion >= 50) {
    console.log("Reporbaste " + nombre + " tu nota fue de " + calificacion);
}

else {
    console.log("Tremendo perderdor " + nombre + " su porqueria de nota es de " + calificacion)
}

//CONCIONAL SWITCH
let dia = "domingo";
switch (dia) {
    case "lunes":
        console.log("Empezando a semana, que pereza!!")
        break;
    case "martes":
        console.log("Peor que el lunes!!")
        break;
    case "miercoles":
        console.log("Mitad de semana, por fin!!")
        break;
    case "jueves":
        console.log("Ya casi termina la semana!!")
        break;
    case "viernes":
        console.log("Que no me esperen en la casa!!")
        break;
    case "sabado":
        console.log("Pasando guayabo")
        break;
    case "domingo":
        console.log("Todos a misa o culto, a reflexionar")
        break;

    default:
        console.log("No es un dia de la semana")
        break;
}

//ESTRUCTURA DE BUCLES
let numero = 1;


while(numero<= 10){
    console.log("Ahora el numero es " + numero);
    numero++;

}

// let i=10;
for(let i=0; i<=100; i = i+5){
    console.log("Este es el numero " + i)

}

for(let i=100; i>=0; i = i-10){
    console.log("Este es el numero " + i)

}

//FUNCIONES

function suma (valor1, valor2){
    return valor1 + valor2
}


let resultado = suma(8,24);
console.log(resultado)