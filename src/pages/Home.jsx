import React from "react";
import Banner from "../components/Banner";
import States from "../components/States";
import TrendingApps from "../components/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const trendingApps = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <States></States>
      <TrendingApps trendingApps={trendingApps}></TrendingApps>
    </div>
  );
};

export default Home;
