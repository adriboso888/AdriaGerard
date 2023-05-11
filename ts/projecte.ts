const people = "https://swapi.dev/api/people/";
const planets = "https://swapi.dev/api/planets/";
const films = "https://swapi.dev/api/films/";
const species = "https://swapi.dev/api/species/";
const vehicles = "https://swapi.dev/api/vehicles/";
const starships = "https://swapi.dev/api/starships/";

fetch(people)
    .then(response => response.json())
    .then((data: { results: string[] }) => {
        data.results.forEach(persona => {
            console.log(persona);
        });
    });
