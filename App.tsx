import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import React, { useState } from 'react';

const App = () => {
  
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText: any) => {
    if (taskText && !tasks.includes(taskText)) { 
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks = {tasks} />
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
