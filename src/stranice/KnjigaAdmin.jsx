import React, { useState } from "react";
import data from "../data.json";

const pocetneKnjige = Object.values(data.knjige);
const autori = Object.values(data.autori);

const praznaKnjiga = {
  naziv: "",
  zanr: "",
  isbn: "",
  broj_strana: "",
  format: "",
  cena: "",
  opis: "",
  id_autora: "autor1",
  slike: [""],
};

const KnjigaAdmin = () => {
  const [knjige, setKnjige] = useState(pocetneKnjige);
  const [prikaziFormu, setPrikaziFormu] = useState(false);
  const [forma, setForma] = useState(praznaKnjiga);
  const [indeksIzmene, setIndeksIzmene] = useState(null); // null = dodavanje, broj = izmena
  const [potvrdiObrisanje, setPotvrdiObrisanje] = useState(null); // index knjige za brisanje

  const otvoriDodavanje = () => {
    setForma(praznaKnjiga);
    setIndeksIzmene(null);
    setPrikaziFormu(true);
  };

  const otvoriIzmenu = (index) => {
    setForma({ ...knjige[index] });
    setIndeksIzmene(index);
    setPrikaziFormu(true);
  };

  const sacuvaj = () => {
    if (!forma.naziv.trim() || !forma.isbn.trim()) {
      alert("Naziv i ISBN su obavezni!");
      return;
    }
    if (indeksIzmene === null) {
      setKnjige([...knjige, forma]);
    } else {
      const nove = [...knjige];
      nove[indeksIzmene] = forma;
      setKnjige(nove);
    }
    setPrikaziFormu(false);
    setForma(praznaKnjiga);
    setIndeksIzmene(null);
  };

  const obrisi = (index) => {
    const nove = knjige.filter((_, i) => i !== index);
    setKnjige(nove);
    setPotvrdiObrisanje(null);
  };

  const getAutor = (knjiga) => {
    const i = parseInt(knjiga.id_autora?.slice(-1)) - 1;
    return autori[i] ? `${autori[i].ime} ${autori[i].prezime}` : "—";
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "#f5f0e8" }}>

      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold" style={{ color: "#3b1f0e" }}>
            Администрација књига
          </h1>
          <p className="text-sm mt-1" style={{ color: "#7a5c42" }}>
            Преглед, измена и брисање свих књига у систему
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: "#d4b89a" }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ background: "#5a3e28", color: "#f5f0e8" }}>
              <th className="text-left px-5 py-4 text-sm font-semibold tracking-wide">Назив</th>
              <th className="text-left px-5 py-4 text-sm font-semibold tracking-wide">Аутор</th>
              <th className="text-left px-5 py-4 text-sm font-semibold tracking-wide">Жанр</th>
              <th className="text-left px-5 py-4 text-sm font-semibold tracking-wide">ISBN</th>
              <th className="text-left px-5 py-4 text-sm font-semibold tracking-wide">Страна</th>
              <th className="text-center px-5 py-4 text-sm font-semibold tracking-wide">Акције</th>
            </tr>
          </thead>
          <tbody>
            {knjige.map((knjiga, index) => (
              <tr
                key={index}
                style={{
                  background: index % 2 === 0 ? "#fffaf5" : "#f5ede0",
                  borderBottom: "1px solid #e0c9b0",
                }}
              >
                <td className="px-5 py-4 font-bold text-sm" style={{ color: "#3b1f0e" }}>
                  {knjiga.naziv}
                </td>
                <td className="px-5 py-4 text-sm" style={{ color: "#5a3e28" }}>
                  {getAutor(knjiga)}
                </td>
                <td className="px-5 py-4 text-sm" style={{ color: "#5a3e28" }}>
                  {knjiga.zanr}
                </td>
                <td className="px-5 py-4 text-sm font-mono" style={{ color: "#7a5c42" }}>
                  {knjiga.isbn}
                </td>
                <td className="px-5 py-4 text-sm text-center" style={{ color: "#5a3e28" }}>
                  {knjiga.broj_strana}
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => otvoriIzmenu(index)}
                      className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                      style={{ background: "#7a5c42", color: "#fff" }}
                      onMouseOver={e => e.target.style.background = "#5a3e28"}
                      onMouseOut={e => e.target.style.background = "#7a5c42"}
                    >
                      Измени
                    </button>
                    <button
                      onClick={() => setPotvrdiObrisanje(index)}
                      className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                      style={{ background: "#c0392b", color: "#fff" }}
                      onMouseOver={e => e.target.style.background = "#962d22"}
                      onMouseOut={e => e.target.style.background = "#c0392b"}
                    >
                      Обриши
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ background: "#f5ede0", borderTop: "1px solid #d4b89a" }} className="px-5 py-4">
          <button
            onClick={otvoriDodavanje}
            className="px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow"
            style={{ background: "#3b1f0e", color: "#f5f0e8" }}
            onMouseOver={e => e.target.style.background = "#5a3e28"}
            onMouseOut={e => e.target.style.background = "#3b1f0e"}
          >
            + Додај нову књигу
          </button>
        </div>
      </div>

      {prikaziFormu && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="rounded-2xl shadow-2xl p-8 w-full max-w-lg" style={{ background: "#fffaf5" }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#3b1f0e" }}>
              {indeksIzmene === null ? "Додај нову књигу" : "Измени књигу"}
            </h2>

            <div className="flex flex-col gap-4">
              <Polje labela="Назив" vrednost={forma.naziv} onChange={v => setForma({ ...forma, naziv: v })} />
              <Polje labela="Жанр" vrednost={forma.zanr} onChange={v => setForma({ ...forma, zanr: v })} />
              <Polje labela="ISBN" vrednost={forma.isbn} onChange={v => setForma({ ...forma, isbn: v })} />
              <Polje labela="Број страна" vrednost={forma.broj_strana} onChange={v => setForma({ ...forma, broj_strana: v })} tip="number" />
              <Polje labela="Цена (RSD)" vrednost={forma.cena} onChange={v => setForma({ ...forma, cena: v })} tip="number" />
              <Polje labela="Формат" vrednost={forma.format} onChange={v => setForma({ ...forma, format: v })} />

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold" style={{ color: "#3b1f0e" }}>Аутор</label>
                <select
                  value={forma.id_autora}
                  onChange={e => setForma({ ...forma, id_autora: e.target.value })}
                  className="border rounded-lg px-3 py-2 text-sm"
                  style={{ borderColor: "#d4b89a", background: "#f5ede0", color: "#3b1f0e" }}
                >
                  {autori.map((a, i) => (
                    <option key={i} value={`autor${i + 1}`}>{a.ime} {a.prezime}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold" style={{ color: "#3b1f0e" }}>Опис</label>
                <textarea
                  value={forma.opis}
                  onChange={e => setForma({ ...forma, opis: e.target.value })}
                  rows={3}
                  className="border rounded-lg px-3 py-2 text-sm resize-none"
                  style={{ borderColor: "#d4b89a", background: "#f5ede0", color: "#3b1f0e" }}
                />
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => { setPrikaziFormu(false); setForma(praznaKnjiga); }}
                className="px-5 py-2 rounded-xl text-sm font-semibold border"
                style={{ borderColor: "#d4b89a", color: "#7a5c42", background: "#f5ede0" }}
              >
                Откажи
              </button>
              <button
                onClick={sacuvaj}
                className="px-5 py-2 rounded-xl text-sm font-bold"
                style={{ background: "#3b1f0e", color: "#f5f0e8" }}
              >
                Сачувај
              </button>
            </div>
          </div>
        </div>
      )}

      {potvrdiObrisanje !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center" style={{ background: "#fffaf5" }}>
            <p className="text-5xl mb-4">🗑️</p>
            <h2 className="text-xl font-bold mb-2" style={{ color: "#3b1f0e" }}>Потврди брисање</h2>
            <p className="text-sm mb-6" style={{ color: "#7a5c42" }}>
              Да ли си сигурна да желиш да обришеш књигу <strong>„{knjige[potvrdiObrisanje]?.naziv}"</strong>? Ова акција је неповратна.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setPotvrdiObrisanje(null)}
                className="px-5 py-2 rounded-xl text-sm font-semibold border"
                style={{ borderColor: "#d4b89a", color: "#7a5c42", background: "#f5ede0" }}
              >
                Откажи
              </button>
              <button
                onClick={() => obrisi(potvrdiObrisanje)}
                className="px-5 py-2 rounded-xl text-sm font-bold"
                style={{ background: "#c0392b", color: "#fff" }}
              >
                Обриши
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

const Polje = ({ labela, vrednost, onChange, tip = "text" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold" style={{ color: "#3b1f0e" }}>{labela}</label>
    <input
      type={tip}
      value={vrednost}
      onChange={e => onChange(e.target.value)}
      className="border rounded-lg px-3 py-2 text-sm"
      style={{ borderColor: "#d4b89a", background: "#f5ede0", color: "#3b1f0e" }}
    />
  </div>
);

export default KnjigaAdmin;