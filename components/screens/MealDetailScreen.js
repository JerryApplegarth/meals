import { StyleSheet, Text, View } from "react-native";

const MealDetailScreen = ({route}) => {
	const mealId = route.params.mealId;
	return (
		<View>
			<Text>Meal Detail Screen with ID: {mealId}</Text>
		</View>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
