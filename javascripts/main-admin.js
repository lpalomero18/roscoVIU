


	var up1		= $('.equipo1 .glyphicon-triangle-top').asEventStream('click');
	var down1	= $('.equipo1 .glyphicon-triangle-bottom').asEventStream('click');
	var up2		= $('.equipo2 .glyphicon-triangle-top').asEventStream('click');
	var down2	= $('.equipo2 .glyphicon-triangle-bottom').asEventStream('click');

	var counter1 =
		up1.map(1).merge(down1.map(-1)).scan(0, function(x,y){return x+y});
	var counter2 =
		up2.map(1).merge(down2.map(-1)).scan(0, function(x,y){return x+y});
	counter1.assign($('.equipo1 .puntuacion-puntos'), 'text');
	counter2.assign($('.equipo2 .puntuacion-puntos'), 'text');
