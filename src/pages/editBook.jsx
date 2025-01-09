import { ArrowLeft } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import {} from "../data/mockData";

const EditBook = ({ books, setBooks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((book) => book.id === id);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      title: book?.title || "",
      sinopsis: book?.sinopsis || "",
      content: book?.content || "",
    },
  });

  const onSubmit = (data) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {
      const updatedBook = {
        ...books[bookIndex],
        ...data,
      };

      const updatedBooks = [...books];
      updatedBooks[bookIndex] = updatedBook;
      setBooks(updatedBooks);

      localStorage.setItem("books", JSON.stringify(updatedBooks));

      navigate("/write");
    }
  };

  if (!book) {
    return <div className="text-white">Buku tidak ditemukan</div>;
  }

  return (
    <div className="bg-main text-white min-h-screen">
      <div className="flex flex-col gap-6 min-h-screen pt-12 px-12">
        <div className="flex items-center justify-between">
          <Link to={"/write"}>
            <ArrowLeft size={24} className="text-yellow-500 font-semibold" />
          </Link>
          <h1 className="text-xl font-semibold text-center">Edit Cerita</h1>
          <div></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label>Judul</label>
            <input
              className="outline-none bg-transparent border-b-2"
              placeholder="Tulis judulmu disini..."
              {...register("title")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Sinopsis</label>
            <input
              className="outline-none bg-transparent border-b-2"
              placeholder="Tulis sinopsis ceritamu disini..."
              {...register("sinopsis")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Isi Cerita</label>
            <textarea
              placeholder="Tulis ceritamu disini..."
              className="outline-none h-48 bg-transparent border-b-2"
              {...register("content")}
            />
          </div>
          <button
            type="submit"
            disabled={
              !watch("title") || !watch("sinopsis") || !watch("content")
            }
            className="bg-yellow-500 disabled:bg-gray-700 rounded-full py-2 disabled:text-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
