import React from "react";
import logoImg from "/assets/images/logo.svg";
import moonImg from "/assets/images/icon-moon.svg";

const Header = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm  flex justify-between items-center m-auto p-1">
            <div className="">
                <img src={logoImg} alt="" className="" />
            </div>
            <div className="bg-gray-200 p-2 rounded-sm w-fit h-fit">
                <img src={moonImg} alt="" />
            </div>
        </div>
    );
};

export default Header;
