import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	const goalInputHandler = (value) => {
		setEnteredGoalText(value);
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler}></TextInput>
			<Button title="Add goal" onPress={props.onAddGoal.bind(this, enteredGoalText)} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		marginRight: 8,
		padding: 8,
		width: '70%',
	},
});

export default GoalInput;