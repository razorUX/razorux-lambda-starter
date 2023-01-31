const event = {
	version: '2.0',
	routeKey: '$default',
	rawPath: '/',
	rawQueryString: '',
	queryStringParameters: {
		webhookSecret: "TEST_WEBHOOK_SECRET"
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
	body: 'c3VibWlzc2lvbl9pZD01NDg1MjEzMjgzMTIzNDc4ODU3JmZvcm1JRD0yMjM0NjQ2NjI4MjM0NTkmaXA9MTc2LjEyLjE4My4yMTMmZ3JhbmR0b3RhbD0zOTAmd2hhdGlzPVVTK0RvbGxhcnMrJTI4JTI0JTI5JnRpY2tldF9wcmljZV9uaXM9MzAwJm1lYWxfcHJpY2VfbmlzPTEyMCZiZWRfcHJpY2VfbmlzPTQ5NSZzYW5kd2ljaF9wcmljZV9uaXM9MjAmdGlja2V0X3ByaWNlX3VzZD05MCZtZWFsX3ByaWNlX3VzZD0zNSZiZWRfcHJpY2VfdXNkPTE1MCZzYW5kd2ljaF9wcmljZV91c2Q9NiZjdXJyZW5jeV9zeW1ib2xfdXNkPSUyNCZjdXJyZW5jeV9zeW1ib2xfaWxzPSVFMiU4MiVBQSZjdXJyZW5jeV9zeW1ib2xfZXVyPSVFMiU4MiVBQyZzZWxlY3RlZF9jdXJyZW5jeV90aWNrZXRfcHJpY2U9OTAmc2VsZWN0ZWRfY3VycmVuY3lfbWVhbF9wcmljZT0zNSZzZWxlY3RlZF9jdXJyZW5jeV9zYW5kd2ljaF9wcmljZT02JnNlbGVjdGVkX2N1cnJlbmN5X2JlZF9wcmljZT0xNTAmc2VsZWN0ZWRfY3VycmVuY3lfc3ltYm9sPSUyNCZ0aWNrZXRzdWJ0b3RhbD05MCZ0d29uaWdodGhvdGVsc3RheXByaWNlPTMwMCZ3b3VsZHlvdT1ZZXMlMjEmd291bGR5b3U4NT1TdXJlJTIxJmhvdGVsZXh0cmFuaWdodHN1YnRvdGFsPTAmaG90ZWxzdWJ0b3RhbD0zMDAmamFuMjI9Tm90aGluZyZqYW4yMzEyND1Ob3RoaW5nJmphbjIzPU5vdGhpbmcmamFuMjQ9Tm90aGluZyZkb3lvdT1ZZXMmamFuMjJfZGlubmVyX3N1YnRvdGFsPTAmamFuMjJfZGlubmVyX3N1YnRvdGFsMTM1PTAmamFuMjJfZGlubmVyX3N1YnRvdGFsMTM2PTAmamFuMjJfZGlubmVyX3N1YnRvdGFsMTM3PTAmbWVhbHN1YnRvdGFsPTAmZnVsbG5hbWUxNiU1QmZpcnN0JTVEPW0mZnVsbG5hbWUxNiU1Qmxhc3QlNUQ9cyZlbWFpbD1taWNob2VsJTQwaGV5LmNvbSZob21lZ3JvdXA9YXNkZmdoJmZlbGxvd3NoaXA9U0EmbmFtZWZvcj1tK3Mmc29icmlldHlkYXRlJTVCbW9udGglNUQ9MDEmc29icmlldHlkYXRlJTVCZGF5JTVEPTAyJnNvYnJpZXR5ZGF0ZSU1QnllYXIlNUQ9MjAyMyZhcmV5b3U9Tm90K25vdyZzcG9rZW5sYW5ndWFnZXMlNUIwJTVEPUVuZ2xpc2gmc3Bva2VubGFuZ3VhZ2VzJTVCMSU1RD1IZWJyZXc=',
	isBase64Encoded: true
}


exports.default = event;