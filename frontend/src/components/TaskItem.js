import React from 'react';
import { View, Text } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>{task.completed ? 'Completed' : 'Not Completed'}</Text>
    </View>
  );
};

export default TaskItem;
