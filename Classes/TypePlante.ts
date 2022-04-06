import { Type } from "../interfaces/Type"

export abstract class TypePlante implements Type {


	_degats: number;


	attaquerFeu(): void {
		throw new Error("Method not implemented.");
	}
	attaquerEau(): void {
		throw new Error("Method not implemented.");
	}
	attaquerPlante(): void {
		throw new Error("Method not implemented.");
	}

	

}