const mongo = require('../DB/mongo/connect');
const server = require('../init');
class Loaders {
	async init() {
		await mongo.connect();
		await server.init();
	}

}

module.exports = new Loaders();