/// <reference path="./../ts/azure-maps.d.ts" />
let options = {
    "disable-telemetry": false,
    "subscription-key": "",
    zoom: 2,
    bearing: 0
};
let m = new atlas.Map("map", options);
let circle = new atlas.data.Point(new atlas.data.Position(0, 0));
var c_options = {
    color: "red",
    radius: 20,
    outlineWidth: 2,
    outlineColor: "white"
};
let feature = new atlas.data.Feature(circle, c_options);
m.addCircles([feature]);
