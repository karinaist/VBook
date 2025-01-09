import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import Navbar from "../components/navbar";
import { Link, useSearchParams } from "react-router-dom";

const MyListPage = ({ books }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      search: searchParams.get("q") || "",
    },
  });

  const searchQuery = watch("search", "");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        setSearchParams({ q: searchQuery });
      } else {
        setSearchParams({});
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, setSearchParams]);

  const onSearchSubmit = (data) => {
    setValue("search", data.search);
    if (data.search) {
      setSearchParams({ q: data.search });
    } else {
      setSearchParams({});
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 p-6 min-h-screen text-white bg-main">
      <form
        className="flex bg-white gap-2 w-full rounded-full px-4 py-1"
        onSubmit={handleSubmit(onSearchSubmit)}
      >
        <Search className="text-gray-400" />
        <input
          {...register("search")}
          className="w-full outline-none text-black"
          placeholder="Search Book"
        />
      </form>

      <div className="grid grid-cols-3 gap-8 pb-24">
        {filteredBooks.length === 0 ? (
          <div className="w-full col-span-3 grid place-items-center font-semibold text-2xl">
            Buku Tidak Ditemukan
          </div>
        ) : (
          filteredBooks.map((book, index) => (
            <Link
              to={`/book/${book.id}`}
              key={book.id || `book-${index}`}
              className="flex flex-col gap-2 items-center"
            >
              <img
                className="bg-gray-600 aspect-[11/16] flex-1 w-full"
                src="https://picsum.photos/200/300"
                alt={book.title}
              />
              <div className="flex gap-1 flex-col justify-start text-start w-full">
                <p className="text-sm line-clamp-1">{book.title}</p>
              </div>
            </Link>
          ))
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default MyListPage;
