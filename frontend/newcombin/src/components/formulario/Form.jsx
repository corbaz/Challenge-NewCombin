import React, { useState } from "react";
import { Autentificador } from "../../helpers/auth-helpers";
import { validar } from "../../utils/validaciones";

const tw = {
  label: `block text-teal-700 text-sm font-bold mb-2`,
  input: `shadow appearance-none border rounded
          w-full py-2 px-3
          leading-tight
          focus:outline-none focus:shadow-outline
          text-base
         `,
  input_OK: `border-gray-700 text-gray-700`,
  input_ERROR: `border-red-500 text-red-500`,
  p_ERROR: `text-red-500 text-sm block mb-2 font"`,
  button_RESET: `bg-red-500 hover:bg-red-700 
                 disabled:opacity-20
                 text-white font-bold text-base
                 py-2 px-4 rounded
                 focus:outline-none focus:shadow-outline
                `,
  button_SAVE: `bg-green-500 hover:bg-green-700
                disabled:opacity-20
                text-white font-bold text-base
                py-2 px-4 rounded 
                focus:outline-none focus:shadow-outline
               `,
};

export function Form({ formulario, setFormulario, tabla, setTabla }) {
  const form_blank = { firstName: "", lastName: "", address: "", ssn: "" };
  const { firstName, lastName, address, ssn } = formulario;
  const [errorMessage, setErrorMessage] = useState(form_blank);

  // Funcion para resetear los campos del formulario
  const onReset = () => {
    setFormulario(form_blank);
    setErrorMessage(form_blank);
  };

  // Funcion de envio de los datos del formulario a la Tabla
  const onSubmit = (e) => {
    e.preventDefault();
    const { addMembers } = Autentificador;

    // Controlo el SSN para que sea unico (desde la tabla)
    if (Object.values(tabla).some((item) => item.ssn === ssn)) {
      alert("El número de SSN ya existe");
    } else {
      // Envio de datos al servidor
      addMembers(formulario).then((res) => {
        setTabla([...tabla, formulario]);
        onReset();
      });
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4"
      onSubmit={(e) => onSubmit(e)}
    >
      {/* firstName */}
      <div className="mb-4">
        <label className={tw.label} htmlFor="id_firstName">
          First Name
        </label>
        <input
          id="id_firstName"
          type="text"
          name="firstName"
          placeholder="Ingrese su Nombre"
          autoComplete="off"
          className={`${tw.input}
                      ${
                        errorMessage?.firstName ? tw.input_ERROR : tw.input_OK
                      }`}
          value={firstName}
          onChange={(evento) => {
            validar({
              required: true,
              minLength: 2,
              maxLength: 15,
              evento,
              formulario,
              setFormulario,
              errorMessage,
              setErrorMessage,
            });
          }}
        />
        {errorMessage?.firstName && (
          <p className={tw.p_ERROR}>{` ${errorMessage?.firstName}`}</p>
        )}
      </div>

      {/* lastName */}
      <div className="mb-4">
        <label className={tw.label} htmlFor="id_lastName">
          Last Name
        </label>
        <input
          id="id_lastName"
          type="text"
          name="lastName"
          placeholder="Ingrese su Apellido"
          autoComplete="off"
          className={`${tw.input}
                      ${errorMessage?.lastName ? tw.input_ERROR : tw.input_OK}`}
          value={lastName}
          onChange={(evento) => {
            validar({
              required: true,
              minLength: 2,
              maxLength: 15,
              evento,
              formulario,
              setFormulario,
              errorMessage,
              setErrorMessage,
            });
          }}
        />
        {errorMessage?.lastName && (
          <p className={tw.p_ERROR}>{` ${errorMessage?.lastName}`}</p>
        )}
      </div>

      {/* address */}
      <div className="mb-4">
        <label className={tw.label} htmlFor="id_address">
          Adrress
        </label>
        <input
          id="id_address"
          type="text"
          name="address"
          placeholder="Ingrese su Dirección"
          autoComplete="off"
          className={`${tw.input}
                      ${errorMessage?.address ? tw.input_ERROR : tw.input_OK}`}
          value={address}
          onChange={(evento) => {
            validar({
              required: true,
              minLength: 2,
              maxLength: 25,
              evento,
              formulario,
              setFormulario,
              errorMessage,
              setErrorMessage,
            });
          }}
        />
        {errorMessage?.address && (
          <p className={tw.p_ERROR}>{` ${errorMessage?.address}`}</p>
        )}
      </div>

      {/* ssn */}
      <div className="mb-4">
        <label className={tw.label} htmlFor="id_ssn">
          Número de Seguridad Social
        </label>
        <input
          id="id_ssn"
          type="text"
          name="ssn"
          placeholder="Ingrese ###-##-####"
          autoComplete="off"
          className={`${tw.input}
                      ${errorMessage?.ssn ? tw.input_ERROR : tw.input_OK}`}
          value={ssn}
          onChange={(evento) => {
            validar({
              required: true,
              // minLength: 11,
              // maxLength: 11,
              regex: /^\d{3}-\d{2}-\d{4}$/,
              evento,
              formulario,
              setFormulario,
              errorMessage,
              setErrorMessage,
            });
          }}
        />
        {errorMessage?.ssn && (
          <p className={tw.p_ERROR}>{` ${errorMessage?.ssn}`}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        {/* reset */}
        <button
          className={tw.button_RESET}
          type="button"
          //every() devuelve verdadero si todo pasa la prueba según la condición.
          disabled={Object.values(formulario).every((value) => value === "")}
          onClick={onReset}
        >
          Reset
        </button>
        {/* save */}
        <button
          className={tw.button_SAVE}
          type="submit"
          disabled={Object.keys(errorMessage).length > 0}
        >
          Save
        </button>
      </div>
    </form>
  );
}
