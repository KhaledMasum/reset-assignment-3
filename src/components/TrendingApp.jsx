import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TrendingApp = ({ allApp }) => {
  console.log(allApp);

  const { id, image, title, downloads, ratingAvg } = allApp;
  return allApp ? (
    <Link to={`/app-details/${id}`}>
      <div className="card bg-base-100 shadow-sm p-3">
        <figure>
          <img className="w-full h-60 object-cover" src={image} alt="" />
        </figure>
        <div className="card-body p-0 mt-3">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between font-bold mb-3">
            <div className="badge badge-sm badge-soft badge-secondary">
              <FaDownload />
              <span>{downloads}</span>
            </div>

            <div className="badge badge-sm badge-soft badge-success">
              <FaStar />
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <h1>No app found</h1>
  );
};

export default TrendingApp;
