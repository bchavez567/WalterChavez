// INGRESO DE DATOS
let nombre = prompt("Ingresa tu nombre");
let password = prompt("Ingresa tu contraseña");
let dateofbirth= Number(prompt("Ingresa tu año de nacimiento"));
let currentage= Number(prompt("Ingresa año actual"));

// INGRESAR
let verificacion = confirm ("INGRESAR")

//EDAD ACTUAL
let age = (currentage - dateofbirth)

//CONFIRMACION DE DATOS
if(nombre && password.toLowerCase() == "coderhouse" && currentage == "2021"){
    alert (nombre +" tienes " + age + " años");
    console.log("DATOS INGRESADOS CORRECTOS");
}else{
    alert("CONTRASEÑA INCORRECTA!!!!!");
    console.log("DATOS INGRESADOS INCORRECTOS");
}









