var GOOGLE_MAP = "GOOGLE";
var GOOGLE_MAP_API_ID = "google_map_api";
var GOOGLE_MAP_API = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
var GOOGLE_MAP_IMPLEMENT_API_ID = "google_imap";
var GOOGLE_MAP_IMPLEMENT_API = "/script/HollyMS-1.0b/google/google.js";
var BAIDU_MAP = "BAIDU";
var BAIDU_MAP_API_ID = "baidu_map_api";
var BAIDU_MAP_API = "http://api.map.baidu.com/api?key=&v=1.1&services=true&callback=initialize";
var BAIDU_MAP_IMPLEMENT_API_ID = "baidu_imap";
var BAIDU_MAP_IMPLEMENT_API = "/script/HollyMS-1.0b/baidu/baidu.js";
var DITU51 = "DITU51";
var DITU51_API_ID = "ditu51_api";
var DITU51_API = "http://lbs.sdinfo.net/js/maps.js";
var DITU51_IMPLEMENT_API_ID = "ditu51_imap";
var DITU51_IMPLEMENT_API = "/script/HollyMS-1.0b/ditu51/ditu51.js";
var ARCGIS = "ARCGIS";
var ARCGIS_API_ID = "arcgis_api";
var ARCGIS_API = "";
var ARCGIS_IMPLEMENT_API_ID = "arcgis_imap";
var ARCGIS_IMPLEMENT_API = "/script/HollyMS-1.0b/arcgis/arcgis.js";
var MAPNODE = "container";
var MTYPE = GOOGLE_MAP;
var hms;
var map;

var IMap = {
	buildMap : null,
	buildPoint : null,
	addControl : null
};

function hollymapsupport(mtype, node) {
	MTYPE = mtype;
	MAPNODE = node;
	loadjs();
};

function loadjs() {
	if (MTYPE == GOOGLE_MAP) {
		scriptLoader(GOOGLE_MAP_API, GOOGLE_MAP_API_ID);
		scriptLoader(GOOGLE_MAP_IMPLEMENT_API, GOOGLE_MAP_IMPLEMENT_API_ID,
				null);
	}
	if (MTYPE == BAIDU_MAP) {
		scriptLoader(BAIDU_MAP_API, BAIDU_MAP_API_ID);
		scriptLoader(BAIDU_MAP_IMPLEMENT_API, BAIDU_MAP_IMPLEMENT_API_ID, null);

	}
	if (MTYPE == DITU51) {
		scriptLoader(DITU51_IMPLEMENT_API, DITU51_IMPLEMENT_API_ID);
		scriptLoader(DITU51_API, DITU51_API_ID, initialize);
	}
	if (MTYPE == ARCGIS) {
		scriptLoader(ARCGIS_API, ARCGIS_API_ID);
		scriptLoader(ARCGIS_IMPLEMENT_API, ARCGIS_IMPLEMENT_API_ID, null);
	}
};

function scriptLoader(js, id, callback) {
	var scriptId = document.getElementById(id);
	if (scriptId) {
		if (callback)
			callback();
	} else {
		var script = document.createElement("script");
		script.id = id;
		script.type = "text/javascript";
		script.src = js;
		var head = document.getElementsByTagName('head').item(0);
		head.appendChild(script);
		script.onload = script.onreadystatechange = function() {
			if (!this.readyState || this.readyState == 'loaded'
					|| this.readyState == 'complete') {
				if (callback)
					callback();
			}
			script.onload = script.onreadystatechange = null;
		};
	}
};

function initialize() {
	console.info("MAP API 加载成功.");
	start();
};