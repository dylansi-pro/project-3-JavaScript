/* Exercice 1 */

let to_verify = [];

// Conversion du tableau 1D fourni en matrice 9x9
function F11(data) {
  for (let i = 0; i < data.length; i++) {
    let ligne = data[i].split(" ").map(Number);
    to_verify.push(ligne);
  }
  console.log(to_verify);
}

// Formatage du tableau pour html
function F12() {
  let html = '<table border="1">';

  for (let i = 0; i < to_verify.length; i++) {
    html += "<tr>";
    for (let j = 0; j < to_verify[i].length; j++) {
      html += "<td>" + to_verify[i][j] + "</td>";
    }
    html += "</tr>";
  }
  html += "</table>";

  // Injection de la table dans le body du Html
  document.body.innerHTML += html;
}
