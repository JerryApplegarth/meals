import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "./components/constants/Colors";
import CategoriesScreen from "./components/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./components/screens/MealsOverviewScreen";
import MealDetailScreen from "./components/screens/MealDetailScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<StatusBar style="light" />
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: Colors.primary100,
							},
							headerTintColor: Colors.black,
							cardStyle: {
								backgroundColor: Colors.primary100,
							},
						}}>
						<Stack.Screen
							name="MealsCategories"
							component={CategoriesScreen}
							options={{ title: "Meals Categories" }}
						/>
						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
							options={{ title: "Meals Overview" }}
						/>
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.black,
	},
});

// install the following packages:
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
