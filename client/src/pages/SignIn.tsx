import { useForm } from "react-hook-form";
// import * as apiClient from "../api-client";
// import { useMutation, useQueryClient } from "react-query";
// import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MentorForm from "../forms/MentorForm";
import StudentForm from "../forms/StudentForm";
import { useState } from "react";

export type SignInFormData = {
	email: string;
	password: string;
};

const SignIn = () => {
	// const { showToast } = useAppContext();

	const [isMentor, setIsMentor] = useState(true)

	const navigate = useNavigate();
	// const queryClient = useQueryClient();

	const location = useLocation();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<SignInFormData>();

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
		<div className="flex flex-col items-center justify-start h-[140vh]">
			<div className="flex flex-row gap-4 m-4">
				<button className={`whitespace-nowrap  rounded-full py-3 text-xl capitalize hover:bg-opacity-80 px-8 border ${isMentor ? 'bg-black text-white' : 'border-black text-black'}`} onClick={() => setIsMentor(true)}>Mentor</button>
				<button className={`whitespace-nowrap  rounded-full py-3 text-xl capitalize hover:bg-opacity-80 px-8 border ${isMentor ? 'border-black text-black' : 'bg-black text-white'}`} onClick={() => setIsMentor(false)}>Student</button>
			</div>
			{
				isMentor ? 
				<MentorForm /> :
				<StudentForm />
			}
		</div>
	);
};

export default SignIn;
