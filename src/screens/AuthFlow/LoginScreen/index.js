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
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../redux/User/userThunk';

const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const dispatch = useDispatch();
  const onLoginButtonPress = () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }

    dispatch(loginUser({email: email, password: password}));
    navigation.navigate('Home');
  };

  const onSingUpButtonPress = () => {
    navigation.navigate('signup');
  };

  return (
    <SafeAreaView style={styles.loginFormbg}>
      <View style={styles.fieldsView}>
        <CustomText text="Login" style={styles.loginText} />
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeEmail}
          placeholder="Enter Email"
          value={email}
        />
        <TextInput
          style={styles.inputField}
          onChangeText={onChangePassword}
          placeholder="Enter Password"
          value={password}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={onLoginButtonPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={onSingUpButtonPress}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
  loginButton: {
    backgroundColor: '#9395D3',
    color: 'white',
    padding: widthPercentageToDP(4),
    borderRadius: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
  },
  signUpButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#9395D3',
    color: '#9395D3',
    padding: widthPercentageToDP(4),
    borderRadius: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: widthPercentageToDP(4),
  },
  loginText: {
    color: '#9395D3',
    fontSize: widthPercentageToDP(8),
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: heightPercentageToDP(2),
  },
  signUpButtonText: {
    textAlign: 'center',
    color: '#9395D3',
    fontWeight: '500',
    fontSize: widthPercentageToDP(4),
  },
});
