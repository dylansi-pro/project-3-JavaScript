/* Exercice 2 */

// Vérifie si un tableau de 9 éléments contient les chiffres de 1 à 9 sans doublon.

function F21(inputArray) {
  // Vérification de A (grille) est bien un tableau à 9 éléments.
  if (!Array.isArray(inputArray) || inputArray.length !== 9) {
    return false;
  }
  // Utilisation de Set pour vérifier l'unicité des éléments
  const setVerification = new Set();

  for (let i = 0; i < inputArray.length; i++) {
    const valeur = inputArray[i];
    if (typeof valeur !== "number" || valeur < 1 || valeur > 9) {
      return false;
    }
    setVerification.add(valeur);
  }
  return setVerification.size === 9;
}
