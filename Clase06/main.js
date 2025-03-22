const numeros = [3, 9, 5, 2, 8, 7];
const tieneNumeroPar = numeros.find((num) => num % 2 === 0);
console.log(tieneNumeroPar);


const alumnos = [
    { name: 'cristian', entrega1: true, entrega2: false, entrega3: false },
    { name: 'jeannette', entrega1: false, entrega2: false, entrega3: false },
    { name: 'Juan', entrega1: true, entrega2: false, entrega3: false },
    { name: 'Cinthia', entrega1: true, entrega2: false, entrega3: false },
];

const estadoEntrega = []

const alumnosEntrega1 = alumnos.forEach((alum) => {
    if(alum.entrega1){
        estadoEntrega.push(alum)
    }
});


console.log(estadoEntrega);

const nombres = ['Ana', 'Juan', 'María', 'Luisa', 'Pedro', 'Pablo'];
const nombresLargos = nombres.filter((name) => name.length > 5);
console.log(nombresLargos);

const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);

// EJERCICIO AVANZADO
const alumnosConCurso = alumnos.reduce((acumulador, alumno, index) => {
    const cursoAsignado = index % 2 === 0 ? "desarrollo web" : "backend";
    const alumnoConCurso = {
        ...alumno,
        curso: cursoAsignado
    };
    
    acumulador.push(alumnoConCurso);
    
    return acumulador;
}, []);

console.log("Alumnos con curso asignado:");
console.log(alumnosConCurso);
