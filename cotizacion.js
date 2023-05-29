function calcularTiempoRespuesta() {
    var ubicacion = document.getElementById("ubicacion").value;
    var tiempo;
  
    if (ubicacion.toLowerCase() === "san nicolas") {
      tiempo = 24;
    } else {
      tiempo = 48;
    }
  
    document.getElementById("resultado").innerHTML = "El tiempo de respuesta es de " + tiempo + " horas.";
  }

  