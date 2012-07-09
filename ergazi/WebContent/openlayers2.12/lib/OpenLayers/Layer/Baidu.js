OpenLayers.Layer.Baidu = OpenLayers
		.Class(
				OpenLayers.Layer.XYZ,
				{
					name : "高德",
					attribution : "Data CC-By-SA by <a href='http://openstreetmap.org/'>BaiDu</a>",
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
						var subdomain = (xyz.x + xyz.y % 4);
						this.url = "http://mt" + (xyz.x % 4)
								+ ".google.cn/vt/v=w2.114&hl=zh-CN&gl=cn&"
								+ "x=" + xyz.x + "&" + "y=" + xyz.y + "&"
								+ "z=" + xyz.z + "&s=";
						this.url = "http://" + subdomain
								+ ".map.qq.com/maptiles/" + xyz.z + "/"
								+ Math.floor(xyz.x / 16) + "/"
								+ Math.floor(xyz.y / 16) + "/" + xyz.x + "_"
								+ xyz.y + ".png";
						return this.url;
					},
					wrapDateLine : true,
					CLASS_NAME : "OpenLayers.Layer.Baidu"
				});