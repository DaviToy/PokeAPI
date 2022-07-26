const express = require('express');

const dummyRouter  = require('./dummyes/index');
const pokemonsRouter = require('./pokemons/index');
const charactersRouter = require('./characters/index')
// const customersRouter = require('./customers/index');

const routerApi = (app) => {
    // 6.1 Puntos de entrada de la API
    app.use('/dummy', dummyRouter);
    app.use('/pokemons', pokemonsRouter);
    app.use('/characters', charactersRouter)
    // router.use('/customers', customersRouter);
};

module.exports = routerApi;