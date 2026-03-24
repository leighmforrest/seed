import { BrowserRouter, Route, Routes } from "react-router-dom";

import TodosPage from "./pages/TodosPage";
import BaseLayout from "./components/BaseLayout";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<TodosPage />} />
        <Route path=":id" element={<TodoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
