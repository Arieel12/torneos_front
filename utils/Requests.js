import axios from "axios";

const headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const Requests = axios.create({
  baseURL: "http://localhost:8080/",
  headers: headers,
});

// Agregar un interceptor a la petición
Requests.interceptors.request.use(
  function (config) {
    // Haz algo antes que la petición se ha enviada
    return config;
  },
  function (error) {
    // Haz algo con el error de la petición
    return Promise.reject(error);
  }
);

// Agregar una respuesta al interceptor
Requests.interceptors.response.use(
  function (response) {
    // Cualquier código de estado que este dentro del rango de 2xx causa la ejecución de esta función
    // Haz algo con los datos de la respuesta
    return response.data;
  },
  function (error) {
    // Cualquier código de estado que este fuera del rango de 2xx causa la ejecución de esta función
    // Haz algo con el error
    return Promise.reject(error);
  }
);

export default Requests;