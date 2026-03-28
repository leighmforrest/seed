import type { Todo } from "@/types/tanstack";
import type { ReactNode } from "react";


export interface TodoListProps {
  todos: Todo[] | undefined;
}

export interface TodoDetailProps {
    todo: Todo | undefined;
}

export interface MainContainerProps {
    children: ReactNode;
}