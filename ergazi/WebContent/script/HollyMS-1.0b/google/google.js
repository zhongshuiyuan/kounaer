hms = function() {
};
for ( var i in IMap) {
	hms.prototype[i] = IMap[i];
}

hms.prototype.buildMap = function(point) {
	var myLatlng = point;
	var myOptions = {
		zoom : 8,
		center : myLatlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById(MAPNODE), myOptions);
};

hms.prototype.buildPoint = function(lat,lng) {
	return new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
};