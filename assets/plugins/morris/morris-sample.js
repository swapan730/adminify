$(document).ready(function () {

	/////////////////////////////////////////////
	// Bar Chart
	/////////////////////////////////////////////

	//  BAR CHART 1	
	Morris.Bar({
		element: 'bar1',
		data: [{
				y: '1',
				a: 100
			},
			{
				y: '2',
				a: 75
			},
			{
				y: '3',
				a: 20
			},
			{
				y: '5',
				a: 50
			},
			{
				y: '6',
				a: 75
			},
			{
				y: '7',
				a: 15
			},
			{
				y: '8',
				a: 70
			},
			{
				y: '9',
				a: 100
			},
			{
				y: '10',
				a: 50
			},
			{
				y: '11',
				a: 20
			},
			{
				y: '12',
				a: 40
			},
			{
				y: '13',
				a: 70
			},
			{
				y: '14',
				a: 50
			},
			{
				y: '15',
				a: 100
			}
		],
		xkey: 'y',
		ykeys: ['a'],
		labels: ['Series A'],
		gridEnabled: true,
		gridLineColor: 'rgba(0,0,0,.1)',
		gridTextColor: '#10171e',
		gridTextSize: '11px',
		barColors: ['#17a2b8', '#dde4ec'],
		resize: true,
		hideHover: 'auto'
	});


	// MORRIS BAR CHART 2	
	Morris.Bar({
		element: 'bar2',
		data: [{
				y: '1',
				a: 100,
				b: 90
			},
			{
				y: '2',
				a: 75,
				b: 65
			},
			{
				y: '3',
				a: 20,
				b: 15
			},
			{
				y: '5',
				a: 50,
				b: 40
			},
			{
				y: '6',
				a: 75,
				b: 95
			},
			{
				y: '7',
				a: 15,
				b: 65
			},
			{
				y: '8',
				a: 70,
				b: 100
			},
			{
				y: '9',
				a: 100,
				b: 70
			},
			{
				y: '10',
				a: 50,
				b: 70
			},
			{
				y: '11',
				a: 20,
				b: 10
			},
			{
				y: '12',
				a: 40,
				b: 90
			},
			{
				y: '13',
				a: 70,
				b: 30
			},
			{
				y: '14',
				a: 50,
				b: 50
			},
			{
				y: '15',
				a: 100,
				b: 90
			}
		],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Series A', 'Series B'],
		gridEnabled: true,
		gridLineColor: 'rgba(0,0,0,.1)',
		gridTextColor: '#10171e',
		gridTextSize: '11px',
		barColors: ['#17a2b8', '#dde4ec'],
		resize: true,
		hideHover: 'auto'
	});

	/////////////////////////////////////////////
	// Area Chart
	/////////////////////////////////////////////

	// MORRIS AREA CHART 1
	var chart = Morris.Area({
		element: 'area1',
		data: [{
			period: 'January 16',
			dl: 77
		}, {
			period: 'February 16',
			dl: 127
		}, {
			period: 'March 16',
			dl: 115
		}, {
			period: 'April 16',
			dl: 239
		}, {
			period: 'May 16',
			dl: 46
		}, {
			period: 'June 16',
			dl: 97
		}, {
			period: 'July 16',
			dl: 105
		}, {
			period: 'August 16',
			dl: 115
		}, {
			period: 'September 16',
			dl: 239
		}, {
			period: 'October 16',
			dl: 97
		}, {
			period: 'November 16',
			dl: 189
		}, {
			period: 'December 16',
			dl: 65
		}, {
			period: 'January 17',
			dl: 35
		}, {
			period: 'February 17',
			dl: 127
		}, {
			period: 'March 17',
			dl: 115
		}, {
			period: 'April 17',
			dl: 239
		}, {
			period: 'May 17',
			dl: 46
		}, {
			period: 'June 17',
			dl: 97
		}, {
			period: 'July 17',
			dl: 105
		}, {
			period: 'August 17',
			dl: 115
		}, {
			period: 'September 17',
			dl: 239
		}, {
			period: 'October 17',
			dl: 97
		}, {
			period: 'November 17',
			dl: 189
		}, {
			period: 'December 17',
			dl: 65
		}],
		gridEnabled: true,
		gridLineColor: 'rgba(0,0,0,.1)',
		gridTextColor: '#10171e',
		gridTextSize: '11px',
		behaveLikeLine: true,
		smooth: true,
		xkey: 'period',
		ykeys: ['dl'],
		labels: ['Pageview'],
		lineColors: ['#17a2b8'],
		pointSize: 0,
		pointStrokeColors: ['#17a2b8'],
		lineWidth: 0,
		resize: true,
		hideHover: 'auto',
		fillOpacity: 0.9,
		parseTime: false
	});


	// MORRIS AREA CHART 2
	var chart = Morris.Area({
		element: 'area2',
		data: [{
			period: 'January 16',
			dl: 77,
			up: 25
		}, {
			period: 'February 16',
			dl: 127,
			up: 58
		}, {
			period: 'March 16',
			dl: 115,
			up: 46
		}, {
			period: 'April 16',
			dl: 239,
			up: 57
		}, {
			period: 'May 16',
			dl: 46,
			up: 75
		}, {
			period: 'June 16',
			dl: 97,
			up: 57
		}, {
			period: 'July 16',
			dl: 105,
			up: 70
		}, {
			period: 'August 16',
			dl: 115,
			up: 106
		}, {
			period: 'September 16',
			dl: 239,
			up: 187
		}, {
			period: 'October 16',
			dl: 97,
			up: 57
		}, {
			period: 'November 16',
			dl: 189,
			up: 70
		}, {
			period: 'December 16',
			dl: 65,
			up: 30
		}, {
			period: 'January 17',
			dl: 35,
			up: 90
		}, {
			period: 'February 17',
			dl: 127,
			up: 58
		}, {
			period: 'March 17',
			dl: 115,
			up: 46
		}, {
			period: 'April 17',
			dl: 239,
			up: 57
		}, {
			period: 'May 17',
			dl: 46,
			up: 75
		}, {
			period: 'June 17',
			dl: 97,
			up: 57
		}, {
			period: 'July 17',
			dl: 105,
			up: 70
		}, {
			period: 'August 17',
			dl: 115,
			up: 106
		}, {
			period: 'September 17',
			dl: 239,
			up: 187
		}, {
			period: 'October 17',
			dl: 97,
			up: 57
		}, {
			period: 'November 17',
			dl: 189,
			up: 70
		}, {
			period: 'January 17',
			dl: 35,
			up: 90
		}, {
			period: 'February 17',
			dl: 127,
			up: 58
		}, {
			period: 'March 17',
			dl: 115,
			up: 46
		}, {
			period: 'April 17',
			dl: 239,
			up: 57
		}, {
			period: 'May 17',
			dl: 46,
			up: 75
		}, {
			period: 'June 17',
			dl: 97,
			up: 57
		}, {
			period: 'July 17',
			dl: 105,
			up: 70
		}, {
			period: 'August 17',
			dl: 115,
			up: 106
		}, {
			period: 'September 17',
			dl: 239,
			up: 187
		}, {
			period: 'October 17',
			dl: 97,
			up: 57
		}, {
			period: 'November 17',
			dl: 189,
			up: 70
		}, {
			period: 'December 17',
			dl: 65,
			up: 30
		}, {
			period: 'January 18',
			dl: 35,
			up: 90
		}, {
			period: 'February 18',
			dl: 127,
			up: 58
		}, {
			period: 'March 18',
			dl: 115,
			up: 46
		}, {
			period: 'April 18',
			dl: 239,
			up: 57
		}, {
			period: 'May 18',
			dl: 46,
			up: 75
		}, {
			period: 'June 18',
			dl: 97,
			up: 57
		}, {
			period: 'July 18',
			dl: 105,
			up: 70
		}, {
			period: 'August 18',
			dl: 115,
			up: 106
		}, {
			period: 'September 18',
			dl: 239,
			up: 187
		}, {
			period: 'October 18',
			dl: 97,
			up: 57
		}, {
			period: 'November 18',
			dl: 189,
			up: 70
		}, {
			period: 'December 18',
			dl: 65,
			up: 30
		}, {
			period: 'January 19',
			dl: 35,
			up: 90
		}],
		gridEnabled: true,
		gridLineColor: 'rgba(0,0,0,.1)',
		gridTextColor: '#10171e',
		gridTextSize: '11px',
		behaveLikeLine: true,
		smooth: true,
		xkey: 'period',
		ykeys: ['dl', 'up'],
		labels: ['Visitor', 'Pageview'],
		lineColors: ['#bfbfcf', '#17a2b8'],
		pointSize: 0,
		pointStrokeColors: ['#17a2b8'],
		lineWidth: 0,
		resize: true,
		hideHover: 'auto',
		fillOpacity: 0.9,
		parseTime: false
	});

	chart.options.labels.forEach(function (label, i) {
		var legendItem = $('<div class=\'morris-legend-items\'></div>').text(label);
		$('<span></span>').css('background-color', chart.options.lineColors[i]).prependTo(legendItem);
		$('#area-legend').append(legendItem)
	})

	/////////////////////////////////////////////
	// Line Chart
	/////////////////////////////////////////////
    
	// MORRIS LINE CHART 1	
	var day_data = [{
			'elapsed': '2000',
			'Visitor': 13
		},
		{
			'elapsed': '2001',
			'Visitor': 33
		},
		{
			'elapsed': '2002',
			'Visitor': 12
		},
		{
			'elapsed': '2003',
			'Visitor': 35
		},
		{
			'elapsed': '2004',
			'Visitor': 11
		},
		{
			'elapsed': '2005',
			'Visitor': 41
		},
		{
			'elapsed': '2006',
			'Visitor': 25
		},
		{
			'elapsed': '2007',
			'Visitor': 58
		},
		{
			'elapsed': '2008',
			'Visitor': 30
		},
		{
			'elapsed': '2009',
			'Visitor': 21
		},
		{
			'elapsed': '2010',
			'Visitor': 36
		},
		{
			'elapsed': '2011',
			'Visitor': 21
		},
		{
			'elapsed': '2012',
			'Visitor': 57
		},
		{
			'elapsed': '2013',
			'Visitor': 22
		},
		{
			'elapsed': '2014',
			'Visitor': 40
		},
		{
			'elapsed': '2015',
			'Visitor': 42
		},
		{
			'elapsed': '2016',
			'Visitor': 14
		},
		{
			'elapsed': '2017',
			'Visitor': 45
		}
	];
	Morris.Line({
		element: 'line1',
		data: day_data,
		xkey: 'elapsed',
		ykeys: ['Visitor'],
		labels: ['Visitor'],
		gridEnabled: true,
		gridLineColor: 'rgba(0,0,0,.1)',
		gridTextColor: '#8f9ea6',
		gridTextSize: '11px',
		lineColors: ['#17a2b8'],
		lineWidth: 1,
		parseTime: false,
		resize: true,
		hideHover: 'auto'
	});


	// MORRIS LINE CHART 2	
	var day_data = [{
			'elapsed': '2000',
			'Visitor': 13,
			'Pageview': 33
		},
		{
			'elapsed': '2001',
			'Visitor': 33,
			'Pageview': 13
		},
		{
			'elapsed': '2000',
			'Visitor': 12,
			'Pageview': 52
		},
		{
			'elapsed': '2000',
			'Visitor': 35,
			'Pageview': 17
		},
		{
			'elapsed': '2000',
			'Visitor': 11,
			'Pageview': 53
		},
		{
			'elapsed': '2000',
			'Visitor': 41,
			'Pageview': 21
		},
		{
			'elapsed': '2000',
			'Visitor': 25,
			'Pageview': 45
		},
		{
			'elapsed': '2000',
			'Visitor': 58,
			'Pageview': 20
		},
		{
			'elapsed': '2000',
			'Visitor': 30,
			'Pageview': 44
		},
		{
			'elapsed': '2000',
			'Visitor': 21,
			'Pageview': 35
		},
		{
			'elapsed': '2000',
			'Visitor': 36,
			'Pageview': 21
		},
		{
			'elapsed': '2000',
			'Visitor': 21,
			'Pageview': 36
		},
		{
			'elapsed': '2000',
			'Visitor': 57,
			'Pageview': 15
		},
		{
			'elapsed': '2000',
			'Visitor': 22,
			'Pageview': 40
		},
		{
			'elapsed': '2000',
			'Visitor': 40,
			'Pageview': 24
		},
		{
			'elapsed': '2000',
			'Visitor': 42,
			'Pageview': 26
		},
		{
			'elapsed': '2000',
			'Visitor': 14,
			'Pageview': 56
		},
		{
			'elapsed': '2000',
			'Visitor': 45,
			'Pageview': 21
		}
	];
	Morris.Line({
		element: 'line2',
		data: day_data,
		xkey: 'elapsed',
		ykeys: ['Visitor', 'Pageview'],
		labels: ['Visitor', 'Pageview'],
		gridEnabled: true,
		gridLineColor: 'rgba(0,0,0,.1)',
		gridTextColor: '#8f9ea6',
		gridTextSize: '11px',
		lineColors: ['#bfbfcf', '#17a2b8'],
		lineWidth: 1,
		parseTime: false,
		resize: true,
		hideHover: 'auto'
	});
	chart.options.labels.forEach(function (label, i) {
		var legendItem = $('<div class=\'morris-legend-items\'></div>').text(label);
		$('<span></span>').css('background-color', chart.options.lineColors[i]).prependTo(legendItem);
		$('#line-legend').append(legendItem)
	})

	/////////////////////////////////////////////
	// Donut Chart
	/////////////////////////////////////////////	
	// MORRIS DONUT CHART 1
	Morris.Donut({
		element: 'donut1',
		data: [{
				label: 'Download',
				value: 12
			},
			{
				label: 'In-Store',
				value: 30
			},
			{
				label: 'Order',
				value: 20
			}
		],
		colors: [
			'#e7ebec',
			'#17a2b8',
			'#da3041'
		],
		resize: true
	});


	// MORRIS DONUT CHART 2
	Morris.Donut({
		element: 'donut2',
		data: [{
				label: 'Total Download',
				value: 12
			},
			{
				label: 'Total Store',
				value: 10
			},
			{
				label: 'Total Order',
				value: 16
			},
			{
				label: 'Total Earning',
				value: 11
			},
			{
				label: 'Total Pending',
				value: 24
			},
			{
				label: 'Total Cancle',
				value: 18
			}
		],
		colors: [
			'#e7ebec',
			'#17a2b8',
			'#da3041',
			'#8ecceb',
			'#178cce',
			'#8ecc58'
		],
		resize: true
	});
});