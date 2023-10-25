let total = 0


//funciones//

function valorDonacion(donacion) {
    total = total + donacion;
    console.log("Ingresa el valor de " + " " + donacion + " pesos")
}

function cuotasInteres(cuotas) {
    return ((total * 0.06 * cuotas) + total) / cuotas;
}

function cuotasTotal(cuotas) {
    return (total * 0.06 * cuotas) + total
}

// proyecto//
let nombre = prompt("Ingrese su Nombre y Apellido")
console.log("Bienvenido " + nombre + " a la pagina de la fundacion")

let pesos = Number(prompt("Coloque aqui el valor que usted quiere donar a la fundacion"))

valorDonacion(pesos)

console.log("El unico medio de pago en esta plataforma es con tarjeta de credito, y contamos con hasta 12 cuotas con interes en tu primer donacion!")

let cuotas = Number(prompt("En cuantas cuotas deseas pagar?"))

let montoCuotas = cuotasInteres(cuotas)
const totalPago = cuotasTotal(cuotas)

if (cuotas == 1) {
    console.log("Usted va a pagar " + total + "$.")
} else if (cuotas > 1 && cuotas <= 12) {
    console.log("Usted va a pagar " + cuotas + " cuotas de " + montoCuotas + " $. " + "Siendo un total de " + totalPago + "$.");
} else {
    console.log("Lo sentimos, pero no puedes pagar en tantas cuotas");
}




let realizarPago = prompt("¿Desea realizar el pago? (si/no)");
if (realizarPago.toLowerCase() == "si") {
    console.log("Gracias por realizar el pago.");
} else {
    console.log("El pago fue cancelado. Gracias de todas formas.");
}




let otraDonacion = "si";
while (otraDonacion.toLowerCase() === "si") {
    otraDonacion = prompt("¿Deseas hacer otra donación? (si/no)");

    if (otraDonacion.toLowerCase() === "si") {
        let nuevaDonacion = Number(prompt("Coloque aquí el valor que desea donar a la fundación"));
        valorDonacion(nuevaDonacion);
        let realizarPago = prompt("¿Desea realizar el pago? (si/no)");
        if (realizarPago.toLowerCase() == "si") {
            console.log("Gracias por realizar el pago.");
        } else {
            console.log("El pago fue cancelado. Gracias de todas formas.");
        }
    } else {
        console.log("Gracias por tus donaciones. ¡Hasta luego!");
    }
}

