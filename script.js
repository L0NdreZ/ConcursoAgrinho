document.addEventListener("DOMContentLoaded", function () {
    const userNameDisplay = document.getElementById("user-name");
    const logoutButton = document.getElementById("logout-button");

    function promptForLogin() {
        let username = prompt("Digite seu nome:");
        if (username) {
            if (localStorage.getItem(username)) {
                if (password) {
                    localStorage.setItem(username);
                    alert(`Registro realizado com sucesso! Olá ${username}, seja bem-vindo!`);
                    localStorage.setItem("loggedInUser", username);
                    userNameDisplay.textContent = username;
                    logoutButton.style.display = "inline-block";
                } 
            }
        } else {
            alert("Nome não pode estar vazio.");
            promptForLogin();
        }
    }

    function logout() {
        localStorage.removeItem("loggedInUser");
        userNameDisplay.textContent = "";
        logoutButton.style.display = "none";
        promptForLogin();
    }
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        userNameDisplay.textContent = loggedInUser;
        logoutButton.style.display = "inline-block";
    } else {
        promptForLogin();
    }

    logoutButton.addEventListener("click", logout);
    $('.carousel').carousel();
});

