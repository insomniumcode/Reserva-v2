function agregarPedido() {
    const mesa = document.getElementById("mesa").value;
    const pedido = document.getElementById("pedido").value;

    if (mesa && pedido) {
        const pedidoDiv = document.createElement("div");
        pedidoDiv.className = "pedido";
        pedidoDiv.innerHTML = `
            <span>Mesa: ${mesa}</span>
            <span>Pedido: ${pedido}</span>
            <button class="boton-mover">Mover a Orden Lista</button>
        `;

        const pedidoGuardado = {
            mesa,
            pedido,
            estado: "preparando"
        };

        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidosGuardados.push(pedidoGuardado);
        localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));

        pedidoDiv.querySelector(".boton-mover").addEventListener("click", () => moverPedido(pedidoDiv, mesa));

        document.getElementById("preparando-list").appendChild(pedidoDiv);
    }
}

function moverPedido(pedidoDiv, mesa) {
    const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
    const pedido = pedidosGuardados.find(pedido => pedido.mesa === mesa);

    if (pedido) {
        pedido.estado = "orden-lista";
        localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));

        const terminarButton = document.createElement("button");
        terminarButton.textContent = "Terminar Orden";
        terminarButton.className = "boton-terminar";
        terminarButton.addEventListener("click", () => terminarPedido(pedidoDiv, mesa));

        pedidoDiv.appendChild(terminarButton);
        document.getElementById("orden-lista").appendChild(pedidoDiv);

        const moverButton = pedidoDiv.querySelector(".boton-mover");
        moverButton.style.backgroundColor = "#ccc";
        moverButton.textContent = "Movido";
        moverButton.disabled = true;
    }
}

function terminarPedido(pedidoDiv, mesa) {
    const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
    const nuevosPedidosGuardados = pedidosGuardados.filter(pedido => pedido.mesa !== mesa);
    localStorage.setItem('pedidos', JSON.stringify(nuevosPedidosGuardados));

    pedidoDiv.remove();
}

function cargarPedidos() {
    const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
    const preparandoList = document.getElementById('preparando-list');
    const ordenLista = document.getElementById('orden-lista');

    preparandoList.innerHTML = '';
    ordenLista.innerHTML = '';

    pedidosGuardados.forEach(pedido => {
        const pedidoDiv = document.createElement("div");
        pedidoDiv.className = "pedido";
        pedidoDiv.innerHTML = `
            <span>Mesa: ${pedido.mesa}</span>
            <span>Pedido: ${pedido.pedido}</span>
        `;

        if (pedido.estado === "preparando") {
            const moverButton = document.createElement("button");
            moverButton.textContent = "Mover a Orden Lista";
            moverButton.className = "boton-mover";
            moverButton.addEventListener("click", () => moverPedido(pedidoDiv, pedido.mesa));

            pedidoDiv.appendChild(moverButton);
            preparandoList.appendChild(pedidoDiv);
        } else {
            const terminarButton = document.createElement("button");
            terminarButton.textContent = "Terminar Orden";
            terminarButton.className = "boton-terminar";
            terminarButton.addEventListener("click", () => terminarPedido(pedidoDiv, pedido.mesa));

            pedidoDiv.appendChild(terminarButton);
            ordenLista.appendChild(pedidoDiv);
        }
    });
}

document.addEventListener("DOMContentLoaded", cargarPedidos);
