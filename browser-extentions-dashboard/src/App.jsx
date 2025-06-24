import { useState } from "react";
import ExtentionCard from "./components/ExtentionCard";
import Header from "./components/Header";
import StatusBtns from "./components/StatusBtns";

function App() {
    const [filter, setFilter] = useState("all");

    return (
        <div className="p-4 bg-gray-100 min-h-screen md:px-32">
            <Header />
            <div className="w-full  md:flex justify-between items-center">
                <h1 className=" text-center text-2xl font-semibold mt-8 ">
                    Extensions List
                </h1>
                <StatusBtns filter={filter} setFilter={setFilter} />
            </div>

            <ExtentionCard filter={filter} />
        </div>
    );
}

export default App;
