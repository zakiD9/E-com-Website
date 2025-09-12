import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce-dz.runasp.net", 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - maybe redirect to login");
    }
    return Promise.reject(error);
  }
);

export default api;
