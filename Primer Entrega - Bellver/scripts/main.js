let vidaTorre = 150;
let round = 0;
let gatoEnLaCelda = true
const nombreDelJugador = JSON.parse(sessionStorage.getItem("nombreDeUsuario")).username;
const mapasObjeto = {
    jungle: {
        nombre: "Jungla",
        imagen: "assets/Fondo.png"
    },
    tunnel: {
        nombre: "Tunel",
        imagen: "assets/Fondo2.png"
    },
    city: {
        nombre: "Ciudad",
        imagen: "assets/Fondo3.png"
    }
};

const torre = document.getElementById("torre");
const liberado = document.getElementById("liberado");
const searchInput = document.getElementById("searchInput");
const listaArmas = document.getElementById("listaArmas");
const dropdownMapas = document.getElementById("Mapas");
const fondo = document.getElementById("fondo");

const MAX_DAMAGE = 20;
const MIN_DAMAGE = 5;

dropdownMapas.addEventListener("change", function() {
    const nivelSeleccionado = dropdownMapas.value;

    const fondoSeleccionado = mapasObjeto[nivelSeleccionado];

    if (fondoSeleccionado && fondoSeleccionado.imagen) {
        fondo.src = `${fondoSeleccionado.imagen}`;
    }
});

textoDamage = (damage) => {
    const damageContainer = document.createElement("div");
    damageContainer.className = "damage-container";

    const damageText = document.createElement("span");
    damageText.className = "damage-text";
    damageText.textContent = `-${damage}`;

    damageContainer.appendChild(damageText);
    document.body.appendChild(damageContainer);
    damageContainer.addEventListener("animationend", () => {
        damageContainer.remove();
    });
}

atacarTorre = (damage) => {
    vidaTorre -= damage;
    round += 1;
    console.log("Estas en el round " + round);
    if (vidaTorre <= 0) {
        vidaTorre = 0;
        gatoEnLaCelda = false;
        document.getElementById("jaula").style.display = "none";
        document.getElementById("gatito").style.display = "none";
        liberado.style.display = "block";
        console.log("Felicitaciones!! Liberaste al gatito!");
        reiniciar();
    }
    let opacity = vidaTorre / 150;
    torre.style.opacity = opacity;
    document.getElementById("vidaTorreDisplay").textContent = vidaTorre;

}

atacarTorreClick = () => {
    if (vidaTorre > 0) {
        const damage = Math.ceil(Math.random() * (MAX_DAMAGE - MIN_DAMAGE)) + MIN_DAMAGE;
        atacarTorre(damage);
        textoDamage(damage);
    }
}

reiniciar = () => {
    if (vidaTorre === 0) {
        document.getElementById("restart").style.visibility = "visible";
    }
    document.getElementById("restart").addEventListener("click", () => {
        vidaTorre = 150;
        let opacity = vidaTorre / 150;
        torre.style.opacity = opacity;
        document.getElementById("vidaTorreDisplay").textContent = vidaTorre;
        document.getElementById("restart").style.visibility = "hidden";
        document.getElementById("jaula").style.display = "block";
        document.getElementById("gatito").style.display = "block";
        liberado.style.display = "none";
    });
};

const tipoArma = document.querySelectorAll(".arma");
tipoArma.forEach(function (tipoArma) {
    tipoArma.addEventListener("click", atacarTorreClick);
});

/* while (nombreDelJugador === "" || nombreDelJugador === null) {
    nombreDelJugador = prompt("Porfavor insertar nombre del usuario:");
    if (nombreDelJugador === null || nombreDelJugador.trim() === "") {
        alert("ingresa un nombre de usuario valido");
        nombreDelJugador = "";
    }
}

console.log("Bienvenido, " + nombreDelJugador); */

const usuarioSpan = document.getElementById("nombreUsuario");
usuarioSpan.textContent = nombreDelJugador;