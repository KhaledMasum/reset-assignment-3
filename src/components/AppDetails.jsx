import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaDownload, FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const allApps = useLoaderData();
  const appCard = useParams();
  const appId = parseInt(appCard.id);
  const selectedApp = allApps.find((allApp) => allApp.id === appId);

  console.log(selectedApp);

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm max-w-4xl mx-auto my-10">
      <figure className="w-1/4">
        <img src={selectedApp.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{selectedApp.title}</h2>
        <h6>
          Developed By:
          <span className="text-[#632EE3]">{selectedApp.companyName}</span>
        </h6>
        <hr className="border-t border-gray-400 my-2" />
        <div className="flex grow gap-5">
          <div>
            <FaDownload className="text-[#00D390] text-2xl mb-1" />
            <small className="text-xs">Downloads</small>
            <h3 className="text-2xl font-bold">{selectedApp.downloads}M</h3>
          </div>
          <div>
            <FaStar className="text-[#FF8811] text-2xl mb-1" />
            <small className="text-xs">Average Rating</small>
            <h3 className="text-2xl font-bold">{selectedApp.ratingAvg}</h3>
          </div>
          <div>
            <AiFillLike className="text-[#632EE3] text-2xl mb-1" />
            <small className="text-xs">Total Reviews</small>
            <h3 className="text-2xl font-bold">{selectedApp.downloads}K</h3>
          </div>
        </div>
        <div className="card-actions">
          <button className=" btn btn-sm text-white bg-[#00D390]">
            Install Now ({selectedApp.size}MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
