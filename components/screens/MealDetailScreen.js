import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MEALS } from "../../data/Dummy-data";
import MealDetails from "../MealDetails";
import Colors from "../constants/Colors";
import Subtitle from "../constants/Subtitle";
import List from "../constants/List";

const MealDetailScreen = ({ route }) => {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image
				style={styles.image}
				source={{ uri: selectedMeal.imageUrl }}
			/>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<View>
				<MealDetails
					duration={selectedMeal.duration}
					complexity={selectedMeal.complexity}
					affordability={selectedMeal.affordability}
					textStyle={styles.detailText}
				/>
				<View style={styles.outer}>
					<View style={styles.listContainer}>
						<Subtitle>Ingredients</Subtitle>
						<List data={selectedMeal.ingredients} />
						<Subtitle>Steps</Subtitle>
						<List data={selectedMeal.steps} />
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
	image: {
		width: "90%",
		height: 250,
		margin: 20,
		borderRadius: 16,
		overflow: "hidden",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		color: Colors.black,
		textAlign: "center",
		margin: 8,
	},
	detailText: {
		fontSize: 16,

		fontWeight: "bold",
	},

	list: {
		fontSize: 16,
		margin: 5,
	},
	listContainer: {
		width: "80%",
	},
	outer: {
		alignItems: "center",
	},
});
