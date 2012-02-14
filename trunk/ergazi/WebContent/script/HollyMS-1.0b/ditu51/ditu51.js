hms = function() {
};
for ( var i in IMap) {
	hms.prototype[i] = IMap[i];
}

hms.prototype.buildMap = function(point) {
	map = new LTMaps(MAPNODE);
	map.centerAndZoom("beijing", 6);
};

hms.prototype.buildPoint = function(lat,lng){
	//return new LTPoint(parseFloat(lng),parseFloat(lat));
};

hms.prototype.addControl = function(control){
	map.addControl(control);
};