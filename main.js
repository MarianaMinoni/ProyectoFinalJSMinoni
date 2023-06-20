

// //Carrito tienda 

/*
 class Carrito {
   constructor(){
       this.productos = []
   }

   agregarProducto(nombreProducto, precioProducto){
       this.productos.push({id:this.generarId(), nombre: nombreProducto, precio: precioProducto})
   }

   quitarProductos(id){
      this.productos =  this.productos.filter(item => item.id != id)
  }

   totalProductos(){
       return this.productos.length
   }


   totalPrecio(){
       let total = 0
       this.productos.forEach(item => {
           total += item.precio
       })

       return total

   }

   generarId(){
      let max = 0

     this.productos.forEach(item => {
      if (item.id > max){
       max = item.id
     }
  })
   return max + 1
  }


   listaDeProductos(){       let contenido = "productos agregados:  \n\n"
      
      this.productos.forEach(item => {           contenido += `${item.id} - ${item.nombre} - $${item.precio}\n`       })
       return contenido   }


 }




 let nombre = ""
 let precio = 0
 const carrito = new Carrito()
 let menu = "Ingrese la opción deseada\n\n1 - para agregar prendas\n2 - para ver el carrito\n3 - para eliminar productos\n4 - Para finalizar\n0 - para salir"
 let opcion;
 let id;

 do {
   opcion = pedirOpcion(menu)
   switch (opcion) {
     case 1:
     nombre= prompt("Ingrese el nombre del producto: \n\n\n(Escriba SALIR para volver al menú anterior)")

       if(nombre.toLocaleUpperCase() == "SALIR"){
       break;
      }
      precio = parseFloat(prompt("Ingrese el precio del producto"))
      carrito.agregarProducto(nombre,precio)

  
      break;
    case 2:
      alert(`${carrito.listaDeProductos()}\nTotal a pagar: $${carrito.totalPrecio()}`)

       break; 
       case 3:
     let id;
 while (id != 0) {     id= parseInt(prompt(carrito.listaDeProductos() + "Ingrese el ID del producto a eliminar - (0 para salir)"))
   
   
   if(id > 0){     carrito.quitarProductos(id);    }

    if (carrito.totalProductos() == 0 ) {
     break;

 }
   
 alert(`${carrito.listaDeProductos()}\nTotal a pagar: $${carrito.totalPrecio()}`)


 }       break;

       case 4:
         alert("Gracias por su compra")
          break;
       case 0:
        alert("Gracias por su visita")
         break;
     default:
       alert("Ingrese una opción correcta")
       break;
   }
 }while (id != "SALIR");




 function pedirOpcion(mensaje) {
   return Number(prompt(mensaje))
 }


*/


// render de productos


const productos = [
    {id: 1, nombre:"pantalón", precio: 4500, imagen:"https://media.istockphoto.com/id/510615049/es/foto/hombres-pantalones-de.jpg?s=612x612&w=0&k=20&c=6iYxNTSr6-66AIiHIx8nqRj8_CCquo2oXdxRs2u0l9Y=" },
    {id: 2, nombre: "remera", precio: 2000, imagen: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg"},
    {id:3, nombre: "medias", precio: 700, imagen: "https://tienda.guantexindustrial.com.ar/1551-large_default/medias-te56a-para-frio-97-poliamida-3-elastodieno.jpg"},
    {id:4, nombre: "campera", precio: 10000, imagen: "https://calvinargentina.vteximg.com.br/arquivos/ids/167259-650-709/J20J215004_LDD_1.jpg?v=637745011680970000"},
    {id:5, nombre: "camisa", precio:4000, imagen:"https://provelog.com/wp-content/uploads/7784-888007-600x600.png"},
    {id:6, nombre: "sweater", precio: 5000, imagen: "https://http2.mlstatic.com/D_NQ_NP_636392-MLA49623948363_042022-O.webp"},
]

/*

for (const producto of productos) {
    let div = document.createElement("div");
    div.className = "col-md-4 text-center "
    div.innerHTML = `<img src=${producto.imagen} class= "img-fluid" 
    <h3> ${producto.nombre}</h3>
    <p> ${producto.precio}</p>`
    document.getElementById("productos").appendChild(div);
}

*/

function guardarProductosLS(){
    localStorage.setItem("porductos", JSON.stringify(productos))
}

function cargarProductosLS(){
   return JSON.parse(localStorage.getItem("productos"))
}

guardarProductosLS();
guardarProductosLS();



function renderProductos(){
let productos = cargarProductosLS();
let contenido = "";

productos.forEach(producto => {
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

document.getElementById("container").innerHTML = contenido;
}

renderProductos()

