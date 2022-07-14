function getAdmins(myMap) {
  let admins = [];
  for([key, value] of myMap) {
    if (value === "admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("Ciclano", "admin");
usuarios.set("Beltrano", "user");
usuarios.set("Fulano", "admin");
usuarios.set("Abner", "user");

console.log(getAdmins(usuarios))