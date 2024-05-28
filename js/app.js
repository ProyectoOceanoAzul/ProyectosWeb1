
/*aaceder a mis imagenes */
const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');

/*acceder a la imagen*/
const imagenModal = document.getElementById('imagen-modal');


/* por cada imagen ejecutame una funcion */
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => { 
        const ruta = imagen.querySelector('img').src;
        imagenModal.src = ruta;

    });

});


