import React from "react";
import MentorCard from "../components/MentorCard";
import data from "../utils/dummyData";

const Mentors = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="w-[50%] flex flex-row relative mt-5">
				<input
					className="w-full border border-twitter py-2 px-4 font-semibold text-xl rounded-full shadow-sm shadow-twitter"
					placeholder="search mentor"
				/>
				<i className="fi fi-rr-search absolute right-4 top-1/2 transform -translate-y-1/2 md:pointer-events-none text-xl text-dark-grey"></i>
			</div>

			<div>
				<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-10 mx-10">
					{
						data.map((mentor, index) => (
							<MentorCard key={index} mentor={mentor} />
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Mentors;
