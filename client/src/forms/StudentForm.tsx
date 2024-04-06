import { useForm } from "react-hook-form";
// import * as apiClient from "../api-client";
// import { useMutation, useQueryClient } from "react-query";
// import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import Tags from "./Tags";
import Wallet from "../pages/wallets/Wallet";

export type StudentFormData = {
	username: string;
	email: string;
	location: string;
};

const StudentForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<StudentFormData>();

	// const mutation = useMutation(apiClient.signIn, {
	// 	onSuccess: async () => {
	// 		showToast({
	// 			message: "Sign in Successful",
	// 			type: "SUCCESS",
	// 		});
	// 		await queryClient.invalidateQueries("validateToken");
	// 		navigate(location.state?.from?.pathname || "/");
	// 	},
	// 	onError: (error: Error) => {
	// 		showToast({
	// 			message: error.message,
	// 			type: "ERROR",
	// 		});
	// 	},
	// });

	// handleSubmit will check if the data entered is valid and if it is valid then it will extract the data(from the form) and pass it to mutate() function
	const onSubmit = handleSubmit((data) => {
		// mutation.mutate(data);
		console.log(data);
	});
	return (
		<form
			className="flex flex-col gap-5 w-[40vw] mx-auto border border-black shadow-lg p-6 rounded-xl justify-center"
			onSubmit={onSubmit}
		>
			<h2 className="text-2xl font-bold mx-auto">Student Form</h2>
			<div className="flex flex-col gap-4">
				<label className="text-gray-700 text-md font-bold flex-1">
					Username
					<input
						type="text"
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("username", {
							required: "Field is required",
						})}
					/>
					{errors.username && (
						<span className="text-red-500 text-sm">
							{errors.username.message}
						</span>
					)}
				</label>
				<label className="text-gray-700 text-md font-bold flex-1">
					Email
					<input
						type="email"
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("email", {
							required: "Field is required",
						})}
					/>
					{errors.email && (
						<span className="text-red-500 text-sm">
							{errors.email.message}
						</span>
					)}
				</label>
				<label className="text-gray-700 text-md font-bold flex-1">
					First Name
					<input
						type="text"
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("location", {
							required: "Field is required",
						})}
					/>
					{errors.location && (
						<span className="text-red-500 text-sm">
							{errors.location.message}
						</span>
					)}
				</label>
				<label className="text-gray-700 text-md font-bold flex-1">
					Last Name
					<input
						type="text"
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("location", {
							required: "Field is required",
						})}
					/>
					{errors.location && (
						<span className="text-red-500 text-sm">
							{errors.location.message}
						</span>
					)}
				</label>
				<button className="btn-dark w-1/3 mx-auto text-white font-bold py-2 rounded">LFG</button>
			</div>
		</form>
	);
};

export default StudentForm;
