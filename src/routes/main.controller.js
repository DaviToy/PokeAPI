const express = require('express')

const pokemonskantoRouter = require('./pokemonskanto/index')
const pokemonsjohtoRouter = require('./pokemonsjohto/index')
const charactersRouter = require('./characters/index')

const routerApi = (app) => {
    // Puntos de entrada de la API
    app.use('/pokemonskanto', pokemonskantoRouter)
    app.use('/pokemonsjohto', pokemonsjohtoRouter)
    app.use('/characters', charactersRouter)
}

module.exports = routerApi