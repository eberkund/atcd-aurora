let map: google.maps.Map;

function initMap(): void {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.99865398409355, lng: -79.47465612145655 },
        zoom: 12,
        clickableIcons: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        draggable: false,
        fullscreenControl: false,
    });
}

window.initMap = initMap;
