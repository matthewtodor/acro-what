import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { collection, addDoc } from "firebase/firestore";
type RootStackParamList = {
	Home: { name: string };
	Login: { name: string };
	Register: { name: string };
	Profile: { name: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App(): JSX.Element {
	// try {
	// 	const docRef = await addDoc(collection(db, "users"), )
	// } catch {

	// }
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} options={{ title: "Welcome!" }} />
				<Stack.Screen name="Profile" component={Profile} options={{ title: "Profile Page" }} />
				<Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
				<Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
