import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";

type RootStackParamList = {
	Home: { name: string };
	Login: { name: string };
	Profile: { name: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

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
