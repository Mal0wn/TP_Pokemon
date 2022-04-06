import { Type } from "../interfaces/Type"

export abstract class TypePlante implements Type {

	degats: number;

	constructor(degats: number, ) {
	this.degats = degats ;
	
	}

	calculerDegatsContreFeu(): number{
		return this.degats / 2 ; 
	}
	calculerDegatsContreEau(): number {
		return this.degats * 2  ; 
	}
	calculerDegatsContrePlante(): number {
		return this.degats  ; 
	}

}