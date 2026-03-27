import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaDownload, FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const allApps = useLoaderData();
  const appCard = useParams();
  const appId = parseInt(appCard.id);
  const selectedApp = allApps.find((allApp) => allApp.id === appId);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    ratings,
    description,
  } = selectedApp;

  const [install, setInstall] = useState(false);

  const handleAppInstall = () => {
    setInstall(true);
    toast.success("App Installed Successfully!");
  };

  return (
    <div className="max-w-4xl m-4 md:mx-auto md:mt-10">
      <div className="card lg:card-side bg-base-100 md:rounded-none mb-4 shadow-md md:shadow-none md:mb-6">
        <figure className="md:w-1/4">
          <img className="w-full" src={image} alt="" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title">{title}</h2>
          <h6>
            Developed By:
            <span className="text-[#632EE3]">{companyName}</span>
          </h6>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex grow gap-5 justify-between md:justify-start">
            <div>
              <FaDownload className="text-[#00D390] text-2xl mb-1" />
              <small className="text-xs">Downloads</small>
              <h3 className="text-2xl font-bold">{downloads}M</h3>
            </div>
            <div>
              <FaStar className="text-[#FF8811] text-2xl mb-1" />
              <small className="text-xs">Average Rating</small>
              <h3 className="text-2xl font-bold">{ratingAvg}</h3>
            </div>
            <div>
              <AiFillLike className="text-[#632EE3] text-2xl mb-1" />
              <small className="text-xs">Total Reviews</small>
              <h3 className="text-2xl font-bold">{reviews}K</h3>
            </div>
          </div>
          <div className="card-actions">
            <button
              className={`btn btn-sm w-full md:w-auto text-white ${install ? "bg-[#6dd3b3]" : "bg-[#00D390]"}`}
              onClick={() => handleAppInstall()}
              disabled={install}
            >
              {!install ? `Install Now (${selectedApp.size}MB)` : `Installed`}
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-400 my-2" />

      <h3 className="text-xl font-semibold mb-2">Ratings</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={[...ratings].reverse()} layout="vertical">
          <YAxis dataKey="name" type="category" stroke="gray" />
          <XAxis type="number" stroke="gray" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="count" fill="orange" barSize={30} />
        </BarChart>
      </ResponsiveContainer>

      <hr className="border-t border-gray-400 my-2" />

      <h3 className="text-xl font-semibold mb-2">Description</h3>
      <p>{description}</p>
    </div>
  );
};

export default AppDetails;
