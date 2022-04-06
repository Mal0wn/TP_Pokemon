export interface Type {
	degats : number;


/**
 * Méthode qui permet d'attaquer un adversaire de type Feu
 */
	calculerDegatsContreFeu() : number ;

/**
 * Méthode qui permet d'attaquer un adversaire de type Eau
 */
	calculerDegatsContreEau() : number ; 

/**
 * Méthode qui permet d'attaquer un adversaire de type Plante
 */
	calculerDegatsContrePlante() : number ; 

}