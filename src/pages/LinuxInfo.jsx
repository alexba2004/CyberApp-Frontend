import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import tux from "../assets/tux.png"; // Asegúrate de tener una imagen llamada tux.png en /src/assets

export default function LinuxInfo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col">
      <div className="flex items-center px-4 py-6">
        <button
          onClick={() => navigate("/home")}
          className="text-gray-400 hover:text-cyan-500 transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="ml-4 text-2xl font-bold">Linux</h1>
      </div>

      <div className="flex flex-col items-center px-6 space-y-6">
        <img src={tux} alt="Linux Tux" className="w-40 h-40" />

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-justify shadow-lg max-w-xl">
          <p className="text-gray-300 leading-relaxed">
            Linux is a powerful open-source operating system widely used in servers, development environments, cybersecurity, and more. Its flexibility, security, and community-driven nature make it ideal for developers and power users.
            <br /><br />
            From distributions like Ubuntu and Fedora to tools like Bash and systemd, Linux gives you full control over your computing environment. It powers most of the internet, Android phones, and even space systems like those used by NASA.
          </p>
        </div>
      </div>
    </div>
  );
}
