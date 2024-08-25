import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button with correct text when dark mode is off", () => {
  render(<Header onDarkModeClick={() => {}} isDarkMode={false} />);
  expect(screen.getByText(/Dark Mode/)).toBeInTheDocument();
});

test("displays the toggle button with correct text when dark mode is on", () => {
  render(<Header onDarkModeClick={() => {}} isDarkMode={true} />);
  expect(screen.getByText(/Light Mode/)).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} isDarkMode={false} />);

  fireEvent.click(screen.getByText(/Dark Mode/));
  expect(onDarkModeClick).toHaveBeenCalled();
});
