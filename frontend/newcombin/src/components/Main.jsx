import portada from "../../assets/portada.png";

import { Home } from "./Home";
import { OtherPage } from "./OtherPage";
import { NewCombin } from "./NewCombin";

export const Main = (props) => {
  const { opcionMenu } = props;

  return (
    <div
      className="min-h-screen w-full z-10 flex 
      bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${portada})` }}
    >
      {opcionMenu === "Home" ? (
        <Home />
      ) : opcionMenu === "Other Page" ? (
        <OtherPage />
      ) : opcionMenu === "NewCombin" ? (
        <NewCombin />
      ) : null}
    </div>
  );
};
