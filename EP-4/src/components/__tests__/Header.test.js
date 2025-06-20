import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton = screen.getByText("Login");

  // Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with 0 cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const cartItems = screen.getByText("🛒 (0 items)");

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with Cart Item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query (using Regex) (we can also pass Regex in getByText)
  const cartItems = screen.getByText(/🛒/);

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const loginButton = screen.getByRole("button", { name: "Login" });

  // Simulating Click-Event
  fireEvent.click(loginButton);

  // Query
  const logOutButton = screen.getByRole("button", { name: "Logout" });

  // Assertion
  expect(logOutButton).toBeInTheDocument();
});

