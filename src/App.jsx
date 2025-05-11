import "./App.css";
import Kanban from "./components/Kanban";

function App() {
  return (
    <>
      <div className="min-h-screen bg-violet-950 text-white">
        <h1 className="text-3xl font-bold text-center p-10">Kanban</h1>
        <Kanban />
      </div>
    </>
  );
}

export default App;
