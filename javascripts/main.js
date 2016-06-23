
 function traeResultado(resultado){
     $.ajax({
         url: "https://kvstore.p.mashape.com/collections/Rosco1/items/"+resultado,
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader( "X-Mashape-Key", "UIa0IbsfgymshsTftxvy025ixl5jp1hNvzkjsnyE97ieLBWNX7");},
         success: function(result, status) { 
            $('.'+resultado+' .puntuacion-puntos').text(result.value);
            console.log(result.value+" "+ status); 
        }
  });
 }
setInterval(function(){
    traeResultado('equipo1');
    traeResultado('equipo2');
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

