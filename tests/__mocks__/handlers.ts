import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/settings";
import { todoFactory } from "../factories";

export const handlers = [
  http.get(`${BASE_URL}/todos`, async () => {
    const todos = await todoFactory.buildList(10);

    return HttpResponse.json(todos);
  }),
  http.get(`${BASE_URL}/todos/:todoId`, async ({ params }) => {
    const { todoId } = params;

    const todo = await todoFactory
      .props({
        id: () => Number(todoId),
        completed: () => Boolean(false),
      })
      .build();

    return HttpResponse.json(todo);
  }),
];
