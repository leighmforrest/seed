import { Link } from "react-router-dom";
import type { TodoDetailProps } from "@/types";

import styles from "./styles.module.css";

const TodoDetail = ({ todo }: TodoDetailProps) => {
  return (
    <div className={styles.todoDetail} data-testid="todo-detail">
      {todo ? (
        <>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? <span aria-label="completed">✅</span> : 
          <span aria-label="not-completed">❌</span>}</p>
        </>
      ) : (
        <p>The todo could not be found.</p>
      )}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default TodoDetail;
