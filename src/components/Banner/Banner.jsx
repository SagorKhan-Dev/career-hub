import React from "react";
import banner from "../../assets/images/user.png";

const Banner = () => {
  return (
    <section className="bg-[#7E90FE0D] ">
      <div className="container flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            One Step Closer To Your
            <span className="text-violet-400">Dream Job</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Explore thousands of job opportunities with all
            <br className="hidden md:inline lg:hidden" />
            information you need. Its your future. Come find it. Manage all
            <br className="hidden md:inline lg:hidden" />
            the your job application from start to finish.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
            >
              Get Started
            </a>
          </div>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
