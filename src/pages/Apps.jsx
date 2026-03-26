import React from "react";
import { useLoaderData } from "react-router";
import TrendingApp from "../components/TrendingApp";
import { FaSearch } from "react-icons/fa";

const Apps = () => {
  const allApps = useLoaderData();
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-semibold mb-2">
        Our All Applications
      </h1>
      <p className="text-center text-sm">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between mt-6 mb-3">
        <h3 className="text-xl font-semibold">({allApps.length}) Apps Found</h3>
        <label className="input input-sm">
          <FaSearch />
          <input type="search" required placeholder="Search Apps" />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {allApps.map((allApp) => (
          <TrendingApp allApp={allApp} key={allApp.id}></TrendingApp>
        ))}
      </div>
    </div>
  );
};

export default Apps;
