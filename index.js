if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const tools = require('./modules/tools');
// const log = require('./modules/log');
const loaders = require('./classes/Loaders.js');
const pack = require('./package.json');


tools.replyLines();
loaders.init().then(() => {
	tools.clog(`Pronto! ${pack.name} ver:${pack.version}  ${process.env.NODE_ENV} `);
	tools.replyLines();
});
