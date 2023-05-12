const contingut = document.getElementById("contingut");

// Funció per obtenir les dades de totes les pagines de planetes
async function getPlanets(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Funcio per obtenir les dades dels planetes
async function getAllPlanets() {
  let url = 'https://swapi.dev/api/planets/';
  let allPlanets = [];

  // Recorrer totes les pagines de planetes
  while (url !== null) {
    const data = await getPlanets(url);
    allPlanets = allPlanets.concat(data.results);
    url = data.next;
  }

  return allPlanets;
}

// Funció per contar els residents de cada planeta i mostrar els resultats
function countResidents(planets) {
  // Netejar l'element 'contingut'
  contingut.innerHTML = '';

  // Recorrer cada planeta
  planets.forEach(async (planet) => {
    const residents = planet.residents;
    const planetName = planet.name;

    // Obtenir el número de residents
    const residentCount = residents.length;

    // Crear un element <p> para mostrar el resultat
    const p = document.createElement('p');
    p.textContent = `El planeta ${planetName} té ${residentCount} residents.`;

    // Agregar l'elemento <p> a l'element 'contingut'
    contingut.appendChild(p);
  });
}

// Obtenir tots els planetas i contar els residents cridant les diferents funcions crades anteriorment
getAllPlanets().then((planets) => countResidents(planets));
