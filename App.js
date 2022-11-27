import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (value) => {
		setEnteredGoalText(value);
	};

	const addGoalHandler = (value) => {
		setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler}></TextInput>
				<Button title="Add goal" onPress={addGoalHandler}/>
			</View>
			<View style={styles.goalsContainer}>
				<ScrollView>
					<Text>{courseGoals.map((goal) => 
						
						<Text key={goal}>{goal}</Text>
					)}</Text>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
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
	goalsContainer: {
		flex: 5,
	},
	goals: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: '#ccc',
		borderRadius: 5,
		marginBottom: 8,
	}
});
