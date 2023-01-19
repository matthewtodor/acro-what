import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Box from "./components/box";
export default function App(): JSX.Element {
	return (
		<View style={styles.container}>
			<Box></Box>
			<StatusBar style="auto" />
		</View>
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
