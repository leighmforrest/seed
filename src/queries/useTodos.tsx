import { getTodos } from "@/httpService/todos";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => useQuery({
    queryKey: ["todos"],
    queryFn: getTodos
})

export default useTodos;