import React from "react";
import playStore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              <span className="text-[#632EE3]">AI-Powered </span>
              Digital Experiences
            </h1>
            <p className="py-6">
              Create content fast. Personalize with ease. Test, analyze, and
              repeat. Then scale it all with AI and see what your team is
              capable of.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <div className="flex gap-3 justify-center">
              <a href="https://play.google.com/store/apps?pli=1">
                <img src={playStore} className="h-12" alt="" />
              </a>

              <a href="https://www.apple.com/app-store/">
                <img src={appStore} className="h-12" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={hero} className="max-w-md mx-auto" alt="" />
    </section>
  );
};

export default Banner;
