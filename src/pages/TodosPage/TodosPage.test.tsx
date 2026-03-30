import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from ".";
import { Wrapper } from "../../../tests/wrappers";
import { server } from "../../../tests/__mocks__/server";
import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/settings";

describe("TodoList", () => {
  const renderComponent = () => {
    return {
      ...render(<TodoList />, {
        wrapper: Wrapper,
      }),
      user: userEvent.setup(),
    };
  };

  it("renders", async () => {
    renderComponent();

    expect(await screen.findByTestId("todo-list")).toBeInTheDocument();
  });

  it("should have 10 todos", async () => {
    renderComponent();

    const todos = await screen.findAllByTestId("todo-list-item");
    expect(todos).toHaveLength(10);
  });

  it("should redirect to detail url", async () => {
    const { user } = renderComponent();

    const todos = await screen.findAllByTestId("todo-list-item");

    const link = within(todos[0]).getByRole("link");
    const expectedLocation = link.getAttribute("href");

    await user.click(link);

    const location = await screen.findByTestId("location");
    expect(location).toHaveTextContent(expectedLocation || "");
  });

  test.each([null, [], 0])(
    "should have a message if there are no todos %s",
    async (input) => {
      server.use(http.get(`${BASE_URL}/todos`, () => HttpResponse.json(input)));

      renderComponent();

      const ul = await screen.findByRole("list");
      const li = within(ul).getByRole("listitem");

      expect(li).toHaveTextContent(/The todos could not be found./i);
    },
  );

  it("should have a message if there is an error", async () => {
    server.use(
      http.get(`${BASE_URL}/todos`, () =>
        HttpResponse.json(null, { status: 500 }),
      ),
    );

    renderComponent();

    const errorMessage = await screen.findByTestId("error-message");

    expect(errorMessage).toHaveTextContent(/could not load/i);
  });
});
