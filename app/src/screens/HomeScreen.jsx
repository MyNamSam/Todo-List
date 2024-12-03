import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = React.useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    setTasks((prevTasks) => [...prevTasks, taskText]);
  };

  return (
    <MainLayout>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Tasks</Text>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
      <Button 
        title="Go to About" 
        onPress={() => navigation.navigate('About')} 
      />
    </MainLayout>
  );
};

export default HomeScreen;
