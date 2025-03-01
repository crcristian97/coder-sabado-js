const llueveHoy = true;

//validar formulario y que luego se limpien los campos una vez enviado el form
//enviar a la base de datos todas las propiedades correspondientes a las columnas de la dabtase
//aplicar darkMode en mi app y que el usuario quede con el ultimo estilo del darkmode -- true || false

const cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
//en la forma de pedirle al usuario informacion y pensar en el proyecto escalable ---> van a ser los inputs 
const texto = prompt('INGRESE TEXTO A REPETIR');
//1-la inicialización que generalennte es en 0 || 1 
//2-la condición (index < cantidad ).Cuando es true la condicion se corta el bucle
//3-el incremento.

for (let index = 0; index < cantidad; index++) {
    //let result = index + 1
    //index += 1
    //index++
    //sugar sintax || refactorizacion , ultima forma de escribir de los programadores
console.log(texto);
}

//¿Qué tiene que hacer este código?
//Imprimir el texto a repetir en base a las repeticiones
//¿Por qué no cumple con su función?
//por que el incremento no esta declarado haciendo que sea un bucle infinito

//Actividad 02:
let lados = prompt('INGRESE CANTIDAD DE LADOS'); // 7
//lados = 7;

for (let index = 0; index < lados; index++) {
    if (index === 3) {
        console.log("Esto es un triangulo")
    }
    alert("lado");
}

//¿Qué tiene que hacer este código? //no sabemos, nosotros lo vamos a determinar
//¿Por qué no cumple con su función?// porque no tiene sentido la formula
//¿Qué propuesta podrías hacer para que tenga sentido su uso? //podiamos hacer que cuando tenga 3 lados es un triángulo


const usuarioPass = prompt('Ingrese su pass');
const passCristian = '12345';

if(usuarioPass === passCristian){
    console.log("Redireccionando a tu dashboard");
}else{
    console.log("Contraseña incorrecta");
}

//BUUUEN LOGIN EN PRODUCCION SR || SSR
//metodo regex --- validaciones de email, validacion de contraseña donde pones numero,minimo 8 caracteres, signo, mayuscula y minuscula
//base de datos si o si o auth0;
//encriptación , middleware, guardar el uusario en la base de datos, CORS, 
//segun la ley de inclusion en EEUU, estandar a nivel mundial le tenes que avisar al usuario de 3 formas la accion
//1 caso: se equivoco de contraseña
//A- label en rojo
//B- mensajito de respuesta
//C- ícono

//2do caso: que pasa con la gente daltónica?


const nombreUsuario = prompt('Ingrese su nombre').toUpperCase();

if (nombreUsuario === 'CRISTIAN'){
    console.log("podes pasar");
};

// CRISTIAN
// crISTIAN
// CRIstiAN

//es usar el metodo toLowerCase(); || toUpperCase();

//¿Por qué usar siempre el "===" y no el ==?

const numero = 6; // valor númerico y 6

// el triple = compara "TIPO DE DATO Y VALOR DE DATO"
if(numero === '6'){ // te va a comprar el 6 y si es numero = string
    console.log("xxxx");
}else{
    console.log("entra aca");
}

// el doble = compara "VALOR DE DATO"
if(numero == '6'){ // te va a comprar el 6
    console.log("xxxx");
}else{
    console.log("entra aca");
}


const sosMayor = false;

if(sosMayor != null || sosMayor != undefined){
    console.log("no podes entrar");
}

if(sosMayor){
    console.log("no podes entrar");
}

//el null y el undefined se evita con programación defensiva


const productoUser = prompt('elegi el producto');

switch(productoUser){
    case '1':
        alert('compraste microfono');
        //lógica para agregar al carrito el micrófono
        //llama a la función creada previamente
        break;
    case '2':
        alert('compraste tarjetas');
        break;
    case '3':
        alert('compraste celular');
        break;
    case '4':
        alert('compraste tablet');
        break;
    default:
        alert('no compraste nada');
        break;
};

