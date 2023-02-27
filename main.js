//Productos
let nombreCliente = prompt("Nombre del Cliente");
console.log (nombreCliente);

const passAutorizado= 123456;
for (let i=0; i<3; i++){
  let passwordUsuario = parseInt(prompt("ingrese su contraseña Numerica"));
  if (passwordUsuario == passAutorizado){
          alert("contraseña correcta");
          break;
      } else {
          alert("contraseña incorrecta");
      }
    }

let productoUno = 800;
let productoDos = 900;
let productoTres = 1600;
let total =  (productoUno + productoDos + productoTres)
alert ("producto: Cat Chow = "+ productoUno + "\nProducto: Dog Chow ="+productoDos + "\nProducto: correa rosa dog ="+productoTres + "\nTotal a Pagar="+ total);
console.log(total);
let saludo = alert("Gracias por su compra")
  
     

