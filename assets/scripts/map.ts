import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: window.GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
});
loader.loadCallback(initMap);

function initMap(): void {
    let map = new google.maps.Map(document.getElementById("map"), {
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
