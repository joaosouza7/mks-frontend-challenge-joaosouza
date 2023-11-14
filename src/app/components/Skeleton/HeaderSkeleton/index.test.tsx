import { render, screen } from "@testing-library/react";
import { HeaderSkeleton } from ".";

describe("Header Skeleton Component", () => {
    it("should render component by default", () => {
        render(<HeaderSkeleton />);

        const headerElement = screen.getByRole("banner");

        expect(headerElement).toBeVisible();
        expect(headerElement).toHaveStyle({
            width: "100%",
            height: "101px",
        });
    });
});
