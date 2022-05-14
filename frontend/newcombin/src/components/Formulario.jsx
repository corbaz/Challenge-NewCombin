import { Form } from "./formulario/Form";
const tw = {
  container: `
    w-full h-full 
    grid grid-rows-1
    mx-auto my-auto
    bg-gray-200
    rounded-xl `,
  titulo: `
    text-orange-500 text-5xl font-extrabold
    flex justify-center items-center h-16`,
};

export const Formulario = (props) => {
  const { formulario, setFormulario, tabla, setTabla } = props;

  return (
    <div className={tw.container}>
      <div className="max-w-xs mx-auto my-auto">
        <div className={tw.titulo}>Formulario</div>
        <Form
          formulario={formulario}
          setFormulario={setFormulario}
          tabla={tabla}
          setTabla={setTabla}
        />
      </div>
    </div>
  );
};
