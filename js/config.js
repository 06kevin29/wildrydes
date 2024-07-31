//NOTE: credentials for AWS Cognito and API Gateway DNE anymore to avoid security vulnerablities

window._config = {
    cognito: {
        userPoolId: 'us-east-2_AWo9q1G06',
        userPoolClientId: '5td57t5ajf7ok90hvord1m5pi6',
        region: 'us-east-2'
    },
    api: {
        invokeUrl: 'https://nt82rajini.execute-api.us-east-2.amazonaws.com/prod'
    }
};
