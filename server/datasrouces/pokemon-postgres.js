const { RESTDataSource } = require('apollo-datasource-rest');
const { Pool, Client } = require("pg");

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "nodedemo",
    password: "yourpassword",
    port: 5432,
};


class PokemonAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    getAllPokemon() {
        return this.get('pokemon');
    }

    getStats(dexNum) {
        return this.get(`stats/${dexNum}`);
    }
}

module.exports = PokemonAPI;