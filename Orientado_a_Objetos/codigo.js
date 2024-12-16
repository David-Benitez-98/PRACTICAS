/*
**EJEMPLO NUMERO 1**
class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");

    }
}

const perro = new animal ("perro",5,"marron.");
const gato =  new animal ("gato",2,"negro.");
const pajaro = new animal("pajaro",3,"verde.");


perro.verInfo();
gato.verInfo();
pajaro.verInfo();

**EJEMPLO NUMERO 2**
class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");

    }
    ladrar(){
        if(this.especie == "perro") {
            document.write("¡Wauw! <br>");
        }else {
            document.write("No puede ladrar, ya que es un " + this.especie + "."  + "<br>");
        }
    }
}

const perro = new animal ("perro",5,"marron.");
const gato =  new animal ("gato",2,"negro.");
const pajaro = new animal("pajaro",3,"verde.");


perro.ladrar();
gato.ladrar();
pajaro.ladrar();

**EJEMPLO NUMERO 3**



*/

class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");

    }
}
 class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
 }

const perro = new Perro ("perro",5,"marron", "doberman");
const gato =  new Animal ("gato",2,"negro.");
const pajaro = new Animal("pajaro",3,"verde.");


perro.setRaza = "Pedro";

document.write(perro.getRaza);