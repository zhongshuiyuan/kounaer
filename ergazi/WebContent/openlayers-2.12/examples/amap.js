var map;

function init() {
    map = new OpenLayers.Map('map');
    map.addControl(new OpenLayers.Control.LayerSwitcher());
    
    var amap = new OpenLayers.Layer.Amap(
        "高德地图",
        {type: "street", div: "map"}
    );
	
    var gphy = new OpenLayers.Layer.Google(
        "Google Physical",
        {type: google.maps.MapTypeId.TERRAIN}
    );

    map.addLayers([amap,gphy]);

    map.setCenter(new OpenLayers.LonLat(110.397,39.917).transform(
        new OpenLayers.Projection("EPSG:4326"),
        map.getProjectionObject()
    ), 5);
}
