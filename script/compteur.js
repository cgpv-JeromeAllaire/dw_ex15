const INPUT_COMPTEUR = document.getElementById("compteur");
const BOUTON_MOINS = document.getElementById("bouton-moins");
const BOUTON_PLUS = document.getElementById("bouton-plus");
const INPUT_INCREMENT = document.getElementById("increment");
const REINITIALISER = document.getElementById("reinitialiser");

INPUT_COMPTEUR.value = 0;
INPUT_INCREMENT.value = 1;

let increment = 1;
let compteur = 0;

BOUTON_PLUS.addEventListener("click", NombreAugmente);
BOUTON_MOINS.addEventListener("click", NombreDiminue);
INPUT_INCREMENT.addEventListener("change", () => {
    increment = Number(INPUT_INCREMENT.value);
});
REINITIALISER.addEventListener("click", () => {
    INPUT_INCREMENT.value = 1;
    INPUT_COMPTEUR.value = 0;
    increment = 1;
    compteur = 0;
});

function ClassNegatif() {
    if (INPUT_COMPTEUR.value < 0) {
        INPUT_COMPTEUR.classList.add("negatif");
    } else {
        INPUT_COMPTEUR.classList.remove("negatif");
    }
}

function NombreAugmente() {
    compteur += increment;
    INPUT_COMPTEUR.value = compteur;
    ClassNegatif();
}

function NombreDiminue() {
    compteur -= increment;
    INPUT_COMPTEUR.value = compteur;
    ClassNegatif();
}