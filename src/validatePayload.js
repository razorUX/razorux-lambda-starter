const get = require("lodash.get");

// const REQUIRED_CONTENT_TYPE = "multipart/form-data;"

exports.validateWebhookPayload = function validateWebhookPayload(event) {
  // assertCorrentContentType(event);
  // assertBodyIsPresent(event);
  assertHasValidWebhookSecret(event)
}

// function assertCorrentContentType(event) {
//   const contentType = get(event, "headers.content-type");
//   if(!contentType.includes(REQUIRED_CONTENT_TYPE)) throw new WebhookPayloadValidationError({message: `Payload is missing required content-type header "${REQUIRED_CONTENT_TYPE}". (Got: ${contentType})`})
// }

// function assertBodyIsPresent(event) {
//   if(!event.body) throw new WebhookPayloadValidationError({message: `Payload body missing or empty (Got: ${event.body})`});
// }

function assertHasValidWebhookSecret(event) {
  const requestWebhookSecret = get(event, "queryStringParameters.webhookSecret");
  if(!requestWebhookSecret) throw new WebhookPayloadValidationError({httpStatus: 401,message: `Webhook secret query parameter is missing or empty (Got: ${requestWebhookSecret})`});
  
  if(requestWebhookSecret !== process.env.WEBHOOK_SECRET) throw new WebhookPayloadValidationError({httpStatus: 401, message: `Webhook secret query parameter is incorrect (Got: ${requestWebhookSecret})`});
}

function WebhookPayloadValidationError({message, httpStatus = 400}) {
  this.name = "WebhookPayloadValidationError";
  this.message = message;
  this.deliberate = true;
  this.exposeErrorMessageToClient = true;
  this.externalHttpStatus = httpStatus;
}

WebhookPayloadValidationError.prototype = Error.prototype;


