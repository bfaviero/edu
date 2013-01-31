$(function() {
        /** This code runs when everything has been loaded on the page */
        /* Inline sparklines take their values from the contents of the tag */
        $("#sparkline").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
		type: 'line',
		chartRangeMin: 1,
		chartRangeMax: 5,
		width: 500,
		height:500,
		drawNormalOnTop: false});
    });
    $(function() {
	    $( "#slider" ).slider({
	      value:1,
	      min: 1,
	      max: 5,
	      step: 1,
	      
	      slide: function( event, ui ) {
	        $( "#amount" ).val(ui.value );
	      }



	    });
	    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
	  });
$(function() {
	$( "#slider" ).on( "slidechange", function( event, ui ) {
   		$.ajax({
	      		data: {vote:{user:'bruno', value:4}},
				url: "/votes/create.json",
				type: "POST",
				dataType: "json"	
			});
   		alert("writte");
   } );
});