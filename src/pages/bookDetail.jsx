import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const [book, setBook] = useState(books.find((book) => book.id === id));
  const navigate = useNavigate();

  return (
    <div className="flex pt-12 flex-col w-full px-6 gap-4">
      <div className="flex w-full justify-start">
        <button onClick={() => navigate("/")}>
          <ArrowLeft />
        </button>
      </div>
      <h1 className="text-2xl font-semibold text-center">{book.title}</h1>
      <p>{book.content}</p>
    </div>
  );
};

export default BookDetail;
