import React from "react";
import aboutImage from "../assets/dev2.png";

const About: React.FC = () => {
  return (
    <div className="bg-[#fbf5e5] min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center pl-20 justify-between">
          <div className="w-full md:w-1/2 order-2 md:order-1">
		  <h1 className=" my-5  justify-start text-black text-4xl font-bold">
		  Building Bonds Between  Developers
				</h1>
            <p className="text-black mt-8 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
			<div className="flex gap-3">
					<button className="btn-dark my-10">Get Started</button>
					<button className="btn-light my-10 border-2">
						Learn More
					</button>
				</div>
          </div>
          <div className="w-50  order-1 md:order-2 pr-20">
            <img src={aboutImage} alt="meeting" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;