import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find((u) => u.phone === data.phone);

    if (!user) {
      alert("Phone number not found!");
      return;
    }

    if (user.password !== data.password) {
      toast.error("Invalid password!");
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        name: user.name,
        phone: user.phone,
      })
    );

    toast.success("Login successful!");
    setUser(user);
    navigate("/");
  };

  return (
    <div className="flex flex-col bg-white min-h-screen gap-12">
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
            <button className="text-xl text-white py-4 border-b-4 w-[40%] border-b-yellow-500">
              Login
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              className="text-xl text-white py-4 w-[40%] border-b-4 border-b-main"
            >
              Sign Up
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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

            <div className="flex justify-between">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  id="remember"
                  {...register("remember")}
                />
                <label htmlFor="remember" className="text-white">
                  Remember Me
                </label>
              </div>
              <button
                type="button"
                className="text-blue-800"
                onClick={() =>
                  alert("Forgot password functionality not implemented")
                }
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="bg-yellow-500 text-black w-full py-2 rounded-full"
              >
                Login
              </button>
              <div className="w-full flex gap-2 items-center text-white">
                <div className="bg-white h-0.5 w-full"></div>
                OR
                <div className="bg-white h-0.5 w-full"></div>
              </div>
              <button
                type="button"
                className="bg-white text-black w-full py-2 rounded-full"
                onClick={() => alert("Google login not implemented")}
              >
                Continue With
                <span className="ml-1" style={{ color: "#4285F4" }}>
                  G
                </span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#34A853" }}>g</span>
                <span style={{ color: "#4285F4" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
