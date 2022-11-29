import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
   const [enteredGoalText, setEnteredGoalText] = useState('');

   const goalInputHandler = (value) => {
      setEnteredGoalText(value);
   };

   const onAddGoalHandler = () => {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
   };

   return (
      <Modal visible={props.visible} animationType="slide">
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.textInput}
               placeholder="Your course goal"
               onChangeText={goalInputHandler}
            ></TextInput>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
            <Button title="Add goal" onPress={onAddGoalHandler} />
         </View>
      </Modal>
   );
};

const styles = StyleSheet.create({
   inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
      padding: 10,
      width: '70%',
   },
});

export default GoalInput;
