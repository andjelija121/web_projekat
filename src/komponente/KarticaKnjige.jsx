// components/KarticaKnjiga.jsx

import React from "react";

const KarticaKnjige = ({ slika, naziv, imeAutora, prezimeAutora, ocena, cena }) => {
  return (
    <div className="w-[320px] bg-bela rounded-2xl p-4 shadow-md flex gap-4 items-center hover:scale-105 transition duration-300">
      
    
      <img
        src={slika}
        alt={naziv}
        className="w-[90px] h-[130px] object-cover rounded-lg shadow"
      />

      <div className="flex flex-col justify-between h-full">
        
        <div>
          <h2 className="text-lg font-bold text-brown leading-tight">
            {naziv}
          </h2>
          <p className="text-sm text-brown-200 mt-1">
          {imeAutora} <span>{prezimeAutora}</span>
          </p>
        </div>

        <p className="text-brown font-semibold text-md mt-3">
          {cena} дин
        </p>
      </div>
    </div>
  );
};

export default KarticaKnjige;