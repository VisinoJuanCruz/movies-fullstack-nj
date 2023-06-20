const axios = require('axios')
require('dotenv').config();
axios.defaults.timeout = 10000;
const {API_URL} = process.env;

const getPokemonsHandlers = async (req,res) => {
    let {page = 1, limit = 12} = req.query
    let offset = 0
    if(page > 1){
        offset = limit * (page-1)
    }
    try {
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
    } catch (error) {
        res.status(400).json({error:error})
    }
}

module.exports = {
    getPokemonsHandlers
}