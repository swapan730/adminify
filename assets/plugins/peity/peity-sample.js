$(function () {
	'use strict'

	//Pie Chart  
	$(".pie").peity("pie");
	//Donut Chart 
	$(".donut").peity("donut");
	//Line Chart 
	$(".line").peity("line");
	//Bar Chart 
	$(".bar").peity("bar");
	//Data Attributes Chart 
	$(".data-attributes span").peity("donut")

	////////////////////////////////////
	// Dynamic Colors Chart
	////////////////////////////////////
	$(".bar-colours-1").peity("bar", {
		fill: ["red", "green", "blue"]
	})

	$(".bar-colours-2").peity("bar", {
		fill: function (value) {
			return value > 0 ? "green" : "red"
		}
	})
	$(".bar-colours-3").peity("bar", {
		fill: function (_, i, all) {
			var g = parseInt((i / all.length) * 255)
			return "rgb(255, " + g + ", 0)"
		}
	})

	$(".pie-colours-1").peity("pie", {
		fill: ["cyan", "magenta", "yellow", "black"]
	})

	$(".pie-colours-2").peity("pie", {
		fill: function (_, i, all) {
			var g = parseInt((i / all.length) * 255)
			return "rgb(255, " + g + ", 0)"
		}
	})

});