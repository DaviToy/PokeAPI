
/**
 * Capa route, utilizada para el mapeo de los path
 */
 const express = require('express');
 const pokemonsjohtoRouter = express.Router();
 const PokemonsjohtoServices = require('../../services/pokemonsjohto');
 
 const pokemonjohtoService = new PokemonsjohtoServices();
 
 // http://localhost:3000/shoes/
 // Query Params: Filtrar información
 // http://localhost:3000/shoes/?page=1&pageSize=10&brand=%22noke%22
 // %20 => espacio en blanco
 // %22 => comillas dobles
 pokemonsjohtoRouter.get('/', async (req, res) => {
     // 6.1.1: Leer la request
     const { height } = req.query;
     try {
         // 6.1.2: Acceder a la capa service para tener una respuesta
         const pokemonsjohto = await pokemonjohtoService.findAll(height);
         res.status(200).json(pokemonsjohto);
     } catch(error) {
         // 6.1.3: Si hay un error al acceder al services respondemos un error generico
         res.status(404).json( { message: 'no hay datos'} );
     }
     
 });
 
 // Request Param: Son utilizados para ejecutar operaciones sobre un elemento especifico
 // http://localhost:3000/shoes/999
 pokemonsjohtoRouter.get('/:id', async (req, res) => {
     const { id } = req.params;
     try {
         const foundedPokemonjohto = await pokemonjohtoService.findOne(id);
         res.status(200).send( { message: 'encontrado!', foundedPokemonjohto } );
     } catch {
         res.status(404).send({ message: 'ese id no existe' } );
     }
 });
 
 // http://localhost:3000/shoes/
 // { id: 4, brand: 'pima', type: 600, size: 26 }
 pokemonsjohtoRouter.post('/', async (req, res) => {
     // 6.1.1: Leer la request
     const newPokemonjohto = req.body;
     try {
         // 6.1.2: Acceder a la capa service para tener una respuesta
         await pokemonjohtoService.create(newPokemonjohto);
         res.status(201).send({message: 'Creacion exitosa'});
     } catch(error) {
         // 6.1.3: Si hay un error al acceder al services respondemos un error generico
         res.status(500).send( { message: 'intenten más tarde' } );
     }
 });
 
 // PARTIAL EDITION: PATCH
 pokemonsjohtoRouter.patch('/:id', async (req, res) => {
     const body = req.body;
     const { id } = req.params;
     try {
         await pokemonjohtoService.editPartial(id, body);
         res.status(200).send( { message: 'modificacion patch exitosa!', id } );
     } catch {
         res.status(404).send({ message: 'ese id no existe' } );
     }
 });
 
 // COMPLETE EDITION: PUT
 pokemonsjohtoRouter.put('/:id', async (req, res) => {
     const body = req.body;
     const { id } = req.params;
     try {
         await pokemonjohtoService.editComplete(id, body);
         res.status(200).send( { message: 'modificacion put exitosa!', id } );
     } catch {
         res.status(404).send({ message: 'ese id no existe' } );
     }
 });
 
 // DELETE: DELETE
 pokemonsjohtoRouter.delete('/:id', async (req, res) => {
     const { id } = req.params;
     try {
         await pokemonjohtoService.delete(id);
         res.status(200).send( { message: 'eliminacion exitosa!' } );
     } catch {
         res.status(404).send({ message: 'ese id no existe' } );
     }
 });
 
 module.exports = pokemonsjohtoRouter;