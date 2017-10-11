// draggable and resizable function
$( function() {
	$( "#draggable" ).draggable({containment: "parent"});
} );

$(function() {
	$("#box").resizable({
		alsoResize: "#draggable"
	});
	$("#draggable").resizable();
});

// draggable and droppable Drop a small square into a big square
$(function() {
	$("#draggableSquare").draggable();
	$("#droppableSquare").droppable({
		drop: function(event, ui) {
			$(this)
				.addClass("goldBg")
				.css("background-color", "gold")
				.find("p")
				.html("Dropped!");

			alert("Dropped!");
		}
	});
});

// accordion and sortable list
$("#accordion").accordion();

$(function() {

	$("#sortable").sortable();

});

$("#sortable").disableSelection();