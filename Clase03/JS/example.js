//EJEMPLO////


function addCalendar(){
    const nombreUsuario = prompt('Como te llamas');
    const turnoCalendario = prompt('cuando queres el turno');
    const nombreAnimal = prompt('Como se llama mascota');
    const numeroUsuario = parseInt(prompt('decime tu numero'));
    alert(`
        El turno se agrego correctamente: 
        Nombre: ${nombreUsuario}, 
        Turno: ${turnoCalendario},
         Mascota: ${nombreAnimal}, 
         Número: ${numeroUsuario}
    `); //ES6
    calendarView(nombreUsuario, turnoCalendario, nombreAnimal, numeroUsuario);    
};

function calendarView(nombre = '', turno = '', animal = '', numeroUsuario = 0){
    console.log(`Nombre: ${nombre}, Turno: ${turno}, Mascota: ${animal}, Número: ${numeroUsuario}`); //ES6
};

addCalendar();


//agregar calendirio
//mostrar en e lcalendario
//guardar en la base de datos
//mostrar turno de la base de datos
//coneectar la api de wsp
//mandar mensaje de wsp 72 horas antes
//chatbot