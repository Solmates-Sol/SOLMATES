import React from "react";

const OverviewCard = () => {
	return (
		<div className="bg-[#fbf5e5] mb-[50px] flex flex-row pt-5 md:pt-10 lg:pt-10 h-[60vh]">
			<div className="md:flex md:flex-col hidden my-auto w-[30%] md:w-[60%] sm:w-[70%] sm:mx-auto  items-center">
				<div className="border border-black w-[50%] text-center h-96 items-center rounded-3xl shadow-2xl">
					<div className="flex flex-col justify-center mt-4 items-center">
					<img
				src="https://api.dicebear.com/8.x/micah/svg?seed=Nala"
				alt="mentor"
				className="w-[50%] h-40 object-cover object-fill border border-black shadow-lg rounded-full"
			/>
						<span className="text-lg font-bold mt-2">Name</span>
					</div>
					<div className="flex flex-row justify-center mt-4 gap-6">
						<span>Session Charge</span>
						<span>10 SOL</span>
					</div>
					<div className="flex flex-row justify-center mt-4 gap-6">
						<span>Company Name</span>
						<span>2 YOE</span>
					</div>
					<div className="flex flex-row justify-center mt-6 gap-6 text-xl font-bold">
						<span>Total Calls</span>
						<span className="border border-black shadow-md px-4 rounded-full">40+</span>
					</div>

				</div>
			</div>
			<div className="flex flex-col my-auto w-[70%] md:w-[60%] items-start">
				<span className="text-2xl md:text-5xl font-bold pb-3 text-wrap">
					Use Solmates and unlock<br /> your new source of<br /> income.
				</span>
				<span className="text-xl md:text-2xl">
					Just invest some time, and earn some SOL!
				</span>
			</div>
		</div>
	);
};

export default OverviewCard;
