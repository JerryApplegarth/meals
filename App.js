import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "./components/constants/Colors";
import CategoriesScreen from "./components/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./components/screens/MealsOverviewScreen";
import MealDetailScreen from "./components/screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./components/screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.primary100,
				},
				headerTintColor: Colors.black,
				sceneContainerStyle: {
					backgroundColor: Colors.primary100,
				},
				title: "All Categories",
				drawerContentStyle: {
					backgroundColor: Colors.primary100,
				},
				drawerActiveTintColor: Colors.primary,
				drawerInactiveTintColor: Colors.accent,
			}}>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					drawerIcon: (drawerConfig) => (
						<Ionicons
							name="list"
							size={23}
							color={drawerConfig.color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoriteScreen}
				options={{
					drawerIcon: (drawerConfig) => (
						<Ionicons
							name="star"
							size={23}
							color={drawerConfig.color}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

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
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
							options={{ title: "Meals Overview" }}
						/>
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
							options={{ title: "About the Meals" }}
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
