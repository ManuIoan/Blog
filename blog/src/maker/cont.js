/** @format */

import Cnt from "./cnt";
import React, { useEffect, useState } from "react";

function Cont() {
  const [blg, setBlg] = useState([
    {
      id: 1,
      titlu: "Aspirina",
      descriere:
        "Aspirina (acidul acetilsalicilic) este un medicament des folosit in multe afectiuni datorita efectelor sale: analgezic, antipiretic, antiinflamator, antiagregant plachetar etcMedicul trebuie sa fie cel care initiaza si conduce tratamentul cu acest medicament, tinand cont de anumite riscuri, efecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
    },

    {
      id: 2,
      titlu: "Aspirina",
      descriere:
        "Aspirina (acidul acetilsalicilic) este un medicament des folosit in multe afectiuni datorita efectelor sale: analgezic, antipiretic, antiinflamator, antiagregant plachetar etcMedicul trebuie sa fie cel care initiaza si conduce tratamentul cu acest medicament, tinand cont de anumite riscuri, efecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
    },

    {
      id: 3,
      titlu: "Aspirina",
      descriere:
        "Aspirina (acidul acetilsalicilic) este un medicament des folosit in multe afectiuni datorita efectelor sale: analgezic, antipiretic, antiinflamator, antiagregant plachetar etcMedicul trebuie sa fie cel care initiaza si conduce tratamentul cu acest medicament, tinand cont de anumite riscuri, efecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
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
