export interface Pokemon {

	_nom : string;
	_pv : number;
	_pvMax : number; 
	_type : string; 
	_captif : boolean;
	_horsJeu : boolean;

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