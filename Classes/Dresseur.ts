import { Pokemon } from "../interfaces/Pokemon";
import { Pokeball } from "./Pokeball";
export class Dresseur {

	nom : string;
	pokeballs: Array<Pokeball>; 

	constructor(nom: string, pokeballs: Array<Pokeball>) {
	this.nom = nom;
	this.pokeballs = pokeballs
	}

/**
 * 
 * @param number : Methode qui va permettre d'ajouter des Pokeballs dans l'inventaire du dresseur 
 */
	ajouterPokeballs( number : number ) : void {
		for ( let i = 0 ; i < number ; i ++){
			if(this.pokeballs.length > 5) {
				console.log("Inventaire Plein");
			} else {
				this.pokeballs.push(new Pokeball())
			}	
		}
		console.log("Inventaire :");
		console.log(this.pokeballs.length)
		
	}

/**
 * 
 * @param pokemon : Methode qui va prendre en parametre un pokemon et le stocker dans une pokeball 
 */
	 capture(pokemon : Pokemon) : void {
		try{
			//Je map mon inventaire de pokeball
			this.pokeballs.map(pokeball => {
			// Si la pokeball de contient pas de pokemon
				if(!pokeball.contient){
					//J'affecte le Pokemoon a la pokeball
					pokeball.affecterPokemon(pokemon);
					console.log("Félicitation " + pokemon.nom + " à été capturé !");
				}
			})
		}catch{
			this.pokeballs.filter(index => { console.log(index) });
		}
	 }
/**
 * Methode qui récupère la liste des Pokémons dans l'inventaire du dresseur ?
 */
	 getPokemons( ) : void {
		console.log("Voici la liste des pokemons :")
			this.pokeballs.forEach( pokeball => {
			pokeball.getContenu();
			}
		)
	 }


}