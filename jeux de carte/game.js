var rule1 = "Tu bois 1 gorgee !";
var rule2 = "Tu  distibue 2 gorgees !";
var rule3 = "Tu distribue 3 gorgees !";
var rule4 = "Tu distribue 4 gorgees !";
var rule5 = "Tu distribue 5 gorgees !";
var rule6 = "Tu distribue 6 gorgees !";
var rule7 = "Tu as un tour pour crier 'BISKIT' le dernier a le répéter bois 2 gorgees ! "; /* REGLES */
var rule8 = "Tu as un tour pour crier 'FREEZE', tu distribues 2 gorgees au premier que tu vois bouger ! ";
var rule9 = "Enonce quelque chose que tu n'as jamais fait, ceux qui l'ont deja fais boivent une gorgee !";
var rule10 = "Choisis un theme (exemple: 'marque de cigarette') chacun votre tour donner un exemple celui qui repete ou n'a plus d'idee bois 2 gorgees, tu commences !";
var rule11 = "tu as un tour pour poser ton pouce sur la table, le dernier a t'imiter devra boire 2 gorgees !";
var rule12 = "Tu as un tour pour determiner une nouvelle regle qui s'appliquera jusqu'a la prochaine dame !";
var rule13 = "Tu as un tour pour effectuer une action stupide le dernier a t'imiter bois 3 gorgees !";

var cartes = ["url('cards/as_pique.svg')", "url('cards/2_pique.svg')", "url('cards/3_pique.svg')", "url('cards/4_pique.svg')", "url('cards/5_pique.svg')", "url('cards/6_pique.svg')",
    "url('cards/7_pique.svg')", "url('cards/8_pique.svg')", "url('cards/9_pique.svg')", "url('cards/10_pique.svg')", "url('cards/valet_pique.svg')", "url('cards/dame_pique.svg')", "url('cards/roi_pique.svg')",
    "url('cards/as_trefle.svg')", "url('cards/2_trefle.svg')", "url('cards/3_trefle.svg')", "url('cards/4_trefle.svg')", "url('cards/5_trefle.svg')", "url('cards/6_trefle.svg')", "url('cards/7_trefle.svg')",
    "url('cards/8_trefle.svg')", "url('cards/9_trefle.svg')", "url('cards/10_trefle.svg')", "url('cards/valet_trefle.svg')", "url('cards/dame_trefle.svg')", "url('cards/roi_trefle.svg')", "url('cards/as_carreau.svg')",
    "url('cards/2_carreau.svg')", "url('cards/3_carreau.svg')", "url('cards/4_carreau.svg')", "url('cards/5_carreau.svg')", "url('cards/6_carreau.svg')", "url('cards/7_carreau.svg')", "url('cards/8_carreau.svg')",
    "url('cards/9_carreau.svg')", "url('cards/10_carreau7.svg')", "url('cards/valet_carreau.svg')", "url('cards/dame_carreau.svg')", "url('cards/roi_carreau.svg')", "url('cards/as_coeur.svg')", "url('cards/2_coeur.svg')",
    "url('cards/3_coeur.svg')", "url('cards/4_coeur.svg')", "url('cards/5_coeur.svg')", "url('cards/6_coeur.svg')", "url('cards/7_coeur.svg')", "url('cards/8_coeur.svg')", "url('cards/9_coeur.svg')", "url('cards/10_coeur.svg')",
    "url('cards/valet_coeur.svg')", "url('cards/dame_coeur.svg')", "url('cards/roi_coeur.svg')"
]; /* tableau contenant les URLS de toutes les images correspondant aucartes */

var rules = [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13,
    rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13
]; /* tableau contenant les regles associées au cartes dans le meme ordre */

var count = 52; /* compteur de cartes */

var counter = 0;



function verif_submit() {
    var prenoms = [document.getElementById("p1").value, document.getElementById("p2").value, document.getElementById("p3").value, document.getElementById("p4").value, document.getElementById("p5").value, document.getElementById("p6").value];
    if (prenoms[0] == "" || prenoms[1] == "") {
        alert("Il faut etre au moins 2 joueurs pour lancer la partie");
    } else {
        document.getElementById("preloader").style.visibility = "hidden";
    }
    for (i = 0; i < prenoms.length; i++) {
        if (prenoms[i] == "") {
            prenoms.splice(i, 1);
        }
    }
    return prenoms
}

function random_card() {
    return Math.floor(Math.random() * cartes.length); /* fonction qui renvoie un nombre aléatoire entre 0 et le nombre d'éléments de la var cartes */
}


function mOver() {
    document.getElementById("paq").src = "paquet1.png";
}

function mOut() {
    document.getElementById("paq").src = "paquet0.png";
}


function test() {
    var name;
    name = verif_submit();
    var x = "";
    x = random_card(); /* affectation d'un nombre random */
    if (count > 1) {
        document.getElementById("item_img").style.backgroundImage = cartes[x];
        document.getElementById("item_img").classList.add("animated", "flip", "faster");
        document.getElementById("item_text").innerHTML = rules[x];
        document.getElementById("name").innerHTML = name[counter];
        document.getElementById("compteur").innerHTML = count + " " + "cartes restantes";

        cartes.splice(x, 1);
        rules.splice(x, 1);
        count -= 1;
        if (counter == (name.length - 1)) {
            counter = 0;
        } else {
            counter += 1;
        }

    } else {
        document.getElementById("item_img").style.backgroundImage = cartes[x];
        document.getElementById("item_text").innerHTML = rules[x];
        document.getElementById("compteur").innerHTML = count + " " + "cartes restantes";
        alert("le jeu est finis !");
    }

}