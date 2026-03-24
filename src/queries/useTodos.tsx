import { getTodos } from "@/httpService/todos";
import { type Todo } from "@/types/tanstack";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos
})

export default useTodos;