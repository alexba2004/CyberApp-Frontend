import { useNavigate } from 'react-router-dom';
import { LockKeyhole, User } from 'lucide-react';
import lockTech from '../assets/lock-tech.svg';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-950 p-8 rounded-2xl shadow-xl border border-gray-800">
        <div className="flex justify-center mb-6">
          <img src={lockTech} alt="Tech Lock Icon" className="w-24 h-24" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl px-4 py-3">
            <User className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />
          </div>

          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl px-4 py-3">
            <LockKeyhole className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />
          </div>

          <button
            onClick={() => navigate('/home')}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>

          <div className="text-center text-sm text-gray-400 mt-4 space-y-1">
            <p className="hover:underline cursor-pointer">Forgot password?</p>
            <p className="hover:underline cursor-pointer">Create an account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
