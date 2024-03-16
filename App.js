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
			<View style={styles.container}>
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
