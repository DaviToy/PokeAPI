
/**
 * Capa route, utilizada para el mapeo de los path
 */
 const express = require('express');
 const charactersRouter = express.Router();
 const CharactersServices = require('../../services/characters/');
 
 const characterService = new CharactersServices();
 
 // http://localhost:3000/shoes/
 // Query Params: Filtrar información
 // http://localhost:3000/shoes/?page=1&pageSize=10&brand=%22noke%22
 // %20 => espacio en blanco
 // %22 => comillas dobles
 charactersRouter.get('/', async (req, res) => {
     // 6.1.1: Leer la request
     const { region } = req.query;
     try {
         // 6.1.2: Acceder a la capa service para tener una respuesta
         const characters = await characterService.findAll(region);
         res.status(200).json(characters);
     } catch(error) {
         // 6.1.3: Si hay un error al acceder al services respondemos un error generico
         res.status(404).json( { message: 'no hay datos'} );
     }
     
 });
 
 // Request Param: Son utilizados para ejecutar operaciones sobre un elemento especifico
 // http://localhost:3000/shoes/999
 charactersRouter.get('/:id', async (req, res) => {
     const { id } = req.params;
     try {
         const foundedCharacter = await characterService.findOne(id);
         res.status(200).send( { message: 'encontrado!', foundedCharacter } );
     } catch {
         res.status(404).send({ message: 'ese id no existe' } );
     }
 });
 
 // http://localhost:3000/shoes/
 // { id: 4, brand: 'pima', type: 600, size: 26 }
 charactersRouter.post('/', async (req, res) => {
     // 6.1.1: Leer la request
     const newCharacter = req.body;
     try {
         // 6.1.2: Acceder a la capa service para tener una respuesta
         await characterService.create(newCharacter);
         res.status(201).send();
     } catch(error) {
         // 6.1.3: Si hay un error al acceder al services respondemos un error generico
         res.status(500).send( { message: 'intenten más tarde' } );
     }
 });
 
 // PARTIAL EDITION: PATCH
 charactersRouter.patch('/:id', async (req, res) => {
     const body = req.body;
     const { id } = req.params;
     try {
         await characterService.editPartial(id, body);
         res.status(200).send( { message: 'modificacion patch exitosa!', id } );
     } catch {
         res.status(404).send({ message: 'ese id no existe' } );
     }
 });
 
 // COMPLETE EDITION: PUT
 charactersRouter.put('/:id', async (req, res) => {
     const body = req.body;
     const { id } = req.params;
     try {
         await characterService.editComplete(id, body);
         res.status(200).send( { message: 'modificacion put exitosa!', id } );
     } catch {
         res.status(404).send({ message: 'ese id no existe' } );
     }
 });
 
 // DELETE: DELETE
 charactersRouter.delete('/:id', async (req, res) => {
     const { id } = req.params;
     try {
         await characterService.delete(id);
         res.status(200).send( { message: 'eliminacion exitosa!' } );
     } catch {
         res.status(404).send({ message: 'ese id no existe' } );
     }
 });
 
 module.exports = charactersRouter;