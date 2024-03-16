import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import Colors from "./constants/Colors";

const CategoryGridTile = ({ title, color, onPress }) => {
	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: Colors.accent }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				onPress={onPress}>
				<View
					style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 60,
		width: "40%", // Adjust the width to fit your desired grid layout
		borderRadius: 8,
		elevation: 4,
		shadowColor: Colors.primary,
		shadowOffset: { width: 4, height: 6 },
		shadowRadius: 8,
		shadowOpacity: 0.25,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
	},
});
