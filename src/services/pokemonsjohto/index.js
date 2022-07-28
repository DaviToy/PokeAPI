class PokemonsjohtoServices {

    constructor() {
        this.pokemonsjohto = [];
        this.generateData();
    }

    generateData() {
        this.pokemonsjohto = [
            { id: 1, name: 'Chikorita', type: 'planta', height: 6 },
            { id: 2, name: 'Cyndaquil', type: 'fuego', height: 7 },
            { id: 3, name: 'Slugma', type: 'fuego', height: 35 },
            { id: 4, name: 'Porygon2', type: 'normal', height: 32 },
            { id: 5, name: 'Hitmontop', type: 'lucha', height: 48 },
            { id: 6, name: 'Magby', type: 'fuego', height: 21 },
            { id: 7, name: 'Unown', type: 'psiquico', height: 5 },
        ];
    }

    create(newPokemonjohto) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                this.pokemonsjohto.push(newPokemonjohto);
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
                    const filteredData = this.pokemonsjohto.filter(pokemonjohto => pokemonjohto.height >= height);
                    // 6.1.6 En caso de exito usar resolve();
                    resolve(filteredData);
                }
                resolve(this.pokemonsjohto);
            }, 1000);
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const pokemonjohto = this.pokemonsjohto.find(pokemonjohto => pokemonjohto.id === parseInt(id));
                // if (shoe !== '' && shoe !== 0 && shoe !== null && shoe !== undefined) {
                if (pokemonjohto) {
                    resolve(pokemonjohto);
                }
            }, 1000);
        });
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonsjohto.findIndex(pokemonjohto => pokemonjohto.id === parseInt(id));
                if (indexFounded !== -1) {
                    let pokemonsjohtoCopy = [ ...this.pokemonsjohto ];
                    const newBody = this.pokemonsjohto[indexFounded];
                    pokemonsjohtoCopy[indexFounded] = { ...newBody, ...body };
                    this.pokemonsjohto = [ ...pokemonsjohtoCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonsjohto.findIndex(pokemonjohto => pokemonjohto.id === parseInt(id));
                if (indexFounded !== -1) {
                    let pokemonsjohtoCopy = [ ...this.pokemonsjohto ];
                    pokemonsjohtoCopy[indexFounded] = { id, ...body };
                    this.pokemonsjohto = [ ...pokemonsjohtoCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonsjohto.findIndex(pokemonjohto => pokemonjohto.id === parseInt(id));
                if (indexFounded !== -1) {
                    const pokemonsjohtoCopy = [ ...this.pokemonsjohto ];
                    pokemonsjohtoCopy.splice(indexFounded, 1);
                    this.pokemonsjohto = [ ...pokemonsjohtoCopy ];
                    resolve();
                }
            }, 1000);
        });
    }
}

module.exports = PokemonsjohtoServices;