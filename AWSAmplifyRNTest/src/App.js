import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
    TextInput
} from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { styles } from './App.Styles'
import {AmplifyConfig} from "../amplify-config";
import { AmplifyAuthController} from "./AmplifyAuthController";


const userConfig = {
  username: '',
  password: '',
  phoneNumber: '',
  ssn: ''
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [confirmationCode, setConfirmationCode] = useState('')
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {username, password, phoneNumber, ssn} = userConfig

  useEffect(() => {
    AmplifyAuthController.initAmplify(AmplifyConfig)
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
              }}
            onChangeText={setConfirmationCode}
            value={confirmationCode}
          />

          <TouchableOpacity style={styles.button}
              onPress={() => AmplifyAuthController.signUp(username, password, phoneNumber, ssn)}
          >
            <Text>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
               onPress={() => AmplifyAuthController.resendConfirmationCode(username)}
          >
            <Text>Resend Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
              onPress={() => AmplifyAuthController.confirmSignUp(username, confirmationCode)}
          >
            <Text>Confirm SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
              onPress={() => AmplifyAuthController.signIn(username, password)}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
              onPress={() => AmplifyAuthController.signOut()}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
              onPress={() => AmplifyAuthController.initPhoneNumberVerify()}
          >
            <Text>Init Verify</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
              onPress={() => AmplifyAuthController.completePhoneNumberVerify(confirmationCode)}
          >
            <Text>Complete Verify</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
