import axios from "axios";

const API_URL = "http://localhost:8081/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const AuthService = {
  register: async (firstName, lastName, email, password, address) => {
    return api.post("signup", {
      firstName,
      lastName,
      email,
      password,
      address,
    });
  },

  login: async (email, password) => {
    const response = await api.post("login", {
      email,
      password,
    });

    return response.data;
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("user");
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  },
};

export default AuthService;
