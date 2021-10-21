function validar_nombre(nombre) {
  let caracter_especial = ["@", "!", "_", "-", "/"];
  let caracter_numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  if (nombre.length > 4 && nombre.length <= 30) {
    for (let i = 0; i < caracter_especial.length; i++) {
      if (nombre.includes(caracter_especial[i])) {
        return false;
      }
    }
    for (let i = 0; i < caracter_numero.length; i++) {
      if (nombre.includes(caracter_numero[i])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function validar_contrasenas(contrasena1, contrasena2) {
  var espacios = false;
  var cont = 0;

  while (!espacios && cont < contrasena1.length) {
    if (contrasena1.charAt(cont) == " ") espacios = true;
    cont++;
  }

  if (espacios) {
    return false;
  }
  if (contrasena1.length == 0 || contrasena2.length == 0) {
    return false;
  }

  if (contrasena1 != contrasena2) {
    return false;
  } else {
    return true;
  }
}

module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;
