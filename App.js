import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
   const [courseGoals, setCourseGoals] = useState([]);
   const [isAddMode, setIsAddMode] = useState(false);

   const addGoalHandler = (goalText) => {
      setCourseGoals((currentCourseGoals) => [
         ...currentCourseGoals,
         { id: Math.random().toString(), value: goalText },
      ]);

      setIsAddMode(false);
   };

   const deleteGoalHandler = (goalId) => {
      setCourseGoals((currentGoals) => {
         return currentGoals.filter((goal) => goal.id !== goalId);
      });
   };

   const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
   };

   return (
      <View style={styles.appContainer}>
         <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
         <GoalInput
            visible={isAddMode}
            onAddGoal={addGoalHandler}
            onCancel={cancelGoalAdditionHandler}
         />
         <View style={styles.goalsContainer}>
            <FlatList
               keyExtractor={(item, index) => item.id}
               data={courseGoals}
               renderItem={(itemData) => (
                  <GoalItem
                     id={itemData.item.id}
                     title={itemData.item.value}
                     onDelete={deleteGoalHandler}
                  />
               )}
            />
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
      marginTop: 16,
   },
});
