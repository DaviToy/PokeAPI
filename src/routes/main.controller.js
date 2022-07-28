const express = require('express');

const dummyRouter  = require('./dummyes/index');
const pokemonskantoRouter = require('./pokemonskanto/index');
const pokemonsjohtoRouter = require('./pokemonsjohto/index')
const charactersRouter = require('./characters/index')
// const customersRouter = require('./customers/index');

const routerApi = (app) => {
    // 6.1 Puntos de entrada de la API
    app.use('/dummy', dummyRouter);
    app.use('/pokemonskanto', pokemonskantoRouter);
    app.use('/pokemonsjohto', pokemonsjohtoRouter)
    app.use('/characters', charactersRouter)
    // router.use('/customers', customersRouter);
};

module.exports = routerApi;