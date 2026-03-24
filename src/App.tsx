import useTodos from "@/queries/useTodos";
import type { Todo } from "@/types/tanstack";

const App = () => {
  const { data, isLoading, isError } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Could not load</div>;

  return (
    <div>
      <ul>
        {data.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
