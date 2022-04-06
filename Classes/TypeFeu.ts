import { Pokemon } from "../interfaces/Pokemon";
import { Type } from "../interfaces/Type"

export abstract class TypeFeu implements Type {
	
	degats: number;


	constructor(degats: number, ) {
	this.degats = degats ;
	
	}
	calculerDegatsContreFeu(): number{
		return this.degats  ; 
	}
	calculerDegatsContreEau(): number {
		return this.degats/2  ; 
	}
	calculerDegatsContrePlante(): number {
		return this.degats * 2 ; 
	}
	

	

}