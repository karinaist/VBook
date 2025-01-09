import React from "react";
import Navbar from "../components/navbar";

const CommunityPage = () => {
  return (
    <div className="flex bg-white flex-col min-h-screen gap-12">
      <div className="flex gap-4 mx-auto w-[90%] pt-12 items-center">
        <img src="/logoDark.png" className="aspect-auto w-28 h-32" />
        <div>
          <h1 className="font-semibold tracking-wider text-4xl">Welcome To </h1>
          <h1 className="font-semibold tracking-wider text-4xl">Community</h1>
        </div>
      </div>
      <div className="flex-1 px-6 gap-4 flex flex-col pt-12 bg-main text-white rounded-t-3xl text-center">
        <img src="/communityHero.png" className="mx-auto" />
        <h2 className="text-xl font-bold">Tetap terhubung dengan komunitas</h2>
        <p className="">
          Komunitas menyatukan anggota dalam grup berdasarkan topik dan
          memudahkan untuk menerima pengumuman admin. Setiap komunitas yang Anda
          ikuti akan muncul disini.
        </p>
        <button className="mt-4 bg-yellow-500 text-black w-full py-2 rounded-full">
          Mulai Komunitas Anda
        </button>
      </div>
      <Navbar  />
    </div>
  );
};

export default CommunityPage;
