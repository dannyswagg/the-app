import React from "react";

const Products = () => {
  return (
    <>
      <div className="px-[10%]">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">Products</h1>
          <input
            className="border border-black rounded px-2 py-1.5"
            type="text"
            placeholder="Search for Keywords"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-16 text-center mt-10 mb-10">
          <div>
            <div className="flex justify-between"></div>
            <div className="grid grid-cols-3 bg-[#c4c4c4]">
              <div className="border border-r-black">
                <h1 className="py-3 font-bold">Name</h1>
              </div>
              <div className="border border-r-black">
                <h1 className="py-3 font-bold">Price</h1>
              </div>
              <div className="border border-r-black">
                <h1 className="py-3 font-bold">Action</h1>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="border border-r-black">Lorem, ipsum.</div>
              <div>
                <h1>Lorem, ipsum.</h1>
              </div>
              <div className="flex justify-around">
                <button className="bg-[#000] px-3 py-1 rounded text-white">
                  Edit
                </button>
                <button className="border border-[#000] px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#c4c4c4] py-10">
            <h1 className="text-[#000000] font-bold text-3xl">Header Text</h1>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Distinctio, optio!
            </p>
            <form className="px-20">
              <div>
                <input
                  className="mb-5 rounded px-3 py-3 w-full"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="mb-5 rounded px-3 py-3 w-full"
                  type="text"
                  placeholder="Price"
                />
              </div>
              <div>
                <button className="bg-black rounded-md text-white px-8 py-3 mt-8 w-full">
                  CalltoAction
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
