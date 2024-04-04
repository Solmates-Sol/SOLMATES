import Mentors from "./Mentors";
import OverviewCard from "./OverviewCard";

const HomeComponent = () => {
	return (
		<>
			<div className="w-screen h-screen mx-auto flex flex-col justify-center items-center bg-[#fbf5e5] overflow-hidden">
				<h1 className=" my-5 text-center text-black text-4xl font-bold">
					Start your side hustle today
				</h1>
				<p className="w-1/2 text-center">
					Turn your passion and knowledge into a thriving business.
					Help your audience get ahead in life.
				</p>
				<div className="flex gap-3">
					<button className="btn-dark my-10">Get Started</button>
					<button className="btn-light my-10 border-2">
						Learn More
					</button>
				</div>
			</div>
			<Mentors />
			<OverviewCard />
		</>
	);
};

export default HomeComponent;
