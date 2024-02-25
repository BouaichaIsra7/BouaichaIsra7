
   
        document.addEventListener('DOMContentLoaded', function () {
            var button = document.getElementById('button');
            var form = document.getElementById('form');
            var message = document.getElementById('message');
            var link = document.getElementById('link');

            const secretNumber = Math.floor(Math.random() * 100) + 1;
            var attempts = 10;

            document.getElementById('guessForm').addEventListener('submit', function (event) {
                event.preventDefault();
                var input = parseInt(document.getElementById("input").value);
                if (!isNaN(input)) {
                    if (input < secretNumber) {
                        message.innerText = 'Le nombre est plus grand que ' + input;
                        message.style.color = "white";
                    } else if (input > secretNumber) {
                        message.innerText = 'Le nombre est plus petit que ' + input;
                        message.style.color = "white";
                    }
                    attempts--;
                    if (attempts === 0) {
                        message.innerText = "Vous avez perdu, il fallait trouver " + secretNumber;
                        message.style.color = "red";
                        form.style.display = 'none';
                        link.style.display = 'block';
                    }
                    if (input === secretNumber) {
                        message.innerText = "Bravo, vous avez trouvé le nombre qui est " + secretNumber + '!';
                        message.style.color = "green";
                        form.style.display = 'none';
                        link.style.display = 'block';
                    }
                } else {
                    message.innerText = "Le champ est vide ou non valide !";
                    message.style.color = "red";
                }
            });
        });

        
        function search() {
            var word = document.getElementById("text").value;
            var result = document.getElementById("result");
    
            if (word.length != 0) {
                let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        try {
                            for (var words of data) {
                                var definition = words.meanings[0].definitions[0].definition;
                                result.innerHTML = "<p class='res'>Définition<br>" + definition + "</p>";
                            }
                        } catch (err) {
                            result.innerHTML = "<p class='res'>Aucune définition trouvée !</p>";
                        }
                    })
                    .catch(error => {
                        console.error('Erreur de fetch:', error);
                        result.innerHTML = "<p class='res'>Une erreur est survenue lors de la récupération des données.</p>";
                    });
            } else {
                result.innerHTML = "<p class='res'>Veuillez remplir ce champ !</p>";
            }
        }