import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = goalText => {
		setCourseGoals(currentCourseGoals => [
			...currentCourseGoals, 
			{ key: Math.random().toString(), value: goalText }
		]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<GoalInput onAddGoal={addGoalHandler}/>
			</View>
			<View style={styles.goalsContainer}>
				<FlatList data={courseGoals} renderItem={itemData => 
					<GoalItem title={itemData.item.value} />
				}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 60,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
	},
	
});
