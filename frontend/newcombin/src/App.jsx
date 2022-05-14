import { useState } from "react";
import "./App.css";

import { Menu } from "./components/Menu.jsx";
import { Main } from "./components/Main.jsx";
import { Footer } from "./components/Footer.jsx";

export const App = () => {
  //console.clear();

  const [opcionMenu, setOpcionMenu] = useState("NewCombin");

  return (
    <div className="App-header bg-main">
      <Menu setOpcionMenu={setOpcionMenu} />
      <Main opcionMenu={opcionMenu} setOpcionMenu={setOpcionMenu} />
      <Footer />
    </div>
  );
};
