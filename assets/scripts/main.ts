import "alpinejs";

// import { Loader } from "@googlemaps/js-api-loader";
// import * as params from "@params";

// const loader = new Loader({
//     apiKey: params.GOOGLE_MAPS_API_KEY,
//     libraries: ["places"],
// });
// loader.loadCallback(initMap);

// function initMap(): void {
//     const styles = [
//         {
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#f5f5f5",
//                 },
//             ],
//         },
//         {
//             elementType: "labels.icon",
//             stylers: [
//                 {
//                     visibility: "off",
//                 },
//             ],
//         },
//         {
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#616161",
//                 },
//             ],
//         },
//         {
//             elementType: "labels.text.stroke",
//             stylers: [
//                 {
//                     color: "#f5f5f5",
//                 },
//             ],
//         },
//         {
//             featureType: "administrative.land_parcel",
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#bdbdbd",
//                 },
//             ],
//         },
//         {
//             featureType: "poi",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#eeeeee",
//                 },
//             ],
//         },
//         {
//             featureType: "poi",
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#757575",
//                 },
//             ],
//         },
//         {
//             featureType: "poi.park",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#e5e5e5",
//                 },
//             ],
//         },
//         {
//             featureType: "poi.park",
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#9e9e9e",
//                 },
//             ],
//         },
//         {
//             featureType: "road",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#ffffff",
//                 },
//             ],
//         },
//         {
//             featureType: "road.arterial",
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#757575",
//                 },
//             ],
//         },
//         {
//             featureType: "road.highway",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#dadada",
//                 },
//             ],
//         },
//         {
//             featureType: "road.highway",
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#616161",
//                 },
//             ],
//         },
//         {
//             featureType: "road.local",
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#9e9e9e",
//                 },
//             ],
//         },
//         {
//             featureType: "transit.line",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#e5e5e5",
//                 },
//             ],
//         },
//         {
//             featureType: "transit.station",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#eeeeee",
//                 },
//             ],
//         },
//         {
//             featureType: "water",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#c9c9c9",
//                 },
//             ],
//         },
//         {
//             featureType: "water",
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#9e9e9e",
//                 },
//             ],
//         },
//     ];
//     const position = { lat: 43.99865398409355, lng: -79.47465612145655 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: position,
//         zoom: 14,
//         clickableIcons: false,
//         zoomControl: false,
//         mapTypeControl: false,
//         streetViewControl: false,
//         draggable: false,
//         fullscreenControl: false,
//         styles,
//     });
//     new google.maps.Marker({
//         position,
//         map,
//     });
// }
