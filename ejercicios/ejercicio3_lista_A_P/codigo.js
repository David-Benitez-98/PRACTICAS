/*Juan vuelve de la comisaria exausto y por lo cansado que estaba se fue a
dormir Al otro dia comienza las clases del ciclo basico de la universidad
(porque Juan quiere ser programador y se inscribio en la facultad de
ingenieria para estudiar desarrollo de  software): En su curso en total son 19
alumnos, pero surgio un problema que complico un poco a la facultad: se rompio
el sistema de registro de asistencias y durante los proximos 30 dias no se
podran hacer registros de datos de ningun tipo, por ende las clases no podran
comenzar hasta que esto este solucionado.
 -Crear un mini-sistema que nos permita registar los alumnos que estan presente (P) y
 ausentes (A) en clase*/

 let cantidad = prompt ("¿Cuantos alumnos son?");
 let alumnosTotales = [];

 for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] =[prompt("Nombre del alumno " + (i+1)),0];
 }

const tomarAsistencia = (nombre,p)=>{
    let prensecia = prompt(nombre);
    if (prensecia== "p"  || prensecia == "P") { 
        alumnosTotales[p][1]++;

    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}
 for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _________Presentes: <b>${alumnosTotales[alumno][1]} </b> <br>
    _________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
    }else {
        resultado+= "<br><br>"
    }
    document.write(resultado);
 }