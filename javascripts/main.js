

function coge_ajax(url_name, container){
	var respuesta;
	$.ajax({ 
	        type: 'GET', 
	        url: url_name,
	        data: { get_param: 'value' }, 
	        success: function (data) { 
	        	$(container).text(data.value);
	        }
	    });
	return respuesta;
}

function observa(){
/*	var urlpuntos1 ="https://cache-aws-us-east-1.iron.io/1/projects/5767de59638de900078dc881/caches/puntuaciones/items/punt1?oauth=JdhnN1iMVLth2NlH4m7h";
	var urlpuntos2 ="https://cache-aws-us-east-1.iron.io/1/projects/5767de59638de900078dc881/caches/puntuaciones/items/punt2?oauth=JdhnN1iMVLth2NlH4m7h";
	punt1 =  coge_ajax(urlpuntos1, ".equipo1 .puntuacion-puntos");
	punt2 = coge_ajax(urlpuntos2, ".equipo2 .puntuacion-puntos");
*/	
	$(".equipo1 .puntuacion-puntos").load('https://s3-eu-west-1.amazonaws.com/pruebas-luis/equipo1.txt');
	$(".equipo2 .puntuacion-puntos").load('https://s3-eu-west-1.amazonaws.com/pruebas-luis/equipo2.txt');
	setTimeout(observa, 2000);
}
observa();