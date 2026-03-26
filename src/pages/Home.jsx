import React from "react";
import Banner from "../components/Banner";
import States from "../components/States";
import TrendingApps from "../components/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const allApps = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <States></States>
      <TrendingApps allApps={allApps}></TrendingApps>
    </div>
  );
};

export default Home;
