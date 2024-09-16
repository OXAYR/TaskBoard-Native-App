import {View, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import Text from '../../components/CustomText';
import BottomNav from '../../components/BottomNav';
import Todo from '../../components/Todo';
import TodoForm from '../../components/TodoForm';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSingleTodo, fetchTodos} from '../../redux/Todos/todoThunk';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.user?.tokken);
  const todos = useSelector(state => state.todo?.todos);
  const [todoList, setTodoList] = useState(todos);
  const [selectedTodo, setSelectedTodo] = useState();
  useEffect(() => {
    if (token) {
      dispatch(fetchTodos(token));
    }
  }, [dispatch, token, todoList]);

  const atTodoUpdated = todo => {
    setTodoList(todo);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Text text="TODO APP" />
          <Image
            style={styles.image}
            source={require('../../assets/calendar.png')}
          />
        </View>
        <TodoForm handleTodoUpdate={atTodoUpdated} />
        <ScrollView>
          <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Todo
                item={item}
                token={token}
                onPress={() => setSelectedTodo(item.id)}
              />
            )}
            ListEmptyComponent={<Text text="No todos available." />}
          />
        </ScrollView>
        {/* <View style={styles.bodyView}>
          <BottomNav />
        </View> */}
      </SafeAreaView>
    </>
  );
};

export default Home;
