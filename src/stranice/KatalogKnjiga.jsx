import React from "react";
import karticaKnjige from "../komponente/katicaKnjige";
import data from "../data/knjige.json";


const KatalogKnjiga = () => {
  const knjige = Object.values(data);
  console.log(knjige)

  return (
    <div className="min-h-screen bg-[#f5f3ff] p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Katalog knjiga
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {knjige.map((knjiga,index) => (
          <KarticaKnjige
            key={index}
            slika={knjiga.slike[0]}
            naslov={knjiga.naslov}
            autor={knjiga.autor}
            ocena={knjiga.ocena}
            cena={knjiga.cena}
          />
        ))}
      </div>
    </div>
  );
};

export default KatalogKnjiga;