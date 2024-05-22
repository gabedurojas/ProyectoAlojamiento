document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("contactForm");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        if (validateForm()) {
            formulario.reset();
            showConfirmationMessage(); // Mostrar mensaje de confirmación
            sendFormData(formulario);
        }
    });
});

function validateForm() {
    var nombre = document.getElementById("nombreApellido").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var motivo = document.getElementById("motivo").value;
    var mensaje = document.getElementById("mensaje").value.trim();
    var contactoEmail = document.getElementById("contactoEmail").checked;
    var contactoTelefono = document.getElementById("contactoTelefono").checked;
    var adjunto = document.getElementById("adjunto").value; // Obtener el valor del campo de archivo
    var error = "";

    // Validaciones ...

    if (error !== "") {
        alert(error);
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\+?\d{1,4}?\s?\(?\d{1,4}?\)?[\d\s-]{7,}$/;
    return re.test(phone);
}

function showConfirmationMessage() {
    // Función para mostrar el mensaje de confirmación
    const confirmationMessage = document.createElement("div");
    confirmationMessage.textContent = "¡Gracias! Tus datos han sido enviados.";
    confirmationMessage.classList.add("confirmation-message");

    document.body.appendChild(confirmationMessage); // Añadir el mensaje al cuerpo del documento

    // Desvanecer el mensaje después de 3 segundos
    setTimeout(function() {
        confirmationMessage.style.opacity = 0;
        setTimeout(function() {
            confirmationMessage.parentNode.removeChild(confirmationMessage);
        }, 1000); // Eliminar el mensaje después de la animación de desvanecimiento
    }, 3000);
}

function sendFormData(formulario) {
    // Función para enviar los datos del formulario
    const formData = new FormData(formulario);
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Éxito: hacer algo si es necesario
            } else {
                // Error: manejar el error si es necesario
            }
        }
    };
    
    xhr.open("POST", formulario.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(new URLSearchParams(formData).toString());
}
