import {Amplify, Auth} from "aws-amplify";


export function initAmplify(config) {
    Amplify.configure(config)
}

export async function signUp(username, password, phoneNumber, ssn) {
    try {
        const { user } = await Auth.signUp({
            username: username,
            password: password,
            attributes: {
                'custom:ssn': ssn,
                phone_number: phoneNumber,   // optional - E.164 number convention
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export async function resendConfirmationCode(username) {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}

export async function confirmSignUp(username, confirmationCode) {
    try {
        await Auth.confirmSignUp(username, confirmationCode);
        console.log('user confirmed')
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

export async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('USER', user)
    } catch (error) {
        console.log('error signing in', error);
    }
}

export async function signOut() {
    try {
        await Auth.signOut();
        console.log('logout')
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export function initPhoneNumberVerify() {
    Auth.verifyCurrentUserAttribute('phone_number')
        .then(() => {
            console.log('a verification code is sent');
        }).catch((e) => {
        console.log('failed with error', e);
    });
}

export function completePhoneNumberVerify(confirmationCode) {
    Auth.verifyCurrentUserAttributeSubmit('phone_number', confirmationCode)
        .then(() => {
            console.log('phone_number verified');
        }).catch(e => {
        console.log('failed with error', e);
    });
}