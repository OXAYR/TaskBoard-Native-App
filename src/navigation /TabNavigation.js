import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const userData = useSelector(state => state?.user);

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          // tabBarIcon: ({focused}) => (
          //   <Image
          //     style={styles.iconStyle}
          //     resizeMode="center"
          //     source={
          //       focused
          //         ? require('../assets/images/home_focused.png')
          //         : require('../assets/images/home_unfocused.png')
          //     }
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: heightPercentageToDP(4),
    width: widthPercentageToDP(9),
    marginTop: heightPercentageToDP(1.5),
    // backgroundColor:'red'
  },
  iconStylePay: {
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(30),
    marginBottom: heightPercentageToDP(4),
    // marginTop: hp(1.5),
    // backgroundColor:'red'
  },
});

export default TabNavigation;
