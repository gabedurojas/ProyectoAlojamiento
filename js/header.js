//Crear una variable miHeader
let miHeader = `
  <nav class="nav1">
    <a href="" class="logo1 nav1-link">
      <img src="Img/logo.png" alt="Logo de la empresa" class="logo1"
           style="width: 110px; height: auto; 
                  position: relative; /* Establece la posición relativa para permitir ajustes */
                  top: -27px !important; /* Desplazamiento hacia arriba */
                  left: -10px !important; /* Desplazamiento hacia la izquierda */" />
    </a>
    <img class="nav1-toggle"  src="./Img/iconos/application_double.ico" alt=""
         style="width: 15px; height: 18px; /* Tamaño fijo para el ícono de doble aplicación */" />
    <ul class="nav1-menu nav1-menu_visible">
      <li class="nav1-menu-item"><img src="./Img/iconos/home.ico" alt=""><a href="index.html" class="nav1-menu-link nav1-link">Inicio</a></li>
      <li class="nav1-menu-item"><img src="./Img/iconos/group_key.ico" alt=""><a href="acerca_de.html" class="nav1-menu-link nav1-link">Sobre Nosotros</a></li>
      <li class="nav1-menu-item"><img src="./Img/iconos/house.ico" alt=""><a href="habitaciones.html" class="nav1-menu-link nav1-link">Habitaciones</a></li>
      <li class="nav1-menu-item"><img src="./Img/iconos/user_suit.ico" alt=""><a href="propietarios.html" class="nav1-menu-link nav1-link">Propietarios</a></li>
      <li class="nav1-menu-item"><img src="./Img/iconos/key_go.ico" alt=""><a href="franquicia.html" class="nav1-menu-link nav1-link">Nueva Franquicia</a></li>
      <li class="nav1-menu-item"><img src="./Img/iconos/flag_blue.ico" alt=""><a href="sucursales.html" class="nav1-menu-link nav1-link">Sucursales</a></li>
      <li class="nav1-menu-item"><img src="./Img/iconos/email_edit.ico" alt=""><a href="contacto.html" class="nav1-menu-link nav1-link nav1-menu-link_active">Contacto</a></li>
    </ul>
</nav>
`;

//Selecciono el header y con un innerHTML agrego lo que definí en la variable miHeader
document.querySelector("header").innerHTML = miHeader;
