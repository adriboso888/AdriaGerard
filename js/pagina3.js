
    // Obtener el formulari i la llista de personatges
    const form = document.getElementById('search-form');
    const characterList = document.getElementById('character-list');

    //Event que escolta el formulari
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitem que el formulari s'envi

        //Obtenim els valors del formulari per tal de poguer-los buscar en els personatges
        const height = form.elements.height.value;
        const mass = form.elements.mass.value;
        const hairColor = form.elements.hair_color.value;
        const skinColor = form.elements.skin_color.value;
        const eyeColor = form.elements.eye_color.value;

        //Cridem la funció que utilitzarem per busar els personatges
        buscarPersonatges(height, mass, hairColor, skinColor, eyeColor);
    });

    //Funcio per buscar els personatges
    function buscarPersonatges(height, mass, hairColor, skinColor, eyeColor, url = 'https://swapi.dev/api/people/') {
        fetch(url) //fem el fetch de people
            .then(response => response.json())
            .then(data => {
                const personatges = data.results;

                //Agafem els personatges que compleixin les caracteristiques
                const matchingCharacters = personatges.filter(personatge => {
                    return (
                        personatge.height === height &&
                        personatge.mass === mass &&
                        personatge.hair_color.toLowerCase() === hairColor.toLowerCase() &&
                        personatge.skin_color.toLowerCase() === skinColor.toLowerCase() &&
                        personatge.eye_color.toLowerCase() === eyeColor.toLowerCase()
                    );
                });

                if (matchingCharacters.length > 0) {
                    //Mostrem els personatges trobats
                    mostrarPersonatges(matchingCharacters[0]);
                } else if (data.next) {
                    //En cas que hi hagi mes pagines buscarem a les altres també
                    buscarPersonatges(height, mass, hairColor, skinColor, eyeColor, data.next);
                } else {
                    characterList.innerHTML = 'No hi ha cap personatge amb aquestes característiques.';
                }
            })
            .catch(error => {
                characterList.innerHTML = 'Error al buscar personatges.';
                console.error(error);
            });
    }

    // Función para mostrar el personatge trobat
    function mostrarPersonatges(character) {
        const listItem = document.createElement('li'); //creem un element li i el pengarem al ul on hi haura tots els personatges
        listItem.textContent = character.name;
        characterList.innerHTML = ''; //Netejar la llista avans de mostrar
        characterList.appendChild(listItem);
    }


