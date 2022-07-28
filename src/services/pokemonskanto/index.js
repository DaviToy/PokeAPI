class PokemonskantoServices {

    constructor() {
        this.pokemonskanto = []
        this.generateData()
    }

    generateData() {
        this.pokemonskanto = [
            { id: 1, name: 'Charizard', type: 'fuego/volador', height: 90 },
            { id: 2, name: 'Squirtle', type: 'agua', height: 9 },
            { id: 3, name: 'Metapod', type: 'bicho', height: 9 },
            { id: 4, name: 'Caterpie', type: 'bicho', height: 2 },
            { id: 5, name: 'Rattata', type: 'normal', height: 3 },
        ]
    }

    create(newPokemonkanto) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.pokemonskanto.push(newPokemonkanto)
                resolve()
            }, 1000)
        })
    }

    findAll(height) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (height) {
                    const filteredData = this.pokemonskanto.filter(pokemonkanto => pokemonkanto.height >= height)
                    resolve(filteredData)
                }
                resolve(this.pokemonskanto)
            }, 1000)
        })
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const pokemonkanto = this.pokemonskanto.find(pokemonkanto => pokemonkanto.id === parseInt(id))
                if (pokemonkanto) {
                    resolve(pokemonkanto)
                }
            }, 1000)
        })
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonskanto.findIndex(pokemonkanto => pokemonkanto.id === parseInt(id))
                if (indexFounded !== -1) {
                    let pokemonskantoCopy = [ ...this.pokemonskanto ]
                    const newBody = this.pokemonskanto[indexFounded]
                    pokemonskantoCopy[indexFounded] = { ...newBody, ...body }
                    this.pokemonskanto = [ ...pokemonskantoCopy ]
                    resolve()
                }
            }, 1000)
        })
    }

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonskanto.findIndex(pokemonkanto => pokemonkanto.id === parseInt(id))
                if (indexFounded !== -1) {
                    let pokemonskantoCopy = [ ...this.pokemonskanto ]
                    pokemonskantoCopy[indexFounded] = { id, ...body }
                    this.pokemonskanto = [ ...pokemonskantoCopy ]
                    resolve()
                }
            }, 1000)
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexFounded = this.pokemonskanto.findIndex(pokemonkanto => pokemonkanto.id === parseInt(id))
                if (indexFounded !== -1) {
                    const pokemonskantoCopy = [ ...this.pokemonskanto ]
                    pokemonskantoCopy.splice(indexFounded, 1)
                    this.pokemonskanto = [ ...pokemonskantoCopy ]
                    resolve()
                }
            }, 1000)
        })
    }
}

module.exports = PokemonskantoServices