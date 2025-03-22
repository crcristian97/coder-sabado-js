import { top10Alumnos } from './utils/alumnos'

function mayorQue(n) {
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) ); 
console.log( mayorQueDiez(8) ); 


const numeros= [1, 2, 3, 4];

//porCadaUno(numeros, console.log);

const duplicado = []

function duplicados (el){
    duplicado.push(el * 2);
};

//porCadaUno(numeros, duplicados(numeros));

//DESPUES DE ARROW FUNCTION

/*porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado);
*/



// Array de objetos con 10 alumnos
const personasComision75790 = [
    { nombre: "Juan Pérez", edad: 28, rol: "profesor", mail: "juan.perez@academia.com", top10: true },
    { nombre: "María López", edad: 22, rol: "alumno", mail: "maria.lopez@estudiantes.com", top10: true },
    { nombre: "Carlos Rodríguez", edad: 25, rol: "alumno", mail: "carlos.rodriguez@estudiantes.com", top10: false },
    { nombre: "Ana Martínez", edad: 23, rol: "alumno", mail: "ana.martinez@estudiantes.com", top10: true },
    { nombre: "Pedro Sánchez", edad: 24, rol: "alumno", mail: "pedro.sanchez@estudiantes.com", top10: false },
    { nombre: "Laura García", edad: 21, rol: "alumno", mail: "laura.garcia@estudiantes.com", top10: true },
    { nombre: "Miguel Fernández", edad: 26, rol: "alumno", mail: "miguel.fernandez@estudiantes.com", top10: false },
    { nombre: "Sofía Torres", edad: 22, rol: "alumno", mail: "sofia.torres@estudiantes.com", top10: true },
    { nombre: "Javier Ramírez", edad: 23, rol: "alumno", mail: "javier.ramirez@estudiantes.com", top10: false },
    { nombre: "Lucía Díaz", edad: 24, rol: "alumno", mail: "lucia.diaz@estudiantes.com", top10: true }
];

const alumnosDiploma = []

//OKEY, TE LLAMO CON UNA QUERY A LA BASE DE DATOS DE LOS ALUMNOS 75790;
// HACER LA LÓGICA PARA ENCONTRAR LOS ALUMNOS DEL TOP10
personasComision75790.forEach((alumnos) => {
   top10Alumnos(alumnos);
})



console.log(alumnosDiploma);


