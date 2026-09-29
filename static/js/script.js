console.log(`Conexión exitosa con js...`);

const botonIngresar = document.querySelector('.boton_ingresar');
const campoEmail = document.querySelector('.email_introducir');
const elementoContador = document.getElementById('numero_libros');
const listaBotonesSumar = document.querySelectorAll('.btn-sumar');
const imagenBanner = document.querySelector('.imagen-banner');

let totalLibros = 0;
let rutaImagenOriginal = 'static/images/libro1.jpg';
let rutaImagenAlternativa = 'static/images/libro2.jpg';

function procesarIngreso() {
    let correoUsuario = campoEmail.value;

    if (correoUsuario !== '') {
        alert('Bienvenido\n' + correoUsuario);
        campoEmail.value = ''; 
    } else {
        alert('Por favor, ingresa tu correo electrónico.');
    }
}

function sumarLibro() {
    totalLibros = totalLibros + 1;
    elementoContador.textContent = totalLibros;
}

function cambiarImagen() {
    imagenBanner.src = rutaImagenAlternativa;
}

function restaurarImagen() {
    imagenBanner.src = rutaImagenOriginal;
}

botonIngresar.addEventListener('click', procesarIngreso);

for (let i = 0; i < listaBotonesSumar.length; i++) {
    let botonActual = listaBotonesSumar[i];
    botonActual.addEventListener('click', sumarLibro);
}


if (imagenBanner) {
    imagenBanner.addEventListener('mouseenter', cambiarImagen);
    imagenBanner.addEventListener('mouseleave', restaurarImagen);
}