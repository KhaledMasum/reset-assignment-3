import React, { useState } from "react";
import { useLoaderData } from "react-router";
import TrendingApp from "../components/TrendingApp";
import { FaSearch } from "react-icons/fa";

const Apps = () => {
  const allApps = useLoaderData();
  const [filteredApps, setFilteredApps] = useState(allApps);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const results = allApps.filter((allApp) =>
      allApp.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredApps(results);
  };

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-center text-2xl font-semibold mb-2">
        Our All Applications
      </h1>
      <p className="text-center text-sm">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between mt-6 mb-3">
        <h3 className="text-xl font-semibold">
          ({filteredApps.length}) Apps Found
        </h3>
        <label className="input input-sm w-40 md:w-xs">
          <FaSearch />
          <input
            type="search"
            name="search"
            placeholder="Search Apps"
            onChange={handleSearch}
            required
          />
        </label>
      </div>
      {filteredApps.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredApps.map((allApp) => (
            <TrendingApp allApp={allApp} key={allApp.id}></TrendingApp>
          ))}
        </div>
      ) : (
        <p className="text-md font-semibold text-red-500 text-center">
          No app found
        </p>
      )}
    </div>
  );
};

export default Apps;
