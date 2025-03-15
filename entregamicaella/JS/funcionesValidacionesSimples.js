const pacientes = [];
export function ingresoDatosPaciente() {
    const nombrePaciente = prompt('Ingrese el nombre del paciente') || '';
    const edadPaciente = prompt('Ingrese la edad del paciente') || '';
    const telefono = prompt('Ingrese el telefono del paciente') || '';
    const fechaIngreso = prompt('Ingrese la fecha de ingreso del paciente') || '';
    const colegio = prompt('Ingrese el colegio del paciente') || '';
    const consultaDiagnostico = prompt('Ingrese el diagnostico del paciente') || '';
    const observaciones = prompt('Ingrese las observaciones del paciente') || '';
    const dniPaciente = prompt('Ingrese el dni del paciente') || '';
    
    const nombrePacienteValidado = validarDatoPaciente(nombrePaciente, 'nombrePaciente'); // true or false
    const edadPacienteValidado = validarDatoPaciente(edadPaciente, 'edadPaciente');
    const telefonoValidado = validarDatoPaciente(telefono, 'telefono');
    const fechaIngresoValidado = validarDatoPaciente(fechaIngreso, 'fechaIngreso');
    const colegioValidado = validarDatoPaciente(colegio, 'colegio');
    const consultaDiagnosticoValidado = validarDatoPaciente(consultaDiagnostico, 'consultaDiagnostico');
    const observacionesValidado = validarDatoPaciente(observaciones, 'observaciones');
    const dniPacienteValidado = validarDatoPaciente(dniPaciente, 'dniPaciente');


    pacientes.push({
        nombre: nombrePacienteValidado,
        edad: edadPacienteValidado,
        telefono: telefonoValidado,
        fechaIngreso: fechaIngresoValidado,
        colegio: colegioValidado,
        consultaDiagnostico: consultaDiagnosticoValidado,
        observaciones: observacionesValidado,
        dniPaciente: dniPacienteValidado
    });

    alert(`
        Paciente ingresado correctamente: 
        Nombre del paciente: ${nombrePacienteValidado}, 
        DNI: ${dniPacienteValidado}
        `);
};

function validarDatoPaciente(dato = '', campo = ''){
    if(dato){
        return dato;
    }else{
        alert(`el ${campo} es requerido`);
        return false;
    }
}

