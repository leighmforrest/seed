import type { TodoDetailProps } from "@/types";

const TodoDetail = ({ todo }: TodoDetailProps) => {
  return (
    <>
      {todo ? (
        <>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? "✅" : "❌"}</p>
        </>
      ) : (
        <p>The todo could not be found.</p>
      )}
    </>
  );
};

export default TodoDetail;
