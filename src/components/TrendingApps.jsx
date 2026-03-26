import React from "react";
import TrendingApp from "./TrendingApp";

const TrendingApps = ({ trendingApps }) => {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-semibold mb-2">Trending Apps</h1>
      <p className="text-center text-sm">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-4">
        {trendingApps
          .map((trendingApp) => (
            <TrendingApp
              trendingApp={trendingApp}
              key={trendingApp.id}
            ></TrendingApp>
          ))
          .slice(0, 8)}
      </div>
    </div>
  );
};

export default TrendingApps;
