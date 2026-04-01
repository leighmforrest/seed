import TodoList from "@/components/TodoList";
import useTodos from "@/queries/useTodos";

const TodosPage = () => {
  const { data: todos, isLoading, isError } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div data-testid="error-message">Could not load</div>;

  return (
    <>
      <TodoList todos={todos}/>
    </>
  );
};

export default TodosPage;
