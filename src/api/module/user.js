import axios from "axios";
import server from "../server";
import { getToken } from "@/utils/auth";

const API_URL = "http://localhost:8080/api";

export const userApi = {
  login: async (email, password) => {
    const { data } = await server.post("/users/login", {
      email,
      password,
    });
    return data;
  },
  register: async (userData) => {
    const { data } = await server.post("/users/register", userData);
    return data;
  },
  getUser: async () => {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await server.get("/users", config);
    return data;
  },
  updateUser: async (userData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await server.put("/users", userData, config);
    return data;
  },
  getCart: async (userId) => {
    const { data } = await axios.get(`${API_URL}/cart/${userId}`);
    return data;
  },
  updateCart: async (cartId, items) => {
    const { data } = await axios.put(`${API_URL}/cart/${cartId}`, { items });
    return data;
  },
};