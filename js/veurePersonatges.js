
export function veurePelis(selectPelis, personatges, imatge) {
      fetch(`https://swapi.py4e.com/api/films/${selectPelis.value}`) //busquem dintre de l'api de pelicules la que haguem seleccionat en el select
        .then(response => response.json())
        .then(pelicula => {
          personatges.innerHTML = "";
  
          const peliculaTitle = document.createElement("h2"); //creem un element com a titol
          peliculaTitle.textContent = pelicula.title;
          personatges.appendChild(peliculaTitle); //posem el titol
  
          const characters = pelicula.characters; //fem una constant per guardar tots els personatges
          characters.forEach(characterUrl => {
            fetch(characterUrl)
              .then(response => response.json())
              .then(character => {
                const characterName = document.createElement("p");
                characterName.textContent = character.name;
                personatges.appendChild(characterName);
              })
              .catch(error => {
                console.error('Error al obtener los datos del personaje:', error);
              });
          });
            //Mostrem l'imatge corresponent a cada pelicula
            if (selectPelis.value === "4") {
              imatge.src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/154B17A1B5838B6E96EE4F624AD4C5186D0DAFFB01A8FAD5A60D11673C37A913/scale?width=1200&aspectRatio=1.78&format=jpeg";
            } else if (selectPelis.value === "5") {
              imatge.src = "https://img.asmedia.epimg.net/resizer/pKILu97L8OwlFN6-6lkArjFDTBY=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DCTONL5KKJOKNOHSMHLQ6TJWA4.jpg";
            } else if (selectPelis.value === "6") {
              imatge.src = "https://javipas.com/wp-content/uploads/2015/11/star-wars-episode-iii-revenge-sith.jpg";
            } else if (selectPelis.value === "1") {
              imatge.src = "https://i.blogs.es/3e839c/star-wars/1366_2000.jpg";
            } else if (selectPelis.value === "2") {
              imatge.src = "https://static.posters.cz/image/1300/posters/star-wars-episodio-v-el-imperio-contraataca-i90219.jpg";
            }else if (selectPelis.value === "3") {
              imatge.src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56FEAB4863C5914FC8DF3C03D4B61607BCFF7A81BA6C701430572B450EAE9B89/scale?width=1200&aspectRatio=1.78&format=jpeg";
            }
          })
          .catch(error => {
            console.error('Error al obtener los datos de la película:', error);
          });
      };

