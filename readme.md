# razorUX Lambda Starter


[![Tests](https://github.com/razorUX/razorux-lambda-starter/actions/workflows/test.yml/badge.svg)](https://github.com/razorUX/razorux-lambda-starter/actions/workflows/test.yml)
[![Deploy to Lambda](https://github.com/razorUX/razorux-lambda-starter/actions/workflows/deploy.yml/badge.svg)](https://github.com/razorUX/razorux-lambda-starter/actions/workflows/deploy.yml)

## Development

```
npm run test
```

## Deployment

Auto-deploys to AWS Lambda via GitHub Actions

### Appendix

Remember to configure these GitHub Action secrets:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
AWS_LAMBDA_FUNCTION_NAME
HONEYBADGER_API_KEY
WEBHOOK_SECRET
```