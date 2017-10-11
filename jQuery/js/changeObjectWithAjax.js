/**
 * Created by markolubarda on 01.09.17.
 */
$(document).ready(function () {
	$("#m_home").click(function () {
		$("#main").animate({opacity: "0", filter: "alpha(opacity=0)"}, 200, function () {
			$("#main").load("home.html", function () {
				$("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);

			});
		});
	});
	$("#m_about").click(function () {
		$("#main").animate({opacity: "0", filter: "alpha(opacity=0)"}, 200, function () {
			$("#main").load("about.html", function () {
				$("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);

			});
		});
	});
	$("#m_contact").click(function () {
		$("#main").animate({opacity: "0", filter: "alpha(opacity=0)"}, 200, function () {
			$("#main").load("contact.html", function () {
				$("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);

			});
		});
	});
	$("#m_impressum").click(function () {
		$("#main").animate({opacity: "0", filter: "alpha(opacity=0)"}, 200, function () {
			$("#main").load("impressum.html", function () {
				$("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);

			});
		});
	});
});