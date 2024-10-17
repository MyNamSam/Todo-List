/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <View>
      <ToDoForm />
      <ToDoList />
    </View>
  );
}

export default App;
