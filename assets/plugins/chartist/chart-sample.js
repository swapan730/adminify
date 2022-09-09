$(function () {
	'use strict'

	///////////////////////////////////////////
	//BAR CHART
	///////////////////////////////////////////
	//BAR CHART 1
	var bar1 = new Chartist.Bar('#chartBar1', {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		series: [
			[15, 19, 17, 18, 15, 18, 15, 13, 15, 14]
		]
	}, {
		high: 30,
		low: 0,
		axisY: {
			onlyInteger: true
		},
		showArea: true,
		fullWidth: true,
		chartPadding: {
			bottom: 0,
			left: 0
		}
	});
	//BAR CHART 2
	var bar2 = new Chartist.Bar('#chartBar2', {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		series: [
			[15, 18, 15, 13, 19, 17, 18, 15, 15, 14],
			[10, 12, 18, 10, 15, 20, 18, 11, 16, 18],
			[10, 15, 12, 18, 11, 16, 10, 20, 18, 18]
		]
	}, {
		high: 30,
		low: 0,
		axisY: {
			onlyInteger: true
		},
		showArea: true,
		fullWidth: true,
		chartPadding: {
			bottom: 0,
			left: 0
		}
	});
	///////////////////////////////////////////
	//HORIZONTAL BAR CHART
	///////////////////////////////////////////
	//HORIZONTAL BAR CHART 1
	var bar3 = new Chartist.Bar('#chartBar3', {
		labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		series: [
			[15, 19, 18, 15, 13, 15, 14]
		]
	}, {
		high: 30,
		low: 0,
		axisY: {
			onlyInteger: true
		},
		horizontalBars: true,
		showArea: true,
		fullWidth: true,
		chartPadding: {
			bottom: 0,
			left: 40
		}
	});
	//HORIZONTAL BAR CHART 2
	var bar4 = new Chartist.Bar('#chartBar4', {
		labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		series: [
			[10, 12, 18, 18, 11, 16, 18],
			[15, 19, 18, 15, 13, 15, 14]
		]
	}, {
		high: 30,
		low: 0,
		axisY: {
			onlyInteger: true
		},
		horizontalBars: true,
		showArea: true,
		fullWidth: true,
		chartPadding: {
			bottom: 0,
			left: 40
		}
	});

	///////////////////////////////////////////
	//STACKED BAR CHART
	///////////////////////////////////////////  
	//STACKED BAR CHART 1
	var bar5 = new Chartist.Bar('#chartBar5', {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
		series: [
			[800000, 1200000, 1400000, 1300000, 1500000],
			[200000, 400000, 500000, 300000, 500000],
			[100000, 200000, 400000, 600000, 700000]
		]
	}, {
		stackBars: true,
		axisY: {
			labelInterpolationFnc: function (value) {
				return (value / 1000) + 'k';
			}
		}
	}).on('draw', function (data) {
		if (data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 30px'
			});
		}
	});

	//STACKED BAR CHART 2
	var bar6 = new Chartist.Bar('#chartBar6', {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
		series: [
			[800000, 1200000, 1400000, 1300000, 1500000],
			[200000, 400000, 500000, 400000, 500000],
			[300000, 200000, 400000, 600000, 700000]
		]
	}, {
		stackBars: true,
		horizontalBars: true,
		axisX: {
			labelInterpolationFnc: function (value) {
				return (value / 1000) + 'k';
			}
		},
		chartPadding: {
			bottom: 0,
			left: 0,
			right: 40
		}
	}).on('draw', function (data) {
		if (data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 30px'
			});
		}
	});

	///////////////////////////////////////////
	//LINE CHART
	/////////////////////////////////////////// 
	//LINE CHART 1
	var line1 = new Chartist.Line('#chartLine1', {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		series: [
			[12, 19, 14, 18, 15, 19, 16]
		]
	}, {
		high: 30,
		axisY: {
			onlyInteger: true
		},
		fullWidth: true,
		chartPadding: {
			bottom: 0,
			left: 0
		}
	});


	//LINE CHART 2 
	var line2 = new Chartist.Line('#chartLine2', {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		series: [
			[12, 14, 17, 19, 17, 18, 15],
			[12, 18, 15, 17, 15, 17, 13],
			[11, 13, 18, 15, 16, 19, 16]
		]
	}, {
		high: 30,
		axisY: {
			onlyInteger: true
		},
		fullWidth: true,
		chartPadding: {
			bottom: 0,
			left: 0
		}
	});


	///////////////////////////////////////////
	//AREA CHART
	///////////////////////////////////////////
	//AREA CHART 1
	var area1 = new Chartist.Line('#chartArea1', {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		series: [
			[12, 19, 14, 18, 15, 19, 16, 22, 15, 25]
		]
	}, {
		high: 30,
		low: 0,
		axisY: {
			onlyInteger: true
		},
		showArea: true,
		fullWidth: true,
		chartPadding: {
			bottom: 0,
			left: 0
		}
	});

	//AREA CHART 2
	var area2 = new Chartist.Line('#chartArea2', {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		series: [
			[15, 9, 17, 8, 19, 6, 25, 10, 26, 15],
			[12, 19, 12, 18, 11, 16, 16, 22, 15, 25]
		]
	}, {
		high: 30,
		low: 0,
		axisY: {
			onlyInteger: true
		},
		showArea: true,
		fullWidth: true,
		chartPadding: {
			bottom: 0,
			left: 0
		}
	});


	///////////////////////////////////////////
	//PIE CHART
	///////////////////////////////////////////
	//PIE CHART 1
	var sum = function (a, b) {
		return a + b
	};

	var data = {
		series: [5, 3, 4]
	};

	var pie1 = new Chartist.Pie('#chartPie1', data, {
		labelInterpolationFnc: function (value) {
			return Math.round(value / data.series.reduce(sum) * 100) + '%';
		}
	});


	//PIE CHART 2
	var data2 = {
		series: [5, 3, 4, 6, 2]
	};

	var pie2 = new Chartist.Pie('#chartPie2', data2, {
		labelInterpolationFnc: function (value) {
			return Math.round(value / data.series.reduce(sum) * 100) + '%';
		}
	});


	///////////////////////////////////////////
	//DONUT CHART
	///////////////////////////////////////////
	//DONUT CHART 1 
	var donut1 = new Chartist.Pie('#chartDonut1', {
		series: [20, 10, 30]
	}, {
		donut: true,
		donutWidth: 60,
		donutSolid: true,
		startAngle: 270,
		showLabel: true
	});

	//DONUT CHART 2 
	var donut2 = new Chartist.Pie('#chartDonut2', {
		series: [20, 10, 30, 40, 25]
	}, {
		donut: true,
		donutWidth: 60,
		donutSolid: true,
		startAngle: 270,
		showLabel: true
	});


	///////////////////////////////////////////
	//resize chart when container changest it's width
	///////////////////////////////////////////
	new ResizeSensor($('.main-wrapper'), function () {
		//bar
		bar1.update();
		bar2.update();
		bar3.update();
		bar4.update();
		bar5.update();
		bar6.update();
		//line
		line1.update();
		line2.update();
		//area
		area1.update();
		area2.update();
		//pie
		pie1.update();
		pie2.update();
		//donut
		donut1.update();
		donut2.update();
	});


});