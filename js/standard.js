

$(window).load(function(){
	$('#search').keyup(function(){
		alert('prova');
		var searchField = $('#search').val();
		var regex = new RegExp(searchField, "i");
		var output = '<div class="row"><ul>';
		var count = 1;
		$.getJSON("http://www.mvitalia.com/dimostrativi/patrizia/portaleapp/admin/get_json_data.asp", function(data) {
		  $.each(data, function(key, val){
			if ((val.ragione_sociale.search(regex) != -1) || (val.servizi.search(regex) != -1) || (val.macrocategoria.search(regex) != -1) || (val.categoria.search(regex) != -1) || (val.paese.search(regex) != -1)) {
			  //output += "<li id='" + val.ID + "'><a data-transition='pop' href='page/dettaglio.html?id=" + val.ID + "'><img src=''>" + val.ragione_sociale + "</a></li>";
			  output += '<li><a href="#" id="' + val.id + '" class="azienda-go">';

			  if (name.foto_principale != "" && name.foto_princinpale != "undefined" ){
			  	output += '<img src="http://www.mvitalia.com/dimostrativi/patrizia/portaleapp%5Cpublic%5Cupload_gallery%5Cimmagini%5C' + val.foto_principale + '" class="ui-li-thumb"/>';
			  }
			  output += '<h3 class="ui-li-heading">' + val.ragione_sociale + '</h3><p class="ui-li-desc">' + val.paese + '</p></a></li>';
			  
			  
			  
			  if(count%2 == 0){
				output += '</div><div class="row">'
			  }
			  count++;
			}
		  });
		  output += '</ul></div>';
		  $('#results').html(output);
		}); 
	});
});

/* dimensione testo */

$(document).on('vclick', '.small', function(e){
    $(".txtwrapper").css('font-size', '15px');
});

$(document).on('vclick', '.med', function(e){
    $(".txtwrapper").css('font-size', '20px');
});

$(document).on('vclick', '.large', function(e){
    $(".txtwrapper").css('font-size', '25px');
});








function parseGetVars()
{
  // creo una array
  var args = new Array();
  // individuo la query (cioè tutto quello che sta a destra del ?)
  // per farlo uso il metodo substring della proprietà search
  // dell'oggetto location
  var query = window.location.search.substring(1);
  // se c'è una querystring procedo alla sua analisi
  if (query)
  {
    // divido la querystring in blocchi sulla base del carattere &
    // (il carattere & è usato per concatenare i diversi parametri della URL)
    var strList = query.split('&');
    // faccio un ciclo per leggere i blocchi individuati nella querystring
    for(str in strList)
    {
      // divido ogni blocco mediante il simbolo uguale
      // (uguale è usato per l'assegnazione del valore)
      var parts = strList[str].split('=');
      // inserisco nella array args l'accoppiata nome = valore di ciascun
      // parametro presente nella querystring
      args[unescape(parts[0])] = unescape(parts[1]);
    }
  }
  return args;
}