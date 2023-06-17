const { Router } = require("express");
const router = Router()
const {getPokemonsHandlers} = require('../handlers/pokemonsHandlers')

router.get('/pokemons', getPokemonsHandlers)

module.exports = router;
