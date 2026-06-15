/* Exercice 3 */

// Vérifie chaque ligne de la matrice
function F31() {
  for (let i = 0; i < to_verify.length; i++) {
    let ligne = to_verify[i]; // C'est déjà ton tableau de 9
    if (!F21(ligne)) {
      afficherErreur("Line", i, ligne);
    }
  }
}

// Vérifie chaque colonne de la matrice
function F32() {
  for (let j = 0; j < 9; j++) {
    let colonne = [];
    for (let i = 0; i < 9; i++) {
      colonne.push(to_verify[i][j]); // Extraction de la colonne
    }
    if (!F21(colonne)) {
      afficherErreur("Column", j, colonne);
    }
  }
}

// Vérifie chaque région 3x3 de la matrice
function F33() {
  for (let r = 0; r < 9; r += 3) {
    for (let c = 0; c < 9; c += 3) {
      let region = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          region.push(to_verify[r + i][c + j]);
        }
      }
      if (!F21(region)) {
        afficherErreur("Region", (r / 3) * 3 + c / 3, region);
      }
    }
  }
}

// Fonction utilitaire pour ajouter une ligne d'erreur au tableau HTML
function afficherErreur(nomTest, index, valeurs) {
  errorFound = true;
  let numero = index + 1;

  let html = `<tr><td>${nomTest} ${numero} incorrect</td>`;
  valeurs.forEach((v) => {
    html += `<td>${v}</td>`;
  });
  html += "</tr>";

  document.getElementById("table-erreurs").innerHTML += html;
}
