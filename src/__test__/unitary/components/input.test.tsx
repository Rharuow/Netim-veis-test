import { Input } from "@/components/ui/input";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Test input component", () => {
  test("should render input with text test", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");

    return expect(input).toBeInTheDocument();
  });

  test("should render input with class 'bg-red-500'", () => {
    render(<Input className="bg-red-500" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("bg-red-500");
  });

  test("should render input with classes 'flex h-10 w-full rounded-md border-none bg-transparent px-3 py-2 ring-offset-background file:border-0 file:text-sm file:font-medium placeholder:text-[#808487] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveClass(
      "flex h-10 w-full rounded-md border-none bg-transparent px-3 py-2 ring-offset-background file:border-0 file:text-sm file:font-medium placeholder:text-[#808487] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    );
  });

  test("should call the provided onClick handler when clicked", () => {
    // Spy on console.log
    const consoleSpy = jest.spyOn(console, "log");

    render(
      <Input
        onClick={() => {
          console.log("on click triggered");
        }}
      />,
    );

    // Find the input using its textbox role
    const input = screen.getByRole("textbox");

    // Simulate a click event on the input
    fireEvent.click(input);

    // Assert that console.log has been called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith("on click triggered");

    // Clean up the spy
    consoleSpy.mockRestore();
  });
});
