import { Card } from "@/components/ui/card";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

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
});
