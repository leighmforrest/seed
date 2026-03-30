import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { type TodoListProps } from "@/types";

import styles from "./styles.module.css";
import { getTodo } from "@/httpService/todos";

const TodoList = ({ todos }: TodoListProps) => {
  const queryClient = useQueryClient();

  return (
    <div className={styles.contentContainer} data-testid="todo-list">
      <ul className={styles.todoList}>
        {(todos && (todos.length > 0)) ? (
          todos.map((todo) => (
            <li key={todo.id} data-testid="todo-list-item">
              <Link
                to={`${todo.id}`}
                onMouseEnter={() =>
                  queryClient.prefetchQuery({
                    queryKey: ["todo", todo.id],
                    queryFn: () => getTodo(`${todo.id}`),
                  })
                }
              >
                {todo.title}
              </Link>
            </li>
          ))
        ) : (
          <li>The todos could not be found.</li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
