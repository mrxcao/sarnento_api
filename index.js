if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const tools = require('./src/modules/tools');
// const log = require('./src/modules/log');
const loaders = require('./src/classes/Loaders.js');
const pack = require('./package.json');

tools.replyLines();
loaders.init().then(() => {
	tools.clog(`Pronto! ${pack.name} ver:${pack.version}  ${process.env.NODE_ENV} `);
	tools.replyLines();
});
