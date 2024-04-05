import { useForm } from "react-hook-form";
// import * as apiClient from "../api-client";
// import { useMutation, useQueryClient } from "react-query";
// import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import Tags from "./Tags";
import Wallet from "../pages/wallets/Wallet";

export type MentorFormData = {
	username: string;
	email: string;
	company: string;
    role:string;
	location: string;
	description: string;
	type: string;
	pricePerSession: number;
	starRating: number;
	facilities: string[];
	imageFiles: FileList;
	imageUrls: string[];
	adultCount: number;
	childCount: number;
};

const MentorForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<MentorFormData>();

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
			<h2 className="text-2xl font-bold mx-auto">Mentor Form</h2>
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

				<div className="flex gap-2 justify-between">
					<label className="text-gray-700 text-md font-bold">
						Company Name
						<input
							type="text"
							className="border rounded w-full py-1 px-2 font-normal"
							{...register("company", {
								required: "Field is required",
							})}
						/>
						{errors.company && (
							<span className="text-red-500 text-sm">
								{errors.company.message}
							</span>
						)}
					</label>
					<label className="text-gray-700 text-md w-1/2 font-bold">
						Role
						<input
							type="text"
							className="border rounded w-full py-1 px-2 font-normal"
							{...register("role", {
								required: "Field is required",
							})}
						/>
						{errors.role && (
							<span className="text-red-500 text-sm">
								{errors.role.message}
							</span>
						)}
					</label>
				</div>
                <label className="text-gray-700 text-md font-bold flex-1">
					Location
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

                <label className="text-gray-700 text-md font-bold flex-1 w-[100%]">
						YOE
						<select
							{...register("starRating", {
								required: "This field is required",
							})}
							className="border rounded w-full py-2 px-2 text-gray-700 font-normal"
						>
							<option value="" className="text-sm font-bold">
								In years
							</option>
							{[1, 2, 3, 4, 5].map((num) => (
								<option value={num} key={num}>
									{num}
								</option>
							))}
						</select>
						{errors.starRating && (
							<span className="text-red-500 text-sm">
								{errors.starRating.message}
							</span>
						)}
					</label>

				<label className="text-gray-700 text-md font-bold flex-1">
					Description
					<textarea
						rows={6}
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("description", {
							required: "Field is required",
						})}
					/>
					{errors.description && (
						<span className="text-red-500 text-sm">
							{errors.description.message}
						</span>
					)}
				</label>
				<label className="text-gray-700 text-md font-bold max-w-[50%]">
					Price Per Session
					<input
						type="number"
						min={0.1}
                        placeholder="0.1 SOL"
                        step={0.1}
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("pricePerSession", {
							required: "Field is required",
						})}
					/>
					{errors.pricePerSession && (
						<span className="text-red-500 text-sm">
							{errors.pricePerSession.message}
						</span>
					)}
				</label>
                <SocialLinks />
                <Tags />
				<div className="w-full text-center">

				<button className="btn-dark w-1/3">LFG</button>
				</div>
			</div>
		</form>
	);
};

export default MentorForm;
