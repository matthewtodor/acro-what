import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, ScrollView, Button, View } from "react-native";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		color: "#fff",
		alignContent: "center",
		justifyContent: "center",
	},
	text: {
		textAlign: "center",
		color: "#fff",
		fontSize: 50,
	},
	button: {
		width: "50%",
	},
	innerbox: {
		flex: 1,
		width: "100%",
		margin: "auto",
		backgroundColor: "#1f1f1f",
		color: "#fff",
		boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
	},
});
type RootStackParamList = {
	Home: { name: string };
	Login: { name: string };
	Register: { name: string };
	Profile: { name: string };
};
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

onAuthStateChanged(auth, (user) => {
	if (user) {
		const uid = user.uid;
		loggedIn = true;
		console.log("user information:", JSON.stringify(user, null, 2));
	} else {
		loggedIn = false;
	}
});
let loggedIn: boolean = false;
const Home = ({ navigation }: Props): JSX.Element => {
	// const signOut = ()

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.innerbox}>
				<Text style={styles.text}>acro what?</Text>

				{loggedIn ? (
					<View style={styles.innerbox}>
						<Text style={styles.text}> you are logged in!</Text>
						<Button color="#597081" title="Go to profile page" onPress={() => navigation.navigate("Profile", { name: "Profile" })} />
					</View>
				) : (
					<View style={styles.innerbox}>
						<Button color="#597081" title="Login" onPress={() => navigation.navigate("Login", { name: "Login" })} />
						<Button color="#597081" title="Register" onPress={() => navigation.navigate("Register", { name: "Register" })} />
					</View>
				)}
			</View>
		</ScrollView>
	);
};

export default Home;
