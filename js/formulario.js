const formulario = document.getElementById('formulario');
const inputs =document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z\_\-]{4,40}$/,
    nombre: /^[a-zA-ZÁ0-9\_\-]{4,40}$/,
    direccion:/^[a-zA-ZÁ0-9\_\-]{4,40}$/,
    password: /^.{1,12}$/,
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono : /^\d{4,14}$/ ,
    ///^\d{4,14}$/,
    tramite : /^\d{4,14}$/
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
    tramite: false,
    direccion: false,
}


const validarFormulario = (e) => {
  switch (e.target.name){
    case "tramite" :
        validarCampo(expresiones.tramite, e.target, 'tramite')
        /*if(expresiones.tramite.test(e.target.value)){
          document.getElementById('grupo__tramite').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__tramite').classList.add('formulario__grupo-correcto');  
          document.querySelector('#grupo__tramite .formulario__input-error').classList.remove('formulario__input-error-activo');   
        } 
        else {
          document.getElementById('grupo__tramite').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__tramite').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__tramite .formulario__input-error').classList.add('formulario__input-error-activo');  
        }*/
    break;
    case "usuario" :
        validarCampo(expresiones.usuario, e.target, 'usuario')
        /*if(expresiones.usuario.test(e.target.value)){
          document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');  
        } 
        else {
          document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');  
        }*/
    break;
    case "direccion" :
        validarCampo(expresiones.usuario, e.target, 'direccion')
        /*if(expresiones.usuario.test(e.target.value)){
          document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');  
        } 
        else {
          document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
          document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');  
        }*/
    break;    
    case "correo" :
        if(expresiones.usuario.test(e.target.value)){
          document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
          document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
          document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');  
          campos['correo'] = true;
        } 
        else {
          document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
          document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto'); 
          document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');  
          campos['correo'] = false;
        }
    break;
    case "telefono" :
        if(expresiones.usuario.test(e.target.value)){
           document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto');
           document.getElementById('grupo__telefono').classList.add('formulario__grupo-correcto');
           document.querySelector('#grupo__telefono .formulario__input-error').classList.remove('formulario__input-error-activo');  
           campos['telefono'] = true;
        } 
        else {
            document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__telefono').classList.remove('formulario__grupo-correcto');  
            document.querySelector('#grupo__telefono .formulario__input-error').classList.add('formulario__input-error-activo');  
            campos['telefono'] = false;
        }
    break;
  }
}

const validarCampo = (expresion, input ,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');  
        campos[campo] = true;
    } 
    else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto'); 
       document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');  
       campos[campo] = false;
    }    
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit' , (e) => {
  e.preventDefault();
  
  const terminos = document.getElementById('terminos');
  if (campos.tramite && campos.usuario 
      && campos.correo && campos.telefono && campos.direccion){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
   
        }, 5000);
      } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
      }
});

