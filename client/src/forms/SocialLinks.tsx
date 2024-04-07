import React from "react";
import { useForm } from "react-hook-form";

export type SocialLinksData = {
	github: string;
	twitter: string;
	linkedin: string;
};

const SocialLinks = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<SocialLinksData>();
	return (
		<div className="text-center flex flex-col gap-4 justify-center">
			<span className="font-extrabold text-xl">Socials </span>
			<label className="flex flex-row gap-4 items-center text-gray-700 text-md font-bold">
				<span className="py-1">Github:</span>
				<input
					type="text"
					placeholder="https://github.com/username"
					className="border rounded w-full py-1 px-2 ml-3 font-normal"
					{...register("github", {
						required: "Field is required",
					})}
				/>
				{errors.github && (
					<span className="text-red-500 text-sm">
						{errors.github.message}
					</span>
				)}
			</label>
			<label className="flex flex-row gap-4 items-center text-gray-700 text-md font-bold">
				<span className="py-1">Twitter:</span>
				<input
					type="text"
					placeholder="https://twitter.com/username"
					className="border rounded w-full py-1 px-2 font-normal ml-3"
					{...register("twitter", {
						required: "Field is required",
					})}
				/>
				{errors.twitter && (
					<span className="text-red-500 text-sm">
						{errors.twitter.message}
					</span>
				)}
			</label>
			<label className="flex flex-row gap-4 items-center text-gray-700 text-md font-bold">
				<span className="py-1">LinkedIn:</span>
				<input
					type="text"
					placeholder="https://linkedin.com/username"
					className="border rounded w-full py-1 px-2 font-normal"
					{...register("linkedin", {
						required: "Field is required",
					})}
				/>
				{errors.linkedin && (
					<span className="text-red-500 text-sm">
						{errors.linkedin.message}
					</span>
				)}
			</label>
		</div>
	);
};

export default SocialLinks;
