import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D7EF',
    justifyContent: 'space-between',
  },
  headerView: {
    backgroundColor: '#9395D3',
    paddingVertical: heightPercentageToDP(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(5),
  },
  image: {
    width: widthPercentageToDP(8),
    height: heightPercentageToDP(4),
  },
});
