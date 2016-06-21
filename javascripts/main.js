
 
setInterval(function(){
		$(".equipo1 .puntuacion-puntos").load('https://s3-eu-west-1.amazonaws.com/pruebas-luis/equipo1.txt');
		$(".equipo2 .puntuacion-puntos").load('https://s3-eu-west-1.amazonaws.com/pruebas-luis/equipo2.txt');
	}
	,1500);

$( ".letra" ).click(function(){
	$( '.pregunta-container').hide();
	$('.mostrar-respuesta').hide();
	$( '.respuesta').hide();
	$( $(this).attr('href')).fadeIn();
	setTimeout(function(){$('.mostrar-respuesta').fadeIn()},7000);
	$(this).css('background-color','green');
});

$( ".mostrar-respuesta" ).click(function(){
	$('.respuesta').fadeIn('slow');
});