
$("#circle").click(function() {

	alert("circle was clicked");

});

$(".square").click(function() {

	alert("squares was clicked");

});

$("#circle").click(function() {

	$("p").html("This text has changed!");

	alert($("p").html());

});


// change iframe Content
$("#circle").click(function() {

	$("iframe").attr("src", "http://www.flashscore.com/");

});

// hide object with clicking on this
$("div").click(function() {

	$(this).css("display", "none");

});

//same function less code
$("div").click(function() {

	$(this).hide();

});

// check if attribute is equal to shape
$("div").click(function() {

	if ($(this).attr("id") === "circle")  {

		alert("you clicked on a circle");

	} else {

		alert("you clicked on a square");

	}

});

// fadeOut and fadeIn with button click function
$("#FadeOutText").click(function() {

	$("#textToFadeOut").fadeOut("slow", function() {

		alert("fade out has finished")

	});

});

$("#FadeInText").click(function() {

	$("#textToFadeIn").fadeIn("slow", function() {

		alert("fade in text has finished")

	});

})

// toggle with fadeIn and fadeOut functions
$("#fadeOut").click(function() {

	$("#visualText").fadeOut();

});

$("#fadeIn").click(function() {

	$("#hiddenText").fadeIn();

});

// toggle with if/else statement check with CSS, fadeIn and fadeOut
$("#toggleButton").click(function() {

	if ($("#toggleText").css("display") === "none") {

		$("#toggleText").fadeIn();

	} else {

		$("#toggleText").fadeOut();

	}

});

// toggle with callback function
var textShowing = true;

$("#toggleButton").click(function() {

	if (textShowing) {

		$("#toggleText").fadeOut(function() {

			textShowing = false;

		});

	} else {

		$("#toggleText").fadeIn(function() {

			textShowing = true;

		});

	}

});

// toggle some object (shortest code)
$("#toggleButton").click(function() {

	$("#toggleText").toggle("slow");

});

// change style with animate function and time out
$("#circle").click(function() {

	$(this).animate({
		width: "400px",
		height: "400px",
		marginLeft: "100px",
		marginTop: "100px"
	}, 2000, function() {

		$(this).css("background-color", "purple");

	});

});

// GET method without AJAX for getting some information
$.get("info.txt", function(data) {

	alert(data);

});

// GET method with AJAX for getting some information and with Done/Fail function!
$.ajax("infoo.txt").done(function(data) {

	alert(data);

}).fail(function() {

	alert("Could not get data");

});

// search string with regex with match success
var regex = /is/;

var string = "Regex is great!";

var result = string.match(regex);

alert(result);

// search string with regex with no success
var regex = /Great/;

var string = "Regex is great!";

var result = string.match(regex);

alert(result);

// search string with regex with success and case sensitive!
var regex = /Great/i;

var string = "Regex is great!";

var result = string.match(regex);

alert(result);

// search for letter with regex and show all of them
var regex = /e/g;

var string = "Regex is great!";

var result = string.match(regex);

alert(result);

// search for letter with regex and show the result in number
var regex = /e/g;

var string = "Regex is great!";

var result = string.match(regex);

alert(result.length);

// appending the DOM
$(document).ready(function() {
	var price = $('<p>From 399.99</p>');

	$('.vacation').append(price);

	$('button').remove();

});

// appending the DOM other solution
$(document).ready(function() {
	var price = $('<p>From 399.99</p>');

	price.appendTo($('.vactation'));

	$('button').remove();

});

// only target a "button" if it's inside a ".vacation"(class)
$('.vacation').on('click', 'button', function() {
	// some code...
});

// finds elements with a class of .vacation and .onsale
$('.vacation').filter('.onsale')

// add a class to these vacations
$('.vacation').filter('.onsale').addClass('highlighted');

// traversin and filtering
$('.vacation').on('click', 'button', function() {
	$('.vacation').filter('.onsale').addClass('highlighted');
});

// unhighlighting vacations
$('.highlighted').removeClass('highlighted');