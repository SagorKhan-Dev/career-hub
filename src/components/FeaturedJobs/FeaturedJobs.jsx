import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section>
      <h2 className="text-5xl font-extrabold text-center">Featured Jobs</h2>
      <p className="font-medium my-6 text-center text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </section>
  );
};

export default FeaturedJobs;
