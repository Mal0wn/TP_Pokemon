import { Dresseur } from "./Dresseur";
import { Pokemon } from "../interfaces/Pokemon";

export class Pokeball {

	contient! : Pokemon;
	proprietaire! : Dresseur;



/**
 * Donne le contenu de la Pokeball donc soit vide ou contient un Pokemon et lequel
 */
	getContenu() : void {
		this.contient.nom ;
		if ( !this.contient.nom ) {
			console.log("La Pokeball est vide")
		} else {
			console.log(this.contient.nom)
		}

	};

	affecterPokemon( pokemon : Pokemon ) : void {
		if (!this.contient.nom) {
			this.contient.nom == pokemon.nom;
		}
	}
 

}