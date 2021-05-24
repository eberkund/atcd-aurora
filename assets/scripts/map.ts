let map: google.maps.Map;

function initMap(): void {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        clickableIcons: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        draggable: false,
        fullscreenControl: false,
    });
}

window.initMap = initMap;
