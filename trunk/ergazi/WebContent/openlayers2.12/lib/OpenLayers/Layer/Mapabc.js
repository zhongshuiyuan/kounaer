OpenLayers.Layer.Mapabc = OpenLayers.Class(
    OpenLayers.Layer.EventPane,
    OpenLayers.Layer.FixedZoomLevels, {
    MIN_ZOOM_LEVEL:10,
    MAX_ZOOM_LEVEL:1,
    RESOLUTIONS: [],
    type: null,
    wrapDateLine: true,
    sphericalMercator: false,
    initialize: function(name, options) {
        OpenLayers.Layer.EventPane.prototype.initialize.apply(this, arguments);
        OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this, 
                                                                    arguments);
        if(this.sphericalMercator) {
            OpenLayers.Util.extend(this, OpenLayers.Layer.SphericalMercator);
            this.initMercatorParameters();
        }
    },
    loadMapObject:function() {

        var mabcDiv = OpenLayers.Util.createDiv(this.name); // create mapabc div
        
                var sz = this.map.getSize();
        mabcDiv.style.width = sz.w + "px";
        mabcDiv.style.height = sz.h + "px";
        this.div.appendChild(mabcDiv);

        try { 
            this.mapObject = new MMap(this.name);
        } catch (e) { alert('failed in creating mapObject!'); }

        if (this.mapObject != null) {
            try {
                this.mapObject.LoadMap(null, null, this.type, true);
                this.mapObject.AttachEvent("onmousedown", OpenLayers.Function.True);

            } catch (e) {}
            this.mapObject.HideDashboard();
            if(typeof this.mapObject.SetAnimationEnabled == "function") {
                this.mapObject.SetAnimationEnabled(this.animationEnabled);
            }
        }

    },
    onMapResize: function() {
    },
    setMapObjectCenter: function(center, zoom) {
    },
    getMapObjectCenter: function() {
    },
    dragPanMapObject: function(dX, dY) {
    },
    getMapObjectZoom: function() {
    },
    getMapObjectLonLatFromMapObjectPixel: function(moPixel) {
    },
    getMapObjectPixelFromMapObjectLonLat: function(moLonLat) {
    },
    getLongitudeFromMapObjectLonLat: function(moLonLat) {
    },
    getLatitudeFromMapObjectLonLat: function(moLonLat) {
    },
    getMapObjectLonLatFromLonLat: function(lon, lat) {
    },
    getXFromMapObjectPixel: function(moPixel) {
    },
    getYFromMapObjectPixel: function(moPixel) {
    },
    getMapObjectPixelFromXY: function(x, y) {
    },
    CLASS_NAME: "OpenLayers.Layer.Mapabc"
});