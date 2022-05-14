import Axios from "axios";
import AppContext from "../AppContext";

export const Autentificador = {
  local: "http://localhost:3000/",
  host: "http://localhost:8081/",
  auth: "auth",
  members: "api/members",
  username: "sarah",
  password: "connor",
  endpoint_Auth() {
    return `${Autentificador.host}${Autentificador.auth}`
  },
  endpoint_Members() {
    return `${Autentificador.host}${Autentificador.members}`
  },

  async setToken() {
    let token = '';
    try {
      const response =
        await Axios.post(
          Autentificador.endpoint_Auth(),
          {
            username:
              Autentificador.username,
            password:
              Autentificador.password
          }
        );
      localStorage.setItem("token", response.data.token);
      const status = JSON.parse(response.status);
      if (status == "200") {
        token = response.data.token;
        AppContext.hayToken = 1;
      }
    } catch (error) {
      alert("async function setToken", error);
    }
    return token;
  },

  getToken() {
    return localStorage.getItem("token");
  },

  deleteToken() {
    return localStorage.removeItem("token");
  },

  errorToken(codError) {
    switch (codError) {
      case 401:
        alert("TOKEN expirado, 'Invalid Credentials'");
        Autentificador.deleteToken();
        //Autentificador.reloadPageCleanCache()
        Autentificador.reloadPage()
        break;

      default:
        break;
    }
  },

  reloadPage() {
    location.reload();
  },

  reloadPageCleanCache() {
    url = `${Autentificador.local}?eraseCache=true`
    console.log('url', url)
    window.location.href = `${Autentificador.local}?eraseCache=true`
  },

  async getMembers() {
    let data = "";
    try {
      const response =
        await Axios.get(
          Autentificador.endpoint_Members(),
          {
            headers: {
              Authorization:
                `Bearer ${localStorage.getItem("token")} `,
            },
          }
        );
      const status = JSON.parse(response.status);
      if (status == "200") {
        data = response.data;
      }
    } catch (error) {
      if (error.response.status == 401) {
        Autentificador.errorToken(error.response.status);
      }
    }
    return data;
  },

  async addMembers(formulario) {
    let data = "";
    try {
      const response =
        await Axios.post(
          Autentificador.endpoint_Members(),
          formulario,
          {
            headers: {
              Authorization:
                `Bearer ${localStorage.getItem("token")} `,
            },
          }
        );

      const status = JSON.parse(response.status);
      if (status == "200") {
        data = response.data;
      }
    } catch (error) {
      if (error.response.status == 401) {
        Autentificador.errorToken(error.response.status);
      }
    }
    return data;
  },
};