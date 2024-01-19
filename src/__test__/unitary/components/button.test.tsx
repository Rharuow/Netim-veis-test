import { Button } from "@/components/ui/button";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Test button componenet", () => {
  test("should render button with text test", () => {
    render(<Button>test</Button>);

    const button = screen.getByText("test");

    expect(button).toBeInTheDocument();
  });
});
