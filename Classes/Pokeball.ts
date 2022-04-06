import { Dresseur } from "./Dresseur";
import { Pokemon } from "../interfaces/Pokemon";

export class Pokeball {

	_contient! : Pokemon;
	_proprietaire! : Dresseur;

constructor( contient : Pokemon , proprietaire : Dresseur) {

	contient = this._contient;
	proprietaire = this._proprietaire;
}

/**
 * Donne le contenu de la Pookeball donc soit vide ou contient un Pokemon et lequel
 */
	getContenu() : void {
	

	};

	affecterPokemon() : void {
	
	}
 

}