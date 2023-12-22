import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from '../components/TaskItem';

const TaskListScreen = () => {
  // Sample task data, replace with actual data from API
  const tasks = [
    { title: 'Task 1', description: 'Description 1', completed: false },
    { title: 'Task 2', description: 'Description 2', completed: true },
  ];

  return (
    <View>
      <Text>Task List Screen</Text>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </View>
  );
};

export default TaskListScreen;
