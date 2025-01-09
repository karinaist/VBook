import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const WritePage = ({ books }) => {
  console.log(books)
  return (
    <div className="bg-main text-white min-h-screen">
      <div className="flex flex-col gap-6 min-h-screen pt-12 px-6">
        <h1 className="text-4xl font-semibold text-center">Write</h1>
        <div className="flex justify-between">
          <button>Edit Buku</button>
          <Link
            to={"/create"}
            className="text-xs items-center flex gap-1 bg-yellow-500 text-white font-semibold rounded-full py-2 px-4"
          >
            <Plus size={16} />
            Buat Cerita
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-8 pb-24">
          {books.length == 0 ? (
            <div className="w-full col-span-3 grid place-items-center font-semibold text-2xl">
              Buku Tidak Ditemukan
            </div>
          ) : (
            books.map((book, index) => (
              <Link
                to={`/edit/${book.id}`}
                key={"book " + index}
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
          {}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default WritePage;
