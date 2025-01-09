import React from "react";
import { BookCopyIcon, Home, List, Pen, Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getTextColor = (path) => {
    return location.pathname === path ? "text-yellow-400" : "text-white";
  };

  return (
    <div className="text-white max-w-[382px] bg-blue-800/80 bottom-10 p-4 rounded-3xl fixed left-1/2 -translate-x-1/2 w-[90%] flex justify-between mx-auto">
      {" "}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="flex items-center flex-col gap-1"
      >
        <Home />
        <p className={`${getTextColor("/")} text-sm font-semibold`}>Home</p>
      </button>
      <button
        onClick={() => {
          navigate("/my-list");
        }}
        className="flex items-center flex-col gap-1"
      >
        <BookCopyIcon />
        <p className={`${getTextColor("/my-list")} text-sm font-semibold`}>
          My List
        </p>
      </button>
      <button
        onClick={() => {
          navigate("/community");
        }}
        className="flex items-center flex-col gap-1"
      >
        <Users />
        <p className={`${getTextColor("/community")} text-sm font-semibold`}>
          Community
        </p>
      </button>
      <button
        onClick={() => {
          navigate("/write");
        }}
        className="flex items-center flex-col gap-1"
      >
        <Pen />
        <p className={`${getTextColor("/write")} text-sm font-semibold`}>
          Write
        </p>
      </button>
      <button
        onClick={() => {
          navigate("/more");
        }}
        className="flex items-center flex-col gap-1"
      >
        <List />
        <p className={`${getTextColor("/more")} text-sm font-semibold`}>More</p>
      </button>
    </div>
  );
};

export default Navbar;
