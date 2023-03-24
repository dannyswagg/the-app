import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import OutsideClickHandler from "react-outside-click-handler";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <nav>
          <div className="flex justify-between items-center h-20 w-full mx-auto lg:px-16 md:px-16 sm:px-16 z-10 mb-20 sticky">
            <Link to="/">
              <h1 className="font-bold text-3xl float-right">Logo</h1>
            </Link>
            <ul className="mx-auto uppercase text-xs lg:inline-flex hidden">
              <NavLink to="/">
                <li className="px-4">Home</li>
              </NavLink>
              <li className="px-4">About</li>
              <li className="px-4">Services</li>
              <NavLink to="products">
                <li className="px-4">Products</li>
              </NavLink>
            </ul>
            <div className="buttons font-bold lg:inline hidden">
              <Link to="login">
                <button
                  className="inline-flex rounded mr-2 px-6 py-2 text-[#ffffff]
           bg-black duration-200 border hover:border-black"
                >
                  CalltoAction
                </button>
              </Link>
            </div>
            <div className="items-center flex">
              <div
                onClick={handleNav}
                className="block lg:hidden focus:outline-0 float-right"
              >
                <Hamburger
                  distance="sm"
                  duration={0.9}
                  color="#000000"
                  size={25}
                  rounded
                  hideOutline={false}
                  label="Show menu"
                  toggled={open}
                  toggle={setOpen}
                />
              </div>
            </div>

            <div
              className={
                open
                  ? "fixed left-0 top-0 w-[70%] h-full bg-black text-[#CF8E69] ease-in-out duration-800 pt-10 text-center"
                  : "fixed left-[-100%]"
              }
            >
              <h1 className="uppercase text-3xl mb-2">Logo</h1>
              <hr className="border-1 border-[#CF8E69] mb-3" />
              <ul className="text-sm uppercase">
                <Link to="/">
                  <li className="my-5" onClick={handleNav}>
                    Home
                  </li>
                </Link>
                <Link to="products">
                  <li className="my-5" onClick={handleNav}>
                    Product
                  </li>
                </Link>
                <Link to="about">
                  <li className="my-5" onClick={handleNav}>
                    About
                  </li>
                </Link>
                <Link to="contact">
                  <li className="my-5" onClick={handleNav}>
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="uppercase text-sm">
                <ul>
                  <Link to="login">
                    <li
                      className="my-5 border border-[#CF8E69] mx-6"
                      onClick={handleNav}
                    >
                      CalltoAction
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
