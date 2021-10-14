let items = [];
function recibirEdad() {
    let edad;
    //edad = prompt("Digite su edad");
    return edad;
}

function ordenarEdad(edad) {
    console.log(edad);
    let objeto ={
        "edad": edad,
        "nombre": document.getElementById("campoNombre").value,
        "contrasena": document.getElementById("campoContrasena").value,
        "correo": document.getElementById("campoCorreo").value,
        "confirmacionContrasena": document.getElementById("campoconfirmarContrasena").value,
        "telefono": document.getElementById("campoTelefono").value,
    }
        if (items.length < 20){
            items.push(objeto);
        }
        items.sort((x, y) => y.edad - x.edad);
        //console.log(items);
        return items;
    }

    function promedioEdad(args) {
        let sumador = 0;
        for (var key in args){
            sumador = sumador + args[key]["edad"]
        }
        let promedio = sumador / args.length;
        return promedio;

    }


module.exports.recibirEdad = recibirEdad;
module.exports.ordenarEdad = ordenarEdad;
module.exports.promedioEdad = promedioEdad;