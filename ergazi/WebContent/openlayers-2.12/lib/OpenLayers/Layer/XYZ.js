/* Copyright (c) 2006-2012 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * @requires OpenLayers/Layer/Grid.js
 */

/**
 * Class: OpenLayers.Layer.XYZ The XYZ class is designed to make it easier for
 * people who have tiles arranged by a standard XYZ grid.
 * 
 * Inherits from: - <OpenLayers.Layer.Grid>
 */
OpenLayers.Layer.XYZ = OpenLayers.Class(OpenLayers.Layer.Grid, {

	/**
	 * APIProperty: isBaseLayer Default is true, as this is designed to be a
	 * base tile source.
	 */
	isBaseLayer : true,

	/**
	 * APIProperty: sphericalMecator Whether the tile extents should be set to
	 * the defaults for spherical mercator. Useful for things like
	 * OpenStreetMap. Default is false, except for the OSM subclass.
	 */
	sphericalMercator : false,

	/**
	 * APIProperty: zoomOffset {Number} If your cache has more zoom levels than
	 * you want to provide access to with this layer, supply a zoomOffset. This
	 * zoom offset is added to the current map zoom level to determine the level
	 * for a requested tile. For example, if you supply a zoomOffset of 3, when
	 * the map is at the zoom 0, tiles will be requested from level 3 of your
	 * cache. Default is 0 (assumes cache level and map zoom are equivalent).
	 * Using <zoomOffset> is an alternative to setting <serverResolutions> if
	 * you only want to expose a subset of the server resolutions.
	 */
	zoomOffset : 0,

	/**
	 * APIProperty: serverResolutions {Array} A list of all resolutions
	 * available on the server. Only set this property if the map resolutions
	 * differ from the server. This property serves two purposes. (a)
	 * <serverResolutions> can include resolutions that the server supports and
	 * that you don't want to provide with this layer; you can also look at
	 * <zoomOffset>, which is an alternative to <serverResolutions> for that
	 * specific purpose. (b) The map can work with resolutions that aren't
	 * supported by the server, i.e. that aren't in <serverResolutions>. When
	 * the map is displayed in such a resolution data for the closest
	 * server-supported resolution is loaded and the layer div is stretched as
	 * necessary.
	 */
	serverResolutions : null,

	/**
	 * Constructor: OpenLayers.Layer.XYZ
	 * 
	 * Parameters: name - {String} url - {String} options - {Object} Hashtable
	 * of extra options to tag onto the layer
	 */
	initialize : function(name, url, options) {
		if (options && options.sphericalMercator || this.sphericalMercator) {
			options = OpenLayers.Util.extend({
				projection : "EPSG:900913",
				numZoomLevels : 19
			}, options);
		}
		OpenLayers.Layer.Grid.prototype.initialize.apply(this, [
				name || this.name, url || this.url, {}, options ]);
	},

	/**
	 * APIMethod: clone Create a clone of this layer
	 * 
	 * Parameters: obj - {Object} Is this ever used?
	 * 
	 * Returns: {<OpenLayers.Layer.XYZ>} An exact clone of this
	 * OpenLayers.Layer.XYZ
	 */
	clone : function(obj) {

		if (obj == null) {
			obj = new OpenLayers.Layer.XYZ(this.name, this.url, this
					.getOptions());
		}

		// get all additions from superclasses
		obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [ obj ]);

		return obj;
	},

	/**
	 * Method: getURL
	 * 
	 * Parameters: bounds - {<OpenLayers.Bounds>}
	 * 
	 * Returns: {String} A string with the layer's url and parameters and also
	 * the passed-in bounds and appropriate tile size specified as parameters
	 */
	getURL : function(bounds) {
		var xyz = this.getXYZ(bounds);
		var url = this.url;
		if (OpenLayers.Util.isArray(url)) {
			var s = '' + xyz.x + xyz.y + xyz.z;
			url = this.selectUrl(s, url);
		}

		return OpenLayers.String.format(url, xyz);
	},

	/**
	 * Method: getXYZ Calculates x, y and z for the given bounds.
	 * 
	 * Parameters: bounds - {<OpenLayers.Bounds>}
	 * 
	 * Returns: {Object} - an object with x, y and z properties.
	 */
	getXYZ : function(bounds) {
		var res = this.getServerResolution();
		var x = Math.round((bounds.left - this.maxExtent.left)
				/ (res * this.tileSize.w));
		var y = Math.round((this.maxExtent.top - bounds.top)
				/ (res * this.tileSize.h));
		var z = this.getServerZoom();

		if (this.wrapDateLine) {
			var limit = Math.pow(2, z);
			x = ((x % limit) + limit) % limit;
		}

		return {
			'x' : x,
			'y' : y,
			'z' : z
		};
	},

	/*
	 * APIMethod: setMap When the layer is added to a map, then we can fetch our
	 * origin (if we don't have one.)
	 * 
	 * Parameters: map - {<OpenLayers.Map>}
	 */
	setMap : function(map) {
		OpenLayers.Layer.Grid.prototype.setMap.apply(this, arguments);
		if (!this.tileOrigin) {
			this.tileOrigin = new OpenLayers.LonLat(this.maxExtent.left,
					this.maxExtent.bottom);
		}
	},

	CLASS_NAME : "OpenLayers.Layer.XYZ"
});

OpenLayers.Layer.Mapabc = OpenLayers
		.Class(
				OpenLayers.Layer.XYZ,
				{
					name : "高德街道图",
					attribution : "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力亿捷科技</a>",
					sphericalMercator : true,
					clone : function(obj) {
						if (obj == null) {
							obj = new OpenLayers.Layer.MAPABC(this.name,
									this.url, this.getOptions());
						}
						obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this,
								[ obj ]);
						return obj;
					},
					getURL : function(bounds) {
						var xyz = this.getXYZ(bounds);
						var _subDomains = new Array("emap0", "emap1", "emap2",
								"emap3");
						var subdomain = _subDomains[((xyz.x + xyz.y) % 4)];
						this.url = "http://" + subdomain
								+ ".is.autonavi.com/appmaptile?&z=" + xyz.z
								+ "&x=" + xyz.x + "&y=" + xyz.y;
						;
						return this.url;
					},
					wrapDateLine : true,
					CLASS_NAME : "OpenLayers.Layer.Mapabc"
				});

OpenLayers.Layer.Soso = OpenLayers
		.Class(
				OpenLayers.Layer.XYZ,
				{
					name : "腾讯街道图",
					attribution : "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力亿捷科技</a>",
					sphericalMercator : true,
					scope : new Array(0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 7,
							0, 7, 0, 15, 0, 15, 0, 31, 0, 31, 0, 63, 4, 59, 0,
							127, 12, 115, 0, 225, 28, 227, 356, 455, 150, 259,
							720, 899, 320, 469, 1440, 1799, 650, 929, 2880,
							3589, 1200, 2069, 5760, 7179, 2550, 3709, 11520,
							14349, 5100, 7999, 23060, 28689, 10710, 15429,
							46120, 57369, 20290, 29849, 89990, 124729, 41430,
							60689, 184228, 229827, 84169, 128886),
					clone : function(obj) {
						if (obj == null) {
							obj = new OpenLayers.Layer.QQ(this.name, this.url,
									this.getOptions());
						}
						obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this,
								[ obj ]);
						return obj;
					},
					getURL : function(bounds) {
						var xyz = this.getXYZ(bounds);
						var _subDomains = new Array("p0", "p1", "p2", "p3");
						var subdomain = _subDomains[((xyz.x + xyz.y) % 4)];

						var f = xyz.z * 4;
						var i = this.scope[f++];
						var j = this.scope[f++];
						var l = this.scope[f++];
						var scope = this.scope[f];
						var tileNo = "";
						if (xyz.x >= i && xyz.x <= j && xyz.y >= l
								&& xyz.y <= scope) {
							row = Math.pow(2, xyz.z) - 1 - xyz.y;
							tileNo = xyz.z + "/" + Math.floor(xyz.x / 16) + "/"
									+ Math.floor(row / 16) + "/" + xyz.x + "_"
									+ row + ".png";
						}

						return "http://" + subdomain + ".map.qq.com/maptiles/"
								+ tileNo;
					},
					wrapDateLine : true,
					CLASS_NAME : "OpenLayers.Layer.Soso"
				});

OpenLayers.Layer.SosoSate = OpenLayers
		.Class(
				OpenLayers.Layer.XYZ,
				{
					name : "腾讯卫星图",
					attribution : "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力亿捷科技</a>",
					sphericalMercator : true,
					scope : new Array(0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 7,
							0, 7, 0, 15, 0, 15, 0, 31, 0, 31, 0, 63, 4, 59, 0,
							127, 12, 115, 0, 225, 28, 227, 356, 455, 150, 259,
							720, 899, 320, 469, 1440, 1799, 650, 929, 2880,
							3589, 1200, 2069, 5760, 7179, 2550, 3709, 11520,
							14349, 5100, 7999, 23060, 28689, 10710, 15429,
							46120, 57369, 20290, 29849, 89990, 124729, 41430,
							60689, 184228, 229827, 84169, 128886),
					clone : function(obj) {
						if (obj == null) {
							obj = new OpenLayers.Layer.QQSATE(this.name,
									this.url, this.getOptions());
						}
						obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this,
								[ obj ]);
						return obj;
					},
					getURL : function(bounds) {
						var xyz = this.getXYZ(bounds);
						var _subDomains = new Array("p0", "p1", "p2", "p3");
						var subdomain = _subDomains[((xyz.x + xyz.y) % 4)];

						var f = xyz.z * 4;
						var i = this.scope[f++];
						var j = this.scope[f++];
						var l = this.scope[f++];
						var scope = this.scope[f];
						var tileNo = "";
						if (xyz.x >= i && xyz.x <= j && xyz.y >= l
								&& xyz.y <= scope) {
							row = Math.pow(2, xyz.z) - 1 - xyz.y;
							tileNo = xyz.z + "/" + Math.floor(xyz.x / 16) + "/"
									+ Math.floor(row / 16) + "/" + xyz.x + "_"
									+ row + ".jpg";
						}

						return "http://" + subdomain
								+ ".map.soso.com/sateTiles/" + tileNo;
					},
					wrapDateLine : true,
					CLASS_NAME : "OpenLayers.Layer.SosoSate"
				});

OpenLayers.Layer.Tianditu = OpenLayers
		.Class(
				OpenLayers.Layer.XYZ,
				{
					name : "街道图",
					attribution : "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力亿捷科技</a>",
					sphericalMercator : true,
					clone : function(obj) {
						if (obj == null) {
							obj = new OpenLayers.Layer.MAPABC(this.name,
									this.url, this.getOptions());
						}
						obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this,
								[ obj ]);
						return obj;
					},
					getURL : function(bounds) {
						var xyz = this.getXYZ(bounds);
						var _subDomains = new Array("t0", "t1", "t2", "t3",
								"t4", "t5");
						var subdomain = _subDomains[((xyz.x + xyz.y) % 4)];
						this.url = "http://" + subdomain
								+ ".tianditu.com/DataServer?T=vec_w&x=" + xyz.x
								+ "&y=" + xyz.y + "&l=" + xyz.z;
						return this.url;
					},
					wrapDateLine : true,
					CLASS_NAME : "OpenLayers.Layer.Tianditu"
				});

OpenLayers.Layer.TiandituMark = OpenLayers
		.Class(
				OpenLayers.Layer.XYZ,
				{
					name : "中文标记",
					attribution : "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力亿捷科技</a>",
					sphericalMercator : true,
					clone : function(obj) {
						if (obj == null) {
							obj = new OpenLayers.Layer.MAPABC(this.name,
									this.url, this.getOptions());
						}
						obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this,
								[ obj ]);
						return obj;
					},
					getURL : function(bounds) {
						var xyz = this.getXYZ(bounds);
						var _subDomains = new Array("t0", "t1", "t2", "t3",
								"t3", "t4");
						var subdomain = _subDomains[((xyz.x + xyz.y) % 4)];
						this.url = "http://" + subdomain
								+ ".tianditu.com/DataServer?T=cva_w&x=" + xyz.x
								+ "&y=" + xyz.y + "&l=" + xyz.z;
						return this.url;
					},
					wrapDateLine : true,
					isBaseLayer : false,
					visibility : true,
					CLASS_NAME : "OpenLayers.Layer.TiandituMark"
				});

OpenLayers.Layer.TiandituSatellite = OpenLayers
		.Class(
				OpenLayers.Layer.XYZ,
				{
					name : "卫星图",
					attribution : "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力亿捷科技</a>",
					sphericalMercator : true,
					clone : function(obj) {
						if (obj == null) {
							obj = new OpenLayers.Layer.MAPABC(this.name,
									this.url, this.getOptions());
						}
						obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this,
								[ obj ]);
						return obj;
					},
					getURL : function(bounds) {
						var xyz = this.getXYZ(bounds);
						var _subDomains = new Array("t0", "t1", "t2", "t3",
								"t3", "t4");
						var subdomain = _subDomains[((xyz.x + xyz.y) % 4)];
						this.url = "http://" + subdomain
								+ ".tianditu.com/DataServer?T=cia_w&x=" + xyz.x
								+ "&y=" + xyz.y + "&l=" + xyz.z;
						return this.url;
					},
					wrapDateLine : true,
					isBaseLayer : false,
					CLASS_NAME : "OpenLayers.Layer.TiandituSatellite"
				});