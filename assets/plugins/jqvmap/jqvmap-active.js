"use strict";
// World Map Light
$(function () {
	$('#world-map-light-gdp').vectorMap({
		map: 'world_mill',
		backgroundColor: 'transparent',
		series: {
			regions: [{
				values: gdpData,
				scale: ['#C8EEFF', '#0071A4'],
				normalizeFunction: 'polynomial'
			}]
		},
		onRegionTipShow: function (e, el, code) {
			el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
		}
	});
});
// World Map Dark
$(function () {
	$('#world-map-dark-gdp').vectorMap({
		map: 'world_mill',
		backgroundColor: '#000000',
		series: {
			regions: [{
				values: gdpData,
				scale: ['#C8EEFF', '#0071A4'],
				normalizeFunction: 'polynomial'
			}]
		},
		onRegionTipShow: function (e, el, code) {
			el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
		}
	});
});
// Marker Map Light
$(function () {
	$('#world-map-markers-light').vectorMap({
		map: 'world_mill',
		scaleColors: ['#098194', '#17a2b8'],
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.7,
		hoverColor: true,
		regionStyle: {
			initial: {
				fill: '#e0e8f5'
			}
		},
		markerStyle: {
			initial: {
				r: 9,
				'fill': '#17a2b8  ',
				'fill-opacity': 0.7,
				'stroke': '#fff',
				'stroke-width': 9,
				'stroke-opacity': 0.2
			},

			hover: {
				'stroke': '#fff',
				'fill-opacity': 1,
				'stroke-width': 1.5
			}
		},
		backgroundColor: 'transparent',
		markers: [{
				latLng: [41.90, 12.45],
				name: 'Vatican City'
			},
			{
				latLng: [43.73, 7.41],
				name: 'Monaco'
			},
			{
				latLng: [-0.52, 166.93],
				name: 'Nauru'
			},
			{
				latLng: [-8.51, 179.21],
				name: 'Tuvalu'
			},
			{
				latLng: [43.93, 12.46],
				name: 'San Marino'
			},
			{
				latLng: [47.14, 9.52],
				name: 'Liechtenstein'
			},
			{
				latLng: [7.11, 171.06],
				name: 'Marshall Islands'
			},
			{
				latLng: [17.3, -62.73],
				name: 'Saint Kitts and Nevis'
			},
			{
				latLng: [3.2, 73.22],
				name: 'Maldives'
			},
			{
				latLng: [35.88, 14.5],
				name: 'Malta'
			},
			{
				latLng: [12.05, -61.75],
				name: 'Grenada'
			},
			{
				latLng: [13.16, -61.23],
				name: 'Saint Vincent and the Grenadines'
			},
			{
				latLng: [13.16, -59.55],
				name: 'Barbados'
			},
			{
				latLng: [17.11, -61.85],
				name: 'Antigua and Barbuda'
			},
			{
				latLng: [-4.61, 55.45],
				name: 'Seychelles'
			},
			{
				latLng: [7.35, 134.46],
				name: 'Palau'
			},
			{
				latLng: [42.5, 1.51],
				name: 'Andorra'
			},
			{
				latLng: [14.01, -60.98],
				name: 'Saint Lucia'
			},
			{
				latLng: [6.91, 158.18],
				name: 'Federated States of Micronesia'
			},
			{
				latLng: [1.3, 103.8],
				name: 'Singapore'
			},
			{
				latLng: [1.46, 173.03],
				name: 'Kiribati'
			},
			{
				latLng: [-21.13, -175.2],
				name: 'Tonga'
			},
			{
				latLng: [15.3, -61.38],
				name: 'Dominica'
			},
			{
				latLng: [-20.2, 57.5],
				name: 'Mauritius'
			},
			{
				latLng: [26.02, 50.55],
				name: 'Bahrain'
			},
			{
				latLng: [0.33, 6.73],
				name: 'São Tomé and Príncipe'
			}
		]
	});
});
// Marker Map Dark
$(function () {
	$('#world-map-markers-dark').vectorMap({
		map: 'world_mill',
		scaleColors: ['#098194', '#17a2b8'],
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.7,
		hoverColor: true,
		regionStyle: {
			initial: {
				fill: '#e0e8f5'
			}
		},
		markerStyle: {
			initial: {
				r: 9,
				'fill': '#17a2b8  ',
				'fill-opacity': 0.7,
				'stroke': '#fff',
				'stroke-width': 9,
				'stroke-opacity': 0.2
			},

			hover: {
				'stroke': '#fff',
				'fill-opacity': 1,
				'stroke-width': 1.5
			}
		},
		backgroundColor: '#000000',
		markers: [{
				latLng: [41.90, 12.45],
				name: 'Vatican City'
			},
			{
				latLng: [43.73, 7.41],
				name: 'Monaco'
			},
			{
				latLng: [-0.52, 166.93],
				name: 'Nauru'
			},
			{
				latLng: [-8.51, 179.21],
				name: 'Tuvalu'
			},
			{
				latLng: [43.93, 12.46],
				name: 'San Marino'
			},
			{
				latLng: [47.14, 9.52],
				name: 'Liechtenstein'
			},
			{
				latLng: [7.11, 171.06],
				name: 'Marshall Islands'
			},
			{
				latLng: [17.3, -62.73],
				name: 'Saint Kitts and Nevis'
			},
			{
				latLng: [3.2, 73.22],
				name: 'Maldives'
			},
			{
				latLng: [35.88, 14.5],
				name: 'Malta'
			},
			{
				latLng: [12.05, -61.75],
				name: 'Grenada'
			},
			{
				latLng: [13.16, -61.23],
				name: 'Saint Vincent and the Grenadines'
			},
			{
				latLng: [13.16, -59.55],
				name: 'Barbados'
			},
			{
				latLng: [17.11, -61.85],
				name: 'Antigua and Barbuda'
			},
			{
				latLng: [-4.61, 55.45],
				name: 'Seychelles'
			},
			{
				latLng: [7.35, 134.46],
				name: 'Palau'
			},
			{
				latLng: [42.5, 1.51],
				name: 'Andorra'
			},
			{
				latLng: [14.01, -60.98],
				name: 'Saint Lucia'
			},
			{
				latLng: [6.91, 158.18],
				name: 'Federated States of Micronesia'
			},
			{
				latLng: [1.3, 103.8],
				name: 'Singapore'
			},
			{
				latLng: [1.46, 173.03],
				name: 'Kiribati'
			},
			{
				latLng: [-21.13, -175.2],
				name: 'Tonga'
			},
			{
				latLng: [15.3, -61.38],
				name: 'Dominica'
			},
			{
				latLng: [-20.2, 57.5],
				name: 'Mauritius'
			},
			{
				latLng: [26.02, 50.55],
				name: 'Bahrain'
			},
			{
				latLng: [0.33, 6.73],
				name: 'São Tomé and Príncipe'
			}
		]
	});
});

// US Area Map Light
$(function () {
	new jvm.Map({
		map: 'us_aea',
		container: $('#us-aea-map-light'),
		regionLabelStyle: {
			initial: {
				fill: '#17a2b8'
			},
			hover: {
				fill: 'black'
			}
		},
		regionStyle: {
			initial: {
				fill: '#e0e8f5'
			}
		},
		backgroundColor: 'transparent',
		labels: {
			regions: {
				render: function (code) {
					var doNotShow = ['US-RI', 'US-DC', 'US-DE', 'US-MD'];

					if (doNotShow.indexOf(code) === -1) {
						return code.split('-')[1];
					}
				},

				offsets: function (code) {
					return {
						'CA': [-10, 10],
						'ID': [0, 40],
						'OK': [25, 0],
						'LA': [-20, 0],
						'FL': [45, 0],
						'KY': [10, 5],
						'VA': [15, 5],
						'MI': [30, 30],
						'AK': [50, -25],
						'HI': [25, 50]
					}[code.split('-')[1]];
				}
			}
		}
	});
});

// US Area Map Dark
$(function () {
	new jvm.Map({
		map: 'us_aea',
		container: $('#us-aea-map-dark'),
		regionLabelStyle: {
			initial: {
				fill: '#17a2b8'
			},
			hover: {
				fill: 'black'
			}
		},
		regionStyle: {
			initial: {
				fill: '#e0e8f5'
			}
		},
		backgroundColor: '#000000',
		labels: {
			regions: {
				render: function (code) {
					var doNotShow = ['US-RI', 'US-DC', 'US-DE', 'US-MD'];

					if (doNotShow.indexOf(code) === -1) {
						return code.split('-')[1];
					}
				},

				offsets: function (code) {
					return {
						'CA': [-10, 10],
						'ID': [0, 40],
						'OK': [25, 0],
						'LA': [-20, 0],
						'FL': [45, 0],
						'KY': [10, 5],
						'VA': [15, 5],
						'MI': [30, 30],
						'AK': [50, -25],
						'HI': [25, 50]
					}[code.split('-')[1]];
				}
			}
		}
	});
});