import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Text from './CustomText';

const BottomNav = () => {
  return (
    <View style={style.nav}>
      <View style={style.menu}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.burgerMenu}
            source={require('../assets/burgerMenu.png')}
          />
          <Text text="All" style={style.activeText} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.completedMenu}
            source={require('../assets/completed.png')}
          />
          <Text text="Completed" style={style.inActiveText} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  nav: {
    backgroundColor: 'white',
    height: heightPercentageToDP(8),
  },
  burgerMenu: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(5),
  },
  completedMenu: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(5),
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activeText: {
    color: '#9395D3',
  },
  inActiveText: {
    color: 'gray',
  },
});

export default BottomNav;
