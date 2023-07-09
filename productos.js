

// render de productos


const productos = [
    {id:1, nombre: "Buzo Nike canguro", precio: 6500, imagen: "./imagenes/hombre/buzonike.jpeg"},
    {id:2, nombre: "Remera Deportiva jaspeada", precio: 4000, imagen: "./imagenes//mujer/remerajaspeada.jpeg"},
    {id:3, nombre: "Medias", precio: 2500, imagen: "./imagenes/medias.jpeg"},
    {id:4, nombre: "Calza de lycra estampada con bolsillos", precio:4500, imagen:"./imagenes/mujer/calzabolsillo.jpeg"},
    {id:5, nombre: "Calza térmica mujer", precio: 3000, imagen: "./imagenes/mujer/calzatermicalisa.jpeg"},
    {id:6, nombre: "Jogging Adidas de algodón", precio: 5500, imagen: "./imagenes/hombre/pantalonhombreadidas.jpeg"},
    {id:7, nombre: "Buzo térmico con capucha", precio: 5000, imagen: "./imagenes/mujer/buzotermico.jpeg"},
    {id:8, nombre: "Camiseta térmica Hombre", precio: 3700, imagen:"./imagenes/hombre/camisetagris.jpeg" },
    {id:9, nombre: "Camiseta térmica mujer", precio: 3700, imagen: "./imagenes/mujer/camisetamujer.jpeg"},
    {id:10, nombre: "Camiseta térmica niño", precio: 2500, imagen: "./imagenes/niño/camisetatermicaniño.jpeg"},
    {id:11, nombre: "Calza térmica niño", precio:2500, imagen: "./imagenes/niño/calzatermicaniño.jpeg"},
    {id:12, nombre: "Buzo Argentina niño", precio:5000, imagen:"./imagenes/niño/buzoargentina.jpeg"},
    {id:13, nombre: "Remeras adidas mujer", precio: 2500, imagen: "./imagenes/mujer/remeraadidas.jpeg"},
    {id:14, nombre: "Cuellito térmico de lycra", precio: 1000, imagen: "./imagenes/cuellito.jpeg"},
    {id:15, nombre: "Calza Adidas clásica 3 tiras", precio: 4500, imagen: "./imagenes/mujer/calza3tiras.jpeg"},
    {id:16, nombre: "Top deportivo", precio: 2500, imagen: "./imagenes/mujer/top.jpeg"},
   
];


function guardarProductosLS(){
    localStorage.setItem("porductos", JSON.stringify(productos));
}


function cargarProductosLs(){
   return JSON.parse(localStorage.getItem("productos"));
}

guardarProductosLS();

cargarProductosLs();



function renderProductos(){
   let contenido = "";
    
   
    productos.forEach(producto => {
    contenido += `<div class= "col-md-4 p-3">
    <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
    <h3>${producto.nombre}</h3>
    <p class="card-text">$${producto.precio}</p>
    <button type="button" class="btn btn-primary">Agregar al carrito</button>
  </div>
</div>
</div>`


});



document.getElementById("contenido").innerHTML = contenido;

}

renderProductos();



