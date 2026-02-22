import bcrypt from "bcrypt";

const password = "PaysBasque26/";

console.log("Longueur password :", password.length);
console.log("Contenu exact :", JSON.stringify(password));

bcrypt.hash(password, 10).then(hash => {
  console.log("HASH :", hash);
});