/*
**PADSTART**
let cadena = "abc";
let cadena2 = "";

resultado = cadena.padStart(10,"1");

document.write(resultado);
-----------------------------------------------------------------------
**PADEND**
let cadena = "abc";
let cadena2 = "";

resultado = cadena.padEnd(10,"1");

document.write(resultado);
-----------------------------------------------------------------------
**REPEAT**
let cadena = "abc ";
let cadena2 = "";

resultado = cadena.repeat(10);

document.write(resultado);
------------------------------------------------------------------------
**SPLIT**
    let cadena = "Hola,como,estas";

resultado = cadena.split(",");

document.write(resultado[2]);
-----------------------------------------------------------------------
**SUBSTRING**
let cadena = "ABCDEFG";

resultado = cadena.substring(0,2);

document.write(resultado);
--------------------------------------------------------------------------
**TOLOWERCASE**
let cadena = "PROBANDO DE MAYUSCULA A MINUSCULA CON TOLOCALEWERCASE";

resultado = cadena.toLocaleLowerCase();

document.write(resultado);
---------------------------------------------------------------------------
**TOUPPERCASE**
let cadena = "probando de minuscula a mayuscula con touppercase";

resultado = cadena.toUpperCase();

document.write(resultado);
--------------------------------------------------------------------------
**TRIM**
let cadena = "  David  ";

let resultado = cadena.trim();

document.write(resultado.length);
--------------------------------------------------------------------------
**TRIMEND**
let cadena = "   David  ";

let resultado = cadena.trimEnd();

document.write(resultado.length);
-------------------------------------------------------------------------
**TRIMSTART**
let cadena = "   David  ";

let resultado = cadena.trimStart();

document.write(resultado.length);
------------------------------------------------------------------------
**POP**
let nombres = ["pedro","maria","jorge"];

let resultado = nombre.pop();

document.write(resultado);
--------------------------------------------------------------------------
**SHITF**
let nombres =["pedro","maria","jorge"];

document.write("Array original: <b>" + nombres + "</b><br>");
let resultado = nombres.shift();

document.write("Elemento removido: <b style='color:red'>" + resultado + "</b><br>");

document.write("Resultado: <b>"+ nombres + "</b>");

-------------------------------------------------------------------------
**PUSH**
let nombres = ["David","Carol","Marcos"];

document.write[nombres + "<br>"];

let resultado = nombres.push("juancito","robert");

document.write(nombres);
----------------------------------------------------------------------------
**REVERSE**
let numeros = [1,2,3,4,5,6];

document.write(numeros + "<br>");

numeros.reverse();

document.write(resultado);
------------------------------------------------------------------------------
**UNSHIFT**
let numeros = [3,4,5];


document.write(numeros + "<br>");

numeros.unshift(0,1,2);

document.write(numeros);
-----------------------------------------------------------------------------
**SORT**
let numeros = [5,4,3,9,7,1,2];

document.write(numeros + "<br>");

numeros.sort();

document.write(numeros )


---------------------------------------------------------------------------
**SPLICE**
let numeros = [1,2,3,4,5,6];

document.write(numeros + "<br>");

numeros.splice(1,3,"reemplazo");

document.write(numeros);
-------------------------------------------------------------------------
**JOIN**
let numeros = ["David", "Angel","Genesis","Lucia"];

document.write(numeros + "<br>");

let resultado = numeros.join("<br>elemento: ");

document.write("elemento: " + resultado);
-------------------------------------------------------------------------
**SLICE**
let numeros = ["David","Angel","Genesis","Lucia","Jose","Daisy"];

document.write(numeros + "<br>");

let resultado = numeros.slice(0,4);

document.write(resultado);

*/

