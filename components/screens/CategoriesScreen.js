import { StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../../data/Dummy-data";
import CategoryGridTile from "../CategoryGridTile";
import { FlatList } from "react-native";

const CategoriesScreen = ({ navigation }) => {
	function renderCategoryItem(itemData) {
		function pressHandler() {
			navigation.navigate("MealsOverview", {
				categoryId: itemData.item.id,
			});
		}
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	}

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
