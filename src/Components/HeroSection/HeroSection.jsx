import React from "react";
import bgImage from "../../assets/Banner-min.jpg";

const HeroSection = () => {
  return (
    <div className="sora">
      <div
        className="hero place-items-start text-start items-start  py-60 px-36"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {" "}
        <div className="hero-content text-neutral-content ">
          <div>
            <h1 className="mb-5 text-5xl font-semibold">
              Bid on Unique Items from <br /> Around the World
            </h1>
            <p className="mb-5 text-2xl font-medium">
              Discover rare collectibles, luxury goods, and vintage <br />{" "}
              treasures in our curated auctions
            </p>
            <button className="btn bg-white text-black border-none rounded-full">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
