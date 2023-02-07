import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Box from "./components/box";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} options={{ title: "Welcome!" }} />
				<Stack.Screen name="Profile" component={Profile} options={{ title: "Matt's Profile" }} />
				<Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000fff",
		alignItems: "center",
		justifyContent: "center",
		color: "#fff",
	},
});
