import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Star } from "lucide-react";
import Navbar from "../components/navbar";
import { useForm } from "react-hook-form";

const HomePage = ({ user, books }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      if (user) {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, []);

  const onSubmit = (data) => {
    navigate("/my-list?q=" + data.search);
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-main min-h-screen grid place-items-center">
        <div className="flex flex-col gap-6">
          <button
            onClick={() => navigate("/login")}
            className="bg-white font-bold w-[300px] py-4 text-2xl rounded-full hover:bg-yellow-500 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="bg-white font-bold w-[300px] py-4 text-2xl rounded-full hover:bg-yellow-500 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }

  // Authorized view (Main Homepage)
  return (
    <div className="flex flex-col gap-8 p-6 min-h-screen text-white  bg-main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex bg-white gap-2 w-full rounded-full px-4 py-1 "
      >
        <button>
          <Search className="text-gray-400" />
        </button>

        <input
          className="w-full outline-none text-black"
          placeholder="Search Book"
          {...register("search")}
        />
      </form>

      <div className="flex gap-4 ">
        <img
          src="https://picsum.photos/175/311"
          className=" object-cover bg-gray-500 aspect-[9/16] flex-1"
        />
        <div className="flex-1 ">
          <h1 className="text-xl font-bold line-clamp-1">{books[0].title}</h1>
          <p className=" line-clamp-[17] text-xs text-justify">
            {books[0].content}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <Link
          to={`/book/${books[8].id}`}
          className="flex flex-col gap-4 items-center"
        >
          <h2 className="font-bold text-center">Rekomendasi</h2>
          <img
            src="https://picsum.photos/175/311"
            className="bg-gray-600 aspect-[11/16] flex-1 w-full"
          />
          <div className="flex gap-1 flex-col justify-start text-start w-full">
            <p className="text-sm">{books[2].title}</p>
            <div className="flex">
              {Array.from({ length: books[2].rating }).map((_, index) => (
                <Star
                  size={12}
                  fill="#ca8a04"
                  color="#ca8a04"
                  key={"Rekomendasi Star" + index}
                />
              ))}
            </div>
          </div>
        </Link>

        <Link
          to={`/book/${books[8].id}`}
          className="flex flex-col gap-4 items-center"
        >
          <h2 className="font-bold text-center">Populer</h2>
          <img
            src="https://picsum.photos/175/311"
            className="bg-gray-600 aspect-[11/16] flex-1 w-full"
          />
          <div className="flex gap-1 flex-col justify-start text-start w-full">
            <p className="text-sm line-clamp-1">{books[8].title}</p>
            <div className="flex">
              {Array.from({ length: books[8].rating }).map((_, index) => (
                <Star
                  size={12}
                  fill="#ca8a04"
                  color="#ca8a04"
                  key={"Rekomendasi Star" + index}
                />
              ))}
            </div>
          </div>
        </Link>

        <Link
          to={`/book/${books[10].id}`}
          className="flex flex-col gap-4 items-center"
        >
          <h2 className="font-bold text-center">Favoritku</h2>
          <img
            src="https://picsum.photos/175/311"
            className="bg-gray-600 aspect-[11/16] flex-1 w-full"
          />
          <div className="flex gap-1 flex-col justify-start text-start w-full">
            <p className="text-sm line-clamp-1">{books[10].title}</p>
            <div className="flex">
              {Array.from({ length: books[10].rating }).map((_, index) => (
                <Star
                  size={12}
                  fill="#ca8a04"
                  color="#ca8a04"
                  key={"Rekomendasi Star" + index}
                />
              ))}
            </div>
          </div>
        </Link>
      </div>

      <Navbar />
    </div>
  );
};

export default HomePage;
