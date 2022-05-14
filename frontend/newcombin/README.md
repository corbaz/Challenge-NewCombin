# Entrevista laboral

# Repositorio de Respuesta - Julio Corbaz

- https://github.com/corbaz/Challenge-NewCombin.git

## Requisitos

- descargar el repositorio o clonarlo con GitHub CLI

  ```CMD
  gh repo clone corbaz/Challenge-NewCombin

  ```

- en el directorio raiz esta el servidor propuesto:

---

#### SERVIDOR

---

Desde una instacia de una terminal dentro del directorio raiz ejecutar

- npm install para instalar las dependencias del servidor.
- luego ejecutar npm run serve para iniciar el servidor

---

```cmd

npm install

npm run serve

```

---

#### FRONT-END (Challenge-NewCombin 2022 - Frontend) - Julio Corbaz

---

- desde el directorio raiz del repositorio

- dentro de la carpeta

  - frontend/newcombin (esta el desarrollo)
  - ejecutar npm install para descargar las dependencias
  - ejecutar npm run build para construir la app.
  - ejecutar npm run preview para iniciar la app.
  - esto expondrá en el navegador el sitio web.
  - con esto tendremos el servidor en marcha en localhost:8081
  - y podremos probar la app en en el localhost:4173 desde el navegador.
  - Y por newtwork ya seas en un celular, tablet o pc con internet en
    las ip que nos informa en pantalla el apartado Network de la consola.

  ```cmd

  cd frontend/newcombin

  npm install

  npm run build

  npm run preview

  > newcombin@0.0.0 preview
  > vite preview --host

  > Network:  http://192.168.56.1:4173/
  > Network:  http://192.168.1.237:4173/
  > Local:    http://localhost:4173/

  ```

  ***

- (REALIZADO) Luego de cada insercion exitosa, se debe ingresar los datos a la tabla, sin necesidad de utilizar el endpoint GET

---

- (REALIZADO) Luego de cada insercion exitosa, se debe ingresar los datos a la tabla, sin necesidad de utilizar el endpoint GET

---

- (REALIZADO) El boton reset debe limpiar los campos del formulario

---

- (REALIZADO) El boton save debe enviar los datos a la API

---

- (REALIZADO) El número de seguro social (ssn), es único, y no puede repetirse en la lista.

---

- (REALIZADO) En caso de un intento de inserción erroneo, se debe informar dicho error

---

- (REALIZADO) Al pasar 2 minutos de inactividad, se debe refrescar la tabla automáticamente

---

## API

La pagina debe poder comunicarse con la API de este repositorio. La misma consta de 2 endpoints

- (REALIZADO) GET http://localhost:8081/api/members - para obtener los miembros

---

- (REALIZADO) POST http://localhost:8081/api/members - para añadir un nuevo miembro

---

- (REALIZADO) Para poder utilizarlos, el Authorization header debe formatearse como Bearer [token].

---

## AUTH

Para poder utilizar los 2 endpoint anteriores debe obtener un token y enviarlo en los llamados.

- (REALIZADO) POST http://localhost:8081/auth - para obtener el token
  body:
  "username": "sarah"
  "password": "connor"

---

### Validaciones de la API

- (REALIZADO) - **firstName, lastName y address:** Mas de 1 caracter, sin espacios a los costados (trim)

---

- (REALIZADO) **ssn:** Tener el formato ###-##-#### (cada # es un numero, los guiones son obligatorios)

---

- (REALIZADO) Si el front no cumple las validaciones debe deshabilitar el boton de enviar

---

## Condiciones y tips

- ( SE USO TAILWIND CSS) Los colores y formas son solo a caracter ilustrativo

---

- ( Se hizo Responsive) No es necesario que sea mobile responsive

---

- ( Testeado con EDGE) No es necesaria compatibilidad con IE o Edge

---

- (Se USO ES6) Puede usar ES6 sin problemas

---

- ( Se uso React 18 ) Puede usar HTML5 sin ningun problema

---

- ( Se uso :D ) Se puede usar google :D

---

- ( Use INSOMIA) Se puede usar POSTMAN para verificar el funcionamento de la API

---

- (REALIZADO) Crear un archivo README.md
  para indicar como se debe utilizar su
  desarrollo

---

- ( REALIZADO ) Subir a un repositior git con privilegios publicos de lectura y compartir el link como resultado

#### https://github.com/corbaz/Challenge-NewCombin.git

---
