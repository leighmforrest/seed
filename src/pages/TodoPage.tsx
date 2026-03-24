import { Link, useParams } from "react-router-dom";
import useTodo from "@/queries/useTodo";

const TodoPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: todo, isLoading, isError } = useTodo(id ?? "");

  if (!id) return <div>Invalid ID</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Could not load</div>;

  return (
    <div>
      {todo && (
        <>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? "✅" : "❌"}</p>
        </>
      )}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default TodoPage;
