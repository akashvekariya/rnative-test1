import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
	return (
		<View style={styles.goals}>
			<Text>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	goals: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: '#ccc',
		borderRadius: 5,
		marginBottom: 8,
	}
});

export default GoalItem;