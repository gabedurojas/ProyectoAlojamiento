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
