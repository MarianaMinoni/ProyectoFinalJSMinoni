

function cargarProductosLS(){

return JSON.parse(localStorage.getItem("productos"));

}


function guardarCarritoLS(carrito){
  localStorage.setItem("carrito", JSON.stringify(carrito)); 
  
  }
  
  function cargarCarritoLS(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
    
    }

    function buscarProducto(id){
      const productos = cargarProductosLS();
      return productos.find(item => item.id ===id);
    }

    function estaEnElCarrito(id){
      const carrito= cargarCarritoLS()
        return carrito.some(item => item.id == id)

    }

    function agregarProducto(id){

      const carrito= cargarCarritoLS();


      if(estaEnElCarrito(id)){
        let pos = carrito.findIndex(item => item.id === id)
        carrito[pos].cantidad += 1;
        } else {
          const producto = buscarProducto(id);
          producto.cantidad = 1;
           carrito.push(producto);

        }
     
      guardarCarritoLS(carrito);
      renderBotonCarrito();
     
      
      }

      function eliminarProducto(id){
        const carrito = cargarCarritoLS();
        let pos = carrito.findIndex(item => item.id === id)

        if (carrito [pos].cantidad > 1){
          carrito [pos].cantidad -= 1;

        } else{
          carrito.splice(pos, 1)

        }

        guardarCarritoLS(carrito);
        renderBotonCarrito();
        renderProductos();

      }

      function vaciarCarrito(){
        localStorage.removeItem("carrito");
        renderBotonCarrito();
        renderProductos();

      }

      function cantidadTotalProductos(){
        const carrito = cargarCarritoLS();

        return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0); 
      }

      function sumaTotalProductos(){
        const carrito = cargarCarritoLS();

        return carrito.reduce((acumulador, item) => acumulador += item.cantidad * item.precio, 0)
      }
            
      
      function cargarProductosLS(){
      
      return JSON.parse(localStorage.getItem("productos"));
      
      }

      
function renderBotonCarrito(){

  let botonCarrito= document.getElementById("botonCarrito");
  let contenido= `

  <button type="button" class="btn btn-secondary position-relative">
  <img src="Imagenes/cart2.svg" alt="carrito" width="32">

<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
${cantidadTotalProductos()}
</span>
</button>`;

botonCarrito.innerHTML = contenido;


}


    

function filtrarProductos() {
        let productos =  cargarProductosLS();
        let textoBusqueda = document.getElementById("textoBusqueda").value;
        let contenido = "";
    
        productos = textoBusqueda ? productos.filter(item => item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())) : productos;
    
        if (productos.length > 0) {
            productos.forEach(producto => {
                contenido += `<div class="col-md-3 mb-5">
                <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
                    <div class="card text-center border border-0">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <p class="card-text text-primary"><b>$${producto.precio}</b></p>
                            <p class="text-secondary">${producto.nombre}</p>
                        </div>
                    </div>
                </a>
                </div>`;
            });
        } else {
            contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos por el término de búsqueda!</div>`;
        }
        
        document.getElementById("contenido").innerHTML = contenido;
    };
    
    