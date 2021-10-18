function verificarInicioSesion4(correo, contrasena, arreglo) {
  for (var key in arreglo) {
    if (
      arreglo[key]["correo"] == correo &&
      arreglo[key]["contrasena"] == contrasena
    ) {
      let valor; //= prompt("¿En que año se dio la batalla de boyaca?");
      let estado = verificarCaptcha4(valor);
      if (estado) {
        return true;
      }
    }
  }
  return false;
}

function verificarCaptcha4(respuesta) {
  if (respuesta == 1819) {
    return respuesta;
  } else {
    return false;
  }
}

let items = [];
function recibirEdad() {
  let edad;

  return edad;
}
function ordenarEdad(edad) {
  console.log(edad);
  let objeto = {
    edad: edad,
    nombre: document.getElementById("campoNombre").value,
    contrasena: document.getElementById("campoContrasena").value,
    correo: document.getElementById("campoCorreo").value,
    confirmacionContrasena: document.getElementById("campoconfirmarContrasena")
      .value,
    telefono: document.getElementById("campoTelefono").value,
  };
  if (items.length < 20) {
    items.push(objeto);
  }
  items.sort((x, y) => y.edad - x.edad);

  return items;
}

module.exports.verificarInicioSesion4 = verificarInicioSesion4;
module.exports.verificarCaptcha4 = verificarCaptcha4;
module.exports.ordenarEdad = ordenarEdad;
module.exports.recibirEdad = recibirEdad;
