import { type Todo } from "@/types/tanstack";
import { getTodo } from "@/httpService/todos";
import { useQuery } from "@tanstack/react-query";

const useTodo = (id: string) => useQuery<Todo>({
    queryKey: ["todos", id],
    queryFn: () => getTodo(id),
    enabled: !!id
})

export default useTodo;