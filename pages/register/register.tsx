import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
	Register: { name: string };
	Profile: { name: string };
};
type Props = NativeStackScreenProps<RootStackParamList, "Register">;
const Register = ({ navigation }: Props): JSX.Element => {
	interface FormData {
		email: string;
		username: string;
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
			username: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		try {
			const user = await createUserWithEmailAndPassword(auth, data.email, data.password);
			console.log(user);
		} catch (err) {
			throw err;
		}
	};
	const onChange = (arg: { nativeEvent: { text: any } }) => {
		return {
			value: arg.nativeEvent.text,
		};
	};
	console.log("errors:", errors);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>register</Text>

			<Controller
				control={control}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput style={styles.textinput} placeholder="username" value={value} onBlur={onBlur} onChangeText={(value) => onChange(value)} />
				)}
				name="username"
				rules={{ required: true }}
			/>
			<Controller
				control={control}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput style={styles.textinput} placeholder="email" value={value} onBlur={onBlur} onChangeText={(value) => onChange(value)} />
				)}
				name="email"
				rules={{ required: true }}
			/>
			<Controller
				control={control}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						style={styles.textinput}
						placeholder="password"
						value={value}
						onBlur={onBlur}
						onChangeText={(value) => onChange(value)}
						textContentType="password"
					/>
				)}
				name="password"
				rules={{ required: true }}
			/>
			<Button color="#597081" title="Submit" onPress={handleSubmit(onSubmit)} />
		</View>
	);
};
export default Register;
