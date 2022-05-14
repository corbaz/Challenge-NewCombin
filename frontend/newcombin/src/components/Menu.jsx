import { useState, useEffect } from "react";
import { DATOS, MENU } from "../models/data";
import logo from "../../assets/logo.png";
import AppContext from "./../AppContext";

const tw = {
  nav: `
        fixed z-30
        top-0 left-0 right-0 py-3 px-3 md:h-[64px]
        font-bold text-red-500
        bg-menu bg-opacity-90
        md:bg-menu`,

  contenedor_nav: `
        flex flex-wrap justify-between items-center w-full`,

  boton_logo: `
        flex items-center`,

  img_logo: `
        mr-1 h-6 sm:h-9`,

  titulo_logo: `
        self-center text-2xl font-semibold whitespace-nowrap text-white`,
  titulo_expira: `
        self-center text-xs font-semibold whitespace-nowrap text-white`,

  menu_hamburguesa: `
        flex justify-center items-center md:order-2`,

  boton_hamburguesa: `
        inline-flex items-center p-2 rounded-lg 
        text-sm text-white
        md:hidden
        hover:bg-white hover:text-blue-800
        focus:outline-none focus:ring-2 focus:ring-white`,

  svg_hamburguesa: `
        w-6 h-6`,

  menu: `
        hidden justify-between items-center w-full md:flex md:w-auto md:order-1`,

  ul: `
        flex flex-col mt-4
        md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium`,

  li: `
        flex justify-center`,

  boton_opcion_menu: `
        block py-2 pr-4 pl-3 text-white
        bg-transparent border-transparent border-b-2
        hover:text-white hover:border-b-2 hover:border-white hover:text-white`,
};

export const Menu = (props) => {
  const { setOpcionMenu } = props;
  const { titulo } = DATOS;

  // Tiempo de Expiracion la sesión en minutos
  const tiempoExpiracion = 15 * AppContext.hayToken;
  const [segundos, setSegundos] = useState(tiempoExpiracion * 60);

  useEffect(() => {
    const reloj = setInterval(() => {
      setSegundos((segundos) => segundos - 1);
    }, 1000);

    // if (segundos === 0) {
    //   AppContext.hayToken = 0;
    // }
    return () => clearInterval(reloj);
  }, [segundos]);

  useEffect(() => {
    setSegundos(tiempoExpiracion * AppContext.hayToken * 60);
  }, [AppContext.hayToken]);

  const abrirMenu = () => {
    const div = document.getElementById("mobile-menu");
    div.classList.toggle("hidden");
  };

  return (
    //Menu Nav
    <nav className={tw.nav}>
      {/* Contenedor del Menu Gral. */}
      <div className={tw.contenedor_nav}>
        {/* Logo va a Presentacion */}
        <button
          className={tw.boton_logo}
          onClick={() => setOpcionMenu("NewCombin")}
        >
          <img src={logo} className={tw.img_logo} alt={titulo} />
          <span className={tw.titulo_logo}>{titulo}</span>
        </button>
        {AppContext.hayToken > 0 && segundos > 0 && (
          <h1 className={tw.titulo_expira}>
            {`La sesion expira en: 
            ${parseInt(segundos / 60)}m ${parseInt(segundos % 60)}s`}
          </h1>
        )}

        {/*Menu Hamburguesa */}
        <div className={tw.menu_hamburguesa}>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className={tw.boton_hamburguesa}
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={abrirMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={tw.svg_hamburguesa}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div id="mobile-menu" className={tw.menu}>
          <ul className={tw.ul}>
            {MENU.map((item, index) => {
              return (
                <li key={index} className={tw.li}>
                  <button
                    type="button"
                    className={tw.boton_opcion_menu}
                    onClick={() => {
                      setOpcionMenu(item.opcion);
                      abrirMenu();
                    }}
                  >
                    {item.opcion}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
