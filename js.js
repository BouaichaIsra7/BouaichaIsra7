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
                message.style.color = "black";
            } else if (input > secretNumber) {
                message.innerText = 'Le nombre est plus petit que ' + input;
                message.style.color = "black";
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