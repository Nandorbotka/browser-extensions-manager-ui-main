import Header from "./components/Header";
import StatusBtns from "./components/StatusBtns";

function App() {
    return (
        <div className="p-2 bg-gray-100 min-h-screen">
            <Header />
            <h1 className="text-center text-2xl font-semibold mt-8">
                Extensions List
            </h1>
            <StatusBtns />
        </div>
    );
}

export default App;
