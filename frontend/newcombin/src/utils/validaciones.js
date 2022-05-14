// Funcion de la validacion de los datos del formulario
export function validar(campo) {
  const { required, minLength, maxLength, regex } = campo;
  const { evento } = campo;
  const { name, value } = evento.target;
  const { formulario, setFormulario } = campo;
  const { errorMessage, setErrorMessage } = campo;

  switch (true) {
    // Validacion de campo no requerido (false)
    case !required:
      if (errorMessage.hasOwnProperty(name)) {
        const new_errorMessage = Object.assign(errorMessage);
        delete new_errorMessage[name];
        setErrorMessage(new_errorMessage);
      }
      break;

    // Validacion de campo requerido (true)
    case required && value.trim().length === 0:
      setErrorMessage({ ...errorMessage, [name]: "⚠ Requerido" });
      break;

    // Validacion de campo minimo de caracteres
    case minLength && value.trim().length < minLength:
      setErrorMessage({ ...errorMessage, [name]: `⚠ Mínimo ${minLength} de caracteres` });
      break;

    // Validacion de campo maximo de caracteres 
    case maxLength && value.trim().length > maxLength:
      setErrorMessage({ ...errorMessage, [name]: `⚠ Máximo ${maxLength} de caracteres` });
      break;

    // Validacion Regular Expression REGEX
    case regex && !regex.test(value.trim()):
      setErrorMessage({ ...errorMessage, [name]: `Numeración Inválida / Ej: 333-22-4444` });
      break;

    // Eliminar de errorMessage el campo que se ha validado
    default:
      if (errorMessage.hasOwnProperty(name)) {
        const new_errorMessage = Object.assign(errorMessage);
        delete new_errorMessage[name];
        setErrorMessage(new_errorMessage);
      }
      break;
  }
  setFormulario({ ...formulario, [name]: value });
  return;
};

