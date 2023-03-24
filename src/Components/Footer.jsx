import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#ececec] px-[10%] py-28">
        <div className="grid grid-cols-2">
          <div className="bg-[#9d9d9d] h-20 w-20">
            <img src="" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-5xl mb-4">
              Lorem ipsum dolor <br /> sit amet.
            </h1>
            <p className="text-[#636262]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. fixed
              bottom-0 w-full Recusandae voluptate natus saepe ex, sed ipsam
              aliquid ullam iste?
            </p>
            <button className="bg-black rounded-md text-white px-8 py-3 mt-8">
              CalltoAction
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
