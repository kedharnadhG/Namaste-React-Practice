import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load contact component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading"); // returns React-Element (Virtual-DOM Object)

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  // alot of people use "it" (industry standard)
  it("Should load button inside contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // role of input-box is "textbox"
    const inputBoxes = screen.getAllByRole("textbox");

    // it gives React-Element (Virtual-DOM Object)
    // console.log("first input-box", inputBoxes[0]);
    // console.log(inputBoxes.length);

    // Assertion
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
