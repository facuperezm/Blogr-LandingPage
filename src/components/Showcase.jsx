// import bg from "../assets/bg-pattern-intro-desktop.svg";

const Showcase = () => {
  return (
    <>
      <section className="font-overpass showcase relative rounded-bl-[10%] -z-50">
        {/* <div className="absolute top-0 -z-50 no-repeat center/cover">
          <img src={bg} alt="backgroun pattern" />
        </div> */}
        <div className="overlay px-5 flex flex-col items-center justify-center text-center">
          <h1 className="font-medium mt-10 text-3xl text-white mb-5 md:text-5xl xl:text-6xl 2xl:text-7xl">
            A modern publishing platform
          </h1>
          <p className="text-white mb-5">
            Grow your audience and build your online brand
          </p>
          <ul className="flex items-center">
            <li className="mx-1 my-5">
              <button className="btn-light bg-white py-2 px-4 rounded-full ">
                Start for Free
              </button>
            </li>
            <li className="mx-1 my-5">
              <button className="border border-white py-2 px-4 rounded-full text-white font-bold">
                Learn More
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Showcase;
