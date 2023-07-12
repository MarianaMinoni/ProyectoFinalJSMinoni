
function guardarCarritoLS(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
    
    }
    
    function cargarCarritoLS(){
      return JSON.parse(localStorage.getItem("carrito")) || [];
      
      }


      

function agregarProducto(id){

    const productos = cargarProductosLS();
    const carrito= cargarCarritoLS();
    const producto= productos.find(item => item.id===id);
    carrito.push(producto);
    guardarCarritoLS(carrito);
   
    }



function renderProductos(){
    let productos = cargarCarritoLS();
    let contenido ="";

    if(cantidadTotalProductos() > 0){
       contenido +=  `<td> <button class="btn bg-light btn-sm text-end class= colspan="4"" onClick="vaciarCarrito();"> Vaciar Carrito</button></td>`
     contenido += `<table class="table">
     
     <tr >
     <td>Artículo</td>
     <td> Descripción</td>
     <td>Precio</td>
     <td></td>
     </tr>`;
      
     
      productos.forEach(producto => {
        contenido += `
      
        <tr>
        <td> <img src="${producto.imagen}" alt="${producto.nombre}" width="32"> </td>
        <td class="align-middle"> ${producto.nombre} </td>
        <td class="align-middle">${producto.cantidad} X $${producto.precio} </td>
        <td class="align-middle">$${producto.cantidad * producto.precio} </td>
        <td class="align-middle"> <img src="imagenes/trash3.svg" alt="eliminar producto" width="24" onClick = "eliminarProducto(${producto.id})" "class="text-end" > </td>
        </tr>`



      });

   
      contenido += `<tr>
      <td class="align-middle colspan="2">Saldo Total</td>
      <td></td>
      <td></td>
      <td class="align-middle" >$${sumaTotalProductos().toFixed(2)}</td>
      <td></td>

      </tr>
      </table>`;
    }   else { 
        contenido += `<div class="alert alert-secondary text-center" role="alert">
    No se encontraron productos en el carrito!
      </div>`

    } 
      
      document.getElementById("contenido").innerHTML = contenido;
   
};

      renderProductos();

    renderBotonCarrito();