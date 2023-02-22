import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
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
	labeltext: {
		color: "#597081",
	},
	textinput: {
		backgroundColor: "#fff",
		marginBottom: 5,
	},
});

type RootStackParamList = {
	Home: { name: string };
	Login: { name: string };
	Profile: { name: string };
};
type Props = NativeStackScreenProps<RootStackParamList, "Login">;
const Login = ({ navigation }: Props): JSX.Element => {
	interface FormData {
		email: string;
		password: string;
	}

	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit: SubmitHandler<FormData> = async (data) => {
		try {
			const user = await signInWithEmailAndPassword(auth, data.email, data.password);
			navigation.navigate("Home", { name: "Home" });
		} catch (err) {
			throw err;
		}
	};
	const onChange = (arg: { nativeEvent: { text: any } }) => {
		return {
			value: arg.nativeEvent.text,
		};
	};
	return (
		<View style={styles.container}>
			<Text style={styles.text}>login</Text>
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput style={styles.textinput} placeholder="email" value={value} onBlur={onBlur} onChangeText={(value) => onChange(value)} />
				)}
			/>
			<Controller
				control={control}
				name="password"
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput style={styles.textinput} placeholder="password" value={value} onBlur={onBlur} onChangeText={(value) => onChange(value)} />
				)}
			/>
			<Button color="#597081" title="Submit" onPress={handleSubmit(onSubmit)} />
		</View>
	);
};
export default Login;
