import React from "react";
import Logo from "./logo.svg?react";
import moonImg from "/assets/images/icon-moon.svg";
import sunImg from "/assets/images/icon-sun.svg";

const Header = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm  flex justify-between items-center m-auto p-1 dark:bg-slate-800">
            <div className="flex relative">
                <Logo />
                <p className="hidden dark:block absolute text-2xl text-white font-semibold top-1 left-14 ">
                    Extensions
                </p>
            </div>
            <div
                className="bg-gray-200 p-2 rounded-sm w-fit h-fit cursor-pointer hover:bg-gray-50 dark:bg-slate-700 hover:dark:bg-slate-600 "
                onClick={toggleDarkMode}
            >
                <img src={isDarkMode ? sunImg : moonImg} alt="" />
            </div>
        </div>
    );
};

export default Header;
