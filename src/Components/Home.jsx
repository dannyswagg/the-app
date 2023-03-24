import React from "react";

const Home = () => {
  return (
    <>
      <div className="px-[10%]">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="font-bold text-4xl mb-4">
              Lorem ipsum <br />
              dolor sit amet <br /> consectetur.
            </h1>
            <p className="text-[#c4c4c4] mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              deleniti repellat qui libero ipsum esse.
            </p>
            <button className="bg-black text-white py-3 px-2 rounded mb-5 font-bold">
              CalltoAction
            </button>
            <button className="border border-black py-3 px-2 text-black rounded mb-5 font-bold">
              See Workspace
            </button>
          </div>
          <div>
            <img src="" alt="" height={20} width={20} />
            <img src="" alt="" height={20} width={20} />
          </div>
        </div>
        <div classname="flex">
          <div>
            <h1 className="font-bold text-2xl">Header Text</h1>
            <p className="text-[#c4c4c4]">
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. Perspiciatis eligendi qui <br />
              repudiandae unde reiciendis, adipisci ipsum in modi impedit vitae.
            </p>
          </div>
          <div className="w-[50px] h-[50px]">
            <h1>dshsvbksdjhvdsjlh</h1>
            <img src="" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-2xl">Header Text</h1>
            <p className="text-[#c4c4c4]">
              Lorem ipsum dolor sit amet
              <br /> consectetur adipisicing elit. Perspiciatis eligendi qui
              <br /> repudiandae unde reiciendis, adipisci ipsum in modi impedit
              vitae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
