/** @format */

import Cnt from "./cnt";
import React, { useEffect, useState } from "react";

function Cont() {
  const [blg, setBlg] = useState([
    {
      id: 1,
      titlu: "Aspirina",
      descriere:
        "A cu acest meecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
    },

    {
      id: 2,
      titlu: "Aspirina",
      descriere:
        "Afuri, efecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
    },

    {
      id: 3,
      titlu: "Aspirina",
      descriere:
        "Aspamentul cu ac riscuri, efecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
    },
  ]);

 
  return(
      <>
  {
    blg.map((bl) => <Cnt key={bl.id} bl={bl} />)
  }
  </>
  )
}

export default Cont;
