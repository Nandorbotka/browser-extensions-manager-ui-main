import React from "react";
import StatusBtn from "./StatusBtn";

const StatusBtns = () => {
    return (
        <div className="flex justify-evenly m-auto">
            <StatusBtn>All</StatusBtn>
            <StatusBtn>Active</StatusBtn>
            <StatusBtn>Inactive</StatusBtn>
        </div>
    );
};

export default StatusBtns;
