console.log(`Conexión exitosa con js...`);

    const botonIngresar = document.querySelector('.boton_ingresar');
    const campoEmail = document.querySelector('.email_introducir');
    const elementoContador = document.getElementById('numero_libros');
    const listaBotonesSumar = document.querySelectorAll('.btn-sumar');
    const etiquetaVideo = document.querySelector('.contenedor-video video');

    let totalLibros = 0;
    let rutaVideoOriginal = 'static/videos/videoxd.mp4';
    let rutaVideoAlternativo = 'static/videos/video_alternativo.mp4';

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

    function cambiarMiniatura() {
        etiquetaVideo.src = rutaVideoAlternativo;
    }

    function restaurarMiniatura() {
        etiquetaVideo.src = rutaVideoOriginal;
    }

    botonIngresar.addEventListener('click', procesarIngreso);

    for (let i = 0; i < listaBotonesSumar.length; i++) {
        let botonActual = listaBotonesSumar[i];
        botonActual.addEventListener('click', sumarLibro);
    }

    if (etiquetaVideo) {
        etiquetaVideo.addEventListener('mouseenter', cambiarMiniatura);
        etiquetaVideo.addEventListener('mouseleave', restaurarMiniatura);
    }