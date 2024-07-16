"use strict";
function convertirArrayATitulos(array, tituloBuscado) {
    
    let objetos = [];

    for (let i = 0; i < array.length; i++) {
        
        let objeto = {
            id: i + 10,
            title: array[i]
        };
        
        objetos.push(objeto);
    }

    let idBuscado = null;
    for (let i = 0; i < objetos.length; i++) {
        if (objetos[i].title.toLowerCase() === tituloBuscado.toLowerCase()) {
            idBuscado = objetos[i].id;
            break;
        }
    }

    alert(`El id correspondiente al título "${tituloBuscado}" es: ${idBuscado}`);
    
    return idBuscado;
}

let libros = ["libro a", "libro b"];
convertirArrayATitulos(libros, "Libro a");