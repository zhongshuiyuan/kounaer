var map;

function init() {

//	map = new OpenLayers.Map({
//		div : "map",
//		allOverlays : true,
//		projection : "EPSG:900913",
//		units : "m",
//		maxExtent : new OpenLayers.Bounds(-20037508.34, -20037508.34,
//				20037508.34, 20037508.34),
//		maxResolution : 156543.0339
//	});

	map = new OpenLayers.Map('map');
	var res = [];
	for ( var i = 0; i < 19; i++) {

		// res[i] = 131072 * Math.pow(2, i - 18);
		res[i] = Math.pow(2, 18 - i);
	}
	var baidu = new OpenLayers.BaiduLayer('baidu', 'http://q3.baidu.com/it/', {
		isBaseLayer : true,
		displayOutsideMaxExtent : false,
		resolutions : res,
		maxExtent : new OpenLayers.Bounds(-20037508.34, -20037508.34,
				20037508.34, 20037508.34)
	});
//	var layer = new OpenLayers.Layer.Google("Google Hybrid", {
//		isBaseLayer : true,
//		type : google.maps.MapTypeId.HYBRID,
//		numZoomLevels : 20
//	});
	map.addLayers([ baidu ]);
	map.addControl(new OpenLayers.Control.LayerSwitcher());

	//var proj = new OpenLayers.Projection('EPSG:4326');
	//var proj2 = new OpenLayers.Projection('EPSG:900913');

	var lonlat = new OpenLayers.LonLat(116.12127, 24.12216);
	//lonlat.transform(proj, proj2);

	map.setCenter(lonlat, 6);

}