import { Dresseur } from "./Dresseur";
import { Pokemon } from "../interfaces/Pokemon";

export class Pokeball {

	contient! : Pokemon;
	proprietaire! : Dresseur;

	constructor( proprietaire: Dresseur) {
	this.proprietaire = proprietaire!;
	}



/**
 * Donne le contenu de la Pokeball donc soit vide ou contient un Pokemon et lequel
 */
	getContenu() : void {

	try {
	this.contient.nom ;
		if ( !this.contient.nom ) {
			console.log("La Pokeball est vide")
		} else {
			console.log(this.contient.nom)
		}
		
	} catch {
		
	}
		
	};

	affecterPokemon( pokemon : Pokemon ) : void {
		if (!this.contient) {
			this.contient = pokemon
		}
	}
 

}