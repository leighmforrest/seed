import { render, screen } from "@testing-library/react";
import { Wrapper } from "../tests/wrappers";

import App from "./App";

describe("App", () => {
  const renderComponent = (initialEntries = ["/"]) => {
    return {
      ...render(
        <Wrapper initialEntries={initialEntries}>
          <App />
        </Wrapper>,
      ),
    };
  };
  test.each(["header", "footer", "main-container"])(
    "has a %s",
    (testId: string) => {
      renderComponent();

      expect(screen.getByTestId(testId)).toBeInTheDocument();
    },
  );

  test.each([
    { route: ["/"], testId: "todo-list" },
    { route: ["/1"], testId: "todo-detail" },
    { route: ["/about"], testId: "about-page" },
    { route: ["/todos/green"], testId: "not-found" },
  ])("renders correct page for $route", async ({ route, testId }) => {
    renderComponent(route);

    expect(await screen.findByTestId(testId)).toBeInTheDocument();
  });
});
