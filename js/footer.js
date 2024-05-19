// Crear una variable para el contenido del footer
let miFooter = `
<ul class="social_icon">
    <li><a href="http://facebook.com/"  target="_blank"><img src="./Img/facebook-48.png" alt=""></a></li>
    <li><a href="https://www.linkedin.com/" target="_blank"><img src="./Img/linkedin-48.png" alt=""></a></li>
    <li><a href="https://www.instagram.com/" target="_blank"><img src="./Img/iinstagram-48.png" alt=""></a></li>
    <li><a href="https://web.whatsapp.com/" target="_blank"><img src="./Img/whatsapp-48.png" alt=""></a></li>
</ul>
<ul class="menufooter"> 
    <li><a class="poetsen-one-regular" href="index.html" ><img src="./Img/iconos/home.ico" alt="" /> Inicio</a></li>
    <li><a class="poetsen-one-regular" href="acerca_de.html"><img src="./Img/iconos/group_key.ico" alt="" /> Sobre Nosotros</a></li>
    <li><a class="poetsen-one-regular" href="habitaciones.html"><img src="./Img/iconos/house.ico" alt="" /> Habitaciones</a></li>
    <li><a class="poetsen-one-regular" href="sucursales.html"><img src="./Img/iconos/flag_blue.ico" alt="" /> Sucursales</a></li>
    <li><a class="poetsen-one-regular" href="propietarios.html" ><img src="./Img/iconos/user_suit.ico" alt="" /> Propietarios</a></li>
    <li><a class="poetsen-one-regular" href="contacto.html" ><img src="./Img/iconos/email_edit.ico" alt="" /> Contacto</a></li>
</ul>
<p class="poetsen-one-regular" class="menufooter"><img src="./Img/iconos/phone_sound.ico" alt="">  +54 3701 111111</p>
<p class="poetsen-one-regular" class="menufooter"><img src="./Img/iconos/email_edit.ico" alt="">  info@rentashouse.com.ar</p>
<p class="poetsen-one-regular" class="menufooter"><img src="./Img/iconos/group_key.ico" alt="">Línea Gratuita:<span class="poetsen-one-regular">  0800 - 888 - 123456</span></p>
`;


// Seleccionar el footer y agregar el contenido
document.querySelector("footer").innerHTML = miFooter;
