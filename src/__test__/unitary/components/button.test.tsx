import { Button } from "@/components/ui/button";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Test button componenet", () => {
  test("should render button with text test", () => {
    render(<Button>test</Button>);

    const button = screen.getByText("test");

    return expect(button).toBeInTheDocument();
  });

  test("should remder button with background red", () => {
    render(<Button className="bg-red-500">test</Button>);

    const button = screen.getByText("test");
    console.log(button.style);

    return expect(button.className.includes("bg-red-500")).toBeTruthy();
  });
});
