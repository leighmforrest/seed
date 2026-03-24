import { Link } from "react-router-dom";
import useTodos from "@/queries/useTodos";
import type { Todo } from "@/types/tanstack";

const TodosPage = () => {
  const { data, isLoading, isError } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Could not load</div>;

  return (
    <div>
      <ul>
        {data.map((todo: Todo) => (
          <li key={todo.id}>
            <Link to={`${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
