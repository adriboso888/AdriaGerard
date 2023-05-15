const contingut = document.getElementById("chart");

    //Obtenim les dades de totes les pagines de planetes
    async function getPlanets(url) { //await junt amb async s'utilitza per crear una promesa que s'esperara a que es resolgui
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    //Funcio per obtenir les dades dels planetes
    async function getAllPlanets() {
      let url = 'https://swapi.py4e.com/api/planets/';
      let totsElsPlanetes = [];

      // Recorrer totes les pagines de planetes
      while (url !== null) {
        const data = await getPlanets(url);
        totsElsPlanetes = totsElsPlanetes.concat(data.results);
        url = data.next;
      }

      return totsElsPlanetes;
    }

    // Funció per contar els residents de cada planeta i mostrar els resultats
    function countResidents(planets) {
      const NomPlanetes = [];
      const contadorResidents = [];

      // Recorrer cada planeta
      planets.forEach((planet) => {
        const residents = planet.residents;
        const planetName = planet.name;

        // Obtenir el número de residents
        const residentCount = residents.length;

        NomPlanetes.push(planetName);
        contadorResidents.push(residentCount);
      });

      //Creació del grafic de barres
      const chart = new Chart(contingut, {
        type: 'bar',
        data: {
          labels: NomPlanetes,
          datasets: [
            {
              label: 'Nombre de residents',
              data: contadorResidents,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              precision: 0
            }
          }
        }
      });
    }

    // Obtenir tots els planetas i contar els residents cridant les diferents funcions crades anteriorment
    getAllPlanets().then((planets) => countResidents(planets));