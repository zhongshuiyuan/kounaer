OpenLayers.Layer.MAPABC = OpenLayers.Class(OpenLayers.Layer.XYZ, {
    name: "高德街道图",
    attribution: "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力金桥软件</a>",
    sphericalMercator: true,
    clone: function(obj) {
        if (obj == null) {
            obj = new OpenLayers.Layer.MAPABC(
                this.name, this.url, this.getOptions());
        }
        obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this, [obj]);
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
    wrapDateLine: true,
    CLASS_NAME: "OpenLayers.Layer.MAPABC"
});

OpenLayers.Layer.QQ = OpenLayers.Class(OpenLayers.Layer.XYZ, {
    name: "QQ街道图",
    attribution: "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力金桥软件</a>",
    sphericalMercator: true,
    scope : new Array(0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 7, 0, 7, 0, 15, 0,
			15, 0, 31, 0, 31, 0, 63, 4, 59, 0, 127, 12, 115, 0, 225, 28, 227,
			356, 455, 150, 259, 720, 899, 320, 469, 1440, 1799, 650, 929, 2880,
			3589, 1200, 2069, 5760, 7179, 2550, 3709, 11520, 14349, 5100, 7999,
			23060, 28689, 10710, 15429, 46120, 57369, 20290, 29849, 89990,
			124729, 41430, 60689, 184228, 229827, 84169, 128886),
    clone: function(obj) {
        if (obj == null) {
            obj = new OpenLayers.Layer.QQ(
                this.name, this.url, this.getOptions());
        }
        obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this, [obj]);
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
		if (xyz.x >= i && xyz.x <= j && xyz.y >= l && xyz.y <= scope) {
			row = Math.pow(2, xyz.z) - 1 - xyz.y;
			tileNo = xyz.z + "/" + Math.floor(xyz.x / 16) + "/"
					+ Math.floor(row / 16) + "/" + xyz.x + "_" + row + ".png";
		}
		
		return "http://" + subdomain + ".map.qq.com/maptiles/" + tileNo;
	},
    wrapDateLine: true,
    CLASS_NAME: "OpenLayers.Layer.QQ"
});

OpenLayers.Layer.TBAIDU = OpenLayers.Class(OpenLayers.Layer.XYZ, {
    name: "百度街道图",
    attribution: "Data CC-By-SA by <a href='http://www.hollycrm.com/'>合力金桥软件</a>",
    sphericalMercator: true,
    clone: function(obj) {
        if (obj == null) {
            obj = new OpenLayers.Layer.TBAIDU(
                this.name, this.url, this.getOptions());
        }
        obj = OpenLayers.Layer.XYZ.prototype.clone.apply(this, [obj]);
        return obj;
    },
    getURL : function(bounds) {
		var xyz = this.getXYZ(bounds);
		var zoom = xyz.z - 1;
		var offsetX = Math.pow(2, zoom);
		var offsetY = offsetX - 1;

		var numX = xyz.x - offsetX;
		var numY = (-xyz.y) + offsetY;

		zoom = xyz.z + 1;
		var num = (xyz.x + xyz.y) % 8 + 1;
		
		var url = "http://q" + num + ".baidu.com/it/u=x=" + numX + ";y=" + numY
				+ ";z=" + zoom + ";v=009;type=web&fm=44";
		return url;
	},
    wrapDateLine: true,
    CLASS_NAME: "OpenLayers.Layer.TBAIDU"
});