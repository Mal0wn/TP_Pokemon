export interface Pokemon {

	nom : string;
	pv : number;
	pvMax : number; 
	type : string; 
	captif : boolean;
	horsJeu : boolean;

/**
 * Methode qui permet au pokemon d'attaquer son adversaire et lui infliger des dégats
 */
	attaquer() : void ;

/**
 * Methode qui va calculer les dégats subis par le pokemon
 */
	subirAttaque() : void ; 

/**
 * Méthode qui va soigner le pokemon et lui rendre des points de PV
 */
	soigner() : void ; 

/**
 * Méthode qui va permettre de changer le nom (str) du Pokemon
 */
	renommer() : void ; 

}