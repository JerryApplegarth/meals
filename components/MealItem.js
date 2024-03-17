import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Image,
	Platform,
} from "react-native";
import Colors from "./constants/Colors";
const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
	return (
		<>
			<View style={styles.mealItem}>
				<Pressable
					android_ripple={Colors.darkGray}
					style={({ pressed }) =>
						pressed ? styles.buttonPressed : null
					}>
					<View style={styles.innerContainer}>
						<Image
							style={styles.image}
							source={{ uri: imageUrl }}
						/>
						<Text style={styles.title}>{title}</Text>
					</View>
					<View style={styles.details}>
						<Text>Duration: {duration} minutes</Text>
						<Text>Complexity: {complexity.toUpperCase()}</Text>
						<Text>Cost: {affordability.toUpperCase()}</Text>
					</View>
				</Pressable>
			</View>
		</>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 10,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		backgroundColor: Colors.lightBlue,
		padding: 20,
		elevation: 5,
		shadowColor: Colors.blue,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		shadowOpacity: 0.35,
	},
	innerContainer: {
		borderRadius: 10,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 10,
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
		padding: 10,
	},
	details: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		overflow: "hidden",
		flexWrap: "wrap",
	},
	item: {
		flex: 1,
		flexWrap: "wrap",
		marginTop: 10,
	},
});
