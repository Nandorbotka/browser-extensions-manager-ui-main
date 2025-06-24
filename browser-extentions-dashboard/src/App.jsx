import ExtentionCard from "./components/ExtentionCard";
import Header from "./components/Header";
import StatusBtns from "./components/StatusBtns";

function App() {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <Header />
            <h1 className="text-center text-2xl font-semibold mt-8">
                Extensions List
            </h1>
            <StatusBtns />
            <ExtentionCard />
        </div>
    );
}

export default App;
