


function observa(){
	$(".equipo1 .puntuacion-puntos").load("equipo1.txt");
	$(".equipo2 .puntuacion-puntos").load("equipo2.txt");
	setTimeout(observa, 1000);
}
observa();