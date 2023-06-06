

//Carrito tienda 


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



  listaDeProductos(){
      let contenido = "productos agregados:  \n\n"
      
      this.productos.forEach(item => {
          contenido += `${item.id} - ${item.nombre} - $${item.precio}\n`
      })

      return contenido
  }


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
       break
      }
      precio = parseFloat(prompt("Ingrese el precio del producto"))
      carrito.agregarProducto(nombre,precio)

  
      break
    case 2:
      alert(`${carrito.listaDeProductos()}\nTotal a pagar: $${carrito.totalPrecio()}`)


      break
    case 3:


    let id;

while (id != 0) {
    id= parseInt(prompt(carrito.listaDeProductos() + "Ingrese el ID del producto a eliminar - (0 para salir)"))
   
   
   if(id > 0){
    carrito.quitarProductos(id);
   }

   if (carrito.totalProductos() == 0 ) {
    break;

}
   
alert(`${carrito.listaDeProductos()}\nTotal a pagar: $${carrito.totalPrecio()}`)


}       break
      case 4:
         alert("Gracias por su compra")
         break
      case 0:
        alert("Gracias por su visita")
        break
    default:
      alert("Ingrese una opción correcta")
      break
  }
}while (id != "SALIR");




function pedirOpcion(mensaje) {
  return Number(prompt(mensaje))
}



