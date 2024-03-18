import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({
	duration,
	complexity,
	affordability,
	style,
	textStyle,
}) => {
	return (
		<>
			<View style={[styles.details, style]}>
				<Text style={[styles.detailItem, textStyle]}>
					Duration: {duration} minutes
				</Text>
				<Text style={[styles.detailItem, textStyle]}>
					Complexity: {complexity.toUpperCase()}
				</Text>
				<Text style={[styles.detailItem, textStyle]}>
					Cost: {affordability.toUpperCase()}
				</Text>
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
	detailItem: {
		flex: 1,
		flexWrap: "wrap",
		marginTop: 10,
	},
});
