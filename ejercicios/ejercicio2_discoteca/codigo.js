
/*Este mini sistema permite hacer pasar solo a los mayores de edad y tambien deja
pasar gratis a la primera persona despues de las 2 de la mañana*/
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
        if(time >= 2 && time <7 && free == false){
            alert("podes pasar gratis porque sos la primera persona despues de las 2 AM");
            free = true;
        }else{
            alert(`son las ${time}:00hs y podes pasar, pero tenes que pagar la entrada`);
        }
    }else {
        alert("Sos menor de edad por ese caso no podras ingresar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
