const express = require('express')
const router = express.Router()

const charactersControllers = require('../controllers/charactersControllers')



router.get('/characters', charactersControllers.getCharacters)


router.get('/character/:id', charactersControllers.getCharacters)



router.post('/character/create', charactersControllers.createCharacter)


router.delete('/character/:id/delete', charactersControllers.deleteCharacter)


module.exports = router