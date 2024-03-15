import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./components/constants/Colors";
import CategoriesScreen from "./components/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./components/screens/MealsOverviewScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Meals Categories"
						component={CategoriesScreen}
					/>
					<Stack.Screen
						name="Meals Overview"
						component={MealsOverviewScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>

			<StatusBar style="light" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		grid: 1,
		gridTemplateRow: "repeat(auto-fill, minmax(150px, 2fr))",
		backgroundColor: Colors.black,
	},
});

// install the following packages:
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
