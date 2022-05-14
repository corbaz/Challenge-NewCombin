import { useState } from "react";
import { Formulario } from "./Formulario";
import { Tabla } from "./Tabla";

const tw = {
  container: `
    grid grid-cols-1 gap-5 mt-20 mx-5 w-full
    md:mr-5 md:gap-4 md:grid-cols-2
    rounded-xl place-items-center`,

  formulario: `w-full max-w-xs 
    flex justify-center items-center`,

  tabla: `w-full 
    flex justify-center items-center `,
};

export const Home = () => {
  const [formulario, setFormulario] = useState({
    firstName: "",
    lastName: "",
    address: "",
    ssn: "",
  });

  const [tabla, setTabla] = useState([
    {
      firstName: "",
      lastName: "",
      address: "",
      ssn: "",
    },
  ]);

  return (
    <div className={tw.container}>
      <div className={tw.formulario}>
        <Formulario
          formulario={formulario}
          tabla={tabla}
          setFormulario={setFormulario}
          setTabla={setTabla}
        />
      </div>
      <div className={tw.tabla}>
        <Tabla tabla={tabla} setTabla={setTabla} />
      </div>
    </div>
  );
};
