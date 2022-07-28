class CharactersServices {

    constructor() {
        this.characters = []
        this.generateData()
    }

    generateData() {
        this.characters = [
            { id: 1, name: 'Ash Ketchum', region: 1 , home: 'Pueblo Paleta' },
            { id: 2, name: 'Brock', region: 1, home: 'Ciudad Plateada' },
            { id: 3, name: 'Iris', region: 5, home: 'Aldea de los Dragones' },
            { id: 4, name: 'Serena', region: 6, home: 'Pueblo Vaniville' },
            { id: 5, name: 'Danny', region: 4, home: 'Isla Ombligo' },
        ]
    }

    create(newCharacter) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.characters.push(newCharacter)
                resolve()
            }, 1000)
        })
    }

    findAll(region) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (region) {
                    const filteredData = this.characters.filter(character => character.region >= region)
                    resolve(filteredData)
                }
                resolve(this.characters)
            }, 1000)
        })
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const character = this.characters.find(character => character.id === parseInt(id))
                if (character) {
                    resolve(character)
                }
            }, 1000)
        })
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.characters.findIndex(character => character.id === parseInt(id))
                if (indexFounded !== -1) {
                    let charactersCopy = [ ...this.characters ]
                    const newBody = this.characters[indexFounded]
                    charactersCopy[indexFounded] = { ...newBody, ...body }
                    this.characters = [ ...charactersCopy ]
                    resolve()
                }
            }, 1000)
        })
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.characters.findIndex(character => character.id === parseInt(id))
                if (indexFounded !== -1) {
                    let charactersCopy = [ ...this.characters ]
                    charactersCopy[indexFounded] = { id, ...body }
                    this.characters = [ ...charactersCopy ]
                    resolve()
                }
            }, 1000)
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.characters.findIndex(character => character.id === parseInt(id))
                if (indexFounded !== -1) {
                    const charactersCopy = [ ...this.characters ]
                    charactersCopy.splice(indexFounded, 1)
                    this.characters = [ ...charactersCopy ]
                    resolve()
                }
            }, 1000)
        })
    }
}

module.exports = CharactersServices