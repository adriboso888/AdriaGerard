document.addEventListener("DOMContentLoaded", function() {
    var apiUrl = "https://swapi.py4e.com/api/starships/"; //agafem l'url de les naus
    var starships = []; //creem un array per guardar totes les naus
    var divContingut = document.getElementById("contingut");
    var divnaus = document.getElementById("naus");

    // Funcio que utilitzarem per mostrar els detalls de cada nau en el div "contingut"
    function MostrarDetalls(nau) {
      divContingut.innerHTML = ""; // Neteja el contingut de dins el div
  
      var dadesNau = document.createElement("ul"); //creem un element de llista
      dadesNau.classList.add("starship-details"); //i l'hi assignem una classe
  
      //Itinerem sobre les propietats de cada nau i creem els elements que la caracteritza
      Object.entries(nau).forEach(function([key, value]) {
        var llista = document.createElement("li");
        llista.innerHTML = "<strong>" + key + ":</strong> " + value;
  
        dadesNau.appendChild(llista);
      });
  
     divContingut.appendChild(dadesNau);
    }
  
    //Funció poer obtenir totes les naus de la api
    function AgafarNaus(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          starships = starships.concat(data.results);
  
          if (data.next) {
            AgafarNaus(data.next); //Mira de forma recursiva si hi ha mes pàgines
          } else {
            //Mostra el nom de les naus al div "naus"
            starships.forEach(function(starship, index) {
              var name = starship.name;
  
              var link = document.createElement("a");
              link.href = "#"; //l'utilitzem perque els noms es vegin en format enllaç
              link.textContent = name;
  
              link.addEventListener("click", function() {
                MostrarDetalls(starship); //si cliquem sobre el nom anira a la funcio i mirara totes les seves característiques
              });
  
             divnaus.appendChild(link);
             divnaus.appendChild(document.createElement("br"));
            });
          }
        })
        .catch(error => console.log(error));
    }
  
    //Iniciem l'obtenció de les naus
    AgafarNaus(apiUrl);
  });
  