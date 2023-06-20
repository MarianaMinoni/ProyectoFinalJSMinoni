

// render de productos


const productos = [
    {id: 1, nombre:"pantalón", precio: 4500, imagen:"https://media.istockphoto.com/id/510615049/es/foto/hombres-pantalones-de.jpg?s=612x612&w=0&k=20&c=6iYxNTSr6-66AIiHIx8nqRj8_CCquo2oXdxRs2u0l9Y=" },
    {id: 2, nombre: "remera", precio: 2000, imagen: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg"},
    {id:3, nombre: "medias", precio: 700, imagen: "https://tienda.guantexindustrial.com.ar/1551-large_default/medias-te56a-para-frio-97-poliamida-3-elastodieno.jpg"},
    {id:4, nombre: "campera", precio: 10000, imagen: "https://calvinargentina.vteximg.com.br/arquivos/ids/167259-650-709/J20J215004_LDD_1.jpg?v=637745011680970000"},
    {id:5, nombre: "camisa", precio:4000, imagen:"https://provelog.com/wp-content/uploads/7784-888007-600x600.png"},
    {id:6, nombre: "sweater", precio: 5000, imagen: "https://http2.mlstatic.com/D_NQ_NP_636392-MLA49623948363_042022-O.webp"},
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
    <p class="card-text">${producto.precio}</p>
  </div>
</div>
</div>`


});



document.getElementById("contenido").innerHTML = contenido;

}

renderProductos();




//--------------------------------- Este no funciona

  /*
    contenido += `<div class= "col-md-4>
    <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
      <h3 class="card-title">${producto.nombre}</h3>
      <p class="card-text">${producto.precio}</p>
      <a href="#" class="btn btn-primary">Agregar al carrito</a>
   
    </div>
  </div>
  </div>`
});

document.getElementById("contenedor").innerHTML = contenido;

*/



/* ESTE SI FUNCIONA
 
for (const producto of productos) {
    let div = document.createElement("div");
    div.className = "col-md-4 text-center "
    div.innerHTML = `<img src=${producto.imagen} class= "img-fluid" 
    <h3> ${producto.nombre}</h3>
    <p> ${producto.precio}</p>`
    document.getElementById("productos").appendChild(div);
}

*/


