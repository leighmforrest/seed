import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router-dom";
import { http, HttpResponse } from "msw";

import { server } from "../../../tests/__mocks__/server";
import { todoFactory } from "../../../tests/factories";
import { Wrapper } from "../../../tests/wrappers";

import { BASE_URL } from "@/settings";
import TodoPage from ".";


describe("TodoPage", () => {
  const renderComponent = (todoId: number) => {
    return {
      ...render(
        <Wrapper initialEntries={[`/${todoId}`]}>
          <Routes>
            <Route path="/" element={<p>Root Page</p>} />
            <Route path="/:id" element={<TodoPage />} />
          </Routes>
        </Wrapper>,
      ),
      user: userEvent.setup(),
    };
  };

  it("renders", async () => {
    renderComponent(1);

    const todoDetail = await screen.findByTestId("todo-detail");

    expect(todoDetail).toBeInTheDocument();
    expect(within(todoDetail).getByText(/ID:\s*\d+/)).toBeInTheDocument();
    expect(within(todoDetail).getByText(/Title:\s*\S/)).toBeInTheDocument();
    expect(
      within(todoDetail).getByLabelText(/not-completed/i),
    ).toBeInTheDocument();
  });

  it("link redirects on click", async () => {
    const { user } = renderComponent(1);

    const todoDetail = await screen.findByTestId("todo-detail");
    const location = screen.getByTestId("location");
    const link = within(todoDetail).getByRole("link", { name: /go back/i });

    expect(link).toBeInTheDocument();

    await user.click(link);

    expect(location).toHaveTextContent("/");
  });

  it("shows the completed icon if completed", async () => {
    server.use(
      http.get(`${BASE_URL}/todos/:todoId`,async ({ params }) => {
        const { todoId } = params;

        const todo = await todoFactory.props({
          id: ()=> Number(todoId),
          completed: ()=> Boolean(true)
        }).build()

        return HttpResponse.json(todo);
      }),
    );

    renderComponent(1);
    const todoDetail = await screen.findByTestId("todo-detail");
    expect(
      within(todoDetail).queryByLabelText(/not-completed/i),
    ).not.toBeInTheDocument();
    expect(within(todoDetail).getByLabelText(/completed/i)).toBeInTheDocument();
  });

  it("shows test error if 500", async () => {
    server.use(
      http.get(`${BASE_URL}/todos/:todoId`, () => {

        return HttpResponse.json(null, {status: 500});
      }),
    );

    renderComponent(1);
    const errorMessage = await screen.findByTestId("error-message");
        expect(errorMessage).toBeInTheDocument();
  });

  it("shows test error if 500", async () => {
    server.use(
      http.get(`${BASE_URL}/todos/:todoId`, () => {

        return HttpResponse.json({});
      }),
    );

    renderComponent(1);
    const errorMessage = await screen.findByText(/the todo could not be found./i);
        expect(errorMessage).toBeInTheDocument();
  });
});
