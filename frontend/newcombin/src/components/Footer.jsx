import { DATOS } from "../models/data";

const tw = {
  footer: `fixed z-30 bottom-0 w-full
  bg-menu bg-opacity-80
  text-center text-white text-base`,
  a: `no-underline hover:text-orange-900 px-2`,
};

export const Footer = () => {
  const { url_programador, programador, url_empresa, empresa } = DATOS;

  return (
    <div className={tw.footer}>
      <a
        className={tw.a}
        href={url_empresa}
        target="_blank"
        rel="noopener noreferrer"
      >
        {empresa}
      </a>
      {" || "}
      <a
        className={tw.a}
        href={url_programador}
        target="_blank"
        rel="noopener noreferrer"
      >
        {programador}
      </a>
    </div>
  );
};
