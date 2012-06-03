dojo.declare("myWMSLayer", esri.layers.DynamicMapServiceLayer, {
	constructor : function() {
		this.initialExtent = this.fullExtent = new esri.geometry.Extent({
			xmin : -179.151,
			ymin : 18.91,
			xmax : 179.773,
			ymax : 71.391,
			spatialReference : {
				wkid : 4326
			}
		});
		this.spatialReference = new esri.SpatialReference({
			wkid : 4326
		});
		this.loaded = true;
		this.onLoad(this);
	},

	getImageUrl : function(extent, width, height, callback) {
		var params = {
			request : "GetMap",
			transparent : true,
			format : "image/png",
			bgcolor : "111111",
			version : "1.1.0",
			layers : "usa:states",
			styles : "default",
			exceptions : "application/vnd.ogc.se_xml",
			// changing values
			bbox : extent.xmin + "," + extent.ymin + "," + extent.xmax + ","
					+ extent.ymax,
			srs : "EPSG:" + extent.spatialReference.wkid,
			width : width,
			height : height
		};
		callback("http://v2.suite.opengeo.org/geoserver/ows?"
				+ dojo.objectToQuery(params));
	}
});