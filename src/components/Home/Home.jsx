import React from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <section>
      <Banner />
      <CategoryList />
      <FeaturedJobs />
    </section>
  );
};

export default Home;
