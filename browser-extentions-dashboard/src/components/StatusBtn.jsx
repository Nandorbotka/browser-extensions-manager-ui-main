import React from "react";

const StatusBtn = ({ children, active, ...props }) => {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded-3xl border border-gray-300 dark:border-slate-600 cursor-pointer ${
                active
                    ? "bg-red-600 text-white hover:bg-red-500 hover:text-gray-200  dark:text-slate-700"
                    : "bg-white dark:bg-slate-700 dark:text-white hover:bg-gray-50 hover:text-gray-500 dark:hover:bg-slate-600"
            }`}
        >
            {children}
        </button>
    );
};

export default StatusBtn;
