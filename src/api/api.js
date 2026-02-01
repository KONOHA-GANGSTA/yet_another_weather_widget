import axios from "axios";

export const BASE_URL = "http://localhost:5173/api";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});
