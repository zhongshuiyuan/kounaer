hms = function() {
};
for ( var i in IMap) {
	hms.prototype[i] = IMap[i];
}

hms.prototype.buildMap = function(point) {
	map = new BMap.Map(document.getElementById(MAPNODE));
	map.addControl(new BMap.NavigationControl());
	map.centerAndZoom(point, 15);
};

hms.prototype.buildPoint = function(lat,lng){
	return new BMap.Point(parseFloat(lat),parseFloat(lng));
};

hms.prototype.addControl = function(control){
	map.addControl(control);
};