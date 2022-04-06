import { Type } from "../interfaces/Type"

export abstract class TypeEau implements Type {

	degats: number;

	calculerDegatsContreFeu(): void {
		throw new Error("Method not implemented.");
	}
	calculerDegatsContreEau(): void {
		throw new Error("Method not implemented.");
	}
	calculerDegatsContrePlante(): void {
		throw new Error("Method not implemented.");
	}

	

}