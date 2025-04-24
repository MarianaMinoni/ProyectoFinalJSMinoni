

// render de productos


const productos = [
    {id:1, nombre: "Buzo Nike canguro", precio: 6500, genero: "hombre", imagen: "../imagenes/hombre/buzonike.jpeg"},
    {id:2, nombre: "Remera Deportiva jaspeada", precio: 4000,genero: "mujer", imagen: "../imagenes//mujer/remerajaspeada.jpeg"},
    {id:3, nombre: "Medias", precio: 2500,genero: "accesorios",imagen: "../imagenes/medias.jpeg"},
    {id:4, nombre: "Calza de lycra estampada con bolsillos", precio:4500,genero: "mujer", imagen:"../imagenes/mujer/calzabolsillo.jpeg"},
    {id:5, nombre: "Calza térmica mujer", precio: 3000,genero: "mujer", imagen: "../imagenes/mujer/calzatermicalisa.jpeg"},
    {id:6, nombre: "Jogging Adidas de algodón", precio: 5500,genero: "hombre", imagen: "../imagenes/hombre/pantalonhombreadidas.jpeg"},
    {id:7, nombre: "Buzo térmico con capucha", precio: 5000,genero: "mujer", imagen: "../imagenes/mujer/buzotermico.jpeg"},
    {id:8, nombre: "Camiseta térmica Hombre", precio: 3700,genero: "hombre", imagen:"../imagenes/hombre/camisetagris.jpeg" },
    {id:9, nombre: "Camiseta térmica mujer", precio: 3700,genero: "mujer", imagen: "../imagenes/mujer/camisetamujer.jpeg"},
    {id:10, nombre: "Camiseta térmica niño", precio: 2500,genero: "ninio", imagen: "../imagenes/niño/camisetatermicaniño.jpeg"},
    {id:11, nombre: "Calza térmica niño", precio:2500,genero: "ninio", imagen: "../imagenes/niño/calzatermicaniño.jpeg"},
    {id:12, nombre: "Buzo Argentina niño", precio:5000, genero: "ninio", imagen:"../imagenes/niño/buzoargentina.jpeg"},
    {id:13, nombre: "Remeras adidas mujer", precio: 2500,genero: "mujer", imagen: "../imagenes/mujer/remeraadidas.jpeg"},
    {id:14, nombre: "Cuellito térmico de lycra", precio: 1000,genero: "accesorios", imagen: "../imagenes/cuellito.jpeg"},
    {id:15, nombre: "Calza Adidas clásica 3 tiras", precio: 4500,genero: "mujer", imagen: "../imagenes/mujer/calza3tiras.jpeg"},
    {id:16, nombre: "Top deportivo", precio: 2500,genero: "mujer", imagen: "../imagenes/mujer/top.jpeg"},
   
];


function guardarProductosLS(){

  localStorage.setItem("productos", JSON.stringify(productos));
}


function cargarProductosLS(){

return JSON.parse(localStorage.getItem("productos"));

}



guardarProductosLS();



function renderProductos(){
  // let textoBusqueda = document.getElementById("textoBusqueda").value;
  let productos =  cargarProductosLS();
  let contenido = "";


   if(productos.length > 0 ){


    productos.forEach(producto => {

      contenido += `<div class="col-md-3">
      <a href="pages/verProducto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
      <div class="card text-center border border-0">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
          <p class="card-text "><b>$${producto.precio}</b></p>
          <p >${producto.nombre}</p>
       
      </div>
    </div></a>

    </div>`;

      });
  
 
    
    document.getElementById("contenido").innerHTML = contenido;
  
    };

  }
   
    

 function verProducto(id) { 
  let productos = cargarProductosLS();
  let producto = productos.find(item => item.id == id);
  localStorage.setItem("producto", JSON.stringify(producto));

}

renderProductos();
renderBotonCarrito();





