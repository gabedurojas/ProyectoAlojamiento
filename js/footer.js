// Crear una variable para el contenido del footer
let miFooter = `
  <table>
    <tr>
      <td>
        <a href="index.html"><img src="./Img/iconos/home.ico" alt="" />Inicio</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="acerca_de.html"><img src="./Img/iconos/group_key.ico" alt="" />Sobre Nosotros</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="propietarios.html"><img src="./Img/iconos/user_suit.ico" alt="" />Propietarios</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="contacto.html"><img src="./Img/iconos/email_edit.ico" alt="" />Contacto</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="">Telefono:<span>+54 3701 111111</span></a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="">Email:<span>info@rentashouse.com.ar</span></a>
      </td>
    </tr>
  </table>
`;

// Seleccionar el footer y agregar el contenido
document.querySelector("footer").innerHTML = miFooter;
