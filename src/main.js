const Honeybadger = require('@honeybadger-io/js');

Honeybadger.configure({
	apiKey: process.env.HONEYBADGER_API_KEY,
});

require('isomorphic-fetch');
const get = require('lodash.get');

const fs = require("fs");
const path = require("path");

const { asyncForEach, asyncMap, sleep, validateEnvVars, parseBoolean,  sendSlackNotification, sendErrorNotification } = require("razorux-js-utils");

const { validateWebhookPayload } = require("./validatePayload.js")

const { event: uptimeCheckEvent } = require('./uptimeCheckFakeEvent.js');

// const { googleSheetsLogin, appendToSpreadsheet, loadInventoryAndSettings } = require('./appendToSpreadsheet.js');

// const { sendEmail } = requireSharedFile('sendEmail.js');

const FUNCTION_NAME = "LunchOrderSubmission";

const REQUIRED_ENV_VARS = [
	// "WEBHOOK_SECRET",
	"HONEYBADGER_API_KEY",
	"WEBHOOK_SECRET",
// 	"SLACK_WEBHOOK_URL",
// 	"ERROR_WEBHOOK_URL",
// 
// 	"GOOGLE_API_CLIENT_EMAIL",
// 	"GOOGLE_API_PRIVATE_KEY",
// 	"GOOGLE_SHEETS_ORDER_SPREADSHEET_ID",
];

const REQUIRED_KEYS = [
]


async function handler (event, context, mocks) {
	try {
		console.log(`ℹ️  Execution started`);
		console.log(event);

		validateEnvVars(REQUIRED_ENV_VARS);
		
		if(get(event, "queryStringParameters.uptimeCheck")) {
			event = uptimeCheckEvent;
		}
		
		validateWebhookPayload(event);
		
		return {
			statusCode: 200,
			body: 'OK'
		}
		
	} catch(error) {
		console.error('❗️ Root: Caught error!')
		console.error(error);
		console.error(JSON.stringify(error));
	
		if(!error.deliberate) await Honeybadger.notifyAsync(error);
		
		console.error('❗️ Exiting with error.')
		
		if(error.exposeErrorMessageToClient) {
			return {
				statusCode: error.externalHttpStatus || 500,
				body: error.message
			}
		}
		
		return {
			statusCode: 500,
			body: 'An error occurred'
		}
	}
};

exports.unwrappedHandler = handler;
exports.handler = Honeybadger.lambdaHandler(handler);