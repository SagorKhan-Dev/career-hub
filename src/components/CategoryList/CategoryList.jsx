import React from "react";
import account from "../../assets/icons/accounts.png";
import creative from "../../assets/icons/creative.png";
import marketing from "../../assets/icons/marketing.png";
import chip from "../../assets/icons/chip.png";

const CategoryList = () => {
  return (
    <section className="container mx-auto my-32">
      <h2 className="text-5xl font-extrabold text-center">Job Category List</h2>
      <p className="font-medium my-6 text-center text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:flex md:justify-between gap-10 ">
        <div className="p-10 bg-[#7E90FE0D] rounded-md space-y-4 w-full my-4 md:my-0">
          <img src={account} alt="" />
          <h3 className="textarea-xl font-extrabold">Account & Finance</h3>
          <p>300 Jobs Available</p>
        </div>
        <div className="p-10 bg-[#7E90FE0D] rounded-md space-y-4 w-full my-4 md:my-0">
          <img src={creative} alt="" />
          <h3 className="textarea-xl font-extrabold">Creative Design</h3>
          <p>100+ Jobs Available</p>
        </div>
        <div className="p-10 bg-[#7E90FE0D] rounded-md space-y-4 w-full my-4 md:my-0">
          <img src={marketing} alt="" />
          <h3 className="textarea-xl font-extrabold">Marketing & Sales</h3>
          <p>150 Jobs Available</p>
        </div>
        <div className="p-10 bg-[#7E90FE0D] rounded-md space-y-4 w-full my-4 md:my-0">
          <img src={chip} alt="" />
          <h3 className="textarea-xl font-extrabold">Engineering Job</h3>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
