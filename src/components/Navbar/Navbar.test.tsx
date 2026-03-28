import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from ".";
import { MemoryRouter } from "react-router-dom";
import { THEMES, type Theme } from "@/types/theme";
import { LocationDisplay } from "../../../tests/helpers";

describe("Navbar", () => {
  const renderComponent =  () => {
    return {
      ...render(
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
          <LocationDisplay />
        </MemoryRouter>,
      ),
      user: userEvent.setup(),
      hamburger: screen.getByTestId("hamburgerButton"),
      menu: screen.getByRole("list"),
      darkModeToggle: screen.getByTestId("darkModeToggle")
    };
  };

  it("renders", async () => {
    const { hamburger } = renderComponent();

    expect(hamburger).toBeInTheDocument();
    expect(screen.getByText(/seed project/i)).toBeInTheDocument();
  });

  test.each([THEMES.DARK,THEMES.LIGHT])("displays %s mode",async (mode: Theme) => {
    localStorage.setItem("theme",mode);
    renderComponent();
    expect(screen.findByTestId(`${mode}ModeIcon`)).resolves.toBeInTheDocument()

  })

  it("displays light mode with no storage", ()=> {
    renderComponent();
    expect(screen.getByTestId("lightModeIcon")).toBeInTheDocument()
  })

  it("displays open when hamburger is clicked", async ()=> {
    const { user, hamburger, menu } = renderComponent();

    expect(menu).not.toHaveClass("open");
    await user.click(hamburger);
    expect(menu).toHaveClass("open");
  })

  it("toggles menu open and closed", async ()=> {
    const { user, hamburger, menu } = renderComponent();

    await user.click(hamburger);
    expect(menu).toHaveClass("open");

    await user.click(hamburger);
    expect(menu).not.toHaveClass("open");
  })

  test.each([[ "/about", /about/i],[ "/", /home/i,]])("displays %s when %s is clicked", async(location, page) => {
    const { user } = renderComponent();

    const link = screen.getByRole("link", {name: page});
    await user.click(link);

    expect(screen.getByTestId("location")).toHaveTextContent(location)
  })
});
