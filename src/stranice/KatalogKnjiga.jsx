import React from "react";
import KarticaKnjige from "../komponente/katicaKnjige";
import data from "../data.json"


const KatalogKnjiga = () => {
  const knjige = Object.values(data.knjige);
  const autori = Object.values(data.autori);

  return (
    <div className="min-h-screen bg-[#f5f3ff] p-10">
      <h1 className="text-4xl font-bold text-left ml-16 mb-10">
        Katalog knjiga
      </h1> 

      <div className="flex flex-wrap justify-center gap-8">
        {knjige.map((knjiga,index) => (
          <KarticaKnjige
            key={index}
            slika={knjiga.slike[0]}
            naziv={knjiga.naziv}
            imeAutora={autori[parseInt(knjiga.id_autora.slice(-1))-1].ime}
            prezimeAutora={autori[parseInt(knjiga.id_autora.slice(-1))-1].prezime}
            ocena={knjiga.ocena}
            cena={knjiga.cena}
          />
        ))}
      </div>
    </div>
  );
};

export default KatalogKnjiga;