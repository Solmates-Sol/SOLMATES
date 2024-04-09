import { Link } from "react-router-dom";
import Featured from "./Featured";
import HomeImg from "../assets/homePng.png";
import OverviewCard from "./OverviewCard";
import ProfileCard from "../assets/ProfileCard.png"

const HomeComponent = () => {
  return (
    <>
      <div>
        <div className="w-screen h-screen items-center justify-center flex  bg-[#fbf5e5] z-10 overflow-hidden relative py-10 px-10">
          <img
            src={HomeImg}
            alt="home"
            className="w-auto h-[60%] hidden lg:block md:block -z-10 object-cover lg:object-fill absolute -top-28 -left-1"
          />
          <div className=" flex w-screen h-full flex-col lg:flex-row md:flex-row items-center justify-center gap-5">
            <div className="flex flex-col mt-10 ">
              <div className="flex flex-col flex-1">
                <span className="text-5xl font-bold">Transform</span>
                <span className="text-5xl font-bold">Your Time</span>
                <span className="text-5xl font-bold">into Profit</span>
              </div>
              <p className="text-xl mt-2">
                Unlock Your Potential: Connect with Mentors, Embrace Growth, and
                Learn to Thrive.
              </p>
              <div className="my-5 flex flex-1 gap-3">
                <Link to="/mentors">
                  <button className="btn-dark text-white py-2 px-5 rounded-full">
                    Find Mentor
                  </button>
                </Link>
                <Link to="/learn">
                  <button className="btn-light text-black py-2 px-5 rounded-full border-2 border-black">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col cursor-pointer">
              <img
                src={ProfileCard}
                alt="home"
                className="w-[400px] h-auto bg-transparent rounded-t-3xl rounded-br-3xl "
              />
             
            </div>
          </div>
        </div>
      </div>
      <Featured />
      <OverviewCard />
    </>
  );
};

export default HomeComponent;