import { View, Text, StyleSheet } from "react-native";
import Colors from "./Colors";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

export default Subtitle;
const styles = StyleSheet.create({
	subtitle: {
		fontWeight: "bold",
		fontSize: 20,
		color: Colors.orange,
		textAlign: "center",
	},
	subtitleContainer: {
		marginVertical: 4,
		marginHorizontal: 12,
		padding: 6,
		borderBottomColor: Colors.orange,
		borderBottomWidth: 2,
		fontSize: 16,
		textAlign: "center",
	},
});
