

// render de productos


const productos = [
    {id:1, nombre: "Buzo Nike canguro", precio: 6500, imagen: "./imagenes/hombre/buzonike.jpeg", categoria: "hombre"},
    {id:2, nombre: "Remera Deportiva jaspeada", precio: 4000, imagen: "./imagenes//mujer/remerajaspeada.jpeg", categoria: "mujer"},
    {id:3, nombre: "Medias", precio: 2500, imagen: "./imagenes/medias.jpeg", categoria: "unisex"},
    {id:4, nombre: "Calza de lycra estampada con bolsillos", precio:4500, imagen:"./imagenes/mujer/calzabolsillo.jpeg", categoria: "mujer"},
    {id:5, nombre: "Calza térmica mujer", precio: 3000, imagen: "./imagenes/mujer/calzatermicalisa.jpeg", categoria: "mujer"},
    {id:6, nombre: "Jogging Adidas de algodón", precio: 5500, imagen: "./imagenes/hombre/pantalonhombreadidas.jpeg", categoria: "hombre"},
    {id:7, nombre: "Buzo térmico con capucha", precio: 5000, imagen: "./imagenes/mujer/buzotermico.jpeg", categoria: "mujer"},
    {id:8, nombre: "Camiseta térmica Hombre", precio: 3700, imagen:"./imagenes/hombre/camisetagris.jpeg" , categoria: "hombre"},
    {id:9, nombre: "Camiseta térmica mujer", precio: 3700, imagen: "./imagenes/mujer/camisetamujer.jpeg", categoria: "mujer"},
    {id:10, nombre: "Camiseta térmica niño", precio: 2500, imagen: "./imagenes/niño/camisetatermicaniño.jpeg", categoria: "niño"},
    {id:11, nombre: "Calza térmica niño", precio:2500, imagen: "./imagenes/niño/calzatermicaniño.jpeg", categoria: "niño"},
    {id:12, nombre: "Buzo Argentina niño", precio:5000, imagen:"./imagenes/niño/buzoargentina.jpeg", categoria: "niño"},
    {id:13, nombre: "Remeras adidas mujer", precio: 2500, imagen: "./imagenes/mujer/remeraadidas.jpeg", categoria: "mujer"},
    {id:14, nombre: "Cuellito térmico de lycra", precio: 1000, imagen: "./imagenes/cuellito.jpeg", categoria: "unisex"},
    {id:15, nombre: "Calza Adidas clásica 3 tiras", precio: 4500, imagen: "./imagenes/mujer/calza3tiras.jpeg", categoria: "mujer"},
    {id:16, nombre: "Top deportivo", precio: 2500, imagen: "./imagenes/mujer/top.jpeg", categoria: "mujer"},
   
];


function guardarProductosLS(){
    localStorage.setItem("porductos", JSON.stringify(productos));
}


function cargarProductosLs(){
   return JSON.parse(localStorage.getItem("productos"));
}

guardarProductosLS();





