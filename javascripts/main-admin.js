// Esto para establecer los contadores al principio
	var baseURL="https://cache-aws-us-east-1.iron.io/1/projects/5767de59638de900078dc881/caches/puntuaciones"
	var urlpuntos1 = baseURL+"/items/punt1?oauth=JdhnN1iMVLth2NlH4m7h";
	var urlpuntos2 =baseURL+"/items/punt2?oauth=JdhnN1iMVLth2NlH4m7h";
	var credenciales="JdhnN1iMVLth2NlH4m7h";

function coge_ajax(url_name, container){
	var respuesta;
	$.ajax({ 
	        type: 'GET', 
	        url: url_name,
	        oauth: credenciales,
	        data: { get_param: 'value' }, 
	        success: function (data) { 
	        	$(container).text(data.value);
	        }
	    });
	return respuesta;
}
	$(document).ready(function () {
	punt1 =  coge_ajax(urlpuntos1, ".equipo1 .puntuacion-puntos");
	punt2 = coge_ajax(urlpuntos2, ".equipo2 .puntuacion-puntos");
    
	});



// Todo esto para mover el contador
	var up1		= $('.equipo1 .glyphicon-triangle-top').asEventStream('click');
	var down1	= $('.equipo1 .glyphicon-triangle-bottom').asEventStream('click');
	var up2		= $('.equipo2 .glyphicon-triangle-top').asEventStream('click');
	var down2	= $('.equipo2 .glyphicon-triangle-bottom').asEventStream('click');

	var counter1 =
		up1.map(1).scan(0, function(x,y){return x+y});
	var counter2 =
		up2.map(1).merge(down2.map(-1)).scan(0, function(x,y){return x+y});
	counter1.assign($('.equipo1 .puntuacion-puntos'), 'text');
	counter2.assign($('.equipo2 .puntuacion-puntos'), 'text');
/*	incrementaCounter = counter1.changes().map($.post( 
		baseURL+"/items/punt1/clear?oauth=JdhnN1iMVLth2NlH4m7h",
		{
			"amount": 1
		},
	    function(data, status){
    	    alert("Data: " + data + "\nStatus: " + status);
	    }

	));
*/
		incrementaCounter = counter1.changes().map($.ajax({ 
		
			type: 'PUT', 
			url: baseURL+"/items/punt1?oauth=JdhnN1iMVLth2NlH4m7h",
//			url: baseURL+"/items/punt1/increment?oauth=JdhnN1iMVLth2NlH4m7h",
			data:{
				"value": $('.equipo1 .puntuacion-puntos').text(),  
				"expires_in": 86400,
  				"replace": true
			}
		
	}));