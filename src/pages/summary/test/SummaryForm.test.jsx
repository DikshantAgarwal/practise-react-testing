import { render, screen, } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from '@testing-library/user-event';

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
  userEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(button).toBeEnabled();
  userEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(button).toBeDisabled();
});
