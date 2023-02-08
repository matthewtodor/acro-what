import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
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
	},
});

type RootStackParamList = {
	Home: { name: string };
	Login: { name: string };
	Register: { name: string };
	Profile: { name: string };
};
type Props = NativeStackScreenProps<RootStackParamList, "Register">;
const Register = ({ navigation }: Props): JSX.Element => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			email: "",
			username: "",
			password: "",
		},
	});
	interface FormData {
		email: string;
		username: string;
		password: string;
	}
	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>register</Text>
			<Controller
				control={control}
				name="username"
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput style={styles.textinput} placeholder="username" value={value} onBlur={onBlur} onChangeText={(value) => onChange(value)} />
				)}
			/>
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
export default Register;
