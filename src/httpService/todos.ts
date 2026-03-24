import apiClient from "./apiClient";

export const getTodos = async () => {
  const { data } = await apiClient.get("/todos");
  return data;
};

export const getTodo = async (id: string) => {
  const { data } = await apiClient.get(`/todos/${id}`);
  return data;
};
