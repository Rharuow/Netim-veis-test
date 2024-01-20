import { Input } from "@/components/ui/input";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Test input component", () => {
  test("should render input with text test", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");

    return expect(input).toBeInTheDocument();
  });
});
