// Esto para establecer los contadores al principio
/*	var baseURL="https://cache-aws-us-east-1.iron.io/1/projects/5767de59638de900078dc881/caches/puntuaciones"
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

*/

// Todo esto para mover el contador
	var up1		= $('.equipo1 .glyphicon-triangle-top').asEventStream('click');
	var down1	= $('.equipo1 .glyphicon-triangle-bottom').asEventStream('click');
	var up2		= $('.equipo2 .glyphicon-triangle-top').asEventStream('click');
	var down2	= $('.equipo2 .glyphicon-triangle-bottom').asEventStream('click');

	var counter1 =
		up1.map(1).merge(down1.map(-1)).scan(0, function(x,y){return x+y});
	var counter2 =
		up2.map(1).merge(down2.map(-1)).scan(0, function(x,y){return x+y});
	// See the Configuring section to configure credentials in the SDK
	AWS.config.update({accessKeyId: 'AKIAIPYYGPZCQTRWPI4Q', secretAccessKey: 'OasGV9UxvXHQmABvDtBzezwp5/THW6nkv5eXulbE'});

  	// Configure your region
  	AWS.config.region = 'eu-west-1';


  	var bucket = new AWS.S3({params: {Bucket: 'pruebas-luis'}});
	counter1.assign($('.equipo1 .puntuacion-puntos'), 'text');
	counter2.assign($('.equipo2 .puntuacion-puntos'), 'text');
	var contenido1;
	var contenido2;
	function actualiza(){
		var temporal1 =$('.equipo1 .puntuacion-puntos').text();
		var temporal2 =$('.equipo2 .puntuacion-puntos').text();
		if (contenido1 != temporal1 ) {
			contenido1 = temporal1;		
			var params =			{Key: 'equipo1.txt', ACL: 'public-read', Body: contenido1}
			console.log(params);
			bucket.upload( params, function(err, data){
				console.log(err + " " + data);
			});
		}
		if (contenido2 != temporal2 ) {
			contenido2 = temporal2;		
			var params =			{Key: 'equipo2.txt', ACL: 'public-read', Body: contenido2}
			console.log(params);
			bucket.upload( params, function(err, data){
				console.log(err + " " + data);
			});
		}
		setTimeout(actualiza, 1000);
	}	
	actualiza();

 

 