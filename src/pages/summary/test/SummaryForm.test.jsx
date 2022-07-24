import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("initial state of checkBox and Button", () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Condition",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });
  expect(checkBox).not.toBeChecked();
  expect(button).toBeDisabled();
});
test("initial state of Button after clicking Checkbox", () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Condition",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(button).toBeEnabled();
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(button).toBeDisabled();
});
