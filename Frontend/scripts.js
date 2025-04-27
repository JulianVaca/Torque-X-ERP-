document.addEventListener("DOMContentLoaded", function () {
    cargarMotos();
});

// Función para cargar las motos desde la base de datos y mostrarlas en la página
function cargarMotos() {
    fetch('php/get_motos.php')
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("motos-container");
            container.innerHTML = ""; // Limpiar el contenedor antes de cargar
            data.forEach(moto => {
                let div = document.createElement("div");
                div.classList.add("moto-card");
                div.innerHTML = `
                    <img src="images/${moto.imagen}" alt="${moto.modelo}" class="moto-imagen">
                    <h3>${moto.marca} ${moto.modelo}</h3>
                    <p>Precio: $${moto.precio}</p>
                    <button onclick="agregarAlCarrito(${moto.id}, '${moto.marca} ${moto.modelo}', ${moto.precio})">Agregar al carrito</button>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error al cargar las motos:', error));
}

// Función para agregar una moto al carrito
function agregarAlCarrito(id, nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ id, nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Moto agregada al carrito");
}

// Función para mostrar el carrito en la página
function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let carritoContainer = document.getElementById("carrito-container");
    carritoContainer.innerHTML = "";

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }

    carrito.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("carrito-item");
        div.innerHTML = `
            <p>${item.nombre} - $${item.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoContainer.appendChild(div);
    });
}

// Función para eliminar un ítem del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para vaciar todo el carrito
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

// Función para realizar una compra simulada
function comprar() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    // Enviar los datos al servidor para generar la factura
    fetch("php/generate_invoice.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carrito })
    })
    .then(response => response.json())
    .then(data => {
        alert("Compra realizada. Factura generada.");
        vaciarCarrito();
    })
    .catch(error => console.error("Error en la compra:", error));
}
