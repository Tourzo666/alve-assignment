import banner from "./images/banner.png";

const Cover = () => {
  return (
    <div className="my-4 mx-4 relative ">
      <img src={banner} alt="" />

      <div className="flex justify-center items-center ">
        <div className="absolute mx-4 lg:w-3/5 lg:top-28 top-4 text-white text-center  ">
          <h1 className="lg:text-4xl font-semibold ">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="lg:mt-8 text-[12px] lg:text-[18px] ">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="mt-6  " >
            <button className="btn btn-success rounded-full ">Explore Now</button>
            <button className="btn btn-outline rounded-full text-white ml-6 ">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
