require('dotenv').config()

const { unwrappedHandler } = require('./src/main.js');

const EVENTS = {
	DEFAULT: require('./tests/events/defaultEvent').default,
}


;(async () => {
	const response = await unwrappedHandler(EVENTS.DEFAULT);
	
	console.log(response);
})();
