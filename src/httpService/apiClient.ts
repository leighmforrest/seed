import axios, { type AxiosInstance } from "axios";
import { BASE_URL } from "@/settings";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
