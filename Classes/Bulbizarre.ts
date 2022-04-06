import { Pokemon } from "../interfaces/Pokemon";
import { TypePlante } from "./TypePlante";

export class Bulbizarre extends TypePlante implements Pokemon {
	pv: number;
	pvMax: number;
	type: string;
	captif: boolean; 
	horsJeu: boolean;
	nom: string;
	

	constructor(pvMax: number, degats: number) {
	super(degats);
	this.captif = false;
	this.horsJeu = false;
	this.nom = "Bulbizarre";
	this.pv = pvMax; 
	this.pvMax = pvMax;
	this.type = "Type Plante";
	}


	attaquer(adversaire : Pokemon): number {
		if( adversaire.type == "Type Plante") {
		return this.calculerDegatsContrePlante()
		} else if ( adversaire.type == "Type Feu") {
			return this.calculerDegatsContreFeu()
		} else {
			return this.calculerDegatsContreEau()
		}
	}

	subirAttaque( degats : number ): void {
		this.pv = this.pv - degats;
		if (this.pv <= 0) {
			this.horsJeu = true;
			console.log("Pokemon HS")
		} 
	}

	soigner(): void {
		if (this.pv < 100) {
		this.pv = this.pvMax;
		} else {
		throw new Error("Le pokemon est full santé")
		}
	}

	renommer( value : string): string {
	this.nom = value;
	return this.nom;
}

}