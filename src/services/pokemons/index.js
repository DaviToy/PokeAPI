class PokemonsServices {

    constructor() {
        this.pokemons = [];
        this.generateData();
    }

    generateData() {
        this.pokemons = [
            { id: 1, name: 'Slaking', type: 'normal', height: 151 },
            { id: 2, name: 'Typhlosion', type: 'fire', height: 51 },
            { id: 3, name: 'Snorlax', type: 'normal', height: 421 },
            { id: 4, name: 'Rayquaza', type: 'dragon', height: 218 },
            { id: 5, name: 'Entei', type: 'fire', height: 249 },
        ];
    }

    create(newPokemon) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                this.pokemons.push(newPokemon);
                // 6.1.6 En caso de exito usar resolve();
                resolve();
            }, 1000);
        });
    }

    findAll(type) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                if (type) {
                    const filteredData = this.pokemons.filter(pokemon => pokemon.type >= type);
                    // 6.1.6 En caso de exito usar resolve();
                    resolve(filteredData);
                }
                resolve(this.pokemons);
            }, 1000);
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const pokemon = this.pokemons.find(pokemon => pokemon.id === parseInt(id));
                // if (shoe !== '' && shoe !== 0 && shoe !== null && shoe !== undefined) {
                if (pokemon) {
                    resolve(pokemon);
                }
            }, 1000);
        });
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemons.findIndex(pokemon => pokemon.id === parseInt(id));
                if (indexFounded !== -1) {
                    let pokemonsCopy = [ ...this.pokemons ];
                    const newBody = this.pokemons[indexFounded];
                    pokemonsCopy[indexFounded] = { ...newBody, ...body };
                    this.pokemons = [ ...pokemonsCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemons.findIndex(pokemon => pokemon.id === parseInt(id));
                if (indexFounded !== -1) {
                    let pokemonsCopy = [ ...this.pokemons ];
                    pokemonsCopy[indexFounded] = { id, ...body };
                    this.pokemons = [ ...pokemonsCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemons.findIndex(pokemon => pokemon.id === parseInt(id));
                if (indexFounded !== -1) {
                    const pokemonsCopy = [ ...this.pokemons ];
                    pokemonsCopy.splice(indexFounded, 1);
                    this.pokemons = [ ...pokemonsCopy ];
                    resolve();
                }
            }, 1000);
        });
    }
}

module.exports = PokemonsServices;