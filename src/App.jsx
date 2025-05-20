// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LinuxInfo from "./pages/LinuxInfo"; 

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/linux" element={<LinuxInfo />} />
      </Routes>
    </div>
  );
}

export default App;
