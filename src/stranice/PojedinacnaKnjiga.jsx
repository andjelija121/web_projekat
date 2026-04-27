import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import data from "../data.json";

const PojedinacnaKnjiga = () => {
  const { knjigaId } = useParams();

  const knjige = Object.values(data.knjige);
  const autori = Object.values(data.autori);
  const recenzijeSve = Object.values(data.recenzije);
  const korisnici = Object.values(data.korisnici);

  const knjiga = knjige[knjigaId];

if (!knjiga) {
  return <div>Књига није пронађена</div>;
}

const autor = autori[parseInt(knjiga.id_autora.slice(-1)) - 1];
const autorIndex = parseInt(knjiga.id_autora.slice(-1)) - 1;

  const [recenzije, setRecenzije] = useState([]);
  const [novaRecenzija, setNovaRecenzija] = useState("");
  const [poruka, setPoruka] = useState("");

  useEffect(() => {
    const knjigaKljuc = Object.keys(data.knjige)[knjigaId];
    const filtrirane = recenzijeSve
      .filter((r) => r.id_knjige === knjigaKljuc)
      .map((r) => {
        const korisnikIndex = parseInt(r.id_korisnika.slice(-1)) - 1;
        const korisnik = korisnici[korisnikIndex];
        return {
          ...r,
          ime: korisnik?.ime || "Nepoznat",
          prezime: korisnik?.prezime || "",
        };
      });
    setRecenzije(filtrirane);
  }, [knjigaId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novaRecenzija.trim()) return;

    const korisnikId = localStorage.getItem("korisnikId");
    if (!korisnikId) {
      setPoruka("niste_prijavljeni");
      return;
    }

    const korisnikIndex = parseInt(korisnikId.slice(-1)) - 1;
    const korisnik = korisnici[korisnikIndex];

    const nova = {
      tekst: novaRecenzija.trim(),
      datum: new Date().toISOString().split("T")[0],
      ime: korisnik?.ime || "Korisnik",
      prezime: korisnik?.prezime || "",
    };

    setRecenzije((prev) => [nova, ...prev]);
    setNovaRecenzija("");
    setPoruka("uspesno");
    setTimeout(() => setPoruka(""), 3000);
  };

  return (
    <div className="min-h-screen bg-brown p-10">

      <div className="mb-8">
        <NavLink to="/knjige" className="text-dark-coffee-900 hover:text-dark-coffee-900 text-sm font-sans">
          ← Каталог књига
        </NavLink>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto mb-16">

        <div className="lg:w-2/5">
          <div className="relative">
            <div className="absolute inset-0 bg-dark-coffee-300 rounded-2xl translate-x-3 translate-y-3 opacity-40" />
            <img
              src={knjiga.slike[0]}
              alt={knjiga.naziv}
              className="relative w-full max-w-sm rounded-2xl shadow-2xl object-cover aspect-[2/3]"
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=Knjiga"; }}
            />
            <span className="absolute top-4 left-4 bg-white text-dark-coffee-700 text-xs font-bold px-3 py-1 rounded-full shadow">
              {knjiga.zanr}
            </span>
          </div>
        </div>

        <div className="lg:w-3/5 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-dark-coffee-900 mb-3">{knjiga.naziv}</h1>

          <p className="text-lg text-dark-coffee-500 mb-6 font-sans">
            Аутор:{" "}
            <NavLink
              to={`/autori/${autorIndex}`}
              className="text-dark-coffee-600 font-semibold hover:underline"
            >
              {autor.ime} {autor.prezime}
            </NavLink>
          </p>

          <p className="text-dark-coffee-700 leading-relaxed mb-8 border-l-4 border-dark-coffee-300 pl-4 italic">
            {knjiga.opis}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <InfoPolje labela="Формат" vrednost={knjiga.format} />
            <InfoPolje labela="Број страница" vrednost={`${knjiga.broj_strana} стр.`} />
            <InfoPolje labela="ISBN" vrednost={knjiga.isbn} />
            <InfoPolje labela="Жанр" vrednost={knjiga.zanr} />
          </div>
            
          <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-1 font-sans">Цена</p>
              <p className="text-3xl font-bold text-dark-coffee-700">{knjiga.cena.toLocaleString()} дин</p>
          </div>
          
        </div>
      </div>

      <div className="border-t border-dark-coffee-100 mb-16 max-w-6xl mx-auto" />

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Рецензије читалаца{" "}
          <span className="text-lg text-gray-400 font-normal">({recenzije.length})</span>
        </h2>

        <div className="bg-white rounded-2xl shadow p-6 mb-10 border border-dark-coffee-50">
          <h3 className="text-lg font-bold text-gray-800 mb-4 font-sans">Остави своју рецензију</h3>
          <form onSubmit={handleSubmit}>
            <textarea
              value={novaRecenzija}
              onChange={(e) => setNovaRecenzija(e.target.value)}
              placeholder="Подели своје утиске о књизи..."
              rows={4}
              className="w-full border border-dark-coffee-200 rounded-xl p-4 text-gray-700 text-sm font-sans resize-none focus:outline-none focus:ring-2 focus:ring-dark-coffee-400"
              required
            />
            {poruka === "niste_prijavljeni" && (
              <p className="text-red-500 text-sm mt-2 font-sans">Морате бити пријављени да бисте оставили рецензију.</p>
            )}
            {poruka === "uspesno" && (
              <p className="text-green-600 text-sm mt-2 font-sans">✓ Рецензија је успешно додата!</p>
            )}
            <div className="flex justify-end mt-4">
              <button type="submit" className="bg-dark-coffee-600 hover:bg-dark-coffee-700 text-white font-sans font-semibold px-6 py-2.5 rounded-xl text-sm shadow">
                Пошаљи рецензију
              </button>
            </div>
          </form>
        </div>

        {recenzije.length === 0 ? (
          <div className="text-center py-16 text-gray-400 font-sans">
            <p className="text-5xl mb-4">📖</p>
            <p className="text-lg">Још нema рецензија.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {recenzije.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6 border border-dark-coffee-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-dark-coffee-100 flex items-center justify-center text-dark-coffee-700 font-bold text-sm font-sans">
                      {r.ime?.[0]}{r.prezime?.[0]}
                    </div>
                    <span className="font-semibold text-gray-800 font-sans text-sm">{r.ime} {r.prezime}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-sans">{r.datum}</span>
                </div>
                <p className="text-dark-coffee-700 text-sm leading-relaxed">{r.tekst}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const InfoPolje = ({ labela, vrednost }) => (
  <div className="bg-white rounded-xl p-4 border border-dark-coffee-100 shadow-sm">
    <p className="text-xs text-dark-coffee-400 font-sans uppercase tracking-widest mb-1">{labela}</p>
    <p className="text-dark-coffee-800 font-semibold font-sans text-sm">{vrednost}</p>
  </div>
);

export default PojedinacnaKnjiga;
