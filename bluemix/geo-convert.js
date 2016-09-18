const places = require('./places-array.json')

// const placegeometry = [];

places.forEach(function(place) {
    places.push({
        geometry: {
            type: "Point",
            coordinates: [place.latitude, place.longitude]
        }
    });
    console.log
});
return places;
console.log(places);
// newReleases.forEach(function(video) {
//     videoAndTitlePairs.push({ id: video.id, title: video.title });
// });