// Capa route
 const express = require('express')
 const charactersRouter = express.Router()
 const CharactersServices = require('../../services/characters/')
 
 const characterService = new CharactersServices()
 
 // http://localhost:3000/characters/
 // Query Params
 // http://localhost:3000/characters/?region=1
 charactersRouter.get('/', async (req, res) => {
     const { region } = req.query
     try {
         const characters = await characterService.findAll(region)
         res.status(200).json(characters)
     } catch(error) {
         res.status(404).json( { message: 'no hay datos'} )
     }
 })
 
 // Request Param
 // http://localhost:3000/characters/3
 charactersRouter.get('/:id', async (req, res) => {
     const { id } = req.params
     try {
         const foundedCharacter = await characterService.findOne(id)
         res.status(200).send( { message: 'dato encontrado', foundedCharacter } )
     } catch {
         res.status(404).send({ message: 'id no encontrado' } )
     }
 })
 
 // http://localhost:3000/characters/
 // { id: 4, name: 'si', region: 1, home: 'si' }
 charactersRouter.post('/', async (req, res) => {
     const newCharacter = req.body
     try {
         await characterService.create(newCharacter)
         res.status(201).send({message: 'Creacion exitosa'})
     } catch(error) {
         res.status(500).send( { message: 'intente más tarde' } )
     }
 })
 
 // PARTIAL EDITION: PATCH
 charactersRouter.patch('/:id', async (req, res) => {
     const body = req.body
     const { id } = req.params
     try {
         await characterService.editPartial(id, body)
         res.status(200).send( { message: 'modificacion patch exitosa', id } )
     } catch {
         res.status(404).send({ message: 'id no encontrado' } )
     }
 })
 
 // COMPLETE EDITION: PUT
 charactersRouter.put('/:id', async (req, res) => {
     const body = req.body
     const { id } = req.params
     try {
         await characterService.editComplete(id, body)
         res.status(200).send( { message: 'modificacion put exitosa', id } )
     } catch {
         res.status(404).send({ message: 'id no encontrado' } )
     }
 })
 
 // DELETE: DELETE
 charactersRouter.delete('/:id', async (req, res) => {
     const { id } = req.params
     try {
         await characterService.delete(id)
         res.status(200).send( { message: 'eliminacion exitosa' } )
     } catch {
         res.status(404).send({ message: 'id no encontrado' } )
     }
 })
 
 module.exports = charactersRouter