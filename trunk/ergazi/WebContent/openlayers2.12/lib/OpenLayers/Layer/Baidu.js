OpenLayers.Layer.Baidu = OpenLayers
		.Class(
				OpenLayers.Layer.XYZ,
				{
					name : "高德",
					attribution : "Data CC-By-SA by <a href='http://openstreetmap.org/'>MapABC</a>",
					sphericalMercator : true,
					url : 'http://tile.openstreetmap.org/${z}/${x}/${y}.png',
					clone : function(obj) {
						if (obj == null) {
							obj = new OpenLayers.Layer.Baidu(this.name,
									this.url, this.getOptions());
						}
						obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this,
								[ obj ]);
						return obj;
					},
					getURL : function(bounds) {
						var xyz = this.getXYZ(bounds);
						var _subDomains = new Array("emap0", "emap1", "emap2", "emap3");
						var subdomain = _subDomains[((xyz.x + xyz.y) % 4)];
						this.url = "http://" + subdomain + ".is.autonavi.com/appmaptile?&z="
						+ xyz.z + "&x=" + xyz.x + "&y=" + xyz.y;;
						console.info(this.url);
						return this.url;
					},
					wrapDateLine : false,
					CLASS_NAME : "OpenLayers.Layer.Baidu"
				});