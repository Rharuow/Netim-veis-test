import { Button } from "@/components/ui/button";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Test button componenet", () => {
  test("should render button with text test", () => {
    render(<Button>test</Button>);

    const button = screen.getByText("test");

    return expect(button).toBeInTheDocument();
  });

  test("should render button with class 'bg-red-500'", () => {
    render(<Button className="bg-red-500">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass("bg-red-500");
  });

  test("should render button with classes 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' when variant property was outline", () => {
    render(<Button variant="outline">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass(
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    );
  });

  test("should render button with classes 'bg-destructive text-destructive-foreground hover:bg-destructive/90' when variant property was destructive", () => {
    render(<Button variant="destructive">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass(
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    );
  });

  test("should render button with classes 'hover:bg-accent hover:text-accent-foreground' when variant property was ghost", () => {
    render(<Button variant="ghost">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass("hover:bg-accent hover:text-accent-foreground");
  });

  test("should render button with classes 'text-primary underline-offset-4 hover:underline' when variant property was link", () => {
    render(<Button variant="link">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass(
      "text-primary underline-offset-4 hover:underline",
    );
  });

  test("should render button with classes 'bg-secondary text-secondary-foreground hover:bg-secondary/80' when variant property was secondary", () => {
    render(<Button variant="secondary">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass(
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    );
  });

  test("should render button with classes 'h-10 w-10' when size property was icon", () => {
    render(<Button size="icon">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass("h-10 w-10");
  });

  test("should render button with classes 'h-11 rounded-md px-8' when size property was lg", () => {
    render(<Button size="lg">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass("h-11 rounded-md px-8");
  });

  test("should render button with classes 'h-9 rounded-md px-3' when size property was sm", () => {
    render(<Button size="sm">test</Button>);

    const button = screen.getByText("test");

    expect(button).toHaveClass("h-9 rounded-md px-3");
  });
});
