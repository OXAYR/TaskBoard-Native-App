import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CustomText from '../../../components/CustomText';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const onLoginButtonPress = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const singUpForm = {email, password, confirmPassword};
    console.log('here is the sungup form------>', singUpForm);

    const res = await axios.post(
      `register`,
      {
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('here is hte respoinse', res);
    if (res?.data?.success) navigation.navigate('login');

    console.log('signUp form added:', singUpForm);
  };

  return (
    <SafeAreaView style={styles.loginFormbg}>
      <View style={styles.fieldsView}>
        <CustomText text="Signup" style={styles.loginText} />
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeEmail}
          placeholder="Enter Email"
          value={email}
        />
        <TextInput
          style={styles.inputField}
          onChangeText={onChangePassword}
          secureTextEntry
          placeholder="Enter Password"
          value={password}
        />
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeConfirmPassword}
          placeholder="Enter Confirm Password"
          secureTextEntry
          value={confirmPassword}
        />
        <TouchableOpacity
          style={styles.addTodoButton}
          onPress={onLoginButtonPress}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginFormbg: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D6D7EF',
  },
  inputField: {
    borderBottomColor: '#9395D3',
    borderBottomWidth: 1,
    color: '#000000',
  },
  fieldsView: {
    marginHorizontal: widthPercentageToDP(3),
    backgroundColor: 'white',
    borderRadius: widthPercentageToDP(2),
    padding: widthPercentageToDP(5),
  },
  addTodoButton: {
    backgroundColor: '#9395D3',
    color: 'white',
    padding: widthPercentageToDP(4),
    borderRadius: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: widthPercentageToDP(4),
  },
  loginText: {
    color: '#9395D3',
    fontSize: widthPercentageToDP(8),
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: heightPercentageToDP(2),
  },
});
