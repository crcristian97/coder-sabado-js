
import { ingresoDatosPaciente } from './funcionesValidacionesSimples.js';
let continua = true;

while(continua){
    ingresoDatosPaciente();
    continua=confirm ('¿Desea continuar ingresando otro paciente?')
}


mostrarPacientes();
