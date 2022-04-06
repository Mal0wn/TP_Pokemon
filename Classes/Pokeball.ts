import { Dresseur } from "./Dresseur";
import { Pokemon } from "../interfaces/Pokemon";

export class Pokeball {

	_contient! : Pokemon;
	_proprietaire! : Dresseur;

constructor( contient : Pokemon , proprietaire : Dresseur) {

	this._contient = contient;
	this._proprietaire = proprietaire;
}

	attaquer(): void {
		throw new Error("Method not implemented.");
	}
	subirAttaque(): void {
		throw new Error("Method not implemented.");
	}
	soigner(): void {
		throw new Error("Method not implemented.");
	}
	renommer(): void {
		throw new Error("Method not implemented.");
	}
 

}