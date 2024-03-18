import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Image,
	Platform,
} from "react-native";

import Colors from "./constants/Colors";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();

	function selectMealItemHandler() {
		navigation.navigate("MealDetail", {
			mealId: id,
		});
	}

	return (
		<>
			<View style={styles.mealItem}>
				<Pressable
					android_ripple={Colors.darkGray}
					style={({ pressed }) =>
						pressed ? styles.buttonPressed : null
					}
					onPress={selectMealItemHandler}>
					<View style={styles.innerContainer}>
						<Image
							style={styles.image}
							source={{ uri: imageUrl }}
						/>

						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
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
		backgroundColor: Colors.lightOrange,
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
});
