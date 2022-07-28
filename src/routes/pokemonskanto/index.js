
/**
 * Capa route, utilizada para el mapeo de los path
 */
 const express = require('express')
 const pokemonskantoRouter = express.Router()
 const PokemonskantoServices = require('../../services/pokemonskanto')
 const pokemonkantoService = new PokemonskantoServices()
 
 // http://localhost:3000/pokemonskanto/
 // http://localhost:3000/pokemonskanto/?height=30
 pokemonskantoRouter.get('/', async (req, res) => {
     const { height } = req.query
     try {
         const pokemonskanto = await pokemonkantoService.findAll(height)
         res.status(200).json(pokemonskanto)
     } catch(error) {
         res.status(404).json( { message: 'no hay datos'} )
     }
 })
 
 // Request Param
 // http://localhost:3000/pokemonskanto/3
 pokemonskantoRouter.get('/:id', async (req, res) => {
     const { id } = req.params
     try {
         const foundedPokemonkanto = await pokemonkantoService.findOne(id)
         res.status(200).send( { message: 'encontrado!', foundedPokemonkanto } )
     } catch {
         res.status(404).send({ message: 'ese id no existe' } )
     }
 })
 
 // http://localhost:3000/pokemonskanto/
 // { id: 4, name: 'charmander', type: 'fuego', size: 20 }
 pokemonskantoRouter.post('/', async (req, res) => {
     const newPokemonkanto = req.body
     try {
         await pokemonkantoService.create(newPokemonkanto)
         res.status(201).send({message: 'Creacion exitosa'})
     } catch(error) {
         res.status(500).send( { message: 'intenten más tarde' } )
     }
 })
 
 // PARTIAL EDITION: PATCH
 pokemonskantoRouter.patch('/:id', async (req, res) => {
     const body = req.body
     const { id } = req.params
     try {
         await pokemonkantoService.editPartial(id, body)
         res.status(200).send( { message: 'modificacion patch exitosa!', id } )
     } catch {
         res.status(404).send({ message: 'ese id no existe' } )
     }
 })
 
 // COMPLETE EDITION: PUT
 pokemonskantoRouter.put('/:id', async (req, res) => {
     const body = req.body
     const { id } = req.params
     try {
         await pokemonkantoService.editComplete(id, body)
         res.status(200).send( { message: 'modificacion put exitosa!', id } )
     } catch {
         res.status(404).send({ message: 'ese id no existe' } )
     }
 })
 
 // DELETE: DELETE
 pokemonskantoRouter.delete('/:id', async (req, res) => {
     const { id } = req.params
     try {
         await pokemonkantoService.delete(id)
         res.status(200).send( { message: 'eliminacion exitosa!' } )
     } catch {
         res.status(404).send({ message: 'ese id no existe' } )
     }
 })
 
 module.exports = pokemonskantoRouter