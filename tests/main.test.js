require('dotenv').config()

const {
	unwrappedHandler: handler
} = require('../src/main')


const { enableConsoleLogging, disableConsoleLogging } = require("razorux-js-utils");

const EVENTS = {
	DEFAULT: require('./events/defaultEvent').default,
	NO_API_KEY: require('./events/noAPIKeyEvent').default,
	INCORRECT_API_KEY: require('./events/incorrectAPIKeyEvent').default,
}

if(!process.env.CI) disableConsoleLogging();

describe('handler', () => {
	test('Should run with no errors', async () => {
		await handler(EVENTS.DEFAULT)
	});
		
	describe('Security', () => {
		test('Should return a 401 if there\'s no API key', async () => {
			const response = await handler(EVENTS.NO_API_KEY);
			expect(response.statusCode).toBe(401);
		});
		
		test('Should return a 401 if the API key is invalid', async () => {
			const response = await handler(EVENTS.INCORRECT_API_KEY);
			expect(response.statusCode).toBe(401);
		});
	});
})
