export interface Type {
	degats : number;


/**
 * Méthode qui permet d'attaquer un adversaire de type Feu
 */
	calculerDegatsContreFeu() : void ;

/**
 * Méthode qui permet d'attaquer un adversaire de type Eau
 */
	calculerDegatsContreEau() : void ; 

/**
 * Méthode qui permet d'attaquer un adversaire de type Plante
 */
	calculerDegatsContrePlante() : void ; 

}