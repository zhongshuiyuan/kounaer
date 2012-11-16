var map;

function init() {
    map = new OpenLayers.Map('map');
    map.addControl(new OpenLayers.Control.LayerSwitcher());
    
    var hmap = new OpenLayers.Layer.Baidu(
        "百度混合图",
        {type: "BMAP_HYBRID_MAP"}
    );
	
	var bmap = new OpenLayers.Layer.Baidu(
        "百度街道图",
        {type: "BMAP_NORMAL_MAP"}
    );
	
	var amap = new OpenLayers.Layer.Amap(
        "高德街道图",
        {type: "street"}
    );
	
	var gmap = new OpenLayers.Layer.Google(
        "谷歌街道图",
        {numZoomLevels: 20}
    );
	
	var markers = new OpenLayers.Layer.Markers("标记");
	
    map.addLayers([hmap,bmap,amap,gmap,markers]);

    map.setCenter(new OpenLayers.LonLat(110.397,39.917).transform(
        new OpenLayers.Projection("EPSG:4326"),
        map.getProjectionObject()
    ), 5);
	
	var size = new OpenLayers.Size(21,25);
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png',size,offset);
    markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(90,10),icon));
			
}
