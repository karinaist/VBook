import { ArrowLeft } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const CreatePage = ({ books, setBooks }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    const newBook = {
      id: String(books.length + 1),
      title: data.title,
      sinopsis: data.sinopsis,
      content: data.content,
      imgUrl: "https://example.com/placeholder.jpg",
      rating: 0,
    };

    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);

    localStorage.setItem("books", JSON.stringify(updatedBooks));

    navigate("/write");
  };

  return (
    <div className="bg-main text-white min-h-screen">
      <div className="flex flex-col gap-6 min-h-screen pt-12 px-12">
        <div className="flex items-center justify-between">
          <Link to={"/write"}>
            <ArrowLeft size={24} className="text-yellow-500 font-semibold" />
          </Link>
          <h1 className="text-xl font-semibold text-center">Buat Cerita</h1>
          <div></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label>Judul</label>
            <input
              className="outline-none bg-transparent border-b-2"
              placeholder="Tulis judulmu disini..."
              {...register("title", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Sinopsis</label>
            <input
              className="outline-none bg-transparent border-b-2"
              placeholder="Tulis sinopsis ceritamu disini..."
              {...register("sinopsis", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Isi Cerita</label>
            <textarea
              placeholder="Tulis ceritamu disini..."
              className="outline-none h-48 bg-transparent border-b-2"
              {...register("content", { required: true })}
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

export default CreatePage;
