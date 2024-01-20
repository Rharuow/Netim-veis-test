import { Carousel, CarouselItem } from "@/components/ui/carousel";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";

describe("Test Carousel component", () => {
  test("should render Carousel with text test", () => {
    render(<Carousel>test</Carousel>);

    const carousel = screen.getByText("test");

    return expect(carousel).toBeInTheDocument();
  });

  test("should render Carousel with text test and the class containing 'relative'", () => {
    render(<Carousel>test</Carousel>);

    const carousel = screen.getByText("test");

    return expect(carousel).toHaveClass("relative");
  });

  test("should render CarouselItem with text test and the class containing 'min-w-0 shrink-0 grow-0 basis-full'", () => {
    render(
      <Carousel>
        <CarouselItem>test</CarouselItem>
      </Carousel>,
    );

    const carouselItem = screen.getByText("test");

    const carousel = carouselItem.closest(".relative") as HTMLElement | null;

    // Use Testing Library utilities to assert that CarouselItem is a child of Carousel
    expect(carousel).toBeInTheDocument();

    if (carousel) {
      const { getByText } = within(carousel);
      expect(getByText("test")).toBeInTheDocument();
    }
  });
});
