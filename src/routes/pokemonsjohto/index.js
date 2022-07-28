// Capa route
 const express = require('express')
 const pokemonsjohtoRouter = express.Router()
 const PokemonsjohtoServices = require('../../services/pokemonsjohto')
 
 const pokemonjohtoService = new PokemonsjohtoServices()
 
 // http://localhost:3000/pokemonsjohto/
 pokemonsjohtoRouter.get('/', async (req, res) => {
     // 6.1.1: Leer la request
     const { weight } = req.query
     try {
         const pokemonsjohto = await pokemonjohtoService.findAll(weight)
         res.status(200).json(pokemonsjohto)
     } catch(error) {
         res.status(404).json( { message: 'No hay datos'} )
     }
 })
 
 // Request Param
 // http://localhost:3000/pokemonsjohto/3
 pokemonsjohtoRouter.get('/:id', async (req, res) => {
     const { id } = req.params
     try {
         const foundedPokemonjohto = await pokemonjohtoService.findOne(id);
         res.status(200).send( { message: 'dato encontrado', foundedPokemonjohto } )
     } catch {
         res.status(404).send({ message: 'id inexistente' } )
     }
 })
 
 // http://localhost:3000/pokemonsjohto/
 // { id: 4, name: 'charmander', type: 'fuego', height: 20 }
 pokemonsjohtoRouter.post('/', async (req, res) => {
     const newPokemonjohto = req.body
     try {
         await pokemonjohtoService.create(newPokemonjohto)
         res.status(201).send({message: 'Creacion exitosa'})
     } catch(error) {
         res.status(500).send( { message: 'intente mas tarde' } )
     }
 })
 
 // PARTIAL EDITION: PATCH
 pokemonsjohtoRouter.patch('/:id', async (req, res) => {
     const body = req.body
     const { id } = req.params
     try {
         await pokemonjohtoService.editPartial(id, body)
         res.status(200).send( { message: 'modificacion patch exitosa', id } )
     } catch {
         res.status(404).send({ message: 'id inexistente' } )
     }
 })
 
 // COMPLETE EDITION: PUT
 pokemonsjohtoRouter.put('/:id', async (req, res) => {
     const body = req.body
     const { id } = req.params
     try {
         await pokemonjohtoService.editComplete(id, body)
         res.status(200).send( { message: 'modificacion put exitosa', id } )
     } catch {
         res.status(404).send({ message: 'id inexistente' } )
     }
 })
 
 // DELETE: DELETE
 pokemonsjohtoRouter.delete('/:id', async (req, res) => {
     const { id } = req.params
     try {
         await pokemonjohtoService.delete(id)
         res.status(200).send( { message: 'Se elimino el dato con exito' } )
     } catch {
         res.status(404).send({ message: 'id no encontrado' } )
     }
 })

 module.exports = pokemonsjohtoRouter