import { useParams } from "react-router-dom";

const TodoPage = () => {
  const { id } = useParams<{ id: string }>();
  return <div>Todo #{id}</div>;
};

export default TodoPage;
