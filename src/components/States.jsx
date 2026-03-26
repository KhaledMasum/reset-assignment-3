import React from "react";

const States = () => {
  return (
    <section>
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-10">
        <h1 className="text-white text-center text-2xl font-semibold mb-3">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-3 gap-4 text-white text-center">
          <div>
            <p>
              <small className="text-xs">Total Downloads</small>
            </p>
            <h1 className="text-2xl font-bold">29.6M</h1>
            <p>
              <small className="text-xs">21% more than last month</small>
            </p>
          </div>
          <div>
            <p>
              <small className="text-xs">Total Reviews</small>
            </p>
            <h1 className="text-2xl font-bold">906K</h1>
            <p>
              <small className="text-xs">46% more than last month</small>
            </p>
          </div>
          <div>
            <p>
              <small className="text-xs">Active Apps</small>
            </p>
            <h1 className="text-2xl font-bold">132+</h1>
            <p>
              <small className="text-xs">31 more will launch</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
