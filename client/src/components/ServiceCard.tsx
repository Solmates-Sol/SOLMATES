import { Link } from "react-router-dom";
import Huddle01Png from "../assets/huddle_01_logo.jpg";

const ServiceCard: React.FC = ({data}) => {
  return (
    <div className="flex flex-col items-center justify-center w-96 h-64 bg-white rounded-3xl shadow-lg">
      <div className="flex flex-col items-center justify-center w-full h-1/2 bg-blue-500 rounded-t-lg">
        <span></span>
        <h1 className="text-2xl font-bold text-black">
          Mentorship / Career Guidance
        </h1>
      </div>
      <div className="flex w-[300px] h-20 rounded-3xl mt-5 justify-center items-center bg-twitter gap-20 cursor-pointer">
        <div className="flex items-center text-center gap-1 justify-around">
          <i className="fi fi-rr-calendar-clock mt-2 text-white text-4xl"></i>
          <div className="py-2 flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold text-white">Free</h1>
            <p className="text-xl font-semibold text-white">{data}</p>
          </div>
        </div>
        <Link to="https://solmates-huddle01.vercel.app/">
          <img
            src={Huddle01Png}
            alt="Huddle01Png"
            className="w-12 h-12 rounded-full"
          />
        </Link>
        {/* https://solmates-huddle01.vercel.app/nuc-tcog-pmr/lobby */}
      </div>
    </div>
  );
};

export default ServiceCard;
