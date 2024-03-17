import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Colors from "./components/constants/Colors";
import CategoriesScreen from "./components/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./components/screens/MealsOverviewScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<View style={styles.container}>
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
							options={{ title: "Categories" }}
						/>
						<Stack.Screen
							name="Meals Overview"
							component={MealsOverviewScreen}
							options={{ title: "Meals Overview" }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</View>
			<StatusBar style="auto" />
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
