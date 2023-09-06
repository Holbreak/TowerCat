let vidaTorre = 150;
let round = 0;
let gatoEnLaCelda = true

const MAX_DAMAGE = 20;
const MIN_DAMAGE = 5;

const torre = document.getElementById("torre");
const liberado = document.getElementById("liberado");

function atacarTorre(damage) {
    vidaTorre -= damage;
    round+=1;
    console.log("Estas en el round " + round)
    if (vidaTorre <= 0) {
        vidaTorre = 0;
        gatoEnLaCelda = false;
        document.getElementById("jaula").style.display = "none";
        document.getElementById("gatito").style.display = "none";
        liberado.style.display = "block";
        console.log("Felicitaciones!! Liberaste al gatito!")
    }
    let opacity = vidaTorre / 150;
    torre.style.opacity = opacity;
    document.getElementById("vidaTorreDisplay").textContent = vidaTorre;
    
}

function atacarTorreClick() {
    if (vidaTorre > 0){
        const damage = Math.ceil(Math.random() * (MAX_DAMAGE - MIN_DAMAGE)) + MIN_DAMAGE;
        atacarTorre(damage);
        console.log(vidaTorre);
    }
}

const tipoArma = document.querySelectorAll(".arma");
tipoArma.forEach(function (tipoArma) {
    tipoArma.addEventListener("click", atacarTorreClick);
});