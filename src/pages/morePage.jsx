import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const MorePage = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-main text-white">
      <div className="flex flex-col gap-6 min-h-screen pt-12 px-12">
        <h1 className="text-4xl font-semibold text-center">More</h1>
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="flex w-full justify-between"
        >
          <p className="text-xl font-semibold">Profile</p>
          <ChevronRight className="text-gray-500 font-semibold" />
        </button>

        <button className="flex w-full justify-between">
          <p className="text-xl font-semibold">Push Notification</p>
          <ChevronRight className="text-gray-500 font-semibold" />
        </button>

        <button className="flex w-full justify-between">
          <p className="text-xl font-semibold">Help</p>
          <ChevronRight className="text-gray-500 font-semibold" />
        </button>
        <div>
          <button
            onClick={() => {
              handleLogout();
            }}
            className="w-full py-2 mt-2 rounded-full bg-yellow-500 text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default MorePage;
