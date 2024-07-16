"use strict";
let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let nameToSearch = "Daniel";
function searchName(namesArray, nameToSearch) {
    if (namesArray.includes(nameToSearch)) {
      alert("Si se encuentra");
    } else {
      alert("No se encuentra");
    }
  }
  searchName(students, nameToSearch);