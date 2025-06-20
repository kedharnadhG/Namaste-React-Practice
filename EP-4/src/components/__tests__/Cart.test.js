import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  //  find the panel (accordion-panel) element
  const accordionHeader = screen.getByText("Recommended (16)");

  fireEvent.click(accordionHeader); // throws-error "could not find react-redux" (so provide-store)

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  expect(screen.getByText("🛒 (0 items)")).toBeInTheDocument();

  // find the Add-button and Click (on first foodItem)
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  //after clicking first-Add-Button (Header should change to "1 Item in Cart" & cart-page should have items)

  expect(screen.getByText("🛒 (2 items)")).toBeInTheDocument();

  // now we have to check whether the cart-page has 2-items or not (we have to add Cart-Component, and same we need to check same testId "foodItems" as we are reusing same ItemList-Component)
  expect(screen.getAllByTestId("foodItems").length).toBe(18); // these items will also include the menu-items (of menu-page) (so 16+2=18)

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // after clicking the Clear-Cart-Button (Header should change to "0 Item in Cart" & cart-page should have no items)
  expect(screen.getByText("🛒 (0 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(16); // these items will remove the cart-items (of cart-page) (so 18-2=16)
  expect(screen.getByText("Cart is Empty, Add Items to the Cart!")
  );
});
