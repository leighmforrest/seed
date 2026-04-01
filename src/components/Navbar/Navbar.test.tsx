import { MemoryRouter } from "react-router-dom";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navbar from ".";
import { THEMES, type Theme } from "@/types/theme";
import { LocationDisplay } from "../../../tests/helpers";

describe("Navbar", () => {
  const renderComponent = (initialEntry = "/") => {
    return {
      ...render(
        <MemoryRouter initialEntries={[initialEntry]}>
          <Navbar />
          <LocationDisplay />
        </MemoryRouter>,
      ),
      user: userEvent.setup(),
      brand: screen.getByTestId("brand"),
      hamburger: screen.getByTestId("hamburgerButton"),
      menu: screen.getByRole("list"),
      darkModeToggle: screen.getByTestId("darkModeToggle"),
    };
  };

  it("renders", async () => {
    const { hamburger, brand } = renderComponent();
    expect(hamburger).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
    expect(screen.getByText(/seed project/i)).toBeInTheDocument();
  });

  test.each([THEMES.DARK, THEMES.LIGHT])(
    "displays %s mode",
    async (mode: Theme) => {
      localStorage.setItem("theme", mode);
      renderComponent();
      const icon = await screen.findByTestId(`${mode}ModeIcon`);
      expect(icon).toBeInTheDocument();
    },
  );

  it("navigate to '/' when brand link is clicked", async () => {
    const { user, brand } = renderComponent("/about");

    await user.click(brand);

    expect(screen.getByTestId("location")).toHaveTextContent("/");
  });

  it("displays light mode with no storage", () => {
    renderComponent();
    expect(screen.getByTestId("lightModeIcon")).toBeInTheDocument();
  });

  it("displays open when hamburger is clicked", async () => {
    const { user, hamburger, menu } = renderComponent();

    expect(menu).not.toHaveClass("open");
    await user.click(hamburger);
    expect(menu).toHaveClass("open");
  });

  it("toggles menu open and closed", async () => {
    const { user, hamburger, menu } = renderComponent();

    await user.click(hamburger);
    expect(menu).toHaveClass("open");

    await user.click(hamburger);
    expect(menu).not.toHaveClass("open");
  });

  test.each([/about/i, /home/i])(
    "closes menu after clicking on %s",
    async (label) => {
      const { user, hamburger, menu } = renderComponent();

      await user.click(hamburger);
      expect(menu).toHaveClass("open");

      const link = screen.getByRole("link", { name: label });
      await user.click(link);

      expect(menu).not.toHaveClass("open");
    },
  );

  test.each([
    { path: "/about", label: /about/i },
    { path: "/", label: /home/i },
  ])("navigates to $path when $label is clicked", async ({ path, label }) => {
    const { user } = renderComponent();

    const menu = screen.getByRole("list");
    const link = within(menu).getByRole("link", { name: label });
    await user.click(link);

    expect(screen.getByTestId("location")).toHaveTextContent(path);
  });

  it("has dark mode enabled", async () => {
    const { user, darkModeToggle } = renderComponent();

    await user.click(darkModeToggle);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");

    await user.click(darkModeToggle);
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });
});
