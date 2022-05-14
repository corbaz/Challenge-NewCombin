import { DATOS } from "../models/data";

// import { neonCursor } from "threejs-toys";

// neonCursor({
//   el: document.getElementById("app"),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025,
// });

export const NewCombin = () => {
  const { titulo, empresa, slogan } = DATOS;

  return (
    <div id="app" className="min-h-screen w-full">
      <div id="hero">
        {/* <div className="grid grid-rows-3 mt-32 mx-auto gap-2 text-white"> */}
        <h1 className="font-extrabold flex justify-center items-center ">
          {titulo}
        </h1>
        <h1 className="flex justify-center items-end">{empresa}</h1>
        <h4 className="text-base flex justify-center items-start">{slogan}</h4>
        {/* </div> */}
      </div>
    </div>
  );
};
