import { Route, Routes } from "react-router-dom";

import BaseLayout from "@/layouts/BaseLayout";
import AboutPage from "@/pages/AboutPage";
import TodosPage from "@/pages/TodosPage";
import TodoPage from "@/pages/TodoPage";
import NotFound from "@/pages/NotFound";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<TodosPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path=":id" element={<TodoPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App;
