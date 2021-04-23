

export const AmplifyConfig = {
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: '',
        // REQUIRED - Amazon Cognito Region
        region: '',
        // OPTIONAL - Amazon Cognito Federated Identity Pool Region
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: '',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: '',
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '',
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
    }
}