var people = "https://swapi.dev/api/people/";
var planets = "https://swapi.dev/api/planets/";
var films = "https://swapi.dev/api/films/";
var species = "https://swapi.dev/api/species/";
var vehicles = "https://swapi.dev/api/vehicles/";
var starships = "https://swapi.dev/api/starships/";
fetch(people)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.results.forEach(function (persona) {
        console.log(persona);
    });
});
