import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";

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

  test("should render Card with a CardHeader as a child containing text 'testCardHeader'", () => {
    render(
      <Card>
        <CardHeader>testCardHeader</CardHeader>
      </Card>,
    );

    const cardHeader = screen.getByText("testCardHeader");
    const card = cardHeader.closest(".rounded-lg") as HTMLElement | null;

    // Use Testing Library utilities to assert that CardHeader is a child of Card
    expect(card).toBeInTheDocument();

    if (card) {
      const { getByText } = within(card);
      expect(getByText("testCardHeader")).toBeInTheDocument();
    }
  });

  test("should render Card with a CardContent as a child containing text 'testCardContent'", () => {
    render(
      <Card>
        <CardContent>testCardContent</CardContent>
      </Card>,
    );

    const cardFooter = screen.getByText("testCardContent");
    const card = cardFooter.closest(".rounded-lg") as HTMLElement | null;

    // Use Testing Library utilities to assert that CardContent is a child of Card
    expect(card).toBeInTheDocument();

    if (card) {
      const { getByText } = within(card);
      expect(getByText("testCardContent")).toBeInTheDocument();
    }
  });

  test("should render Card with a CardFooter as a child containing text 'testCardFooter'", () => {
    render(
      <Card>
        <CardFooter>testCardFooter</CardFooter>
      </Card>,
    );

    const cardContent = screen.getByText("testCardFooter");
    const card = cardContent.closest(".rounded-lg") as HTMLElement | null;

    // Use Testing Library utilities to assert that CardFooter is a child of Card
    expect(card).toBeInTheDocument();

    if (card) {
      const { getByText } = within(card);
      expect(getByText("testCardFooter")).toBeInTheDocument();
    }
  });
});
