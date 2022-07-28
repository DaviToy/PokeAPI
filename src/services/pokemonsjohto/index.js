class PokemonsjohtoServices {

    constructor() {
        this.pokemonsjohto = []
        this.generateData()
    }

    generateData() {
        this.pokemonsjohto = [
            { id: 1, name: 'Chikorita', type: 'planta', weight: 6 },
            { id: 2, name: 'Cyndaquil', type: 'fuego', weight: 7 },
            { id: 3, name: 'Slugma', type: 'fuego', weight: 35 },
            { id: 4, name: 'Porygon2', type: 'normal', weight: 32 },
            { id: 5, name: 'Hitmontop', type: 'lucha', weight: 48 },
            { id: 6, name: 'Magby', type: 'fuego', weight: 21 },
            { id: 7, name: 'Unown', type: 'psiquico', weight: 5 },
        ]
    }

    create(newPokemonjohto) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.pokemonsjohto.push(newPokemonjohto)
                resolve()
            }, 1000)
        })
    }

    findAll(weight) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (weight) {
                    const filteredData = this.pokemonsjohto.filter(pokemonjohto => pokemonjohto.weight >= weight)
                    resolve(filteredData)
                }
                resolve(this.pokemonsjohto)
            }, 1000)
        })
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const pokemonjohto = this.pokemonsjohto.find(pokemonjohto => pokemonjohto.id === parseInt(id))
                if (pokemonjohto) {
                    resolve(pokemonjohto)
                }
            }, 1000)
        })
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonsjohto.findIndex(pokemonjohto => pokemonjohto.id === parseInt(id))
                if (indexFounded !== -1) {
                    let pokemonsjohtoCopy = [ ...this.pokemonsjohto ]
                    const newBody = this.pokemonsjohto[indexFounded]
                    pokemonsjohtoCopy[indexFounded] = { ...newBody, ...body }
                    this.pokemonsjohto = [ ...pokemonsjohtoCopy ]
                    resolve()
                }
            }, 1000)
        })
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonsjohto.findIndex(pokemonjohto => pokemonjohto.id === parseInt(id))
                if (indexFounded !== -1) {
                    let pokemonsjohtoCopy = [ ...this.pokemonsjohto ]
                    pokemonsjohtoCopy[indexFounded] = { id, ...body }
                    this.pokemonsjohto = [ ...pokemonsjohtoCopy ]
                    resolve()
                }
            }, 1000)
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonsjohto.findIndex(pokemonjohto => pokemonjohto.id === parseInt(id))
                if (indexFounded !== -1) {
                    const pokemonsjohtoCopy = [ ...this.pokemonsjohto ]
                    pokemonsjohtoCopy.splice(indexFounded, 1)
                    this.pokemonsjohto = [ ...pokemonsjohtoCopy ]
                    resolve()
                }
            }, 1000)
        })
    }
}

module.exports = PokemonsjohtoServices