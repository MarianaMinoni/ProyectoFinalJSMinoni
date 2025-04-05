

function renderProducto() {
    const producto = JSON.parse(localStorage.getItem("producto"));
    let contenido = `<div class="col-md-4 offset-md-2">
    <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
    </div>
    <div class="col-md-4">
        <h3 class="text-center">${producto.nombre}</h3>
        <h4 class="bs-success-text-emphasis text-center"><b>$${producto.precio}</b></h4>
       <p class="my-5 text-center"> <button class="btn btn-primary" onClick="agregarProducto(${producto.id});"> Agregar </button></p>
    </div>`;
    document.getElementById("contenido").innerHTML = contenido
}

renderProducto();


renderBotonCarrito();





