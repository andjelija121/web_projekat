// components/KarticaKnjiga.jsx

import React from "react";

const karticaKnjige = ({ slika, naslov, autor, ocena, cena }) => {
  return (
    <div className="w-[320px] bg-[#d8d0ff] rounded-2xl p-4 shadow-md flex gap-4 items-center hover:scale-105 transition duration-300">
      
      {/* Slika knjige */}
      <img
        src={slika}
        alt={naslov}
        className="w-[90px] h-[130px] object-cover rounded-lg shadow"
      />

      {/* Desni deo kartice */}
      <div className="flex flex-col justify-between h-full">
        
        {/* Naslov i autor */}
        <div>
          <h2 className="text-lg font-bold text-white leading-tight">
            {naslov}
          </h2>
          <p className="text-sm text-gray-200 mt-1">
            by {autor}
          </p>
        </div>

        {/* Zvezdice */}
        <div className="flex text-yellow-400 text-lg mt-2">
          ★★★★★
        </div>

        {/* Cena */}
        <p className="text-white font-semibold text-md mt-3">
          {cena} RSD
        </p>
      </div>
    </div>
  );
};

export default karticaKnjige;