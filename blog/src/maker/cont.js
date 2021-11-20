/** @format */

import Cnt from "./cnt";
import React, { useEffect, useState } from "react";

function Cont() {
  const [blg, setBlg] = useState([
    {
      
      titlu: "Aspirina",
      descriere:
        "A cu acest meecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
    },

    {
      
      titlu: "Aspirina",
      descriere:
        "Afuri, efecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
    },

    {
      
      titlu: "Aspirina",
      descriere:
        "Aspamentul cu ac riscuri, efecte secundare, varsta, afectiuni preexistente sau alte tratamente medicamentoase",
    },
  ]);

 
  return(
      <div className="parc">
       <p>The last vlogs</p>
  {
    
    blg.map((bl) => <Cnt key={bl.id} bl={bl} />)
  }
  </div>
  )
}

export default Cont;
