import { Link, useParams } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import data from "../utils/dummyData";

const Profile = () => {
  const walletAddress = useParams();
  console.log(walletAddress);

  const mentor = data.find(
    (mentor) => mentor.walletAddress === walletAddress
  );
  console.log("----------------", mentor);
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <div className="w-full h-[45%] bg-[#fbf5e5] flex px-36 border border-black justify-around py-10">
        <div className="profile flex flex-1 justify-center items-center gap-3 border border-black">
          <div>
            <img
              src="https://api.dicebear.com/8.x/avataaars/svg?seed=Max"
              alt="profile"
              className="w-40 h-40 rounded-full object-fill mx-auto bg-white shadow-lg"
            />
            <div className="flex justify-center items-center gap-2">
              <i className="fi fi-rs-marker  text-lg text-dark-grey"></i>
              <p className="text-xl text-center">SF</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 mx-5">
            <h1 className="text-2xl font-sans font-bold">John Doe</h1>
            <div className="flex gap-5">
              <Link to="/" className="text-lg text-center">
                {" "}
                <i className="fi fi-brands-github text-3xl"></i>
              </Link>
              <Link to="/" className="text-lg text-center">
                {" "}
                <i className="fi fi-brands-linkedin text-3xl"></i>
              </Link>
              <Link to="/" className="text-lg text-center">
                {" "}
                <i className="fi fi-brands-twitter text-3xl"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="details flex flex-1 flex-col gap-2  py-5 px-10  border border-black">
          <div className="flex gap-5">
            <div className="">
              <h3 className="text-xl font-sans font-semibold">Role</h3>
              <p className="text-2xl">Fullstack Developer</p>
            </div>
            <div className="">
              <h3 className="text-xl font-sans font-semibold">Experience</h3>
              <p className="text-2xl">1 Years</p>
            </div>
            <div className="">
              <h3 className="text-xl font-sans font-semibold">Company</h3>
              <p className="text-2xl">Huddle01</p>
            </div>
          </div>
          <div className="">
            <h3 className="text-xl ml-1 my-1 font-sans font-semibold">
              Skills
            </h3>
            <div className="flex gap-2 cursor-pointer">
              <span className="bg-[#f0c987] hover:bg-transparent text-black px-2 py-1 rounded-full">
                Fullstack
              </span>
              <span className="bg-[#f0c987] hover:bg-transparent text-black px-2 py-1 rounded-full">
                Rust
              </span>
              <span className="bg-[#f0c987] hover:bg-transparent text-black px-2 py-1 rounded-full">
                Solana
              </span>
            </div>
          </div>
          <h1 className="text-xl ml-1 my-1 font-sans font-semibold">
            Description
          </h1>
          <p className=" mx-1">
            Developer with 6+ years of experience. Building in Solana since 2021.
          </p>
        </div>
      </div>
      <div className="flex my-20 items-center mx-10 justify-center gap-20">
        <ServiceCard data={"15 min"}/> <ServiceCard data={"30 min"}/> <ServiceCard data={"1 hr"}/>
      </div>
    </div>
  );
};

export default Profile;
