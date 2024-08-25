import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element with options", () => {
  render(<Filter onCategoryChange={() => {}} />);

  const selectElement = screen.getByRole("combobox");
  expect(selectElement).toBeInTheDocument();

  // Check if the select element has options
  expect(screen.getByRole("option", { name: /All/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Fruits/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Vegetables/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Dairy/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Meat/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Snacks/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Beverages/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Grains/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Seafood/ })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Baked Goods/ })).toBeInTheDocument();
});

test("calls the onCategoryChange callback prop when the <select> is changed", () => {
  const onCategoryChange = jest.fn();
  render(<Filter onCategoryChange={onCategoryChange} />);

  const selectElement = screen.getByRole("combobox");

  // Simulate selecting a category
  fireEvent.change(selectElement, {
    target: { value: "fruits" },
  });

  // Ensure the callback was called with the correct value
  expect(onCategoryChange).toHaveBeenCalled();
  expect(onCategoryChange).toHaveBeenCalledWith("fruits");
});
