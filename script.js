document.addEventListener("DOMContentLoaded", function () {
    const userNameDisplay = document.getElementById("user-name");

    function promptForLogin() {
        let username = prompt("Digite seu nome:");
        if (username) {
            if (localStorage.getItem(username)) {
                let password = prompt("Digite sua senha:");
                if (password) {
                    const storedPassword = localStorage.getItem(username);
                    if (storedPassword === password) {
                        alert(`Olá ${username}, seja bem-vindo!`);
                        localStorage.setItem("loggedInUser", username);
                        userNameDisplay.textContent = username;
                    } else {
                        alert("Senha incorreta. Tente novamente.");
                        promptForLogin();
                    }
                } else {
                    alert("Senha não pode estar vazia.");
                    promptForLogin();
                }
            } else {
                let password = prompt("Digite uma nova senha para registro:");
                if (password) {
                    localStorage.setItem(username, password);
                    alert(`Registro realizado com sucesso! Olá ${username}, seja bem-vindo!`);
                    localStorage.setItem("loggedInUser", username);
                    userNameDisplay.textContent = username;
                } else {
                    alert("Senha não pode estar vazia.");
                    promptForLogin();
                }
            }
        } else {
            alert("Nome não pode estar vazio.");
            promptForLogin();
        }
    }

    // Verifica se o usuário já está logado
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        userNameDisplay.textContent = loggedInUser;
    } else {
        promptForLogin();
    }

    // Inicialização do carrossel de notícias
    $('.carousel').carousel();
});
