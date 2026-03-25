import { Link } from "react-router-dom";

import { type TodoListProps } from "@/types";

import styles from "./styles.module.css";

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className={styles.todoList}>
      {todos ? (
        todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`${todo.id}`} className={styles.todoLink}>{todo.title}</Link>
          </li>
        ))
      ) : (
        <li>The todo could not be found.</li>
      )}
    </ul>
  );
};

export default TodoList;
