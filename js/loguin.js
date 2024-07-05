
function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if (user=="admin" && pass=="hotel")
    {
        window.location="reservas.html";
    }
    else
    {
        alert("Datos Incorrectos");
    }
}