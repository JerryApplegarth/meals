import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => pressed && styles.pressed}>
			<Ionicons
				name={icon}
				size={24}
				color={color}
				style={styles.icon}
			/>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	icon: {
		opacity: 0.8,
		marginRight: 12,
	},
	pressed: {
		opacity: 0.5,
	},
});
