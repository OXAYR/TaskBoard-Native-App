import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {createTodo} from '../redux/Todos/todoThunk';

const TodoForm = ({handleTodoUpdate, selectedTodo}) => {
  useEffect(() => {
    if (selectedTodo) {
      onChangeText(selectedTodo.title);
      onChangeDescription(selectedTodo.description);
    }
  }, [selectedTodo]);

  const [text, onChangeText] = useState('');
  const [description, onChangeDescription] = useState('');
  const [todo, onChangeTodo] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.tokken);
  const onAddTodoButtonPress = () => {
    if (!text || !description) {
      Alert.alert('Please fill in all fields');
      return;
    }
    const newTodo = {title: text, description: description};
    handleTodoUpdate(newTodo);
    dispatch(
      createTodo({
        todo: newTodo,
        token: token,
      }),
    );
    if (todo.length > 0) onChangeTodo([...todo, newTodo]);
    else onChangeTodo([newTodo]);
    console.log('Todo added:', todo, text, description);

    onChangeText('');
    onChangeDescription('');
  };

  return (
    <SafeAreaView style={styles.fieldsView}>
      <TextInput
        style={styles.inputField}
        onChangeText={onChangeText}
        placeholder="Enter Title"
        value={text}
      />
      <TextInput
        style={styles.inputField}
        onChangeText={onChangeDescription}
        placeholder="Enter Description"
        value={description}
      />
      <TouchableOpacity
        style={styles.addTodoButton}
        onPress={onAddTodoButtonPress}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  inputField: {
    borderBottomColor: '#9395D3',
    borderBottomWidth: 1,
    color: '#000000',
  },
  fieldsView: {
    marginHorizontal: widthPercentageToDP(3),
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
});
