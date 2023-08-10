
function pedirNombre(){
    nombreIngresado=prompt("Ingrese su nombre")
}

function pedirApellido(){
    apellidoIngresado=prompt("Ingrese su apellido")
}

function pedirDireccion(){
    direccionIngresada= prompt("Ingrese su direccion")
}

function pedirBebida(){
    let bebida= prompt("Ingrese la bebida que desea comprar")
    alert(`Usted va a comprar ${bebida}.`)
}

pedirNombre()
    alert(`Hola ${nombreIngresado}`)

let edad1= Number(prompt("Ingrese su edad"))
let edad2=18

while (edad1<edad2){
    alert("No puede ingresar al sitio. Es menor de edad")
    edad1= Number(prompt("Ingrese su edad"))
}

pedirBebida()


bebida2= prompt("Desea comprar algo más?")
if (bebida2=="si"){
    pedirBebida()
    alert("A continuación lo redireccionaremos al sitio de pago y le pediremos los datos para su facturación")
    pedirNombre()
    pedirApellido()
    pedirDireccion()
    alert (`La facturación será realizada a nombre de ${nombreIngresado} ${apellidoIngresado} con dirección en ${direccionIngresada}.`)
}
else{
alert("A continuación lo redireccionaremos al sitio de pago y le pediremos los datos para su facturación")

pedirNombre()

pedirApellido()

pedirDireccion()

alert (`La facturación será realizada a nombre de ${nombreIngresado} ${apellidoIngresado} con dirección en ${direccionIngresada}.`)
}