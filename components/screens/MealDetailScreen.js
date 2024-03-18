import { StyleSheet, Text, View, Image } from "react-native";
import { MEALS } from "../../data/Dummy-data";
import MealDetails from "../MealDetails";
const MealDetailScreen = ({ route }) => {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View>
			<Image source={{ uri: selectedMeal.imageUrl }} />
			<Text>{selectedMeal.title}</Text>
			<View>
				<MealDetails
					duration={selectedMeal.duration}
					complexity={selectedMeal.complexity}
					affordability={selectedMeal.affordability}
				/>
			</View>
			<Text>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient) => (
				<Text key={ingredient}>{ingredient}</Text>
			))}
			<Text>Steps</Text>
			{selectedMeal.steps.map((step) => (
				<Text key={step}>{step}</Text>
			))}
		</View>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
