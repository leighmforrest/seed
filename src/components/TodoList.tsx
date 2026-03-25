import { Link } from "react-router-dom";

import { type TodoListProps } from "@/types";

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos ? (
        todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`${todo.id}`}>{todo.title}</Link>
          </li>
        ))
      ) : (
        <p>The todo could not be found.</p>
      )}
    </ul>
  );
};

export default TodoList;
