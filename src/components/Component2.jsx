import phones from "../assets/illustration-phones.svg";
import circlesbg from "../assets/bg-pattern-circles.svg";

const Component2 = () => {
  return (
    <>
      <section className="font-overpass text-center bg-gradient-to-r from-very-dark-gray-blue to-very-dark-desaturated-blue pb-10 md:pb-0 rounded-tr-[10%] rounded-bl-[10%] relative z-10 mt-[80px] md:mb-[40px] md:mt-[20px]">
        <div>
          <img
            src={phones}
            className="absolute -top-[20%] -z-1 overflow-visible mx-auto inset-x-0 md:-left-[50%] md:w-[480px]"
          />
        </div>
        <div className="md:grid md:grid-cols-2 overflow-hidden relative rounded-tr-[10%] rounded-bl-[10%] ">
          <div className="pt-72 md:pt-14 md:pb-4 md:text-left md:order-2 md:pr-20 md:my-12">
            <h2 className="mx-5 text-center text-white-color font-bold text-3xl mb-5  lg:text-4xl 2xl:text-5xl md:text-left ">
              State of the Art Infrastructure
            </h2>
            <p className="mx-5 text-grayish-blue mb-10 md:pr-20">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
          <div className="flex ">
            <div className="absolute -top-[40%] left-[-15%] -z-50 w-[160%] md:-top-[140%]">
              <img src={circlesbg} className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Component2;
