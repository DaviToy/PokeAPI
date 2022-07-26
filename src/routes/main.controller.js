const express = require('express');

const dummyRouter  = require('./dummyes/index');
const pokemonsRouter = require('./pokemons/index');
// const customersRouter = require('./customers/index');

const routerApi = (app) => {
    // 6.1 Puntos de entrada de la API
    app.use('/dummy', dummyRouter);
    app.use('/pokemons', pokemonsRouter);
    // router.use('/customers', customersRouter);
};

module.exports = routerApi;