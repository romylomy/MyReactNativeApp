import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList App</Text>
      <Text style={styles.text}>
        The ToDoList App helps you manage your daily tasks efficiently. Whether it's personal chores, work assignments, or planning your next big event, our app is designed to keep you organized.
      </Text>
      <Text style={styles.text}>
        Developed by: Jerome Corpuz 
      </Text>
      <Text style={styles.text}>Current Date: {currentDate}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default AboutScreen;
