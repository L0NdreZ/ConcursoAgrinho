document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showRegisterLink = document.getElementById("show-register");
    const showLoginLink = document.getElementById("show-login");
    registerForm.style.display = "none";

    showRegisterLink.addEventListener("click", function () {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    showLoginLink.addEventListener("click", function () {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;

        if (localStorage.getItem(username)) {
            alert("Usuário já registrado.");
        } else {
            localStorage.setItem(username, password);
            alert("Registro realizado com sucesso!");
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }
    });
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const rememberMe = document.getElementById("remember-me").checked;

        const storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            if (rememberMe) {
                localStorage.setItem("loggedInUser", username);
            } else {
                sessionStorage.setItem("loggedInUser", username);
            }
            window.location.href = "index.html";
        } else {
            alert("Nome de usuário ou senha incorretos.");
        }
    });
    const loggedInUser = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "index.html";
    }
});

