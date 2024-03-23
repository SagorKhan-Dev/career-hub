import React from "react";
import placeholderImage from "../../assets/logo/netflix.png";
import location2 from "../../assets/icons/location2.png";
import money from "../../assets/icons/money.png";

const Job = ({ job }) => {
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div>
      <div className="p-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
        <img src={logo || placeholderImage} alt="" />
        <h3 className=" text-2xl font-extrabold">{job_title}</h3>
        <p className="text-xl font-medium mb-4 text-gray-400">{company_name}</p>
        <div className="flex gap-6">
          <button className="py-2 px-4 border-2 rounded-md border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="py-2 px-4 border-2 rounded-md border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-4 my-4">
          <div className="flex gap-2 items-center">
            <img src={location2} alt="" />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={money} alt="" />
            <p>{salary}</p>
          </div>
        </div>
        <button
          rel="noopener noreferrer"
          href="#"
          className="px-4 py-2 text-lg font-medium rounded bg-violet-400 text-gray-900"
        >
          See all Jobs
        </button>
      </div>
    </div>
  );
};

export default Job;
