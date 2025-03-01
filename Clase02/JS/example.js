const ENV_PRODUCTIVO = 'https://www.wemakeitlab.com/';
const ENV_LOCALHOST = 'http://localhost:5500/';

const validacionLogIn = prompt('¿SOS MAYOR DE 18 AÑOS Y CAMPEÓN DEL MUNDO?');

if(validacionLogIn === 'si'){
    console.log("entramos...");
    //window.location.replace(`${ENV_LOCALHOST}Clase02/homeSeccion.html`);
    window.location.replace(`${ENV_PRODUCTIVO}Clase02/homeSeccion.html`);
}else{
    console.log('no entramos');
    //window.location.replace(`${ENV_LOCALHOST}`);
    window.location.replace(`${ENV_PRODUCTIVO}`);
};

const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const userpassword = prompt('ingrese su contraseña');

if(regularExpression.test(userpassword)){
    console.log('contraseña valida');
    //comprobar que la contraseña sea la misma a la del usuario guardado
}else{
    console.log('contraseña invalida');
}

