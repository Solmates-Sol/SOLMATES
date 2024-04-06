import { Link } from "react-router-dom";
import Featured from "./Featured";
import HomeImg from "../assets/homePng.png";
import OverviewCard from "./OverviewCard";

const HomeComponent = () => {
  return (
    <>
      <div>
        <div className="w-screen h-screen mx-auto py-24 px-44 items-center justify-center flex  bg-[#fbf5e5] z-10 overflow-hidden relative">
          <img
            src={HomeImg}
            alt="home"
            className="w-auto h-[60%] -z-10 object-cover lg:object-fill absolute -top-28 -left-1"
          />
          <div className=" flex items-center justify-center gap-10">
            <div className="flex flex-col ml-28">
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
                <Link to="/mentors">
                  <button className="btn-light text-black py-2 px-5 rounded-full border-2 border-black">
                    Find Mentor
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 py-24 flex-col cursor-pointer">
              <img
                src="https://i.seadn.io/gcs/files/6e5e81b5d2e399d286df4fa0b496d67d.png?w=500&auto=format"
                alt="home"
                className="object-cover rounded-t-3xl rounded-br-3xl shadow-lg"
              />
              <span className="bg-white w-full py-2 px-5 -mt-10 mr-10 rounded-lg shadow-black shadow-sm "><span className="font-bold">Mark</span> Helps People to gets start with web3</span>
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