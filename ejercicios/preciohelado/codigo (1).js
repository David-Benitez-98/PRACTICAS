dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto");
dineroPedro = prompt("Cuanto dinero tienes Pedro");

dineroCofla = parseInt (dineroCofla); 

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla;Comprate el helado de Agua");
    alert("y te sobra" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla;Comprate el helado de Crema");
    alert("y te sobra" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla;Comprate el helado de Heladix");
    alert("y te sobra" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla;Comprate el helado de heladovich");
    alert("y te sobra" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla;Comprate el helado de helardo");
    alert("y te sobra" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("Cofla;Te alcanza para un Helado con confites o el pote de 1/4kg");
    alert("y te sobra" + (dineroCofla - 2.9));
} else {
    alert("Cofla;No te alcanza para un Helado");
}
/* Empieza la columna de Roberto */
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto;Comprate el helado de Agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto;Comprate el helado de Crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto;Comprate el helado de Heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto;Comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto;Comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto;Te alcanza para un Helado con confites o el pote de 1/4kg");
} else {
    alert("Roberto;No te alcanza para un Helado");
}

/* Empieza la columna de Pedro */

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro;Comprate el helado de Agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro;Comprate el helado de Crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro;Comprate el helado de Heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro;Comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro;Comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro;Te alcanza para un Helado con confites o el pote de 1/4kg");
} else {
    alert("Pedro;No te alcanza para un Helado");
}