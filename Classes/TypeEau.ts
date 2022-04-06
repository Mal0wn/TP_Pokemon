import { Type } from "../interfaces/Type"
import { Pokemon } from "../interfaces/Pokemon";

export abstract class TypeEau implements Type {

	degats: number;

	calculerDegatsContreFeu(): number{
		return this.degats * 2 ; 
	}
	calculerDegatsContreEau(): number {
		return this.degats  ; 
	}
	calculerDegatsContrePlante(): number {
		return this.degats / 2 ; 
	}

	

}