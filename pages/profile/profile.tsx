import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, ScrollView, Button, View } from "react-native";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { async } from "@firebase/util";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		color: "#fff",
	},
	text: {
		color: "#fff",
		fontSize: 50,
		textAlign: "center",
	},
});
type RootStackParamList = {
	Home: { name: string };
	Login: { name: string };
	Register: { name: string };
	Profile: { name: string };
};
type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

let loggedIn: boolean = false;
onAuthStateChanged(auth, (user) => {
	if (user) {
		const uid = user.uid;
		loggedIn = true;
		console.log("user information:", user);
	} else {
		loggedIn = false;
	}
});
const Profile = ({ navigation }: Props): JSX.Element => {
	const logOut = async () => {
		await signOut(auth);
		navigation.navigate("Home", { name: "Welcome!" });
	};
	return (
		<ScrollView style={styles.container}>
			{loggedIn ? (
				<View>
					<Text style={styles.text}>PROFILE PAGE</Text>
					<Text> you are logged in as </Text>
					<Button color="#597081" title="Go to Home" onPress={() => navigation.navigate("Home", { name: "Welcome!" })} />
					<Button color="#597081" title="Log Out" onPress={logOut} />
				</View>
			) : (
				<View>
					<Text>You must be signed in to access your profile</Text>
					<Button color="#597081" title="Login" onPress={() => navigation.navigate("Login", { name: "Login" })} />
				</View>
			)}
		</ScrollView>
	);
};
export default Profile;
