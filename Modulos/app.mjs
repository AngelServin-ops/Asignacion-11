import * as modulo from "./saludo.mjs";

console.log(modulo.saludar("Angel"));
console.log(modulo.sumar(5,5));

import Estudiante from "./Estudiante.js";

let estudiante1 = new Estudiante();
estudiante1.nombre="Angel";
estudiante1.carrera="ISW";

console.log(estudiante1.saludar());
console.log(estudiante1.estudiar());
console.log(estudiante1.verPromedio());
