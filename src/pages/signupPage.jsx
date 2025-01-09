import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignupPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const phoneExists = existingUsers.some((user) => user.phone === data.phone);
    if (phoneExists) {
      toast.error("Phone number already registered!");
      return;
    }

    existingUsers.push(data);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    localStorage.setItem("loggedInUser", JSON.stringify(data));

    toast.success("Registration successful!");
    setUser(data);
    navigate("/");
  };

  const password = watch("password");

  return (
    <div className="flex bg-white flex-col min-h-screen gap-12">
      <div className="flex gap-4 mx-auto w-[90%] pt-12 items-center">
        <img src="/logoDark.png" className="aspect-auto w-28 h-32" />
        <div>
          <h1 className="font-semibold tracking-wider text-4xl">Welcome To </h1>
          <h1 className="font-semibold tracking-wider text-4xl">V-Book</h1>
        </div>
      </div>
      <div className="flex-1 bg-main rounded-t-3xl">
        <div className="flex flex-col px-10 gap-4 h-full">
          <div className="flex justify-between">
            <button
              onClick={() => navigate("/login")}
              className="text-xl text-white py-4 w-[40%] border-b-4 border-b-main"
            >
              Login
            </button>
            <button className="text-xl text-white py-4 w-[40%] border-b-4 border-b-yellow-500">
              Sign Up
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className="px-4 py-2 rounded-full w-full"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-white">
                Phone
              </label>
              <input
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^08\d{8,11}$/,
                    message: "Please enter a valid Indonesian phone number",
                  },
                })}
                placeholder="08xxxxx"
                className="px-4 py-2 rounded-full w-full"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Password"
                className="px-4 py-2 rounded-full w-full"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-white">
                Confirmation Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                placeholder="Confirm password"
                className="px-4 py-2 rounded-full w-full"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="bg-yellow-500 text-black w-full py-2 rounded-full"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
