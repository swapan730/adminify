$(function () {
	'use strict'

	////////////////////////////////
	// LINE CHARTS
	////////////////////////////////
	// LINE CHARTS 1
	$('#sparkline1').sparkline('html', {
		width: 250,
		height: 100,
		lineColor: '#17a2b8',
		fillColor: false
	});
	// LINE CHARTS 2
	$('#sparkline2').sparkline('html', {
		width: 250,
		height: 100,
		lineColor: '#B654C3',
		fillColor: false
	});

	////////////////////////////////
	//  CHARTS
	////////////////////////////////
	// AREA CHARTS 1
	$('#sparkline3').sparkline('html', {
		width: 250,
		height: 100,
		lineColor: '#17a2b8',
		fillColor: 'rgba(0,131,205,0.2)',
	});

	//AREA CHARTS 2
	$('#sparkline4').sparkline('html', {
		width: 250,
		height: 100,
		lineColor: '#B654C3',
		fillColor: 'rgba(182,84,195,0.2)'
	});


	////////////////////////////////
	// BAR CHARTS
	////////////////////////////////
	// BAR CHARTS 1
	$('#sparkline5').sparkline('html', {
		type: 'bar',
		barWidth: 10,
		height: 100,
		barColor: '#17a2b8',
		chartRangeMax: 12
	});
	// BAR CHARTS 2
	$('#sparkline6').sparkline('html', {
		type: 'bar',
		barWidth: 10,
		height: 100,
		barColor: '#B654C3',
		chartRangeMax: 12
	});


	////////////////////////////////
	// STACKED CHARTS
	////////////////////////////////
	// STACKED CHARTS 1
	$('#sparkline7').sparkline('html', {
		type: 'bar',
		barWidth: 10,
		height: 100,
		barColor: '#17a2b8',
		chartRangeMax: 12
	});

	$('#sparkline7').sparkline([4, 5, 6, 7, 4, 5, 8, 7, 6, 6, 4, 4, 5, 8, 7, 6, 6, 5, 7, 6, 8, 7], {
		composite: true,
		type: 'bar',
		barWidth: 10,
		height: 100,
		barColor: '#11546F',
		chartRangeMax: 12
	});

	// STACKED CHARTS 2
	$('#sparkline8').sparkline('html', {
		type: 'bar',
		barWidth: 10,
		height: 100,
		barColor: '#E97B9E',
		chartRangeMax: 12
	});

	$('#sparkline8').sparkline([4, 5, 6, 7, 4, 5, 8, 7, 6, 6, 4, 7, 5, 8, 7, 6, 6, 5, 7, 6, 8, 7], {
		composite: true,
		type: 'bar',
		barWidth: 10,
		height: 100,
		barColor: '#92288D',
		chartRangeMax: 12
	});


	////////////////////////////////
	// PIE CHARTS
	////////////////////////////////
	// PIE CHARTS 1
	$('#sparkline9').sparkline('html', {
		type: 'pie',
		height: 200,
		sliceColors: ['#F4C62B', '#F6931E', '#8CC63E']
	});
	// PIE CHARTS 2
	$('#sparkline10').sparkline('html', {
		type: 'pie',
		height: 200,
		sliceColors: ['#F4C62B', '#F6931E', '#8CC63E', '#93268F', '#EB1E79', '#828BC4', '#E97A9B', '#17a2b8']
	});

});