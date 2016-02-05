$(document).ready(function(){
	//Validación Rut
	$('#rut').Rut({
		on_success: function(){
			formato();
		},
		on_error: function(){ 
			alert('Rut incorrecto'),
			setTimeout(function(){
			$('#rut').focus();
			},1);
		}
	});
	
	function formato(){
		var rut = $("#rut").val();
		rut = rut.replace('.','');
		rut = rut.replace('.','');
		rut = rut.replace('-','');
		$("#rut").val('').val(rut);
	};

	//Validación Formulario
	$('#formulario').validator();

});

$(window).load(function(){
	//Do anything (on load)
});

$(window).resize(function(){
	//Do anything (on resize)
});

$(window).scroll(function () {
	var navbarHeight = $('nav.navbar').height();
	if ($(window).scrollTop() > navbarHeight ) {
		$("nav").addClass("navbar-fixed-top");
		$('body').css({'padding-top':navbarHeight+'px'});
	} else {
		$("nav").removeClass("navbar-fixed-top");
		$('body').css({'padding-top':0});
	}
});