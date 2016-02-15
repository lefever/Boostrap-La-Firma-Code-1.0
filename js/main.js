/* Copyright (c) 2016 Tomás Lefever (hola@tomaslefever.cl) http://www.tomaslefever.cl
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-2.0.php)
 * Use only for non-commercial usage.
 *
 * Version : 0.1
 */

// Función para añadir scripts al header
function appendScript(pathToScript) {
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = pathToScript;
    head.appendChild(js);
}

function appendStyle(pathToStyle) {
    var head = document.getElementsByTagName("head")[0];
    var css = document.createElement("script");
    css.rel = "stylesheet";
    css.src = pathToStyle;
    head.appendChild(css);
}

// Función success cuando el form es enviado
function formSended() {
    $('form[data-send="ajax"]').fadeOut();
    alert('Formulario Enviado');
}

$(document).ready(function(){
	// Leer opciones
	options();

	// Activar animaciones 
	if (animaciones == 1) {
		appendStyle('../css/animations.css');
	}
	
	// Validación Rut
	if (validar_rut == 1) {
		appendScript('jquery.Rut.js');
		
		// Formatear sin puntos
		if (limpiar_rut == 1){
			function formato(){
				var rut = $("#rut").val();
				rut = rut.replace('.','');
				rut = rut.replace('.','');
				rut = rut.replace('-','');
				$("#rut").val('').val(rut);
			};
		}
	};

	// Validación Formulario
	if (validar_formularios == 1 ) {
		appendScript('validator.js');
	}

	// Fijar navegación arriba
	if (fixed_navbar == 1) {
		$(window).scroll(function () {
			var navbar = $('nav[data-toggle="fixed-nav"]');
			var navbarHeight = navbar.height();
			if ($(window).scrollTop() > navbarHeight ) {
				navbar.addClass("navbar-fixed-top");
				$('body').css({'padding-top':navbarHeight+'px'});
			} else {
				navbar.removeClass("navbar-fixed-top");
				$('body').css({'padding-top':0});
			}
		});
	}

    // Enviar form ajax
    if (ajax_form == 1 ) {
        $('form[data-send="ajax"]').on('submit', function(){
            this = $(this);
            $.ajax({
                type: 'POST',
                url: 'inc/registro.php',
                data: this.serialize(),
                success: function(){
                    formSended();
                }
            });
        })
    }

});

