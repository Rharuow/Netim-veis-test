import { Card } from "@/components/ui/card";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Test Card component", () => {
  test("should render Card with text test", () => {
    render(<Card>test</Card>);

    const card = screen.getByText("test");

    return expect(card).toBeInTheDocument();
  });

  test("should render Card with text test and the class containing 'testClassName'", () => {
    render(<Card className="testClassName">test</Card>);

    const card = screen.getByText("test");

    return expect(card).toHaveClass("testClassName");
  });

  test("should render Card with text test and call the provided onClick handler when clicked", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(
      <Card
        onClick={() => {
          console.log("on click triggered");
        }}
      >
        test
      </Card>,
    );

    // Find the card using its text content
    const card = screen.getByText("test");

    // Simulate a click event on the card
    fireEvent.click(card);

    // Assert that console.log has been called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith("on click triggered");

    // Clean up the spy
    consoleSpy.mockRestore();
  });
});
