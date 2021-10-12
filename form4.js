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
  if (contrasena1 == "" && contrasena2 == "") {
    return false;
  } else {
    if (contrasena1.length != contrasena2.length) {
      return false;
    } else {
      if (contrasena1 == contrasena2) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;
