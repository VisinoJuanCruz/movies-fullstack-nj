const axios = require('axios')
require('dotenv').config();
const {API_URL} = process.env;

const getPokemonsHandlers = async (req,res) => {
    let {offset = 0, limit = 24, page = 1} = req.query
    if(page > 1){
        offset = limit * (page-1)
    }
    const pokemons = (await axios.get(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`)).data;
    const countPages = Math.ceil(pokemons.count/limit)
    const arrPokUrls = pokemons.results
    const arrPok = await Promise.all(
        arrPokUrls.map(async (e) => {
            const pokemon = (await axios.get(e.url)).data;
            return pokemon;
        }))
    res.status(200).json({
        pageData:arrPok,
        countPages:countPages
    })
}

module.exports = {
    getPokemonsHandlers
}