import { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../../data/Dummy-data";
import MealItem from "../MealItem";


const MealsOverviewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	function renderMealItem(itemData) {
		const item = itemData.item;
		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
			ingredients: item.ingredients,
			steps: item.steps,
		};
		return <MealItem {...mealItemProps} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
