import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
   return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
         <View style={styles.goals}>
            <Text>{props.title}</Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   goals: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: '#ccc',
      borderRadius: 5,
      marginBottom: 8,
   },
});

export default GoalItem;
