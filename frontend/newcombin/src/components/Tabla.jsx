import { useState, useEffect } from "react";
import { Autentificador } from "../helpers/auth-helpers";

const tw = {
  container: `
    w-full h-3/4 
    grid grid-rows-1
    mx-auto my-auto
    bg-gray-200
    rounded-xl mb-10`,
  titulo: `
    text-orange-500 text-5xl font-extrabold
    flex justify-center items-center h-16`,
};

export const Tabla = (props) => {
  const { tabla, setTabla } = props;
  const { getToken, setToken, getMembers } = Autentificador;

  // Tiempo de recarga en minutos
  const tiempoRecarga = 2;
  const [recarga, setRecarga] = useState(0);
  const [segundos, setSegundos] = useState(tiempoRecarga * 60);

  useEffect(() => {
    const reloj = setInterval(() => {
      setSegundos((segundos) => segundos - 1);
    }, 1000);

    if (segundos === 0) {
      setRecarga(recarga + 1);
      setSegundos(tiempoRecarga * 60);
    }
    return () => clearInterval(reloj);
  }, [segundos]);

  useEffect(() => {
    if (!getToken()) {
      setToken()
        .then((res) => {
          getMembers()
            .then((res) => setTabla(res))
            .catch((err) => console.log("getMembers", err));
        })
        .catch((err) => console.log("setToken", err));
    } else if (getToken()) {
      getMembers()
        .then((res) => setTabla(res))
        .catch((err) => console.log("getMembers", err));
    }
  }, [recarga]);

  return (
    <div className={tw.container}>
      <div className="mx-fit p-2 my-fit">
        <p className={tw.titulo}>Tabla</p>
        <p className="text-base text-center text-slate-900">
          {`Los daton serán actualizados en 
          ${parseInt(segundos / 60)}m ${parseInt(segundos % 60)}s`}
        </p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="text-center w-full text-base text-gray-500 dark:text-gray-400">
            <thead className="flex w-full text-center text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="flex w-full mb-1">
                <th className="p-1 w-1/4">First Name</th>
                <th className="p-1 w-1/4">Last Name</th>
                <th className="p-1 w-1/4">Address</th>
                <th className="p-1 w-1/4">SSN</th>
              </tr>
            </thead>
            <tbody
              className="bg-grey-light flex flex-col items-center  overflow-y-scroll w-full"
              style={{ height: "50vh" }}
            >
              {tabla && RegistroTabla(tabla)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function RegistroTabla(tabla) {
  return (
    tabla?.length > 0 &&
    tabla.map((item, index) => (
      <tr
        key={index}
        className="flex w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <td className="p-1 w-1/4">{item.firstName}</td>
        <td className="p-1 w-1/4">{item.lastName}</td>
        <td className="p-1 w-1/4">{item.address}</td>
        <td className="p-1 w-1/4">{item.ssn}</td>
      </tr>
    ))
  );
}
