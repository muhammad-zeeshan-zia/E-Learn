import Mic from "@iconscout/react-unicons/icons/uil-microphone";
import Search from "@iconscout/react-unicons/icons/uil-search-alt";
import hero from "../1.png";

function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between px-3 md:px-20">
      <div className="mt-10 flex flex-col items-start justify-center">
        <div className="flex items-center justify-center">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-14 rounded-lg"
          />
          <p className="font-bold mx-3 text-start">
            Largest Learning <br /> Platform
          </p>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-start my-4">
          Find Professional in every field.
        </h1>
        <div className="my-3  flex items-center justify-center gap-2 md:gap-4">
          <input
            type="text"
            placeholder="Select your course ..."
            className="border border-slate-400 py-3 px-2 md:p-4 rounded-lg text-center outline-green-400"
          />
          <button className="bg-green-400 py-3 px-3 md:py-4 md:px-6 rounded-lg font-semibold flex gap-2 items-center">
            Search <Search size={16} />
          </button>
        </div>
        <div className="mt-5 flex itemc justify-center gap-2 items-center">
          <span className="bg-purple-300 rounded-full py-2 px-2">
            {" "}
            <Mic size={20} color={"#12399B"} />
          </span>
          <p className="font-semibold font-sans text-start">
            1.5k Experts and 15k Learners around the globe
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img src={hero} alt="hehe" className=" mt-10 w-[260px] md:w-[430px]" />
      </div>
    </div>
  );
}

export default HeroSection;
