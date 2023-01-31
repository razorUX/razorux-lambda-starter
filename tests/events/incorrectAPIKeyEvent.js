const event = {
	version: '2.0',
	routeKey: '$default',
	rawPath: '/',
	rawQueryString: '',
	queryStringParameters: {
		webhookSecret: "INCORRECT_WEBHOOK_SECRET"
	},
	headers: {
		'sec-fetch-mode': 'navigate',
		'content-length': '1103',
		referer: 'https://submit.jotform.com/',
		'x-amzn-tls-version': 'TLSv1.2',
		'sec-fetch-site': 'cross-site',
		'accept-language': 'en-US,en;q=0.5',
		'x-forwarded-proto': 'https',
		origin: 'https://submit.jotform.com',
		'x-forwarded-port': '443',
		dnt: '1',
		'x-forwarded-for': '176.12.183.213',
		accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
		'x-amzn-tls-cipher-suite': 'ECDHE-RSA-AES128-GCM-SHA256',
		'x-amzn-trace-id': 'Root=1-63b38fc2-6957a4f7149b214019b6381a',
		host: 'taohi55bmzxthmk6xfm5eifm7e0dqyij.lambda-url.us-east-1.on.aws',
		'upgrade-insecure-requests': '1',
		'content-type': 'application/x-www-form-urlencoded',
		'accept-encoding': 'gzip, deflate, br',
		'sec-fetch-dest': 'document',
		'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:108.0) Gecko/20100101 Firefox/108.0'
	},
	requestContext: {
		accountId: 'anonymous',
		apiId: 'taohi55bmzxthmk6xfm5eifm7e0dqyij',
		domainName: 'taohi55bmzxthmk6xfm5eifm7e0dqyij.lambda-url.us-east-1.on.aws',
		domainPrefix: 'taohi55bmzxthmk6xfm5eifm7e0dqyij',
		http: {
			method: 'POST',
			path: '/',
			protocol: 'HTTP/1.1',
			sourceIp: '176.12.183.213',
			userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:108.0) Gecko/20100101 Firefox/108.0'
		},
		requestId: '125f81a5-ba37-4c11-8bad-15b468bd9e99',
		routeKey: '$default',
		stage: '$default',
		time: '03/Jan/2023:02:15:30 +0000',
		timeEpoch: 1672712130094
	},
	body: '',
	isBase64Encoded: true
}


exports.default = event;