/*PARTICULARIDADES DE 3 CELULARES 
A-) Juan entro a una tienda que vende celulares porque le parecio bastante bueno comprarse un nuevo celular.
de todos los modelos que hay disponibles en esa tienda, a Juan le llamaron la atencion 3 telefonos especificamente,
El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
el antes de comprar esos celulares quiere ver las cualidades y comportamiento de cada uno para poder comprarlos, ahi
entramos nosotros.
    CREAR SOLUCIONES:
-MOSTRARLE LAS PARTICULARIDADES DE LOS 3 CELULARES
-CADA UNO DEBE TENER COLOR,PESO,RESOLUCION DE PANTALLA,
CAMARA Y MEMORIA RAM
-DEBE PODER PRENDER,REINICIAR, TOMAR FOTOS Y GRABAR
*/
class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular Prendido");
            this.encendido = true;
        } else {
         alert("Celular apagado");
         this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        }else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
   }
  grabarVideo(){
    alert(`grabando video en ${this.resolucionDeCamara}`);
  }
  mobileInfo(){
    return`
    Color: <b>${this.color}</b><br>
    Peso: <b>${this.peso}</b><br>
    Tamaño: <b>${this.tamaño}</b><br>
    Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
    Memoria Ram: <b>${this.memoriaRam}</b><br>
    `;
  }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara extra: ${this.resolucionDeCamaraExtra}`;
    }
}
/*
celular1 = new Celular("rojo","150g","5'","hd","2GB");
celular2 = new Celular("negro","160g","5.4'","full hd","4GB");
celular3 = new Celular("blanco","180g","5.9'","full hd","6GB");*/


/*celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();*/

celular1 = new CelularAltaGama("rojo","130g","5.2","4k","3GB","Full HD");
celular2 = new CelularAltaGama("negro","142g","6","4k","4GB", "HD");

document.write(`
  ${celular1.infoAltaGama()}; <br> <br>
  ${celular2.infoAltaGama()}; <br> <br>
  
    `);