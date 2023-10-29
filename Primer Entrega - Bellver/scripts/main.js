let vidaTorre = 150;
let gatoEnLaCelda = true
let torreContador;

document.addEventListener("DOMContentLoaded", ()=> {
    torreContador = parseInt(localStorage.getItem("torresDestruidas")) || 0;
    document.getElementById("contadorTorre").textContent = torreContador;
    if (torreContador === null) {
        torreContador = 0;
    } else {
        torreContador = parseInt(torreContador);
}})
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

const switchPageLogin = document.getElementById("switchPageLogin");
const torre = document.getElementById("torre");
const liberado = document.getElementById("liberado");
const searchInput = document.getElementById("searchInput");
const listaArmas = document.getElementById("listaArmas");
const dropdownMapas = document.getElementById("Mapas");
const fondo = document.getElementById("fondo");

const MAX_DAMAGE = 20;
const MIN_DAMAGE = 5;

switchPageLogin.addEventListener("click", () => {
    window.location.href = "index.html";
});

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
    if (vidaTorre <= 0) {
        vidaTorre = 0;
        gatoEnLaCelda = false;
        document.getElementById("jaula").style.display = "none";
        document.getElementById("gatito").style.display = "none";
        liberado.style.display = "block";
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
        torreContador += 1;
        document.getElementById("contadorTorre").textContent = torreContador;
        localStorage.setItem("torresDestruidas", torreContador);
        Swal.fire({
            title: 'Felicitaciones, liberaste al gatito!',
            width: 600,
            padding: '3em',
            color: '#284435',
            allowOutsideClick: false,
            confirmButtonColor: '#284435',
            background: '#fff url(/assets/Sign.png)',
        })
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

const usuarioSpan = document.getElementById("nombreUsuario");
usuarioSpan.textContent = nombreDelJugador;