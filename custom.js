$(function () {
    var mapDiv = document.getElementById("map_canvas");
    /// Set control options for map
    var zoptions = {
        position: google.maps.ControlPosition.TOP_RIGHT,
        style: google.maps.ZoomControlStyle.SMALL
    };
    /// Position of map using coord that were passed else do nothing.
    var pos = new google.maps.LatLng(12.981241,80.209450);
    /// Set basic map options using above control options
    var options = {
        zoom: 12,
        zoomControlOptions: zoptions,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        center: pos
    };
    this.map = new google.maps.Map(mapDiv, options);
})