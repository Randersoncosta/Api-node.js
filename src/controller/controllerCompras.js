const knex = require("../conexao")

const testandoApi = async (req,res) =>{

    const query = await knex.select().table('musicas');

    return res.json(query);

} 

module.exports = testandoApi