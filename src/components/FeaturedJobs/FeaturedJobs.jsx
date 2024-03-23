import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section className="mb-32">
      <h2 className="text-5xl font-extrabold text-center">Featured Jobs</h2>
      <p className="font-medium my-6 text-center text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 container mx-auto ">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      <div
        className={dataLength === jobs.length ? "hidden" : "text-center mt-10"}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          rel="noopener noreferrer"
          href="#"
          className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
        >
          See all Jobs
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
