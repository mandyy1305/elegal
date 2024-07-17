import { FaBars, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

import { Link } from "react-router-dom";

import authentication from "../Authentication/authentication";

import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import SideNav from "./SideNav/SideNav";
import useBodyScrollLock from "./useBodyScrollLock";
import { getAuth, signOut } from "firebase/auth";

const ClientHomeNavbar = () => {
  const [profileDropdownVisible, setProfileDropdownVisibility] =
    useState(false);

  const [isSideNavOpen, SetSideNavOpen] = useState(false);
  const [isLocked, toggle] = useBodyScrollLock();

  const onClickHandler = () => {
    SetSideNavOpen(!isSideNavOpen);
    toggle();
  };

  return (
    <div className="flex bg-navbar w-full h-16 z-50 fixed text-white justify-center">
      {isSideNavOpen && <SideNav />}

      <div className="nav-content flex flex-row w-full max-w-screen-4xl h-full justify-center">
        <div className="sm-nav  w-1/4 h-full lg:hidden flex justify-center items-center">
          <div className="menu-icon flex items-center justify-start w-1/4 md:hidden">
            {!isSideNavOpen && (
              <FiMenu className="text-2xl" onClick={() => onClickHandler()} />
            )}
            {isSideNavOpen && (
              <VscChromeClose
                className="text-2xl"
                onClick={() => onClickHandler()}
              />
            )}
          </div>
        </div>
        <div className="logo w-2/4 md:w-1/4 h-full  flex justify-center items-center">
          <Link to="/">
            <span className="text-4xl font-extrabold p-2 hover:cursor-pointer">
              eLegal
            </span>
          </Link>
        </div>
        <div className="nav w-2/5 max-w-screen-xl h-full hidden md:flex justify-between items-center  text-lg font-semibold">
          <Link to="/">
            <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
              Home
            </div>
          </Link>
          <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
            NAV1
          </div>
          <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
            NAV1
          </div>
          <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
            NAV1
          </div>
          <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
            NAV1
          </div>
        </div>
        <div className="account w-1/4 relative h-full  flex justify-center items-center flex-col">
          <Link
            to="/signin"
            className="border-2 rounded-full w-24 flex justify-center"
          >
            Sign In
          </Link>
          <button
            className="border-2 rounded-full w-24"
            onClick={() => {
              const auth = getAuth();
              signOut(auth).then(() => {
                console.log("Signed Out");
              });
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientHomeNavbar;
