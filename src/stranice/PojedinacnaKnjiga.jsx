import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function  PojedinacnaKnjiga() {
  const knjige = Object.values(data.knjige);
  const autori = Object.values(data.autori);

  let { knjigaId } = useParams();

  return (
    <div>
      <div>PojedinacnaKnjiga</div>
      <div>
        <p>{knjigaId} Knjiga</p>
      </div>
    </div>
  );
}

export default PojedinacnaKnjiga;