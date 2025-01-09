import { ArrowLeft } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const ProfilePage = ({ user, setUser }) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const updatedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUserPhone = user.phone;

    const updatedUser = updatedUsers.map((u) => {
      if (u.phone === loggedInUserPhone) {
        return { ...u, ...data };
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(updatedUser));

    localStorage.setItem("loggedInUser", JSON.stringify(data));
    setUser(data);

    toast.success("Profile updated successfully!");
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-main min-h-screen text-white">
      <div className="flex flex-col gap-6 min-h-screen pt-12 px-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              navigate("/more");
            }}
          >
            <ArrowLeft size={42} className="text-yellow-500 font-semibold" />
          </button>

          <h1 className="text-4xl font-semibold text-center">Profile</h1>
          <button
            className="text-yellow-500 text-xl disabled:text-gray-500"
            onClick={handleSubmit(onSubmit)}
            disabled={
              watch("name") === user.name &&
              watch("phone") === user.phone &&
              watch("password") === user.password
            }
          >
            Save
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <img
            src="https://picsum.photos/200"
            className="size-24 rounded-full"
            alt="profile"
          />
          <p className="text-2xl">{user.name}</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label>User Name</label>
            <input
              className="outline-none bg-transparent border-b-2"
              defaultValue={user.name}
              {...register("name")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>No Handphone</label>
            <input
              className="outline-none bg-transparent border-b-2"
              defaultValue={user.phone}
              {...register("phone")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              className="outline-none bg-transparent border-b-2"
              type="password"
              defaultValue={user.password}
              {...register("password")}
            />
          </div>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default ProfilePage;
