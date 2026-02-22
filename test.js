import bcrypt from "bcrypt";

const password = "PaysBasque26/";
const hash = "$2b$10$3ogf5F24x3/0szjzGYEdFumVtZkJnhF8b9zBWUeNeQt7o/tzmEPSy";

console.log("Longueur test :", password.length);
console.log("Contenu test :", JSON.stringify(password));

bcrypt.compare(password, hash)
  .then(res => console.log("Résultat :", res));