
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
//	AWS.config.update({accessKeyId: 'AKIAIPYYGPZCQTRWPI4Q', secretAccessKey: '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'});
	AWS.config.update({accessKeyId: 'AKIAJHQULZ244VZ5NLUA', secretAccessKey: 'GVA6xjv2Q5Mgu9y1zmQEGuY3afDTjbGY+MUkA8Xa'});

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
		setTimeout(actualiza, 500);
	}	
	actualiza();

 

 