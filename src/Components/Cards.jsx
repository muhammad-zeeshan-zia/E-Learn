import Arrow from "@iconscout/react-unicons/icons/uil-arrow-up-right";

function Cards() {
  return (
    <div
      id="cards"
      className="flex flex-col items-center justify-center md:items-start my-14 md:my-10 px-4 md:px-16"
    >
      <p className="font-bold text-3xl">
        Our <span className="text-green-400 ">Top Courses</span>
      </p>
      <div className="flex gap-4 flex-wrap items-center justify-center ">
        <div className="mt-6 border-2 rounded-2xl flex flex-col items-start border-green-400 p-4 max-w-[360px] hover:shadow-lg transition duration-300 ease-in-out">
          <div className="flex items-center justify-between gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwtpMhl9vnuUMSNsaGAhPIvl9zzYaTPCbjYBl-egyBxC0gtAXHwisjBUf5Bqbtee0L2I&usqp=CAU"
              alt=""
              className="rounded-full w-10 h-10"
            />
            <p className="font-bold">Web Development</p>
          </div>
          <p className="my-4 text-gray-500 text-start border-b-2 pb-6 border-green-400 font-sans hover:text-blacks transition duration-300 ease-in-out">
            Learn Web Development from scratch and become a professional
          </p>

          <button className="font-semibold bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg">
            Enroll Now
            <Arrow size={25} color={"#ffffff"} />
          </button>
        </div>
        <div className="mt-6 border-2 rounded-2xl flex flex-col items-start border-green-400 p-4 max-w-[360px] hover:shadow-lg transition duration-300 ease-in-out">
          <div className="flex items-center justify-between gap-2">
            <img
              src="https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-12-1024x1024.jpg"
              alt=""
              className="rounded-full w-10 h-10"
            />
            <p className="font-bold">Web Development</p>
          </div>
          <p className="my-4 text-gray-500 text-start border-b-2 pb-6 border-green-400 font-sans hover:text-blacks transition duration-300 ease-in-out">
            Learn Web Development from scratch and become a professional
          </p>

          <button className="font-semibold bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Enroll Now
            <Arrow size={25} color={"#ffffff"} />
          </button>
        </div>
        <div className="mt-6 border-2 rounded-2xl flex flex-col items-start border-green-400 p-4 max-w-[360px] hover:shadow-lg transition duration-300 ease-in-out">
          <div className="flex items-center justify-between gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCxe7s30cFmp2jXTxlYKqUo79h2S0re4C0g&usqp=CAU"
              alt=""
              className="rounded-full w-10 h-10"
            />
            <p className="font-bold">Web Development</p>
          </div>
          <p className="my-4 text-gray-500 text-start border-b-2 pb-6 border-green-400 font-sans hover:text-blacks transition duration-300 ease-in-out">
            Learn Web Development from scratch and become a professional
          </p>

          <button className="font-semibold bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Enroll Now
            <Arrow size={25} color={"#ffffff"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
