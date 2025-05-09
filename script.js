const calendrierDuCrayon = {
    septembre: 10, /* il y a 40 tirets (10 étages) */
    octobre: 9, /* il y a 36 tirets (9 étages) + GOMME 5 tirets */
    novembre: 8, /* il y a 32 tirets (8 étages) + GOMME 5 tirets */
    decembre: 7, /* il y a 28 tirets (7 étages) + GOMME 5 tirets */
    janvier: 6, /* il y a 24 tirets (6 étages) + GOMME 5 tirets */
    fevrier: 5, /* il y a 20 tirets (5 étages) + GOMME 5 tirets */
    mars: 4, /* il y a 16 tirets (4 étages) + GOMME A 1 ETAGE (3 tirets) */
    avril: 3, /* il y a 12 tirets (3 étages) + GOMME A 1 ETAGE (3 tirets) */
    mai: 2, /* il y a 8 tirets (2 étages) + GOMME A 1 ETAGE (3 tirets) */
    juin: 1, /* il y a 4 tirets (1 étages) + GOMME A 1 ETAGE (3 tirets) */
};
// const selectMonth = document.querySelector("#selectMonth");
let dashes = "";

function drawMyPenTip() { /* je dessine la pointe du crayon */
    console.log(" /\\");
    console.log("/__\\");
}
// drawMyPenTip();

function drawMyPenBody(month) {
    const floor = calendrierDuCrayon[month]; /* je définis le nombre d'étages correspondant à la valeur du mois */
    
    dashes = ""; /* j'initialise les tirets en tant que chaîne de caractères vide */
    for (let i = 0; i < floor; i++) { /* je lance une boucle dans laquelle on rajoute un bloc de 4 tirets à dashes tant que c'est inférieur au nombre d'étages, et qui va à la ligne à chaque fois */
        dashes += "||||\n";
    }
    console.log(dashes);

}
// drawMyPenBody("septembre");

function drawMyEraser(month) {
    if (month === "mars" || month === "avril" || month === "mai" ||month === "juin") {
        console.log("|__|");
        console.log("|__|");
    } else {
        console.log("|__|");
        console.log("|  |");
        console.log("|__|");
    }
}
// drawMyEraser("septembre");

function drawMyPen(month) {
    drawMyPenTip();
    drawMyPenBody(month);
    drawMyEraser(month)
}

drawMyPen("juin");
