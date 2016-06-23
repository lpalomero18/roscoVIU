
// Todo esto para mover el contador
  var up1   = $('.equipo1 .glyphicon-triangle-top').asEventStream('click');
  var down1 = $('.equipo1 .glyphicon-triangle-bottom').asEventStream('click');
  var up2   = $('.equipo2 .glyphicon-triangle-top').asEventStream('click');
  var down2 = $('.equipo2 .glyphicon-triangle-bottom').asEventStream('click');

  var counter1 =
    up1.map(1).merge(down1.map(-1)).scan(0, function(x,y){return x+y});
  var counter2 =
    up2.map(1).merge(down2.map(-1)).scan(0, function(x,y){return x+y});


  counter1.assign($('.equipo1 .puntuacion-puntos'), 'text');
  counter2.assign($('.equipo2 .puntuacion-puntos'), 'text');



/*$.get('https://kvstore.p.mashape.com/collections/Rosco1/items/equipo1',
      { "X-Mashape-Key": "UIa0IbsfgymshsTftxvy025ixl5jp1hNvzkjsnyE97ieLBWNX7"},
      function(data, status){
        $('.equipo2 .puntuacion-puntos').text(data);
        console.log(data + " " + status);
});
  */
  function ponResultado(resultado){
     $.ajax({
         url: "https://kvstore.p.mashape.com/collections/Rosco1/items/"+resultado,
         type: "PUT",
         data:$('.'+resultado+' .puntuacion-puntos').text(),
         beforeSend: function(xhr){xhr.setRequestHeader( "X-Mashape-Key", "UIa0IbsfgymshsTftxvy025ixl5jp1hNvzkjsnyE97ieLBWNX7");},
         success: function(result, status) { 
            console.log(result.value+" "+ status); 
        }
  });
 }
  var contenido1;
  var contenido2;
  function actualiza(){
    var temporal1 =$('.equipo1 .puntuacion-puntos').text();
    var temporal2 =$('.equipo2 .puntuacion-puntos').text();
    if (contenido1 != temporal1 ) {
      contenido1 = temporal1;   
      ponResultado('equipo1');
    }
    if (contenido2 != temporal2 ) {
      contenido2 = temporal2;
      ponResultado('equipo2');   
     }
    setTimeout(actualiza, 500);
  } 
  actualiza();

 

 