import { useState } from "react";
import ExtentionCard from "./components/ExtentionCard";
import Header from "./components/Header";
import StatusBtns from "./components/StatusBtns";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [filter, setFilter] = useState("all");

    return (
        <div
            className={
                isDarkMode
                    ? "p-4 bg-slate-900 min-h-screen md:px-32 dark"
                    : "p-4 bg-gray-100 min-h-screen md:px-32"
            }
        >
            <Header
                isDarkMode={isDarkMode}
                toggleDarkMode={() => {
                    setIsDarkMode(!isDarkMode);
                }}
            />
            <div className="w-full  md:flex justify-between items-center">
                <h1 className=" text-center text-2xl font-semibold mt-8 dark:text-white ">
                    Extensions List
                </h1>
                <StatusBtns filter={filter} setFilter={setFilter} />
            </div>

            <ExtentionCard filter={filter} />
        </div>
    );
}

export default App;
