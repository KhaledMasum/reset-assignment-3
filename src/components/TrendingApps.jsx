import React from "react";
import TrendingApp from "./TrendingApp";
import { Link } from "react-router";

const TrendingApps = ({ allApps }) => {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-semibold mb-2">Trending Apps</h1>
      <p className="text-center text-sm">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-4">
        {allApps
          .map((allApp) => (
            <TrendingApp allApp={allApp} key={allApp.id}></TrendingApp>
          ))
          .slice(0, 8)}
      </div>

      <div>
        <Link to="/apps" className="flex justify-center mt-4">
          <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            Show all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
