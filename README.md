# aws-amplify-rn-test

Cognito based authentication test in a RN App

## Run

Install dependencies and run the project using RN CLI.

```bash
npm i
cd ios && pod install && cd ..
npx run-ios
```

## AmplifyAuthController

```javascript
import {AmplifyAuthController} from "./AmplifyAuthController";

AmplifyAuthController.initAmplify(config) // Initializes amplify with the config
AmplifyAuthController.signUp(username, password, phoneNumber, ssn) // Creates a new user in the cognito user pool with the given values
AmplifyAuthController.resendConfirmationCode(username) // Resends email confirmation code
AmplifyAuthController.confirmSignUp(username, confirmationCode) // Verifies user email
AmplifyAuthController.signIn(username, password) // Logs a user in
AmplifyAuthController.signOut() // Logs out the current session
AmplifyAuthController.initPhoneNumberVerify() // Sends SMS verification code
AmplifyAuthController.completePhoneNumberVerify(confirmationCode) // Verifies user phone number 
```

## Amplify Docs

- [Amplify Auth Cognito](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js)