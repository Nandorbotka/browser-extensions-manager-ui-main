import React from "react";
import extensions from "../data.json";

const ExtentionCard = ({ filter }) => {
    return (
        <div>
            {extensions.map((ext) => (
                <div
                    key={ext.name}
                    className="bg-white p-4 rounded-xl mt-8 max-w-96"
                >
                    <div className="flex gap-4 items-start">
                        <div>
                            <img src={ext.logo} alt="" className="h-10 w-10" />
                        </div>
                        <div>
                            <h2 className="font-bold text-xl">{ext.name}</h2>
                            <p>{ext.description}</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-8 items-center">
                        <button className="px-4 py-2 rounded-full border border-gray-300">
                            Remove
                        </button>
                        <label className="relative inline-block cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                onChange={() => {
                                    ext.isActive = !ext.isActive;
                                }}
                            />
                            <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-red-600 transition-colors"></div>
                            <span className="w-3/6 h-5/6 bg-white absolute rounded-full top-0.5 left-1 peer-checked:translate-x-4 transition-transform"></span>
                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExtentionCard;
