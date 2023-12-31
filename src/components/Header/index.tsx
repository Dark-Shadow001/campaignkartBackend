"use client";
import React from "react";
import CustomNotification from "../customNotification";
import Link from "next/link";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((state: any) => state.general.user);
  return (
    <div>
      <CustomNotification />
      <div className="flex border-b py-4 px-10 lg:px-20 justify-between items-center contact-details">
        <Link shallow href="/">
          <div className="">
            <img
              className="w-[120px] lg:w-[65%] xl:w-full"
              src="/assets/images/logo.png"
            />
          </div>
        </Link>
        {user ? (
          <Link shallow href={"/logout"}>
            <div>
              <button className="px-3 py-2 lg:px-4 text-white lg:py-2 buttonShadow bg-brand_secondary text-[10px] lg:text-sm">
                Log out
              </button>
            </div>
          </Link>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default Header;
