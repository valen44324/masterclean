

function verificarEdad() {
    var edad = prompt("Por favor, ingresa tu edad:");
    
    if (edad >= 18) {
      alert("¡Bienvenido! Eres mayor de edad y tienes acceso al sitio.");
    } else {
      alert("Lo sentimos, eres menor de edad. Al ingresar, aceptas que lo haces bajo tu propia responsabilidad.");
    }
  }
  
  verificarEdad();
  



  window.onbeforeunload = function() {
    return "¿Estás seguro de que deseas salir de nuestro sitio?";
  };
  