import { useNavigate } from "react-router-dom";
import { Home as HomeIcon, Lock, Menu } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-8">
      <div>
        <h1 className="text-2xl font-bold mb-8">Welcome, Hacker!</h1>

        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg">
            <p className="text-lg font-semibold">Cybersecurity News</p>
          </div>

          <div
            onClick={() => navigate("/linux")}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:bg-gray-800 transition"
          >
            <p className="text-lg font-semibold">Linux</p>
          </div>
        </div>
      </div>

      <nav className="flex justify-around items-center bg-gray-950 border-t border-gray-800 rounded-t-2xl py-4 shadow-inner">
        <button className="flex flex-col items-center text-cyan-500">
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <Lock className="w-6 h-6" />
          <span className="text-xs mt-1">Lock</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <Menu className="w-6 h-6" />
          <span className="text-xs mt-1">Menu</span>
        </button>
      </nav>
    </div>
  );
}
