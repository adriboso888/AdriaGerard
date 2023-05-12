$(document).ready(function () {
    $('#search-form').submit(function (event) {
        event.preventDefault();
        var apiUrl = 'https://swapi.dev/api/people/?';
        var parameters = $(this).serialize();
        var url = apiUrl + parameters;

        function getAllCharacters(url) {
            $.get(url, function (data) {
                var results = data.results;
                if (results.length > 0) {
                    var characterList = $('#character-list');
                    characterList.empty(); // Limpiar la lista de personajes antes de agregar nuevos

                    for (var i = 0; i < results.length; i++) {
                        var character = results[i];
                        if (
                            character.height !== "unknown" &&
                            character.mass !== "unknown" &&
                            character.hair_color !== "unknown" &&
                            character.skin_color !== "unknown" &&
                            character.eye_color !== "unknown"
                        ) {
                            var listItem = $('<li>').text(character.name);
                            characterList.append(listItem);
                        }
                    }
                    
                    if (characterList.children().length === 0) {
                        alert('No se encontraron personajes que coincidan con los parámetros.');
                    }
                } else {
                    alert('No se encontraron personajes que coincidan con los parámetros.');
                }
            });
        }

        var characterList = $('#character-list');
        characterList.empty(); // Limpiar la lista de personajes antes de la búsqueda
        getAllCharacters(url);
    });
});
