$(window).load(function(){
$('#search').keyup(function(){
	var searchField = $('#search').val();
	var regex = new RegExp(searchField, "i");
	var output = '<div class="row"><ul>';
	var count = 1;
	$.getJSON("http://www.mvitalia.com/dimostrativi/patrizia/portaleapp/admin/get_json_data.asp", function(data) {
	  $.each(data, function(key, val){
		if ((val.ragione_sociale.search(regex) != -1) || (val.categoria.search(regex) != -1)) {
		  output += "<li id='" + val.ID + "'><a data-transition='pop' href='page/dettaglio.html?id=" + val.ID + "'><img src=''>" + val.ragione_sociale + "</a></li>";
		  
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