document.addEventListener("DOMContentLoaded", function() {
    const botonEnviar = document.querySelector("#formulario button[type='submit']");

    botonEnviar.addEventListener("click", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            alert("Formulario válido. Datos enviados.");
            // Aquí puedes agregar la lógica para enviar los datos a un servidor si lo necesitas
        }
    });
});

function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var mensaje = document.getElementById("mensaje").value;
    var motivo = document.getElementById("motivo").value;
    var contactoEmail = document.getElementById("contactoEmail").checked;
    var contactoTelefono = document.getElementById("contactoTelefono").checked;
    var error = "";

    //Validación de motivo
    if (motivo == "") {
        error += "Por favor, selecciona un motivo de contacto.\n";
    }

    //Validación check box contacto
    if (!contactoEmail && !contactoTelefono) {
        error += "Por favor, selecciona al menos una forma de contacto.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }
    
    alert("Formulario válido. Datos enviados.")
    return true;
}
