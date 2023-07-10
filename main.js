
function renderProductos(){
    let contenido = "";
     
    
     productos.forEach(producto => {
     contenido += `<div class= "col-md-3 p-3">
     <a href="verProductos.html" onclick="verProductos(${producto.id})"><div class="card" style="width: 18rem;">
     <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
     <div class="card-body">
     <h3>${producto.nombre}</h3>
     <p class="card-text">$${producto.precio}</p>
     <button type="button" class="btn btn-secondary">Agregar al carrito</button>
   </div>
 </div>
 </div>`
 
 
 });
 
 
 
 document.getElementById("contenido").innerHTML = contenido;
 
 }



 function verProducto (id){
    let productos = cargarProductosLs();
    let producto = productos.find(item => item.id == id);
    localStorage.setItem("producto", JSON.stringify(producto));

 }
 
 renderProductos();
 verProducto();
 