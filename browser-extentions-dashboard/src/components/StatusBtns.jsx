import React from "react";
import StatusBtn from "./StatusBtn";

const StatusBtns = ({ filter, setFilter }) => {
    return (
        <div className="flex justify-center mt-4 gap-2 ">
            {["all", "active", "inactive"].map((status) => (
                <StatusBtn
                    key={status}
                    active={status === filter}
                    onClick={() => setFilter(status)}
                >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </StatusBtn>
            ))}
        </div>
    );
};

export default StatusBtns;
