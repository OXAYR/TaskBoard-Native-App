import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/HomeScreen';
import Login from './src/screens/AuthFlow/LoginScreen';
import StackNavigation from './src/navigation ';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
