import React from "react";

const StatusBtn = ({ children, active, ...props }) => {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded-3xl border border-gray-300 ${
                active ? "bg-red-600 text-white" : "bg-white"
            }`}
        >
            {children}
        </button>
    );
};

export default StatusBtn;
