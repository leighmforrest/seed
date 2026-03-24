import apiClient from "./apiClient";

export const getTodos = async () => {
  const { data } = await apiClient.get("/todos");
  return data;
};
