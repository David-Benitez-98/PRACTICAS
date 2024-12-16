/*C) Juan ya tiene su nuevo celular y ahora esta mirando las aplicaciones del play store ya que quiere jugar juegos
 que sean muy populares, que tengan buena puntuacion y que pensen poco, pero las 7 apps que llamaron su atencion
  son un tanto similares y sabe que si descarga todas, probablemente juege con todas, pero el se va a descargar solo
  2 para tener perdidas innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede
  decidirse cual de todas estas aplicaciones es la que va a descargar.

CREAR SOLUCIONES
-Crear un sistema que ayude a cofla a decidir cual app descargar.
-La informacion de los instaladores debe contener la cantidad de descargas la puntuacion y el peso
-Las APPS se deben poder instalar, abrir,cerrar y desinstalar.
   */

class App {
    constructor (descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instala = false;
            alert("app desinstalada correctamente");
        }
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b> <br>
        Puntuacion:<b>${this.puntuacion}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        `
    }
}
    
app = new App("16.000","4 estrellas","900mb");
app2 = new App("10.000","3 estrellas","1000mb");
app3 = new App("14.000","5 estrellas","800mb");
app4 = new App("15.000","4.5 estrellas","600mb");
app5= new App("17.000","3.9 estrellas","500mb");
app6 = new App("12.000","2.9 estrellas","400mb");
app7 = new App("11.000","4.6 estrellas","300mb");
/*
app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();*/

document.write(`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`);