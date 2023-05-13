var people = "https://swapi.dev/api/people/";
var planets = "https://swapi.dev/api/planets/";
var films = "https://swapi.dev/api/films/";
var species = "https://swapi.dev/api/species/";
var vehicles = "https://swapi.dev/api/vehicles/";
var starships = "https://swapi.dev/api/starships/";

import { veurePelis } from "./veurePersonatges.js"; //impotem la funcio veure Pelis

const selectPelis = document.getElementById("selectPeli"); //declarem el select de les pelsi
const personatges = document.getElementById("personatges"); //declarem el div dels personatges
const imatge = document.getElementById("imatge"); 


selectPelis.addEventListener("change", () => { //si el select cambia cridara la funcio veurePelis
    veurePelis(selectPelis, personatges, imatge);
});
