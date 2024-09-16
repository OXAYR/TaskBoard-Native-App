import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import Text from './CustomText';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {fetchSingleTodo} from '../redux/Todos/todoThunk';

const Todo = ({item, token}) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  useEffect(() => {
    if (todo) {
      console.log('ehre is the tod o======>', todo);
      dispatch(fetchSingleTodo({token, todoId: todo}));
    }
  }, [todo]);
  return (
    <Pressable
      style={style.todoBackground}
      onPress={() => {
        setTodo(item.id);
      }}>
      <View style={style.todoFlex}>
        <View>
          <Text text={item?.title} style={style.todoTitle}></Text>
          <Text text={item?.description} style={style.todoSubTitle}></Text>
        </View>
        <View style={style.todoIcon}>
          <Image source={require('../assets/edit.png')} />
          <Image source={require('../assets/trash.png')} />
          <Image source={require('../assets/tick.png')} />
        </View>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  todoBackground: {
    backgroundColor: 'white',
    paddingHorizontal: widthPercentageToDP(5),
    paddingVertical: heightPercentageToDP(3),
    marginHorizontal: widthPercentageToDP(2),
    marginVertical: heightPercentageToDP(2),
    borderRadius: widthPercentageToDP(5),
  },
  todoTitle: {
    color: '#9395D3',
    fontWeight: '600',
    fontSize: widthPercentageToDP(4),
  },
  todoSubTitle: {
    color: 'black',
    fontWeight: '500',
    paddingTop: widthPercentageToDP(1),
    fontSize: widthPercentageToDP(3),
  },
  todoFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Todo;
