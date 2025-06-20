import React from "react";

const StatusBtn = ({ children, ...props }) => {
    return (
        <button {...props} className="px-4 py-2 rounded-3xl border">
            {children}
        </button>
    );
};

export default StatusBtn;
