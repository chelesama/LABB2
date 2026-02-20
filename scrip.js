// ===============================
// FUNCIONES ORIGINALES
// ===============================

// 1 Cambiar título
document.getElementById("btnCambiar").addEventListener("click", function () {
    document.getElementById("titulo").textContent = "Título Actualizado 🚀";
});

// 2 Modo oscuro
document.getElementsByClassName("btnColor")[0].addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// 3 Agregar tarea
document.getElementById("btnAgregar").addEventListener("click", function () {
    let texto = document.getElementById("inputTexto").value;

    if (texto !== "") {
        let nuevo = document.createElement("li");
        nuevo.textContent = texto;
        document.getElementsByTagName("ul")[0].appendChild(nuevo);
    }
});

// 4 Enlace mensaje
document.querySelector("#miEnlace").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#mensaje").textContent = "Mensaje mostrado correctamente ✨";
});

// 5 Resaltar cards
let tarjetas = document.querySelectorAll(".card");
tarjetas.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.toggle("resaltado");
    });
});

// 6 Mostrar lo que se escribe
document.querySelector("input[type='text']").addEventListener("input", function (event) {
    document.getElementById("mensaje").textContent = event.target.value;
});

// 7 Doble click en título
document.getElementById("titulo").addEventListener("dblclick", function () {
    alert("Doble click detectado 😎");
});

// 8 Mouseover título
document.getElementById("titulo").addEventListener("mouseover", function () {
    this.style.color = "#ff4081";
});


// ===============================
// 🔥 15 FUNCIONES NUEVAS
// ===============================

// 9 Editar título manualmente
document.getElementById("titulo").addEventListener("click", function () {
    let nuevoTitulo = prompt("Escribe el nuevo título:");
    if (nuevoTitulo) {
        this.textContent = nuevoTitulo;
    }
});

// 10 Cambiar tamaño del título
document.getElementById("titulo").addEventListener("contextmenu", function (e) {
    e.preventDefault();
    this.style.fontSize = "3.5rem";
});

// 11 Contar tareas
document.getElementById("btnAgregar").addEventListener("dblclick", function () {
    let total = document.querySelectorAll("li").length;
    alert("Tienes " + total + " tareas.");
});

// 12 Eliminar última tarea
document.getElementById("lista").addEventListener("dblclick", function () {
    let items = document.querySelectorAll("#lista li");
    if (items.length > 0) {
        items[items.length - 1].remove();
    }
});

// 13 Cambiar color aleatorio del fondo
document.getElementById("titulo").addEventListener("mouseleave", function () {
    document.body.style.background =
        "linear-gradient(135deg, #" +
        Math.floor(Math.random()*16777215).toString(16) +
        ", #243b55)";
});

// 14 Limpiar input con tecla Enter
document.querySelector("#inputTexto").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        this.value = "";
    }
});

// 15 Marcar tarea como completada
document.querySelector("#lista").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through";
    }
});

// 16 Cambiar todas las cards a color aleatorio
document.getElementById("titulo").addEventListener("mouseenter", function () {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor =
            "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});

// 17 Mostrar fecha actual
document.getElementById("mensaje").addEventListener("click", function () {
    let fecha = new Date();
    this.textContent = fecha.toLocaleString();
});

// 18 Ocultar/Mostrar lista
document.getElementById("mensaje").addEventListener("dblclick", function () {
    let lista = document.querySelector("#lista");
    lista.style.display = lista.style.display === "none" ? "block" : "none";
});

// 19 Cambiar color de botones al hacer click
let botones = document.querySelectorAll("button");
botones.forEach(function (btn) {
    btn.addEventListener("click", function () {
        this.style.backgroundColor =
            "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});

// 20 Resetear todo
document.body.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        location.reload();
    }
});

// 21 Contador de clics en título
let contador = 0;
document.getElementById("titulo").addEventListener("click", function () {
    contador++;
    console.log("Clicks en título: " + contador);
});

// 22 Animar cards
document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("dblclick", function () {
        this.style.transform = "rotate(5deg)";
    });
});

// 23 Mostrar alerta si no hay tareas
document.getElementById("btnAgregar").addEventListener("mouseover", function () {
    if (document.querySelectorAll("#lista li").length === 0) {
        alert("No tienes tareas aún.");
    }
});