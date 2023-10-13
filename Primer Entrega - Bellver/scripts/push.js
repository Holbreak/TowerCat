const botones = document.querySelector("#armamento");
const armasJugador = [
    {
        nombre: "Espada",
        damage: 20,
        imagen: "assets/Sword.png"
    },
    {
        nombre: "Escopeta",
        damage: 44,
        imagen: "assets/Shotgun.png"
    },
    {
        nombre: "Rifle",
        damage: 65,
        imagen: "assets/Rifle.png"
    }
]

crearElemento = (tag, props, childs, text) => {
    const element = document.createElement(tag)
    if (props) {
        Object.assign(element, props)
    }
    if (childs) {
        childs.forEach( i => {
            element.appendChild(i)
        })
    }
    if (text) {
        element.textContent = text;
    }
    return element
}

crearBoton = (nombre, imagen) => {
    const btnTexto = crearElemento("strong", null, null, nombre)
    const btnImg = crearElemento("img", {src: imagen} )
    const btn = crearElemento("button",{className: "arma attackButton"}, [btnTexto, btnImg])
    btn.addEventListener("click", ()=> atacarTorreClick())
    return btn;
} 

mostrarSeleccionador = () => {
    if (document.getElementById("armasInventory").style.display = "none") {
        document.getElementById("armasInventory").style.display = "block"
    }
}

const botonPlus = document.querySelector(".push")
botonPlus.addEventListener("click", ()=> mostrarSeleccionador())

imprimirArma = (nombre, damage, imagen ) => {
    const item = crearElemento('li', null, null, `Arma: ${nombre}, Daño: ${damage}`)
    const imgElement = crearElemento('img', { src: imagen });
    item.classList.add('box-nuevaArma');
    item.appendChild(imgElement);
    item.addEventListener("click", ()=>{
        if (botones.childElementCount < 5) {
            const btn = crearBoton(nombre, imagen)
            botones.appendChild(btn)
        }
    })
    return item;
}

mostrarArmas = () => {
    const textoLower = searchInput.value.toLowerCase();
    let armas = armasJugador;
    if (textoLower) {
        armas = armasJugador.filter(espada => espada.nombre.toLowerCase().includes(textoLower));
    }
        listaArmas.innerHTML = "";
        armas.forEach(espada => {
            const listItem = imprimirArma(espada.nombre, espada.damage, espada.imagen)
            listaArmas.appendChild(listItem);
    });
}
searchInput.addEventListener("input", mostrarArmas);
mostrarArmas();

