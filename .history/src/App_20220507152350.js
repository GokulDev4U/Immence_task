import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Conversation from "./components/Conversation/Conversation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Conversation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
