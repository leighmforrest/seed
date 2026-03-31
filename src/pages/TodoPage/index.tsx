import { useParams } from "react-router-dom";
import useTodo from "@/queries/useTodo";
import TodoDetail from "@/components/TodoDetail";

const TodoPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: todo, isLoading, isError } = useTodo(id ?? "");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Could not load.</div>;
  
  return (
    <div>
      <TodoDetail todo={todo} />
    </div>
  );
};

export default TodoPage;
