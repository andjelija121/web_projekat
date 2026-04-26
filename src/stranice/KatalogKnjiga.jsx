import React from "react";
import { NavLink } from "react-router-dom";
import KarticaKnjige from "../komponente/katicaKnjige";
import data from "../data.json";

const KatalogKnjiga = () => {
  const knjige = Object.values(data.knjige);
  const autori = Object.values(data.autori);

  return (
    <div className="min-h-screen bg-[#f5f3ff] p-10">
      <h1 className="text-4xl font-bold text-left ml-16 mb-10">
        Katalog knjiga
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {knjige.map((knjiga, index) => (
          <NavLink key={index} to={`/knjige/${index}`}>
            <KarticaKnjige
              slika={knjiga.slike[0]}
              naziv={knjiga.naziv}
              imeAutora={
                autori[parseInt(knjiga.id_autora.slice(-1)) - 1].ime
              }
              prezimeAutora={
                autori[parseInt(knjiga.id_autora.slice(-1)) - 1].prezime
              }
              ocena={knjiga.ocena}
              cena={knjiga.cena}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default KatalogKnjiga;