import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	box: {
		width: "50%",
		backgroundColor: "#fff",
		margin: "auto",
	},
	text: {
		color: "#000",
		textAlign: "center",
	},
});
const Box = (): JSX.Element => {
	return (
		<>
			<View style={styles.box}>
				<Text style={styles.text}> It's a booooooooox!</Text>
			</View>
		</>
	);
};
export default Box;
