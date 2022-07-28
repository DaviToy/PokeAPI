class PokemonskantoServices {

    constructor() {
        this.pokemonskanto = [];
        this.generateData();
    }

    generateData() {
        this.pokemonskanto = [
            { id: 1, name: 'Slaking', type: 'normal', height: 151 },
            { id: 2, name: 'Typhlosion', type: 'fire', height: 51 },
            { id: 3, name: 'Snorlax', type: 'normal', height: 421 },
            { id: 4, name: 'Rayquaza', type: 'dragon', height: 218 },
            { id: 5, name: 'Entei', type: 'fire', height: 249 },
        ];
    }

    create(newPokemonkanto) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                this.pokemonskanto.push(newPokemonkanto);
                // 6.1.6 En caso de exito usar resolve();
                resolve();
            }, 1000);
        });
    }

    findAll(height) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                if (height) {
                    const filteredData = this.pokemonskanto.filter(pokemonkanto => pokemonkanto.height >= height);
                    // 6.1.6 En caso de exito usar resolve();
                    resolve(filteredData);
                }
                resolve(this.pokemonskanto);
            }, 1000);
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const pokemonkanto = this.pokemonskanto.find(pokemonkanto => pokemonkanto.id === parseInt(id));
                // if (shoe !== '' && shoe !== 0 && shoe !== null && shoe !== undefined) {
                if (pokemonkanto) {
                    resolve(pokemonkanto);
                }
            }, 1000);
        });
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonskanto.findIndex(pokemonkanto => pokemonkanto.id === parseInt(id));
                if (indexFounded !== -1) {
                    let pokemonskantoCopy = [ ...this.pokemonskanto ];
                    const newBody = this.pokemonskanto[indexFounded];
                    pokemonskantoCopy[indexFounded] = { ...newBody, ...body };
                    this.pokemonskanto = [ ...pokemonskantoCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonskanto.findIndex(pokemonkanto => pokemonkanto.id === parseInt(id));
                if (indexFounded !== -1) {
                    let pokemonskantoCopy = [ ...this.pokemonskanto ];
                    pokemonskantoCopy[indexFounded] = { id, ...body };
                    this.pokemonskanto = [ ...pokemonskantoCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonskanto.findIndex(pokemonkanto => pokemonkanto.id === parseInt(id));
                if (indexFounded !== -1) {
                    const pokemonskantoCopy = [ ...this.pokemonskanto ];
                    pokemonskantoCopy.splice(indexFounded, 1);
                    this.pokemonskanto = [ ...pokemonskantoCopy ];
                    resolve();
                }
            }, 1000);
        });
    }
}

module.exports = PokemonskantoServices;