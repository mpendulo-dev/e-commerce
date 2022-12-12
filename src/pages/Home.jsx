import React from "react";
import HomeHeader from "../components/Home/HomeHeader";
import SideNav from "../components/Home/SideNav";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="min-h-screen m-10 text-[#6b568c]">
        <div className="flex">
          <div className="w-1/3 text-[#6b568c]">
            <SideNav />
          </div>
          <div className="w-2/3">Content</div>
        </div>
      </div>
    </>
  );
};

export default Home;
