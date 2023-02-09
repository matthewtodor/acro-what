import { StyleSheet, Text, ScrollView, Button, View } from "react-native";

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

const Profile = ({ navigation }: any): JSX.Element => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.text}>PROFILE PAGE</Text>
			<Button color="#597081" title="Go to Home" onPress={() => navigation.navigate("Home", { name: "Welcome!" })} />
		</ScrollView>
	);
};
export default Profile;
