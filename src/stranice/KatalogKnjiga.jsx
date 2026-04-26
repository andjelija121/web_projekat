import React from "react";
import { NavLink } from "react-router-dom";
import KarticaKnjige from "../komponente/KarticaKnjige";
import data from "../data.json";
import PretragaKnjige from "../komponente/PretragaKnjige";

const KatalogKnjiga = () => {
  const knjige = Object.values(data.knjige);
  const autori = Object.values(data.autori);

  return (
    <div>
      <div className="p-10">

        <div className="flex justify-around items-center mb-10">
          <h1
            className="text-4xl font-bold ml-16"
            bg-dark-coffee-900
          >
            Каталог књига
          </h1>

          <PretragaKnjige />
        </div>

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
    </div>
  );
};

export default KatalogKnjiga;