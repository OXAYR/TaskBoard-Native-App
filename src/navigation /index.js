import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/AuthFlow/RegisterScreen';
import Login from '../screens/AuthFlow/LoginScreen';
import {useSelector} from 'react-redux';
import TabNavigation from './TabNavigation';
import Home from '../screens/HomeScreen';

const StackNavigation = () => {
  const token = useSelector(state => state?.user?.tokken);
  console.log('Stack Token', token);
  return token ? <MainStack /> : <AuthStack />;
};
export default StackNavigation;

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="tabnavigation">
      <Stack.Screen
        name="tabnavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
