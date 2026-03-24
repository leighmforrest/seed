import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseLayout from "@/components/BaseLayout";
import TodosPage from "@/pages/TodosPage";
import TodoPage from "@/pages/TodoPage";
import NotFound from "@/pages/NotFound";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<TodosPage />} />
        <Route path=":id" element={<TodoPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
