class CharactersServices {

    constructor() {
        this.characters = [];
        this.generateData();
    }

    generateData() {
        this.characters = [
            { id: 1, name: 'Ash Ketchum', region: 'Kanto', home: 'Pueblo Paleta' },
            { id: 2, name: 'Brock', region: 'Kanto', home: 'Ciudad Plateada' },
            { id: 3, name: 'Iris', region: 'Teselia', home: 'Aldea de los Dragones' },
            { id: 4, name: 'Serena', region: 'Kalos', home: 'Pueblo Vaniville' },
            { id: 5, name: 'Danny', region: 'Arch Naranja', home: 'Isla Ombligo' },
        ];
    }

    create(newCharacter) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                this.characters.push(newCharacter);
                // 6.1.6 En caso de exito usar resolve();
                resolve();
            }, 1000);
        });
    }

    findAll(region) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                if (region) {
                    const filteredData = this.characters.filter(character => character.region >= region);
                    // 6.1.6 En caso de exito usar resolve();
                    resolve(filteredData);
                }
                resolve(this.characters);
            }, 1000);
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const character = this.characters.find(character => character.id === parseInt(id));
                // if (shoe !== '' && shoe !== 0 && shoe !== null && shoe !== undefined) {
                if (character) {
                    resolve(character);
                }
            }, 1000);
        });
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.characters.findIndex(character => character.id === parseInt(id));
                if (indexFounded !== -1) {
                    let charactersCopy = [ ...this.characters ];
                    const newBody = this.characters[indexFounded];
                    charactersCopy[indexFounded] = { ...newBody, ...body };
                    this.characters = [ ...charactersCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.characters.findIndex(character => character.id === parseInt(id));
                if (indexFounded !== -1) {
                    let charactersCopy = [ ...this.characters ];
                    charactersCopy[indexFounded] = { id, ...body };
                    this.characters = [ ...charactersCopy ];
                    resolve();
                }
            }, 1000);
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.characters.findIndex(character => character.id === parseInt(id));
                if (indexFounded !== -1) {
                    const charactersCopy = [ ...this.characters ];
                    charactersCopy.splice(indexFounded, 1);
                    this.characters = [ ...charactersCopy ];
                    resolve();
                }
            }, 1000);
        });
    }
}

module.exports = CharactersServices;