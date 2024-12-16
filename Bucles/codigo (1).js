/*
Ejemplo numero 1

let numero = 0;
if (numero < 10) {
    numero++;
    numero++;
    numero++;
    
    document.write(numero);
}
-------------------------
let numero = 0;
while (numero < 6) {
    
    numero++;
    
    document.write(numero + "<br>");
}
----------------------------------------
**DO WHILE**
EJEMPLO 1 "Si el numero++ se pone hacia arriba empieza con el numero 1 pero si se 
pone hacia abajo empíeza con el numero 0 como esta especificado en el ejemplo 2"

let numero = 0;
do {
    numero++;
    document.write(numero + "<br>");
}
while (numero <= 6);

EJEMPLO 2

let numero = 0;
do {
    document.write(numero + "<br>");
    numero++;
}
while (numero <= 6);
---------------------------------------------------------------
** BREAK **
let numero = 0;
while(numero < 1000) {
    numero++;
    document.write(numero);
    if(numero == 10) {
        break;
    }
}
--------------------------------------------------------------------
**FOR**
Los pasos son:
Declaracion  e inicializacion
condicion
aumento o decremento

EJEMPLO NUMERO 1


for (let i= 0; i <6; i++ ){
document.write(i + "<br>");

EJEMPLO NUMERO 2


for (let i = 6; i >= 0; i-- ){
document.write(i + "<br>");
}

EJEMPLO NUMERO 3

*/



for (let i = 0; i < 20; i++ ){
document.write(i + "<br>");
if (i == 12) {
    break;
}
}
