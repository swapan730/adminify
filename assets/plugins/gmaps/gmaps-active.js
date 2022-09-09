$(document).ready(function () {

	"use strict";

	// Basic Map
	new GMaps({
		div: '#basic-map',
		lat: -12.043333,
		lng: -77.028333
	});

	// Markers Map
	var markerMap = new GMaps({
		el: '#marker-map',
		lat: 37.336095,
		lng: -121.8885431
	});
	markerMap.addMarker({
		lat: 37.336095,
		lng: -121.8885431,
		title: 'Location',
		click: function (e) {
			$.niftyNoty({
				type: "info",
				icon: "fa fa-info",
				message: "You clicked in the marker",
				container: 'floating',
				timer: 3500
			});
		},
		infoWindow: {
			content: '<div>HTML Content</div>'
		}
	});

	// Overlays Map
	var overlayMap = new GMaps({
		div: '#overlay-map',
		lat: 37.336095,
		lng: -121.8885431
	});
	overlayMap.drawOverlay({
		lat: overlayMap.getCenter().lat(),
		lng: overlayMap.getCenter().lng(),
		content: '<div class="popover top" style="display:block; width:250px; padding: 25px;"><div class="arrow"></div><div class="popover-content"><strong>You are here</strong><p>1 Washington Sq, San Jose, CA 95192, United States</p></div></div>',
		verticalAlign: 'top',
		horizontalAlign: 'center'
	});


	// polygon Map
	var map;
	$(document).ready(function () {
		map = new GMaps({
			div: '#polygon-map',
			lat: -12.043333,
			lng: -77.028333
		});

		var path = [
			[-12.040397656836609, -77.03373871559225],
			[-12.040248585302038, -77.03993927003302],
			[-12.050047116528843, -77.02448169303511],
			[-12.044804866577001, -77.02154422636042]
		];

		polygon = map.drawPolygon({
			paths: path,
			strokeColor: '#BBD8E9',
			strokeOpacity: 1,
			strokeWeight: 3,
			fillColor: '#BBD8E9',
			fillOpacity: 0.6
		});
	});

	// Context Menu Map
	var map;
	$(document).ready(function () {
		prettyPrint();
		map = new GMaps({
			div: '#context-menu-map',
			lat: -12.043333,
			lng: -77.028333
		});
		map.setContextMenu({
			control: 'map',
			options: [{
				title: 'Add marker',
				name: 'add_marker',
				action: function (e) {
					this.addMarker({
						lat: e.latLng.lat(),
						lng: e.latLng.lng(),
						title: 'New marker'
					});
					this.hideContextMenu();
				}
			}, {
				title: 'Center here',
				name: 'center_here',
				action: function (e) {
					this.setCenter(e.latLng.lat(), e.latLng.lng());
				}
			}]
		});
	});

	// Custom Control Map
	var map;
	$(document).ready(function () {
		prettyPrint();
		map = new GMaps({
			div: '#custom-control-map',
			zoom: 16,
			lat: -12.043333,
			lng: -77.028333
		});
		map.addControl({
			position: 'top_right',
			content: 'Geolocate',
			style: {
				margin: '5px',
				padding: '1px 6px',
				border: 'solid 1px #717B87',
				background: '#fff'
			},
			events: {
				click: function () {
					GMaps.geolocate({
						success: function (position) {
							map.setCenter(position.coords.latitude, position.coords.longitude);
						},
						error: function (error) {
							alert('Geolocation failed: ' + error.message);
						},
						not_supported: function () {
							alert("Your browser does not support geolocation");
						}
					});
				}
			}
		});
	});


	//  Fusion Tables Layers Map
	var map, infoWindow;
	$(document).ready(function () {
		prettyPrint();
		infoWindow = new google.maps.InfoWindow({});
		map = new GMaps({
			div: '#fusion-tables-map',
			zoom: 11,
			lat: 41.850033,
			lng: -87.6500523
		});
		map.loadFromFusionTables({
			query: {
				select: '\'Geocodable address\'',
				from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
			},
			suppressInfoWindows: true,
			events: {
				click: function (point) {
					infoWindow.setContent('You clicked here!');
					infoWindow.setPosition(point.latLng);
					infoWindow.open(map.map);
				}
			}
		});
	});


	// KML Layers  Map
	var map, infoWindow;
	$(document).ready(function () {
		prettyPrint();
		infoWindow = new google.maps.InfoWindow({});
		map = new GMaps({
			div: '#kml-layers-map',
			zoom: 12,
			lat: 40.65,
			lng: -73.95
		});
		map.loadFromKML({
			url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss',
			suppressInfoWindows: true,
			events: {
				click: function (point) {
					infoWindow.setContent(point.featureData.infoWindowHtml);
					infoWindow.setPosition(point.latLng);
					infoWindow.open(map.map);
				}
			}
		});
	});


	//  Map Types

	var map;
	$(document).ready(function () {
		prettyPrint();
		map = new GMaps({
			div: '#map-types',
			lat: -12.043333,
			lng: -77.028333,
			mapTypeControlOptions: {
				mapTypeIds: ["hybrid", "roadmap", "satellite", "terrain", "osm"]
			}
		});
		map.addMapType("osm", {
			getTileUrl: function (coord, zoom) {
				return "https://a.tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
			},
			tileSize: new google.maps.Size(256, 256),
			name: "OpenStreetMap",
			maxZoom: 18
		});
		map.setMapTypeId("osm");
	});

	//  Overlay Map Types
	var map;
	$(document).ready(function () {
		prettyPrint();

		var getTile = function (coord, zoom, ownerDocument) {
			var div = ownerDocument.createElement('div');
			div.innerHTML = coord;
			div.style.width = this.tileSize.width + 'px';
			div.style.height = this.tileSize.height + 'px';
			div.style.background = 'rgba(250, 250, 250, 0.55)';
			div.style.fontFamily = 'Monaco, Andale Mono, Courier New, monospace';
			div.style.fontSize = '10';
			div.style.fontWeight = 'bolder';
			div.style.border = 'dotted 1px #aaa';
			div.style.textAlign = 'center';
			div.style.lineHeight = this.tileSize.height + 'px';
			return div;
		};

		map = new GMaps({
			el: '#overlay-map-types',
			lat: -12.043333,
			lng: -77.028333
		});
		map.addOverlayMapType({
			index: 0,
			tileSize: new google.maps.Size(256, 256),
			getTile: getTile
		});
	});


	// Street View Panoramas Map
	var panorama;
	$(document).ready(function () {
		prettyPrint();
		panorama = GMaps.createPanorama({
			el: '#panoramas-map',
			lat: 42.3455,
			lng: -71.0983
		});
	});

	//Foursquare Map 
	var map;

	function loadResults(data) {
		var items, markers_data = [];
		if (data.venues.length > 0) {
			items = data.venues;

			for (var i = 0; i < items.length; i++) {
				var item = items[i];

				if (item.location.lat != undefined && item.location.lng != undefined) {
					var icon = 'https://foursquare.com/img/categories/food/default.png';

					markers_data.push({
						lat: item.location.lat,
						lng: item.location.lng,
						title: item.name,
						icon: {
							size: new google.maps.Size(32, 32),
							url: icon
						}
					});
				}
			}
		}

		map.addMarkers(markers_data);
	}

	function printResults(data) {
		$('#foursquare-results').text(JSON.stringify(data));
		prettyPrint();
	}

	$(document).on('click', '.pan-to-marker', function (e) {
		e.preventDefault();

		var position, lat, lng, $index;

		$index = $(this).data('marker-index');

		position = map.markers[$index].getPosition();

		lat = position.lat();
		lng = position.lng();

		map.setCenter(lat, lng);
	});

	$(document).ready(function () {
		prettyPrint();
		map = new GMaps({
			div: '#foursquare-map',
			lat: -12.043333,
			lng: -77.028333
		});

		map.on('marker_added', function (marker) {
			var index = map.markers.indexOf(marker);
			$('#results').append('<li><a href="#" class="pan-to-marker" data-marker-index="' + index + '">' + marker.title + '</a></li>');

			if (index == map.markers.length - 1) {
				map.fitZoom();
			}
		});

		var xhr = $.getJSON('https://coffeemaker.herokuapp.com/foursquare.json?q[near]=Lima,%20PE&q[query]=Ceviche');

		xhr.done(printResults);
		xhr.done(loadResults);
	});


});