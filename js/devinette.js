/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var COUP_MAX = 6;
var proposition;
var numeroDeCoup = 1;
var resultatPrecedent = "";

console.log("Vous devez essayer de trouver un nombre entre 1 et 100.\n" +
	"Vous avez " + COUP_MAX + " coups pour deviner juste.\n" +
	"----------------------------------------------------\n" +
	"Il vous reste " + (COUP_MAX - numeroDeCoup + 1) + " tentatives.\n" +
	"Quelle est votre proposition (" + numeroDeCoup + " / " + COUP_MAX + ") ? ");

while ((proposition != solution) && (numeroDeCoup <= COUP_MAX)) {
	proposition = prompt ("Vous devez essayer de trouver un nombre entre 1 et 100.\n" +
		"Vous avez " + COUP_MAX + " coups pour deviner juste.\n" +
		"----------------------------------------------------\n" +
		"\n" + resultatPrecedent + "\n" +
		"Il vous reste " + (COUP_MAX - numeroDeCoup + 1) + " tentatives.\n" +
		"Quelle est votre proposition (" + numeroDeCoup + " / " + COUP_MAX + ") ? ");
	console.log("Proposition (" + numeroDeCoup + " / " + COUP_MAX + ") : " + proposition);
	if (isNaN(proposition)) {
		resultatPrecedent = "Attention ! La solution est forcément numérique ! Je ne compte pas ce coup. ";
	}
	else {
		if (proposition == solution) {
			resultatPrecedent = "Bravo, vous avez deviné juste en " + numeroDeCoup + " coup(s), c'est gagné !";
			alert(resultatPrecedent);
		}
		else {
			if (numeroDeCoup == COUP_MAX) {
				resultatPrecedent = "Vous avez utilisé tous vos coups et " + proposition + " n'est pas le résultat attendu.\n" +
					"La solution cherchée était " + solution + ", vous avez perdu !";
				alert(resultatPrecedent);
			}
			else {
				var sens = "grande";
				if (proposition > solution) {
					sens = "petite";
				}
				resultatPrecedent = "Presque ! La solution cherchée est plus " + sens + " que " + proposition + "...\n";
			}
			numeroDeCoup++;
		}
	}
	console.log(resultatPrecedent);
}
