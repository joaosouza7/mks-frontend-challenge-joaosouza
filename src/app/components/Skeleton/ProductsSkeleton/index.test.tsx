import { render, screen } from "@testing-library/react";
import { ProductsSkeleton } from ".";

describe("Products Skeleton Component", () => {
    it("should render component by default", () => {
        render(<ProductsSkeleton />);

        const containerElement = screen.getByRole("main");
        const contentElement = screen.getAllByRole("list");

        expect(containerElement).toBeVisible();
        expect(contentElement).toHaveLength(8);
    });

    it("should render component with 10 lines and gap 10px", () => {
        render(<ProductsSkeleton spacings={10} lines={10} />);

        const containerElement = screen.getByRole("grid");
        const contentElement = screen.getAllByRole("list");

        expect(containerElement).toHaveStyle({
            gap: "10px",
        });
        expect(contentElement).toHaveLength(10);
    });
});
