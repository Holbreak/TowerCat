document.addEventListener("DOMContentLoaded", () => {
    const switchPage = document.getElementById("switchPage");
    const userInput = document.getElementById("userInput");
    
    userInput.addEventListener("input", () => {
            if (userInput.value !== "") {
                switchPage.disabled = false;
            } else {
            switchPage.disabled = true;
        }
    });

    switchPage.addEventListener("click", () => {
        const username = userInput.value;

        const nombreDeUsuario = {
            username: username
        };
        const usernameString = JSON.stringify(nombreDeUsuario)
        sessionStorage.setItem("nombreDeUsuario", usernameString);
        window.location.href = "index.html";
    });
});
