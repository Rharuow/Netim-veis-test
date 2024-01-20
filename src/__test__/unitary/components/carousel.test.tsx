import { Carousel } from "@/components/ui/carousel";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";

describe("Test Carousel component", () => {
  test("should render Carousel with text test", () => {
    render(<Carousel>test</Carousel>);

    const carousel = screen.getByText("test");

    return expect(carousel).toBeInTheDocument();
  });
});
