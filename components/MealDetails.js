import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
	return (
		<>
			<View>
				<Text>Duration: {duration} minutes</Text>
				<Text>Complexity: {complexity.toUpperCase()}</Text>
				<Text>Cost: {affordability.toUpperCase()}</Text>
			</View>
		</>
	);
};

export default MealDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		overflow: "hidden",
		flexWrap: "wrap",
	},
	DetailItems: {
		flex: 1,
		flexWrap: "wrap",
		marginTop: 10,
	},
});
