var people = "https://swapi.dev/api/people/";
var planets = "https://swapi.dev/api/planets/";
var films = "https://swapi.dev/api/films/";
var species = "https://swapi.dev/api/species/";
var vehicles = "https://swapi.dev/api/vehicles/";
var starships = "https://swapi.dev/api/starships/";

import { veurePelis } from "./veurePersonatges.js";

const selectPelis = document.getElementById("selectPeli");
const personatges = document.getElementById("personatges");
const imatge = document.getElementById("imatge");

veurePelis(selectPelis, personatges, imatge);

