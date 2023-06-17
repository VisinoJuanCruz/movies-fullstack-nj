const axios = require('axios')
require('dotenv').config();
const {API_URL} = process.env;

const getPokemonsHandlers = async (req,res) => {
    const {offset = 0, limit = 24} = req.query
    const pokemons = (await axios.get(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`)).data;
    const arrPokUrls = pokemons.results
    const arrPok = await Promise.all(
        arrPokUrls.map(async (e) => {
            const pokemon = (await axios.get(e.url)).data;
            return pokemon;
        }))
    res.status(200).json(arrPok)
}

module.exports = {
    getPokemonsHandlers
}