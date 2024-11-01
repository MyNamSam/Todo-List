
import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

const ToDoList = ({ tasks }) => {
  const [completeTask, setCompleteTask] = useState(new Set());

  const toggleTaskComplete = (task) => {
    setCompleteTask((prev) => {
      const updateTask = new Set(prev);
      if (updateTask.has(task)) {
        updateTask.delete(task);
      } else {
        updateTask.add(task);
      }
      return updateTask;
    });
  };

  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable
          key={index}
          onPress={() => toggleTaskComplete(task)}
          style={[
            styles.task,
            completeTask.has(task) && styles.completed,
          ]}
        >
          <Text style={styles.taskText}>{task}</Text>
        </Pressable>
    ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});
