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
