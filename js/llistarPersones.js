document.getElementById('submitButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
  
    //Fa la petició a l'api d'especies
    fetch('https://swapi.py4e.com/api/species/?search=' + inputText)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        //Obtenir els personatges que estan a l'especie
        var species = data.results[0];
        var peopleUrls = species.people;
  
        //Recorrem els personatges per obtenir tota l'informació
        var peoplePromises = peopleUrls.map(function(url) {
          return fetch(url).then(function(response) {
            return response.json();
          });
        });
  
        //Esperar a que es resolguin les promeses
        Promise.all(peoplePromises)
          .then(function(people) {
            //Mostrar el nom dels personatges i l'hi assignem com a link
            var characterList = document.getElementById('characterList');
            characterList.innerHTML = '';
            people.forEach(function(person) {
              var listItem = document.createElement('li');
              var link = document.createElement('a');
              link.href = '#';
              link.textContent = person.name;
              link.addEventListener('click', function() {
                showCharacterInfo(person.url); //cridem la funció la qual mostra l'informaicó comleta del personatge
              });
              listItem.appendChild(link);
              characterList.appendChild(listItem);
            });
          })
          .catch(function(error) {
            console.log('Error:', error);
          });
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });
  
  function showCharacterInfo(url) {
    // fem el fetch per agafar totes les dades
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(character) {
        var characterInfo = document.getElementById('characterInfo');
        characterInfo.innerHTML = '';
  
        //creem els elements per mostrar l'informació
        var name = document.createElement('h2');
        name.textContent = character.name;
        characterInfo.appendChild(name);
  
        var cabell = document.createElement('p');
        cabell.textContent = 'Color de cabell: ' + character.hair_color;
        characterInfo.appendChild(cabell);

        var ulls = document.createElement('p');
        ulls.textContent = 'Color de ulls: ' + character.eye_color;
        characterInfo.appendChild(ulls);

        var birthYear = document.createElement('p');
        birthYear.textContent = 'Aniversari: ' + character.birth_year;
        characterInfo.appendChild(birthYear);
  
        var gender = document.createElement('p');
        gender.textContent = 'Genere: ' + character.gender;
        characterInfo.appendChild(gender);
  
  
        // Mostrem els divs amb l'informació dels personatges
        characterInfo.style.display = 'block';
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }
  