import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withTopRatedLabel } from "../RestaurantCard";

it("should render RestaurantCard Component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  // Query (find name of the restaurant to present on my rendered screen)
  const name = screen.getByText("Cafe Coffee Day");

  // Assertion
  expect(name).toBeInTheDocument();
});

// (isolated Unit-Testing) Testing Higher Order Component
it("should render RestaurantCard Component with Top Rated Label", () => {
  // Higher Order Component
  render(withTopRatedLabel(RestaurantCard)({ resData: MOCK_DATA }));

  // Find Label is present or not
  const label = screen.getByText("Top Rated");

  // Assertion
  expect(label).toBeInTheDocument();
});
